import pinImg from '../../images/map/pin.svg';
import pinPng from '../../images/pin.png';
import { coordinates, textSnippets } from '../constants';
const mapElement = document.querySelector('.franchise-map');

function generateRandomCombinations(coordinates, textSnippets) {
  // Shuffle both arrays
  const shuffledCoordinates = [...coordinates].sort(() => Math.random() - 0.5);
  const shuffledSnippets = [...textSnippets].sort(() => Math.random() - 0.5);

  // Combine city-snippet pairs
  const combinations = [];
  for (let i = 0; i < shuffledCoordinates.length; i++) {
    combinations.push({
      city: shuffledCoordinates[i].name,
      snippet: shuffledSnippets[i],
    });
  }

  return combinations;
}
const repeatedSnippets = textSnippets.flatMap(snippet =>
  Array(5).fill(snippet),
);

const randomCombinations = generateRandomCombinations(
  coordinates,
  repeatedSnippets,
);

export function initMap() {
  if (mapElement) {
    let map = new ymaps.Map('franchise-map', {
      center: [54.745116429457326, 55.86374357202281],
      zoom: 3,
      behaviors: ['default', 'scrollZoom'], // Включаем поведения, включая скролл карты
    });

    for (let i = 0; i < coordinates.length; i++) {
      const coords = coordinates[i].name;
      const combination = randomCombinations[i];

      console.log(coords);
      const textSnippet = combination.snippet;
      const myPlacemark = new ymaps.Placemark(
        coordinates[i].coords,
        {},
        {
          iconLayout: 'default#image',
          iconImageHref: coords === 'Уфе' ? pinPng : pinImg, // Use appropriate image based on city name
          iconImageSize: coords === 'Уфе' ? [25, 35] : [20, 20], // Adjust size based on image
          iconImageOffset: coords === 'Уфе' ? [-20, -38] : [-10, -35], // Adjust offset based on image
          balloonContentLayout: ymaps.templateLayoutFactory.createClass(
            `<div class="custom-balloon">
            <p>${textSnippet} ${coords}</p>
               </div>`,
          ),
        },
      );
      myPlacemark.events.add('mouseenter', function () {
        const balloonContent = `<div class="custom-balloon">
                                  <p>${textSnippet} ${coords}</p>
                                </div>`;
        map.balloon.open(
          coordinates[i].coords, // Позиция балуна
          balloonContent, // Содержимое балуна
          {
            closeButton: false,
            offset: [0, -40], // Смещение балуна вверх относительно метки
          },
        );
      });

      // Закрываем балун при уходе с маркера
      myPlacemark.events.add('mouseleave', function () {
        myPlacemark.balloon.close();
      });

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
