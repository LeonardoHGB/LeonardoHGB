<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0D1117,45:1F6FEB,100:58A6FF&height=210&section=header&text=Leonardo%20Banholi&fontSize=52&fontColor=ffffff&fontAlignY=34&animation=fadeIn&desc=Analista%20de%20Infraestrutura%20e%20TI&descAlignY=54&descSize=22" width="100%" alt="Banner com o nome Leonardo Banholi, Analista de Infraestrutura e TI" />

<a href="https://github.com/LeonardoHGB">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=21&pause=1200&color=58A6FF&center=true&vCenter=true&width=680&height=45&lines=Infra%2C+redes+e+automa%C3%A7%C3%A3o+no+dia+a+dia;C%2B%2B17+e+Qt+6+%7C+Softphone+SIP+nativo;Java+21+e+XMPP+%7C+Mensageria+corporativa;TypeScript%2C+Next.js+16+e+Go+nos+bastidores" />
    <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=21&pause=1200&color=1F6FEB&center=true&vCenter=true&width=680&height=45&lines=Infra%2C+redes+e+automa%C3%A7%C3%A3o+no+dia+a+dia;C%2B%2B17+e+Qt+6+%7C+Softphone+SIP+nativo;Java+21+e+XMPP+%7C+Mensageria+corporativa;TypeScript%2C+Next.js+16+e+Go+nos+bastidores" alt="Frases sobre infraestrutura, C++ com Qt, Java com XMPP e TypeScript" />
  </picture>
</a>

<br/>

<a href="https://github.com/LeonardoHGB?tab=followers">
  <img src="https://custom-icon-badges.demolab.com/github/followers/LeonardoHGB?style=for-the-badge&logo=person-add&logoColor=white&labelColor=0D1117&color=1F6FEB" alt="Seguidores no GitHub" />
</a>
<img src="https://custom-icon-badges.demolab.com/badge/Brasil-BR-1F6FEB?style=for-the-badge&logo=location&logoColor=white&labelColor=0D1117" alt="Brasil" />

</div>

<br/>

## Sobre mim

```cpp
namespace leonardo {

struct Perfil {
    std::string cargo = "Analista de Infraestrutura e TI";
    std::string foco  = "Telefonia VoIP, redes, servidores e automação";
    std::string atual = "Reescrevendo um softphone SIP de C# para C++/Qt 6";
    std::vector<std::string> gosto_de = {
        "sistemas nativos e de alto desempenho",
        "tempo real (SIP, XMPP, WebSockets)",
        "resolver o problema na raiz, não no sintoma"
    };
};

} // namespace leonardo
```

- Trabalho na fronteira entre **infraestrutura e desenvolvimento**: do servidor ao código, do build ao instalador.
- Gosto de entregar software que **se instala, se atualiza sozinho e simplesmente funciona** no Windows.
- Curiosidade constante por **engenharia reversa**, protocolos de rede e segurança.

<br/>

## Projetos em destaque

<table width="100%">
<tr>
<td width="50%" valign="top">

### [SPHONE](https://github.com/LeonardoHGB/Soften-Phone)

Softphone SIP nativo para Windows. Reescrita de C#/.NET para C++17 com Qt 6 e PJSUA2 com link estático. Configuração protegida por Windows DPAPI e atualização automática via GitHub Releases.

</td>
<td width="50%" valign="top">

### [Site Download Builder](https://github.com/LeonardoHGB/Site-Download-Builder)

Baixa um site inteiro para uso offline, identifica a stack por trás dele e devolve um ZIP pronto para rodar. Pipeline de 4 estágios e detecção de mais de 100 assinaturas de tecnologia.

<img src="https://custom-icon-badges.demolab.com/badge/MIT-0D1117?style=flat-square&logo=law&logoColor=58A6FF&labelColor=0D1117" alt="Licença MIT" />

</td>
</tr>
<tr>
<td width="50%" valign="top">

### [Spotgino](https://github.com/LeonardoHGB/Spotgino)

Salas sincronizadas sobre Spotify Connect. O host toca e cada pessoa ouve pela própria conta, sem áudio em servidor central. OAuth do Spotify com fluxo PKCE.

</td>
<td width="50%" valign="top">

### [STalks](https://github.com/LeonardoHGB/Spark-Talks)

Mensageria corporativa XMPP com interface moderna, sobre Openfire. Customização do Spark com endurecimento de segurança e senhas armazenadas com AES-256-GCM.

