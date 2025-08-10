
  // Example card
  const card = document.querySelector('.galary-grid .img-card');

  function setState(el, state) {
    el.classList.remove('loading', 'error');
    if (state) el.classList.add(state);

    const text = el.querySelector('.status-text');
    if (!text) return;

    if (state === 'loading') text.textContent = 'Generating…';
    else if (state === 'error') text.textContent = 'Failed to generate. Try again.';
    else text.textContent = '';
  }

  // Demo:
  // setState(card, 'loading');
  // setTimeout(() => setState(card, 'error'), 3000);
  // setTimeout(() => setState(card, null), 6000);
