import Jump from 'jump.js';

export class SmoothOnAnchors {
  constructor() {
    this._anchors = Array.from(document.querySelectorAll('.smooth'));
  }

  _scrolling(el) {
    const target = el.href.split('#')[1];
    Jump(`#${target}`);
  }

  addEventListeners() {
    this._anchors.map(trigger =>
      trigger.addEventListener('click', () => this._scrolling(trigger)),
    );
  }
}