<img src="https://custom-icon-badges.demolab.com/badge/Apache%202.0-0D1117?style=flat-square&logo=law&logoColor=58A6FF&labelColor=0D1117" alt="Licença Apache 2.0" />

</td>
</tr>
</table>

<br/>

<details>
<summary><b>SPHONE</b> &nbsp;|&nbsp; Softphone SIP nativo em C++ e Qt 6 &nbsp;&nbsp;<img src="https://custom-icon-badges.demolab.com/badge/em%20desenvolvimento-1F6FEB?style=flat-square&logo=tools&logoColor=white&labelColor=0D1117" alt="Em desenvolvimento" /></summary>

<br/>

> Reescrita oficial do SoftenPhone, produto da empresa onde atuo: saiu de **C#/.NET** e tornou-se aplicação **nativa em C++17 com Qt 6.8 LTS**, resultando em binário leve e instalador profissional.

| | |
|---|---|
| **Stack** | C++17 · Qt 6.8 LTS (Widgets, Multimedia, Network) · PJSUA2/PJSIP *(link estático)* · CMake e Ninja · MSVC · Inno Setup 6 |
| **Destaques** | Registro em PABX e chamadas de entrada/saída com áudio · UI custom-painted com temas claro e escuro (4 telas) · DTMF, ringback e ringtone MP3 em tempo real · Histórico de chamadas · Configuração protegida por **Windows DPAPI** · Auditoria via webhook Discord · Instância única e system tray · **Atualização automática via GitHub Releases** |
| **Engenharia** | `docs/` com as specs de engenharia reversa do app original · `tools/` com scripts de build · `packaging/` com o Inno Setup |
| **Status** | v1.1.0 · funcional para registro, chamadas e áudio |

<img src="https://img.shields.io/badge/C%2B%2B17-1F6FEB?style=flat-square&logo=cplusplus&logoColor=white&labelColor=0D1117" alt="C++17" />
<img src="https://img.shields.io/badge/Qt%206-1F6FEB?style=flat-square&logo=qt&logoColor=white&labelColor=0D1117" alt="Qt 6" />
<img src="https://img.shields.io/badge/CMake-1F6FEB?style=flat-square&logo=cmake&logoColor=white&labelColor=0D1117" alt="CMake" />
<img src="https://img.shields.io/badge/PJSIP-1F6FEB?style=flat-square&labelColor=0D1117" alt="PJSIP" />
<img src="https://img.shields.io/badge/Windows-1F6FEB?style=flat-square&labelColor=0D1117" alt="Windows" />

</details>

<details>
<summary><b>Site Download Builder</b> &nbsp;|&nbsp; Espelha sites para uso offline e identifica a stack &nbsp;&nbsp;<img src="https://custom-icon-badges.demolab.com/badge/MIT-1F6FEB?style=flat-square&logo=law&logoColor=white&labelColor=0D1117" alt="Licença MIT" /></summary>

<br/>

> Aplicação web que **baixa um site inteiro para uso offline**, detecta as tecnologias usadas na construção dele e entrega tudo empacotado em um ZIP pronto para rodar.

| | |
|---|---|
| **Stack** | Node.js · Express · Socket.IO · wget · HTML, CSS e JS |
| **Pipeline** | 4 estágios encadeados: espelhamento com `wget`, captura de recursos externos, análise de assinaturas e empacotamento com servidor local embutido |
| **Destaques** | Progresso em tempo real via **WebSockets** · Detecção de **mais de 100 assinaturas** (linguagens de backend, CMS, frameworks e libs) · Reescrita de links · Cancelamento de download · Relatórios em HTML e JSON |
| **Arquitetura** | Módulos separados por responsabilidade: `wget/` · `postprocess/` · `analyzer/` · `archiver/` · `socket/` · `routes/` · `views/` |
| **Status** | 100 commits · licença MIT |

<img src="https://img.shields.io/badge/Node.js-1F6FEB?style=flat-square&logo=nodedotjs&logoColor=white&labelColor=0D1117" alt="Node.js" />
<img src="https://img.shields.io/badge/Express-1F6FEB?style=flat-square&logo=express&logoColor=white&labelColor=0D1117" alt="Express" />
<img src="https://img.shields.io/badge/Socket.IO-1F6FEB?style=flat-square&logo=socketdotio&logoColor=white&labelColor=0D1117" alt="Socket.IO" />
<img src="https://img.shields.io/badge/GNU%20Wget-1F6FEB?style=flat-square&logo=gnu&logoColor=white&labelColor=0D1117" alt="GNU Wget" />

