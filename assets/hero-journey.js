(() => {
  'use strict';
  const story = document.querySelector('[data-hero-story]');
  if (!story) return;
  const cards = [...story.querySelectorAll('[data-hero-step]')];
  const caption = story.querySelector('[data-hero-caption]');
  const counter = story.querySelector('[data-hero-counter]');
  const play = story.querySelector('[data-hero-play]');
  const previous = story.querySelector('[data-hero-previous]');
  const next = story.querySelector('[data-hero-next]');
  const progress = story.querySelector('[data-hero-progress]');
  const map = story.querySelector('.hero-story-map');
  const routes = [...story.querySelectorAll('.hero-route path')];
  const traveler = story.querySelector('.hero-traveler');
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const motionChoice = story.querySelector('[data-hero-motion-choice]');
  const motionButton = story.querySelector('[data-hero-motion]');
  const descriptions = [
    ['Ela encontra sua empresa.', 'Um anúncio apresenta o que você faz a alguém que pode precisar do seu serviço.', 'Se a mensagem não é clara, ela passa direto.'],
    ['Ela entende o que você oferece.', 'No site, essa pessoa conhece seu trabalho e encontra um caminho fácil para falar com você.', 'Se o site confunde, ela sai sem entrar em contato.'],
    ['Ela pergunta. Seu negócio responde.', 'Um assistente digital ajuda nas dúvidas iniciais e encaminha a conversa para sua equipe.', 'Se a resposta demora, ela pode procurar outra empresa.'],
    ['A conversa tem um próximo passo.', 'O contato fica organizado, com o que foi conversado e um lembrete para sua equipe dar retorno.', 'Sem acompanhamento, uma proposta pode ficar esquecida.']
  ];
  let current = 0;
  let playing = false;
  let started = false;
  let finished = false;
  let timer;
  let animationFrame;
  const duration = 9000;
  story.style.setProperty('--hero-step-duration', `${duration}ms`);

  function updateControls() {
    story.dataset.playing = String(playing);
    play.querySelector('[data-hero-play-label]').textContent = playing ? 'Pausar' : finished ? 'Ver novamente' : started ? 'Continuar' : 'Ver o caminho';
    play.querySelector('.hero-play-icon').textContent = playing ? 'Ⅱ' : '▶';
    play.setAttribute('aria-label', playing ? 'Pausar a demonstração' : finished ? 'Ver o caminho novamente' : started ? 'Continuar a demonstração' : 'Ver o caminho completo');
    previous.disabled = current === 0;
    next.disabled = current === cards.length - 1;
  }

  function stop() {
    clearTimeout(timer);
    playing = false;
    updateControls();
  }

  function animateCard(index) {
    cancelAnimationFrame(animationFrame);
    cards.forEach(card => card.classList.remove('is-animating'));
    progress.classList.add('hero-progress-reset');
    // A layout read restarts the short CSS sequence only after explicit interaction.
    void cards[index].offsetWidth;
    animationFrame = requestAnimationFrame(() => {
      cards[index].classList.add('is-animating');
      progress.classList.remove('hero-progress-reset');
    });
  }

  function select(index, animate = true) {
    current = index;
    cards.forEach((card, i) => card.setAttribute('aria-pressed', String(i === index)));
    const [title, description, risk] = descriptions[index];
    caption.querySelector('[data-hero-caption-step]').textContent = `A MESMA PESSOA · ETAPA ${index + 1}`;
    caption.querySelector('h3').textContent = title;
    caption.querySelector('[data-hero-description]').textContent = description;
    caption.querySelector('[data-hero-risk]').textContent = risk;
    counter.textContent = `${index + 1} de 4`;
    story.querySelectorAll('.hero-route-lit').forEach((route, i) => route.classList.toggle('is-complete', i < index));
    positionTraveler();
    if (animate) animateCard(index);
    updateControls();
  }

  function schedule() {
    clearTimeout(timer);
    timer = setTimeout(() => {
      if (current === cards.length - 1) {
        finished = true;
        stop();
      } else {
        select(current + 1);
        schedule();
      }
    }, duration);
  }

  function choose(index) {
    stop();
    finished = false;
    select(index);
  }

  cards.forEach((card, index) => {
    card.addEventListener('click', () => choose(index));
    card.addEventListener('pointerenter', event => {
      const keyboardInStory = story.contains(document.activeElement) && document.activeElement.matches(':focus-visible');
      if (event.pointerType === 'mouse' && !playing && !keyboardInStory) {
        finished = false;
        select(index);
      }
    });
    card.addEventListener('focus', () => {
      if (current !== index) choose(index);
    });
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

  play.addEventListener('click', () => {
    if (playing) {
      stop();
      return;
    }
    const restart = !started || finished || current === cards.length - 1;
    started = true;
    finished = false;
    playing = true;
    select(restart ? 0 : current);
    schedule();
  });
  previous.addEventListener('click', () => choose(Math.max(0, current - 1)));
  next.addEventListener('click', () => choose(Math.min(cards.length - 1, current + 1)));
  story.addEventListener('keydown', event => {
    if (event.key === 'Escape') stop();
  });
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) stop();
  });
  new IntersectionObserver(entries => {
    if (!entries[0].isIntersecting && playing) stop();
  }, { threshold: 0 }).observe(story);
  function setMotion(full) {
    story.dataset.motion = full ? 'full' : 'reduced';
    motionButton.textContent = full ? 'Reduzir movimentos' : 'Ativar animação completa';
    motionChoice.querySelector('span').textContent = full ? 'Movimentos ativados nesta demonstração.' : 'Seu navegador prefere movimentos reduzidos.';
  }
  motionButton.addEventListener('click', () => {
    stop();
    setMotion(story.dataset.motion !== 'full');
    animateCard(current);
  });
  reduceMotion.addEventListener('change', () => {
    stop();
    motionChoice.hidden = !reduceMotion.matches;
    setMotion(!reduceMotion.matches);
  });

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
  new ResizeObserver(drawRoutes).observe(map);
  story.querySelector('.hero-story-controls').hidden = false;
  motionChoice.hidden = !reduceMotion.matches;
  setMotion(!reduceMotion.matches);
  story.querySelector('.hero-story-hint').textContent = 'Passe o mouse, toque nas etapas ou veja o caminho completo.';
  select(0, false);
  drawRoutes();
})();
