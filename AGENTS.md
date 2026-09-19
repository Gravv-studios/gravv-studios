# Site GRAVV

## Projeto

- Ao retomar em outra conta ou computador, leia primeiro `docs/CONTINUIDADE.md`, que registra as decisões aprovadas e as pendências reais.

- Site principal: `index.html`, com os complementos em `assets/`.
- Repositório: `https://github.com/Gravv-studios/gravv-studios.git`.
- Preserve a identidade GRAVV e consulte a skill `gravv-site-system` quando disponível.
- Não altere os materiais internos da marca para realizar mudanças no site.

## Atualização do GitHub

O usuário autorizou commits e envio ao repositório quando forem concluídas alterações solicitadas no site.

1. Termine e confira a alteração solicitada antes de sincronizar.
2. Inspecione o estado local e remoto, preservando o trabalho existente.
3. Adicione somente os arquivos pertinentes ao site, com caminhos explícitos. Novos arquivos públicos devem ser liberados individualmente no `.gitignore`.
4. Faça um commit descritivo e envie à branch de trabalho. Para o fluxo atual, use `main` e `origin`.
5. Nunca use push forçado. Se houver conflito remoto, preserve os dois lados e resolva antes do envio.
6. Se não houver mudanças novas, não crie commits vazios.
7. Informe o commit concluído ou um impedimento real de autenticação/envio.

Não criar agendamento, heartbeat, polling, watcher, cron ou atualização a cada dez minutos. A sincronização acontece como parte da conclusão de uma edição solicitada; não existe processo de monitoramento em segundo plano. Alterações feitas fora de uma tarefa são enviadas quando o usuário solicitar sua sincronização.

Não enviar credenciais, arquivos de clientes, materiais internos, backups, relatórios de verificação ou a pasta inteira do workspace. A publicação na Vercel já foi autorizada e está conectada à branch `main`; confira https://gravv-studios.vercel.app/ após os envios. Não criar hospedagem adicional sem solicitação específica.

## Verificação

- O site é estático e não exige instalação de pacotes nem compilação.
- Confira a sintaxe do JavaScript quando ele for modificado.
- Para mudanças visuais, confira a versão local no computador e no celular, com teclado e preferência por movimentos reduzidos.
- O formulário atual é um protótipo: sua mensagem de sucesso não corresponde a envio real. Não descreva essa integração como funcional antes de implementar e validar um destino real.
