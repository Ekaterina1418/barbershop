export const scrollAnchors = e => {
  e.preventDefault();

  const distanceToTop = el => Math.floor(el.getBoundingClientRect().top);
  const targetID = e.target.getAttribute('href');
  const targetAnchor = document.querySelector(targetID);

  if (!targetAnchor) return;

  const originalTop = distanceToTop(targetAnchor);

  window.scrollBy({ top: originalTop, left: 0, behavior: 'smooth' });

  const checkIfDone = setInterval(() => {
    const atBottom =
      window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;

    if (distanceToTop(targetAnchor) === 0 || atBottom) {
      targetAnchor.tabIndex = '-1';
      targetAnchor.focus();
      window.history.pushState('', '', targetID);
      clearInterval(checkIfDone);
    }
  }, 100);
};
