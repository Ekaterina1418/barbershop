import pinImg from '../../images/map/pin.svg';
import { coordinates } from '../constants';
const mapElement = document.querySelector('.franchise-map');
export function initMap() {
  if (mapElement) {
    let map = new ymaps.Map('franchise-map', {
      center: [54.745116429457326, 55.86374357202281],
      zoom: 3 ,
      behaviors: ['default', 'scrollZoom'], // Включаем поведения, включая скролл карты
    });

    for (const coord of coordinates) {
      let myPlacemark = new ymaps.Placemark(
        coord,
        {},
        {
          iconLayout: 'default#image',
          iconImageHref: pinImg,
          iconImageSize: [35, 35],
          iconImageOffset: [-20, -48],
        },
      );
      myPlacemark.events.add('click', function (e) {
        e.preventDefault(); // Предотвращаем стандартное действие браузера
        setTimeout(() => {
          window.location.href = '/franchise.html'; // Изменяем URL-адрес текущей страницы
        }, 100); // Задержка в 100 миллисекунд
      });
      map.geoObjects.add(myPlacemark);
    }

    map.controls.remove('geolocationControl');
    map.controls.remove('searchControl');
    map.controls.remove('trafficControl');
    map.controls.remove('typeSelector');
    map.controls.remove('fullscreenControl');
    map.controls.remove('zoomControl');
    map.controls.remove('rulerControl');
  }
}
if (mapElement) {
  ymaps.ready(initMap);
}
