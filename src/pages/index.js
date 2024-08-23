import './index.scss';
import {
  Menu,
  branchMap,
  SmoothOnAnchors,
  scrollAnchors,
  initMap,
} from '../scripts/modules';

const mobileMenu = new Menu();
mobileMenu.addEventListeners();

if (document.querySelector('.smooth')) {
  const smoothOnAnchors = new SmoothOnAnchors();
  smoothOnAnchors.addEventListeners();

  const scrollTo = () => {
    const links = document.querySelectorAll('.smooth');
    links.forEach(link => (link.onclick = scrollAnchors));
  };
  scrollTo();
}
if (document.querySelector('.map-main')) {
  ymaps.ready(initMap);
}

if (document.querySelector('.map')) {
  ymaps.ready(branchMap);
}
