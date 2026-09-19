# GRAVV — Presença com peso.

Site institucional da GRAVV, com apresentação dos serviços, jornada interativa do cliente, método e contato.

## Executar localmente

Na raiz do projeto, com Python instalado:

```sh
python -m http.server 8765 --bind 127.0.0.1
```

Abra [http://127.0.0.1:8765/](http://127.0.0.1:8765/).

O projeto usa HTML, CSS e JavaScript sem etapa de compilação. As fontes são carregadas pelo Google Fonts.

## Arquivos

- `index.html`: página principal.
- `assets/hero-journey.css`: apresentação e adaptação da primeira seção.
- `assets/hero-journey.js`: animações, navegação das etapas e controles de movimento.
- `assets/site-motion.js`: entrada discreta dos blocos ao rolar a página, respeitando movimentos reduzidos.
- `assets/works.css` e `assets/works/`: apresentação e imagens dos trabalhos Casa Studart, Faith Gôndolas e Le Cabinet Français.
- `GRAVV-KIT-OFICIAL/01-IDENTIDADE/01-LOGO/GRAVV-WORDMARK-WHITE.png`: logotipo utilizado na página.
- `docs/HERO-01-ANIMACAO-E-LINGUAGEM.md`: conteúdo e comportamento da hero.
- `docs/PORTFOLIO.md`: projetos, origem das imagens e links do portfólio.

## Atualizações

Os commits e envios são feitos ao concluir alterações solicitadas no site. Não há sincronização periódica, agendamento de dez minutos ou monitoramento de arquivos. Edições externas à tarefa precisam de uma solicitação de sincronização.

O `.gitignore` limita o repositório aos arquivos do site. Ao adicionar um novo recurso público, libere seu caminho individualmente. Não use `git add -f` para incluir pastas internas.

## Estado da integração

O repositório guarda o código do site. Hospedagem e publicação não são configuradas por esta integração. O formulário de diagnóstico ainda é um protótipo local, sem envio real de mensagens; requer conexão com um serviço antes de uso público.
