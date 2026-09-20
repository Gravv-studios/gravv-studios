# Continuidade do site GRAVV

Atualizado em 20/09/2026. Este documento permite continuar em outro computador ou conta sem acesso à conversa original. A revisão mais recente aplica a copy tranquila aprovada e mantém o portfólio imediatamente após a hero.

## Comece aqui

1. Clone `https://github.com/Gravv-studios/gravv-studios.git` ou atualize uma cópia existente, preservando alterações locais. A branch de trabalho é `main`.
2. Leia `AGENTS.md`, este documento, `docs/HERO-01-ANIMACAO-E-LINGUAGEM.md` e `docs/PORTFOLIO.md`.
3. Confira o site público: https://gravv-studios.vercel.app/.
4. Para editar e conferir localmente, execute `python -m http.server 8765 --bind 127.0.0.1` na raiz. Abra http://127.0.0.1:8765/. Não há instalação de dependências nem etapa de build.
5. Se a skill pessoal `gravv-site-system` não existir na outra máquina, use as decisões de identidade abaixo. Não dependa de caminhos do computador anterior.

## Objetivo e direção aprovada

O site apresenta a GRAVV e seus trabalhos e deve ajudar um possível cliente a entender rapidamente o que a empresa faz. O público prioritário usa celular e não precisa conhecer termos técnicos.

- Marca: **GRAVV**, com dois V. Assinatura: **Presença com peso.**
- Brasília, DF; atendimento em todo o Brasil. Instagram: `@gravv.studio`.
- Cores: preto `#050505`, branco `#ECE9E1`, verde `#D7FF00`, cinza `#252525`.
- Tipografia forte, organização clara e verde para orientar a ação. Preservar o logotipo oficial.
- Copy curta, direta e compreensível. Mostrar dores concretas: site confuso, demora na resposta, proposta esquecida. Evitar jargões, listas repetidas, métricas inventadas ou garantias de vendas e de ausência de erros da IA.
- O usuário aprovou a animação atual. Melhorias futuras devem preservar a ideia, sem reiniciar o design do zero.

## Estado atual da página

Ordem: hero → trabalhos → problema → serviços → método → dúvidas → contato.

### Hero aprovada

Título “PRESENÇA COM PESO.”, oferta resumida e CTA “VAMOS FALAR DO SEU PROJETO”. A animação acompanha a rolagem automaticamente; não exige clicar para começar.

No celular, até 900 px, aparece **um cartão grande por vez**: anúncio → site → atendimento → acompanhamento. O cartão anterior sobe e o seguinte entra por baixo, como folhas. Cada cartão tem título, exemplo visual ampliado (a “telinha”), cursor ou conversa ilustrada e legenda curta. O percurso móvel é mais longo para dar tempo de ler, com aproximadamente 70% de uma tela por etapa e mínimo total de 1800 px. Subir a página reverte as etapas. Telas baixas recebem ajustes de altura.

No computador, os quatro cartões permanecem visíveis em grade. O quadro acompanha parte da rolagem e depois libera a passagem para o conteúdo. Clique e teclado são alternativas; não são requisitos para iniciar. A preferência por movimentos reduzidos é respeitada: nesse modo as etapas mudam, mas os efeitos de deslocamento podem não aparecer.

### Portfólio antecipado

O usuário pediu menos texto e trabalhos mais cedo para mostrar variedade de nichos. A seção agora fica imediatamente após a hero, com título “CONHEÇA NOSSO TRABALHO.”. Cada cartão usa setor, nome e uma frase. Não afirmar que atendemos literalmente todos os nichos: os projetos demonstram os setores reais.

| Projeto | Setor | Experiência atual |
| --- | --- | --- |
| Faith Gôndolas | Equipamentos comerciais | Destaque com prévia interativa do estúdio 3D; giro e zoom no site original |
| Casa Studart | Bebidas | Prévia interativa; confirmação de idade permanece no site original |
| Le Cabinet Français | Educação | Prévia interativa dos cursos e do professor |
| Divulga Móveis | Mobiliário | Captura real e link externo para https://divulga-moveis.vercel.app/ |
| Aqui na Rede Pescados | Alimentação | Captura real e link externo para https://aqui-na-rede-pescados.vercel.app/ |

As prévias dos dois últimos não carregaram incorporadas no teste local; por isso os links abrem em outra aba. Não declarar que esses dois possuem prévia interativa funcionando. Os três anteriores carregam somente após clique e removem o iframe ao fechar.

### Otimizações já realizadas

- Copy principal reduzida em cerca de 47% em uma revisão anterior; depois foram removidas outras repetições.
- Imagens dos três trabalhos originais convertidas para WebP: aproximadamente 893 KB → 178 KB somados. Os dois novos também usam WebP.
- Brilho de fundo estático, sem filtro de desfoque em movimento; cabeçalho sem backdrop blur.
- Progresso lateral por transformação visual; atualizações de rolagem agrupadas por frame.
- Hero mede o percurso fora do fluxo contínuo de scroll; mudanças da barra do navegador móvel não devem deslocar a linha do tempo.
- Fontes externas não bloqueiam a primeira exibição. Entradas discretas de títulos e blocos usam opacidade e deslocamento curto, uma vez por bloco.
- Não foi medido um ganho geral de velocidade em produção. Não confundir redução dos arquivos de imagem com uma medição de desempenho completo.