</details>

<details>
<summary><b>Spotgino</b> &nbsp;|&nbsp; Escute música em sincronia com os amigos &nbsp;&nbsp;<img src="https://custom-icon-badges.demolab.com/badge/desktop-1F6FEB?style=flat-square&logo=device-desktop&logoColor=white&labelColor=0D1117" alt="Aplicativo desktop" /></summary>

<br/>

> Player sincronizado sobre **Spotify Connect**: o host compartilha a reprodução e **cada pessoa toca da própria conta Spotify**, sem áudio trafegando por um servidor central.

| | |
|---|---|
| **Stack** | Electron e React *(client)* · Node.js, Express e Socket.IO *(server)* · SQLite (better-sqlite3) · Docker · Railway |
| **Auth** | OAuth do Spotify com fluxo **PKCE**, token por usuário |
| **Destaques** | Reprodução sincronizada · Busca de músicas · Chat em tempo real · Modo demo · Contas persistentes com código único · Pedidos de amizade e convites para sala · Mini-player compacto |
| **Distribuição** | Windows (instalador e portátil) e Linux (AppImage e .deb) |
| **Status** | deploy via Portainer e Railway |

<img src="https://img.shields.io/badge/Electron-1F6FEB?style=flat-square&logo=electron&logoColor=white&labelColor=0D1117" alt="Electron" />
<img src="https://img.shields.io/badge/React-1F6FEB?style=flat-square&logo=react&logoColor=white&labelColor=0D1117" alt="React" />
<img src="https://img.shields.io/badge/SQLite-1F6FEB?style=flat-square&logo=sqlite&logoColor=white&labelColor=0D1117" alt="SQLite" />
<img src="https://img.shields.io/badge/Spotify-1F6FEB?style=flat-square&logo=spotify&logoColor=white&labelColor=0D1117" alt="Spotify" />
<img src="https://img.shields.io/badge/Docker-1F6FEB?style=flat-square&logo=docker&logoColor=white&labelColor=0D1117" alt="Docker" />

</details>

<details>
<summary><b>STalks</b> &nbsp;|&nbsp; Mensageria corporativa XMPP com interface moderna &nbsp;&nbsp;<img src="https://custom-icon-badges.demolab.com/badge/Apache%202.0-1F6FEB?style=flat-square&logo=law&logoColor=white&labelColor=0D1117" alt="Licença Apache 2.0" /></summary>

<br/>

> Cliente de mensagens instantâneas para uso interno e corporativo, unindo *Spark* e *Talks*. Customização do **Spark** (Ignite Realtime) sobre **XMPP**, integrado a servidores **Openfire**.

| | |
|---|---|
| **Stack** | Java 21 · Swing e **FlatLaf** · Smack (XMPP) · Openfire |
| **Destaques** | Interface moderna no estilo Discord com lista de contatos e presença ao vivo · **Integração com Spotify** exibindo via XMPP a música em reprodução · Adição de contatos simplificada com validação no servidor · Senhas armazenadas com **AES-256-GCM** · Mini-perfil de usuário com seletor de status |
| **Licenciamento** | Apache License 2.0, mantendo os créditos ao projeto original |

<img src="https://img.shields.io/badge/Java%2021-1F6FEB?style=flat-square&logo=openjdk&logoColor=white&labelColor=0D1117" alt="Java 21" />
<img src="https://img.shields.io/badge/Swing%20e%20FlatLaf-1F6FEB?style=flat-square&labelColor=0D1117" alt="Swing e FlatLaf" />
<img src="https://img.shields.io/badge/XMPP-1F6FEB?style=flat-square&logo=xmpp&logoColor=white&labelColor=0D1117" alt="XMPP" />
<img src="https://img.shields.io/badge/Openfire-1F6FEB?style=flat-square&labelColor=0D1117" alt="Openfire" />

</details>

<br/>

## Stack e Ferramentas

<div align="center">

### Linguagens

