# Hero 01 — Presença com peso

Aplicada no `index.html` principal, disponível em http://127.0.0.1:8765/.

## Mensagem

**Presença com peso.**

Seu próximo cliente pode estar indo embora antes de falar com você.

Anúncio que não explica. Site que confunde. Mensagem sem resposta. A GRAVV conecta seus anúncios, seu site e seu atendimento para que o interesse tenha um próximo passo.

**Convite:** Quero descobrir onde perco clientes.

**Apoio:** Vamos olhar o caminho do seu cliente, do anúncio ao retorno.

## História visual

O visitante acompanha a mesma pessoa, representada pelo marcador verde, em quatro etapas:

1. **Encontra sua empresa:** um anúncio apresenta o serviço. Se a mensagem não é clara, ela passa direto.
2. **Entende o que você faz:** o site explica a oferta e abre uma conversa. Se o site confunde, ela sai sem entrar em contato.
3. **Tira suas dúvidas:** um assistente digital ajuda nas dúvidas iniciais e encaminha à equipe. Se a resposta demora, ela pode procurar outra empresa.
4. **Recebe um retorno:** contato, histórico e lembrete ficam organizados. Sem acompanhamento, uma proposta pode ficar esquecida.

Os painéis são uma ilustração do processo, não depoimentos nem uma demonstração de atendimento real. Não há promessa de venda, prazo de resposta ou resultado garantido na hero.

## Interações

- O mouse destaca e amplia o painel. A legenda explica a etapa e seu risco.
- Anúncio e site têm movimento de cursor e destaque do botão; a conversa aparece em sequência; o acompanhamento marca as ações.
- O marcador acompanha a pessoa e os conectores verdes mostram o caminho percorrido.
- “Ver o caminho” inicia uma única sequência, com nove segundos por etapa; ao terminar, oferece “Ver novamente”.
- Pausar interrompe o avanço. Continuar reapresenta a etapa atual, concedendo novamente seu tempo de leitura.
- Tocar ou clicar seleciona uma etapa; setas, Home e End também navegam entre os painéis. Escape pausa.
- A demonstração pausa ao sair da tela ou ocultar a aba. Não começa sozinha.
- A preferência do navegador por movimentos reduzidos é respeitada. Nessa situação, o visitante pode ativar ou reduzir os movimentos apenas na demonstração, sem alterar configurações do navegador e sem guardar a escolha.

## Adaptação e manutenção

Painéis em quatro colunas quando há espaço e em duas colunas nas larguras menores. Nenhum painel depende de rolagem horizontal. O texto explicativo permanece fora da ilustração para facilitar a leitura.

Implementação: `assets/hero-journey.css`, `assets/hero-journey.js` e seção `#hero` no `index.html`. As demais seções de conteúdo e o formulário foram preservados. O cabeçalho e os botões receberam ajustes de largura para celular.

Verificação: seleção das quatro etapas, navegação por teclado, avanço temporizado, pausa, preferência por movimento reduzido, ativação explícita dos movimentos e ausência de cortes na hero em celular e desktop.
