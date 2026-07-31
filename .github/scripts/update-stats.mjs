// Recalcula as estatisticas do portfolio (contadores e grafico de linguagens)
// somando todos os repositorios da conta, publicos e privados, e reescreve o
// bloco entre <!-- STATS:START --> e <!-- STATS:END --> no README.md.
//
// Uso: GH_TOKEN=<token com leitura dos repos> node .github/scripts/update-stats.mjs
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const OWNER = 'LeonardoHGB';
// Codigo herdado do Spark (Ignite Realtime) que o STalks customiza: fica fora
// da conta de linguagens para nao distorcer a distribuicao com codigo de terceiros.
const EXCLUDE_LANGS = new Set(['Spark-Talks']);
// Nomes de exibicao que diferem do nome que a API do GitHub devolve.
const PRETTY = { PLpgSQL: 'PL/pgSQL' };
const BAR_WIDTH = 36;
const TOP_N = 7;

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const README = path.join(ROOT, 'README.md');

const TOKEN = process.env.GH_TOKEN;
if (!TOKEN) {
  console.error('GH_TOKEN ausente');
  process.exit(1);
}
const HEADERS = {
  Authorization: `Bearer ${TOKEN}`,
  Accept: 'application/vnd.github+json',
  'User-Agent': 'portfolio-stats',
};

async function api(url) {
  const r = await fetch(url, { headers: HEADERS });
  if (!r.ok) throw new Error(`HTTP ${r.status} em ${url}`);
  return r.json();
}

// Todos os repositorios da conta (paginado; inclui privados com o token certo).
let repos = [];
for (let page = 1; ; page++) {
  const batch = await api(`https://api.github.com/user/repos?per_page=100&page=${page}&affiliation=owner`);
  repos = repos.concat(batch.filter((r) => r.owner.login === OWNER && !r.fork));
  if (batch.length < 100) break;
}

// Bytes por linguagem, agregados.
const agg = new Map();
for (const r of repos) {
  if (EXCLUDE_LANGS.has(r.name)) continue;
  const langs = await api(`https://api.github.com/repos/${OWNER}/${r.name}/languages`);
  for (const [k, v] of Object.entries(langs)) agg.set(k, (agg.get(k) || 0) + v);
}

// Commits na branch padrao de cada repo, em uma unica chamada GraphQL.
const parts = repos.map(
  (r, i) =>
    `r${i}: repository(owner:"${OWNER}", name:"${r.name.replace(/"/g, '')}") { defaultBranchRef { target { ... on Commit { history { totalCount } } } } }`,
);
const gql = await fetch('https://api.github.com/graphql', {
  method: 'POST',
  headers: { ...HEADERS, 'Content-Type': 'application/json' },
  body: JSON.stringify({ query: `query { ${parts.join(' ')} }` }),
}).then((r) => r.json());
let commits = 0;
for (const k of Object.keys(gql.data || {})) {
  commits += gql.data[k]?.defaultBranchRef?.target?.history?.totalCount || 0;
}

// Grafico de barras em texto: top N linguagens + "Outras".
const total = [...agg.values()].reduce((a, b) => a + b, 0);
const sorted = [...agg.entries()].sort((a, b) => b[1] - a[1]);
const rows = sorted.slice(0, TOP_N).map(([name, bytes]) => [PRETTY[name] || name, (100 * bytes) / total]);
const outrasPct = 100 - rows.reduce((a, [, pct]) => a + pct, 0);
if (outrasPct > 0.05) rows.push(['Outras', outrasPct]);
const chart = rows
  .map(([name, pct]) => {
    const filled = Math.max(pct > 0 ? 1 : 0, Math.round((pct * BAR_WIDTH) / 100));
    return `${name.padEnd(12)} ${'█'.repeat(filled)}${'░'.repeat(BAR_WIDTH - filled)}   ${pct.toFixed(1).padStart(4)}%`;
  })
  .join('\n');
const outras = sorted
  .slice(TOP_N)
  .map(([name]) => PRETTY[name] || name)
  .join(', ');

const badge = (label, valor) =>
  `<img src="https://custom-icon-badges.demolab.com/badge/${valor}-${encodeURIComponent(label)}-1F6FEB?style=for-the-badge&logo=repo&logoColor=white&labelColor=0D1117" alt="${label}" />`;
const badgeCommit = (valor) =>
  `<img src="https://custom-icon-badges.demolab.com/badge/${valor}-commits-1F6FEB?style=for-the-badge&logo=git-commit&logoColor=white&labelColor=0D1117" alt="commits" />`;
const badgeLang = (valor) =>
  `<img src="https://custom-icon-badges.demolab.com/badge/${valor}-linguagens-1F6FEB?style=for-the-badge&logo=code-square&logoColor=white&labelColor=0D1117" alt="linguagens" />`;

const data = new Date().toLocaleDateString('pt-BR', { timeZone: 'America/Sao_Paulo' });

const block = `<!-- Bloco gerado por .github/scripts/update-stats.mjs. Nao editar manualmente. -->
<div align="center">

${badge('repositórios', repos.length)}
${badgeCommit(commits)}
${badgeLang(agg.size)}

</div>

**Distribuição por linguagem**, somando todos os repositórios, públicos e privados:

\`\`\`text
${chart}
\`\`\`

<sub>${outras} compõem "Outras". O código herdado do Spark, que o STalks customiza, está fora da conta para não distorcer o número. Atualizado automaticamente em ${data}.</sub>`;

const md = fs.readFileSync(README, 'utf8');
const START = '<!-- STATS:START -->';
const END = '<!-- STATS:END -->';
if (!md.includes(START) || !md.includes(END)) {
  console.error('Marcadores STATS:START/STATS:END ausentes no README');
  process.exit(1);
}
const next = md.replace(
  new RegExp(`${START}[\\s\\S]*?${END}`),
  `${START}\n${block}\n${END}`,
);

const changed = next !== md;
if (changed) fs.writeFileSync(README, next);
console.log(changed ? 'README atualizado' : 'Sem mudancas');
console.log(`repos=${repos.length} commits=${commits} linguagens=${agg.size}`);
if (process.env.GITHUB_OUTPUT) {
  fs.appendFileSync(process.env.GITHUB_OUTPUT, `changed=${changed}\n`);
}