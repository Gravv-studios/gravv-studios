(() => {
  'use strict';
  const dialog = document.querySelector('#work-player');
  if (!dialog) return;
  const projects = {
    faith: { name: 'Faith Gôndolas · Estúdio 3D', url: 'https://www.faithgondolas.com.br/secao/porta-paletes.html#estudio-360', hint: 'Arraste a estrutura para girar. Use a roda do mouse ou dois dedos para aproximar. Você também pode navegar pelo site.' },
    casa: { name: 'Casa Studart', url: 'https://casastudart.com.br/', hint: 'Explore o site, conheça a coleção e navegue pelas páginas aqui mesmo.' },
    francais: { name: 'Le Cabinet Français', url: 'https://www.cabinetfrancais.com.br/', hint: 'Explore os cursos, o método e os conteúdos do professor sem sair desta prévia.' }
  };
  const stage = dialog.querySelector('.work-player-stage');
  const status = dialog.querySelector('[data-player-status]');
  let opener;
  let frame;
  let slowNotice;

  function openProject(button) {
    const project = projects[button.dataset.workOpen];
    if (!project) return;
    clearTimeout(slowNotice);
    opener = button;
    dialog.querySelector('#work-player-title').textContent = project.name;
    dialog.querySelector('#work-player-hint').textContent = project.hint;
    dialog.querySelector('[data-player-external]').href = project.url;
    status.textContent = 'Abrindo o projeto…';
    frame = document.createElement('iframe');
    const currentFrame = frame;
    frame.title = `Prévia interativa: ${project.name}`;
    frame.referrerPolicy = 'no-referrer';
    frame.setAttribute('sandbox', 'allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox');
    frame.addEventListener('load', () => {
      if (frame !== currentFrame) return;
      clearTimeout(slowNotice);
      status.textContent = 'Prévia aberta. Você já pode interagir.';
    }, { once: true });
    frame.src = project.url;
    stage.replaceChildren(frame);
    dialog.hidden = false;
    document.querySelectorAll('[data-work-open]').forEach(item => item.setAttribute('aria-expanded', String(item === button)));
    dialog.scrollIntoView({ block: 'start', behavior: 'instant' });
    dialog.querySelector('[data-player-close]').focus({ preventScroll: true });
    slowNotice = setTimeout(() => {
      status.textContent = 'Está demorando para abrir? Você pode usar “Abrir em outra aba”.';
    }, 12000);
  }

  document.querySelectorAll('[data-work-open]').forEach(button => {
    button.hidden = false;
    button.addEventListener('click', () => openProject(button));
  });
  function closeProject() {
    clearTimeout(slowNotice);
    stage.replaceChildren();
    frame = null;
    dialog.hidden = true;
    document.querySelectorAll('[data-work-open]').forEach(item => item.setAttribute('aria-expanded', 'false'));
    opener?.focus();
  }
  dialog.querySelector('[data-player-close]').addEventListener('click', closeProject);
  dialog.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeProject();
  });
})();