## Pendências reais

1. **Formulário não envia contatos.** O código simula sucesso; não há destino de envio integrado. Não tratar como captação funcional. Antes de divulgá-lo como funcional, definir com o usuário o destino e implementar/testar o envio real. Não inventar telefone, e-mail ou integração.
2. **Doctor & Cia ainda não entrou no portfólio.** O usuário mencionou “Dr. Lucía”, provavelmente referindo-se ao projeto Doctor & Cia, mas essa correspondência ainda precisa de confirmação. O site https://doctor-cia.vercel.app/ é de roupas médicas, exibe aviso de prévia de teste e possui nomes de produtos a confirmar. O pedido foi incluí-lo quando terminar. Não apresentá-lo como concluído.
3. **Escopo de “terminar os sites” ainda ambíguo.** O usuário mencionou “Divulgo Imóveis” e “aqui na Rede Pescados”; foram encontrados Divulga Móveis e Aqui na Rede Pescados. Foi perguntado se queria concluir os sites dos clientes ou apenas organizar sua apresentação no portfólio; não houve resposta até esta documentação. Nesta tarefa foram alterados apenas os arquivos GRAVV. Não afirmar que os sites dos clientes foram finalizados.
4. Não existe acompanhamento automático dessas pendências. Quando o usuário confirmar uma conclusão ou pedir continuidade, atualizar o portfólio de forma explícita.

## Arquivos e manutenção

- `index.html`: conteúdo, maior parte do CSS geral, FAQ e formulário demonstrativo.
- `assets/hero-journey.js` e `.css`: percurso da hero, cenas móveis e adaptação desktop.
- `assets/site-motion.js`: entradas de seções e blocos.
- `assets/work-player.js`: URLs e abertura/fechamento de prévias.
- `assets/works.css`: apresentação do portfólio e visualizador.
- `assets/works/`: capturas reais, incluindo versões WebP servidas no site.
- `docs/`: decisões e estado de continuidade.

O `.gitignore` é uma lista explícita de arquivos permitidos. Liberar novos arquivos públicos individualmente. Não usar `git add -f`, não enviar todo o workspace e não incluir credenciais, documentos comerciais ou materiais privados de clientes.

## GitHub e Vercel

Projeto Vercel: `gravv-studios`, equipe `gravv-studios`. Endereço público: https://gravv-studios.vercel.app/. A integração GitHub → Vercel foi verificada no painel e no conteúdo publicado. Envios para `main` disparam publicação. Não criar um segundo projeto ou hospedar em outro provedor sem pedido.

O usuário autorizou commit e push ao concluir edições solicitadas. Conferir remoto e alterações locais, adicionar arquivos por caminhos explícitos, fazer commit descritivo, enviar sem force push e confirmar a versão publicada. **Não criar sincronização a cada dez minutos, cron, watcher ou automação periódica.**

Outra conta precisa de acesso ao repositório para enviar alterações e à equipe Vercel para administrar hospedagem. Sessões, permissões e credenciais do computador anterior não são transferidas por este documento. Autenticar pelos fluxos oficiais se necessário; nunca copiar tokens para arquivos do projeto.

## Conferência antes de entregar

- Revisar desktop e celular, incluindo 390×844 e 360×640.
- Testar avançar e voltar pela rolagem, legibilidade da legenda e passagem natural para o portfólio.
- Verificar teclado, ausência de rolagem horizontal e movimentos reduzidos.
- Conferir imagens, links e abertura/fechamento de prévias quando forem alterados.
- Executar `node --check` nos scripts alterados e `git diff --check`.
- Verificar o deploy público antes de dizer que está publicado. O endereço localhost só funciona na máquina que executa o servidor.

## Mensagem para iniciar outra conversa

> Continue o site GRAVV neste repositório. Leia primeiro AGENTS.md e docs/CONTINUIDADE.md. Preserve a identidade e a hero mobile aprovada, com um cartão grande por vez avançando pela rolagem. O portfólio vem logo após a hero e tem cinco trabalhos. Confira as pendências documentadas, especialmente o formulário sem envio real e Doctor & Cia ainda não incluído. Não altere os projetos dos clientes sem esclarecer o escopo. Ao concluir mudanças solicitadas, confira, faça commit e push e verifique a publicação na Vercel. Não crie atualização periódica. Antes de editar, identifique a nova solicitação do usuário; este documento é contexto, não uma ordem para executar todas as pendências.

## Copy aprovada em 20/09/2026

Tom mais tranquilo, com menos pressão e menos texto. Hero: “Sites que valorizam seu negócio e facilitam o contato com seus clientes.” Portfólio: “Cada negócio tem seu jeito. Seu site também pode ter.” Foram retirados a pergunta de dor e o texto auxiliar repetido da hero. CTA final: “Vamos tirar seu projeto do papel.” Preservar as animações aprovadas.
