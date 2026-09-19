(() => {
  'use strict';
  const story = document.querySelector('[data-hero-story]');
  if (!story) return;
  const cards = [...story.querySelectorAll('[data-hero-step]')];
  const caption = story.querySelector('[data-hero-caption]');
  const progress = story.querySelector('[data-hero-progress]');
  const map = story.querySelector('.hero-story-map');
  const routes = [...story.querySelectorAll('.hero-route path')];
  const traveler = story.querySelector('.hero-traveler');
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const track = document.createElement('div');
  track.className = 'hero-scroll-track';
  story.before(track);
  track.append(story);
  story.closest('.hero-section').classList.add('hero-scroll-enabled');
  const descriptions = [
    ['Ela encontra sua empresa.', 'Um anúncio apresenta o que você faz a alguém que pode precisar do seu serviço.', 'Se a mensagem não é clara, ela passa direto.'],
    ['Ela entende o que você oferece.', 'No site, essa pessoa conhece seu trabalho e encontra um caminho fácil para falar com você.', 'Se o site confunde, ela sai sem entrar em contato.'],
    ['Ela pergunta. Seu negócio responde.', 'Um assistente digital ajuda nas dúvidas iniciais e encaminha a conversa para sua equipe.', 'Se a resposta demora, ela pode procurar outra empresa.'],
    ['A conversa tem um próximo passo.', 'O contato fica organizado, com o que foi conversado e um lembrete para sua equipe dar retorno.', 'Sem acompanhamento, uma proposta pode ficar esquecida.']
  ];
  let current = -1;
  let queued = false;
  let top = 0;
  function select(index) {
    if (index === current) return;
    current = index;
    cards.forEach((card, i) => {
      card.setAttribute('aria-pressed', String(i === index));
      card.classList.toggle('is-animating', i === index);
    });
    const [title, description, risk] = descriptions[index];
    caption.querySelector('[data-hero-caption-step]').textContent = `A MESMA PESSOA · ETAPA ${index + 1}`;
    caption.querySelector('h3').textContent = title;
    caption.querySelector('[data-hero-description]').textContent = description;
    caption.querySelector('[data-hero-risk]').textContent = risk;
    story.querySelectorAll('.hero-route-lit').forEach((route, i) => route.classList.toggle('is-complete', i < index));
    positionTraveler();
  }
  function updateScroll() {
    queued = false;
    const distance = Math.max(1, track.offsetHeight - story.offsetHeight);
    const amount = Math.max(0, Math.min(1, (top - track.getBoundingClientRect().top) / distance));
    progress.style.transform = `scaleX(${amount})`;
    select(Math.min(cards.length - 1, Math.floor(amount * cards.length)));
  }
  function queueScroll() {
    if (queued) return;
    queued = true;
    requestAnimationFrame(updateScroll);
  }
  function measure() {
    const header = document.querySelector('header');
    const preferred = (header?.getBoundingClientRect().height || 88) + 16;
    // Tall or zoomed layouts can scroll upward enough to keep the caption visible.
    top = Math.min(preferred, innerHeight - story.offsetHeight - 16);
    track.style.height = `${story.offsetHeight + innerHeight * 1.1}px`;
    track.style.setProperty('--story-top', `${top}px`);
    drawRoutes();
    queueScroll();
  }
  cards.forEach((card, index) => {
    card.addEventListener('click', () => select(index));
    card.addEventListener('focus', () => select(index));
    card.addEventListener('keydown', event => {
      if (event.altKey || event.ctrlKey || event.metaKey) return;
      let target;
      if (event.key === 'ArrowRight' || event.key === 'ArrowDown') target = Math.min(index + 1, cards.length - 1);
      if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') target = Math.max(index - 1, 0);
      if (event.key === 'Home') target = 0;
      if (event.key === 'End') target = cards.length - 1;
      if (target === undefined) return;
      event.preventDefault();
      cards[target].focus();
    });
  });
  function setMotion() {
    story.dataset.motion = reduceMotion.matches ? 'reduced' : 'full';
  }
  reduceMotion.addEventListener('change', setMotion);
  function positionTraveler() {
    const bounds = map.getBoundingClientRect();
    const card = cards[current].parentElement.getBoundingClientRect();
    traveler.style.transform = `translate(${card.right - bounds.left - 39}px, ${card.top - bounds.top - 15}px)`;
  }

  function drawRoutes() {
    const bounds = map.getBoundingClientRect();
    // Use list items: their bounds stay stable when a button zooms on hover.
    const boxes = cards.map(card => card.parentElement.getBoundingClientRect());
    for (let i = 0; i < boxes.length - 1; i++) {
      const a = boxes[i], b = boxes[i + 1];
      let d;
      if (Math.abs(a.top - b.top) < 10) {
        const x1 = a.right - bounds.left, x2 = b.left - bounds.left;
        const y = a.top - bounds.top + a.height / 2;
        d = `M ${x1} ${y} H ${x2}`;
      } else {
        const x1 = a.left - bounds.left + a.width / 2;
        const x2 = b.left - bounds.left + b.width / 2;
        const y1 = a.bottom - bounds.top, y2 = b.top - bounds.top;
        const mid = (y1 + y2) / 2;
        d = `M ${x1} ${y1} C ${x1} ${mid}, ${x1} ${mid}, ${x1 - 12} ${mid} H ${x2 + 12} C ${x2} ${mid}, ${x2} ${mid}, ${x2} ${y2}`;
      }
      routes[i * 2].setAttribute('d', d);
      routes[i * 2 + 1].setAttribute('d', d);
    }
    positionTraveler();
  }
  story.querySelector('.hero-story-hint').textContent = 'Role para acompanhar o caminho do seu cliente.';
  // Scroll changes are visual; focused card controls remain available to screen readers.
  caption.setAttribute('aria-live', 'off');
  setMotion();
  select(0);
  new ResizeObserver(measure).observe(story);
  window.addEventListener('resize', measure);
  window.addEventListener('scroll', queueScroll, { passive: true });
  measure();
})();