<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/typescript/typescript-original.svg" width="44" height="44" alt="TypeScript" title="TypeScript" />&nbsp;&nbsp;
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/javascript/javascript-original.svg" width="44" height="44" alt="JavaScript" title="JavaScript" />&nbsp;&nbsp;
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/cplusplus/cplusplus-original.svg" width="44" height="44" alt="C++" title="C++17 e C++20" />&nbsp;&nbsp;
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/java/java-original.svg" width="44" height="44" alt="Java" title="Java 21 e 25" />&nbsp;&nbsp;
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/python/python-original.svg" width="44" height="44" alt="Python" title="Python" />&nbsp;&nbsp;
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/go/go-original.svg" width="44" height="44" alt="Go" title="Go" />&nbsp;&nbsp;
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/csharp/csharp-original.svg" width="44" height="44" alt="C#" title="C#" />&nbsp;&nbsp;
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/powershell/powershell-original.svg" width="44" height="44" alt="PowerShell" title="PowerShell" />

### Front-end

<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/react/react-original.svg" width="44" height="44" alt="React" title="React 19" />&nbsp;&nbsp;
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/vitejs/vitejs-original.svg" width="44" height="44" alt="Vite" title="Vite 6" />&nbsp;&nbsp;
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/tailwindcss/tailwindcss-original.svg" width="44" height="44" alt="Tailwind CSS" title="Tailwind CSS 4" />&nbsp;&nbsp;
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/electron/electron-original.svg" width="44" height="44" alt="Electron" title="Electron" />

<br/>

<img src="https://img.shields.io/badge/Next.js%2016-1F6FEB?style=flat-square&logo=nextdotjs&logoColor=white&labelColor=0D1117" alt="Next.js 16" />
<img src="https://img.shields.io/badge/Radix%20UI-1F6FEB?style=flat-square&logo=radixui&logoColor=white&labelColor=0D1117" alt="Radix UI" />
<img src="https://img.shields.io/badge/shadcn%2Fui-1F6FEB?style=flat-square&logo=shadcnui&logoColor=white&labelColor=0D1117" alt="shadcn/ui" />
<img src="https://img.shields.io/badge/HeroUI-1F6FEB?style=flat-square&labelColor=0D1117" alt="HeroUI" />
<img src="https://img.shields.io/badge/Motion-1F6FEB?style=flat-square&logo=framer&logoColor=white&labelColor=0D1117" alt="Motion" />
<img src="https://img.shields.io/badge/React%20Hook%20Form-1F6FEB?style=flat-square&logo=reacthookform&logoColor=white&labelColor=0D1117" alt="React Hook Form" />
<img src="https://img.shields.io/badge/Zod-1F6FEB?style=flat-square&logo=zod&logoColor=white&labelColor=0D1117" alt="Zod" />

### Back-end e tempo real

<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/nodejs/nodejs-original.svg" width="44" height="44" alt="Node.js" title="Node.js" />&nbsp;&nbsp;
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/qt/qt-original.svg" width="44" height="44" alt="Qt" title="Qt 6" />

<br/>

<img src="https://img.shields.io/badge/Express-1F6FEB?style=flat-square&logo=express&logoColor=white&labelColor=0D1117" alt="Express" />
<img src="https://img.shields.io/badge/Socket.IO-1F6FEB?style=flat-square&logo=socketdotio&logoColor=white&labelColor=0D1117" alt="Socket.IO" />
<img src="https://img.shields.io/badge/Server--Sent%20Events-1F6FEB?style=flat-square&labelColor=0D1117" alt="Server-Sent Events" />
<img src="https://img.shields.io/badge/SIP%20%2F%20PJSUA2-1F6FEB?style=flat-square&labelColor=0D1117" alt="SIP e PJSUA2" />
<img src="https://img.shields.io/badge/XMPP%20%2F%20Smack-1F6FEB?style=flat-square&logo=xmpp&logoColor=white&labelColor=0D1117" alt="XMPP e Smack" />
<img src="https://img.shields.io/badge/Openfire-1F6FEB?style=flat-square&labelColor=0D1117" alt="Openfire" />
<img src="https://img.shields.io/badge/Clerk-1F6FEB?style=flat-square&logo=clerk&logoColor=white&labelColor=0D1117" alt="Clerk" />

### Dados e observabilidade

<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/mongodb/mongodb-original.svg" width="44" height="44" alt="MongoDB" title="MongoDB" />&nbsp;&nbsp;
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/postgresql/postgresql-original.svg" width="44" height="44" alt="PostgreSQL" title="PostgreSQL e PL/pgSQL" />&nbsp;&nbsp;
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/supabase/supabase-original.svg" width="44" height="44" alt="Supabase" title="Supabase" />&nbsp;&nbsp;
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/sqlite/sqlite-original.svg" width="44" height="44" alt="SQLite" title="SQLite" />&nbsp;&nbsp;
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/prometheus/prometheus-original.svg" width="44" height="44" alt="Prometheus" title="Métricas" />

