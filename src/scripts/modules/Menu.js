import { TABLET_RESOLUTION } from '../constants';

export class Menu {
  constructor() {
    this._burger = document.querySelector('.header__burger');
    this._menuWrapper = document.querySelector('.header__menu');
    this._navLinks = this._menuWrapper.querySelectorAll('.navigation__link');
  }

  _openMenu() {
    this._burger.classList.add('header__burger_active');
    this._menuWrapper.style.height = this._menuWrapper.scrollHeight + 50 + 'px';
  }

  _closeMenu() {
    this._burger.classList.remove('header__burger_active');
    this._menuWrapper.style.height = null;
  }

  _onNavLinkClick() {
    this._navLinks.forEach(link =>
      link.addEventListener('click', () => this._closeMenu()),
    );
  }

  addEventListeners() {
    this._burger.addEventListener('click', () => {
      this._burger.classList.contains('header__burger_active')
        ? this._closeMenu()
        : this._openMenu();
    });

    if (window.innerWidth < TABLET_RESOLUTION) {
      this._onNavLinkClick();
    }
  }
}
