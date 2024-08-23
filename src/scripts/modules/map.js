import pinSvg from '../../images/map/pin.svg';
import pinPng from '../../images/map/pin.png';
import { coordinates, textSnippets } from '../constants';

const mapElement = document.querySelector('.map-main');
let closeBalloonTimeout;

function generateRandomCombinations(coordinates, textSnippets) {
  const shuffledCoordinates = [...coordinates].sort(() => Math.random() - 0.5);
  const shuffledSnippets = [...textSnippets].sort(() => Math.random() - 0.5);
  const combinations = shuffledCoordinates.map((coord, index) => ({
    city: coord.name,
    snippet: shuffledSnippets[index],
  }));
  return combinations;
}

const repeatedSnippets = textSnippets.flatMap(snippet =>
  Array(5).fill(snippet),
);
const randomCombinations = generateRandomCombinations(
  coordinates,
  repeatedSnippets,
);

function createPlacemark(coord, textSnippet, map) {
  const isUfa = coord.name === 'Уфе';
  const myPlacemark = new ymaps.Placemark(
    coord.coords,
    {
      iconContent: isUfa ? '<div class="balloon__number">2</div>' : '',
    },
    {
      hasBalloon: true,
      iconLayout: 'default#imageWithContent',
      iconImageHref: isUfa ? pinPng : pinSvg,
      iconImageSize: isUfa ? [25, 35] : [20, 20],
      iconImageOffset: isUfa ? [-20, -38] : [-10, -35],
    },
  );

  function openBalloon() {
    if (closeBalloonTimeout) {
      clearTimeout(closeBalloonTimeout);
    }

    const balloonContent = `<div class="custom-balloon"><p>${textSnippet} ${coord.name}</p><a class="balloon__link balloon__link--accent" href="/franchise.html">купить</a></div>`;

    map.balloon.open(coord.coords, balloonContent, {
      closeButton: false,
      offset: [0, -40],
      panelMaxMapArea: 0,
    });
  }

  function closeBalloon() {
    closeBalloonTimeout = setTimeout(() => {
      map.balloon.close();
    }, 300);
  }

  myPlacemark.events.add('mouseenter', openBalloon);
  myPlacemark.events.add('mouseleave', closeBalloon);
  myPlacemark.events.add('touchstart', openBalloon);

  map.events.add('balloonopen', () => {
    const balloonElement = document.querySelector('.custom-balloon');
    if (balloonElement) {
      balloonElement.addEventListener('mouseenter', () => {
        if (closeBalloonTimeout) {
          clearTimeout(closeBalloonTimeout);
        }
      });
      balloonElement.addEventListener('mouseleave', closeBalloon);
    }
  });

  return myPlacemark;
}

export function initMap() {
  if (mapElement) {
    const map = new ymaps.Map('map-main', {
      center: [54.745116429457326, 55.86374357202281],
      zoom: 3,
      behaviors: ['default', 'scrollZoom'],
    });

    coordinates.forEach((coord, i) => {
      const combination = randomCombinations[i];
      const placemark = createPlacemark(coord, combination.snippet, map);
      map.geoObjects.add(placemark);
    });

    [
      'geolocationControl',
      'searchControl',
      'trafficControl',
      'typeSelector',
      'fullscreenControl',
    ].forEach(control => map.controls.remove(control));
  }
}