<br/>

<img src="https://img.shields.io/badge/VictoriaMetrics-1F6FEB?style=flat-square&labelColor=0D1117" alt="VictoriaMetrics" />
<img src="https://img.shields.io/badge/Telegraf-1F6FEB?style=flat-square&labelColor=0D1117" alt="Telegraf" />
<img src="https://img.shields.io/badge/Neon-1F6FEB?style=flat-square&logo=postgresql&logoColor=white&labelColor=0D1117" alt="Neon" />

### Build, desktop e empacotamento

<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/cmake/cmake-original.svg" width="44" height="44" alt="CMake" title="CMake e Ninja" />&nbsp;&nbsp;
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/gradle/gradle-original.svg" width="44" height="44" alt="Gradle" title="Gradle" />&nbsp;&nbsp;
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/maven/maven-original.svg" width="44" height="44" alt="Maven" title="Maven" />&nbsp;&nbsp;
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/visualstudio/visualstudio-plain.svg" width="44" height="44" alt="Visual Studio" title="MSVC e Visual Studio" />&nbsp;&nbsp;
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/windows11/windows11-original.svg" width="44" height="44" alt="Windows" title="Windows 10 e 11" />

<br/>

<img src="https://img.shields.io/badge/Inno%20Setup-1F6FEB?style=flat-square&labelColor=0D1117" alt="Inno Setup" />
<img src="https://img.shields.io/badge/Swing%20e%20FlatLaf-1F6FEB?style=flat-square&labelColor=0D1117" alt="Swing e FlatLaf" />

### Infra, deploy e automação

<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/docker/docker-original.svg" width="44" height="44" alt="Docker" title="Docker" />&nbsp;&nbsp;
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/linux/linux-original.svg" width="44" height="44" alt="Linux" title="Linux" />&nbsp;&nbsp;
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/cloudflare/cloudflare-original.svg" width="44" height="44" alt="Cloudflare" title="Cloudflare" />&nbsp;&nbsp;
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/githubactions/githubactions-original.svg" width="44" height="44" alt="GitHub Actions" title="GitHub Actions" />&nbsp;&nbsp;
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/playwright/playwright-original.svg" width="44" height="44" alt="Playwright" title="Playwright e Patchright" />&nbsp;&nbsp;
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/git/git-original.svg" width="44" height="44" alt="Git" title="Git" />

<br/>

<img src="https://img.shields.io/badge/Railway-1F6FEB?style=flat-square&logo=railway&logoColor=white&labelColor=0D1117" alt="Railway" />
<img src="https://img.shields.io/badge/Vercel-1F6FEB?style=flat-square&logo=vercel&logoColor=white&labelColor=0D1117" alt="Vercel" />
<img src="https://img.shields.io/badge/Portainer-1F6FEB?style=flat-square&logo=portainer&logoColor=white&labelColor=0D1117" alt="Portainer" />
<img src="https://img.shields.io/badge/Samba%20%2F%20SMB-1F6FEB?style=flat-square&labelColor=0D1117" alt="Samba e SMB" />

### Segurança e processamento de dados

<img src="https://img.shields.io/badge/AES--256--GCM-1F6FEB?style=flat-square&labelColor=0D1117" alt="AES-256-GCM" />
<img src="https://img.shields.io/badge/Windows%20DPAPI-1F6FEB?style=flat-square&labelColor=0D1117" alt="Windows DPAPI" />
<img src="https://img.shields.io/badge/TLS%20ponta%20a%20ponta-1F6FEB?style=flat-square&labelColor=0D1117" alt="TLS ponta a ponta" />
<img src="https://img.shields.io/badge/CSP%20e%20HSTS-1F6FEB?style=flat-square&labelColor=0D1117" alt="CSP e HSTS" />
<img src="https://img.shields.io/badge/Rate%20limit%20e%20CSRF-1F6FEB?style=flat-square&labelColor=0D1117" alt="Rate limit e CSRF" />
<img src="https://img.shields.io/badge/Audit%20log%20e%20idempot%C3%AAncia-1F6FEB?style=flat-square&labelColor=0D1117" alt="Audit log e idempotência" />
<img src="https://img.shields.io/badge/Claude%20API-1F6FEB?style=flat-square&logo=claude&logoColor=white&labelColor=0D1117" alt="Claude API" />
<img src="https://img.shields.io/badge/faster--whisper-1F6FEB?style=flat-square&labelColor=0D1117" alt="faster-whisper" />
<img src="https://img.shields.io/badge/Tesseract%20OCR-1F6FEB?style=flat-square&labelColor=0D1117" alt="Tesseract OCR" />
<img src="https://img.shields.io/badge/PyMuPDF-1F6FEB?style=flat-square&labelColor=0D1117" alt="PyMuPDF" />
<img src="https://img.shields.io/badge/FFmpeg-1F6FEB?style=flat-square&logo=ffmpeg&logoColor=white&labelColor=0D1117" alt="FFmpeg" />

