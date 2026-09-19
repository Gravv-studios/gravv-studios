# Hero 01 — Presença com peso

Aplicada no `index.html` principal, disponível em http://127.0.0.1:8765/.

## Mensagem

**Presença com peso.**

Seu cliente chega. Mas o que faz ele ficar?

Criamos sites, anúncios e atendimento conectado para sua empresa atrair, responder e acompanhar clientes.

**Convite:** Onde estou perdendo clientes?

**Apoio:** Descubra o que pode estar travando seus contatos.

## História visual

O visitante acompanha a mesma pessoa, representada pelo marcador verde, em quatro etapas:

1. **Encontra sua empresa:** um anúncio apresenta o serviço. Se a mensagem não é clara, ela passa direto.
2. **Entende o que você faz:** o site explica a oferta e abre uma conversa. Se o site confunde, ela sai sem entrar em contato.
3. **Tira suas dúvidas:** um assistente digital ajuda nas dúvidas iniciais e encaminha à equipe. Se a resposta demora, ela pode procurar outra empresa.
4. **Recebe um retorno:** contato, histórico e lembrete ficam organizados. Sem acompanhamento, uma proposta pode ficar esquecida.

Os painéis são uma ilustração do processo, não depoimentos nem uma demonstração de atendimento real. Não há promessa de venda, prazo de resposta ou resultado garantido na hero.

## Interações

- A rolagem avança automaticamente por anúncio, site, atendimento e acompanhamento. Subir a página reverte as etapas.
- O quadro permanece visível durante um percurso de aproximadamente uma altura de tela. Não há bloqueio da rolagem, reprodução por tempo ou botão para iniciar.
- O marcador, as conexões, a legenda e a barra de progresso acompanham o percurso.
- Clique, toque e teclado continuam disponíveis como alternativas para consultar uma etapa. A próxima rolagem retoma a posição do percurso.
- A preferência por movimentos reduzidos remove transições e efeitos, mantendo as mudanças de etapa pela rolagem.
- No celular, os cartões ficam compactos para que a legenda permaneça visível. Sem JavaScript, a seção mantém seu conteúdo e altura naturais.

## Adaptação e manutenção

Painéis em quatro colunas quando há espaço e em duas colunas nas larguras menores. Nenhum painel depende de rolagem horizontal. O texto explicativo permanece fora da ilustração para facilitar a leitura.

Implementação: `assets/hero-journey.css`, `assets/hero-journey.js` e seção `#hero` no `index.html`. A revisão de clareza reduziu o texto principal em aproximadamente 47%, retirou a seção que repetia a jornada e simplificou serviços, método, dúvidas e formulário. As animações e prévias interativas do portfólio foram preservadas.

Verificação: avanço e retorno pela rolagem, quadro visível no desktop e no celular, seleção por teclado, preferência por movimentos reduzidos e links de navegação preservados.