</div>

<br/>

## Estatísticas

<!-- STATS:START -->
<!-- Bloco gerado por .github/scripts/update-stats.mjs. Nao editar manualmente. -->
<div align="center">

<img src="https://custom-icon-badges.demolab.com/badge/25-reposit%C3%B3rios-1F6FEB?style=for-the-badge&logo=repo&logoColor=white&labelColor=0D1117" alt="repositórios" />
<img src="https://custom-icon-badges.demolab.com/badge/373-commits-1F6FEB?style=for-the-badge&logo=git-commit&logoColor=white&labelColor=0D1117" alt="commits" />
<img src="https://custom-icon-badges.demolab.com/badge/16-linguagens-1F6FEB?style=for-the-badge&logo=code-square&logoColor=white&labelColor=0D1117" alt="linguagens" />

</div>

**Distribuição por linguagem**, somando todos os repositórios, públicos e privados:

```text
TypeScript   ███████████████████░░░░░░░░░░░░░░░░░   52.0%
Java         ███████████░░░░░░░░░░░░░░░░░░░░░░░░░   30.6%
JavaScript   ██░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░    5.9%
C++          █░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░    3.5%
HTML         █░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░    2.9%
CSS          █░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░    2.3%
Go           █░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░    1.3%
Outras       █░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░    1.4%
```

<sub>Python, PowerShell, PL/pgSQL, Handlebars, Shell, CMake, Inno Setup, Dockerfile, C compõem "Outras". O código herdado do Spark, que o STalks customiza, está fora da conta para não distorcer o número. Atualizado automaticamente em 10/08/2026.</sub>
<!-- STATS:END -->

<div align="center">

<br/>

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://streak-stats.demolab.com?user=LeonardoHGB&locale=pt_BR&date_format=j%20M&hide_border=false&background=0D1117&stroke=30363D&border=30363D&ring=58A6FF&fire=1F6FEB&currStreakLabel=58A6FF&sideLabels=C9D1D9&dates=8B949E&sideNums=C9D1D9&currStreakNum=C9D1D9&border_radius=10" />
  <img src="https://streak-stats.demolab.com?user=LeonardoHGB&locale=pt_BR&date_format=j%20M&hide_border=false&background=00000000&stroke=30363D&border=30363D&ring=58A6FF&fire=1F6FEB&currStreakLabel=1F6FEB&sideLabels=0D1117&dates=30363D&sideNums=0D1117&currStreakNum=0D1117&border_radius=10" height="180" alt="Sequência de contribuições no GitHub" />
</picture>

<br/><br/>

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/LeonardoHGB/LeonardoHGB/output/snake-dark.svg" />
  <img src="https://raw.githubusercontent.com/LeonardoHGB/LeonardoHGB/output/snake.svg" width="100%" alt="Animação da cobrinha consumindo o grafo de contribuições" />
</picture>

</div>

<br/>

## Contato

<div align="center">

<a href="mailto:desenvolvimentosoften2@gmail.com">
  <img src="https://custom-icon-badges.demolab.com/badge/E--mail-1F6FEB?style=for-the-badge&logo=mail&logoColor=white&labelColor=0D1117" alt="Enviar e-mail" />
</a>
<a href="https://github.com/LeonardoHGB">
  <img src="https://custom-icon-badges.demolab.com/badge/GitHub-1F6FEB?style=for-the-badge&logo=mark-github&logoColor=white&labelColor=0D1117" alt="Perfil no GitHub" />
</a>

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:58A6FF,55:1F6FEB,100:0D1117&height=120&section=footer" width="100%" alt="Rodapé decorativo" />

</div>
