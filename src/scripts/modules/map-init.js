import pin from '../../images/map/pin.png';
const mapElement = document.querySelector('.map');
const branchMap = () => {
  if (mapElement) {
    const centerLatitude = parseFloat(
      mapElement.querySelector('.latitude-center').textContent,
    );
    const centerLongitude = parseFloat(
      mapElement.querySelector('.longitude-center').textContent,
    );
    const pinLatitude = parseFloat(
      mapElement.querySelector('.latitude-pin').textContent,
    );
    const pinLongitude = parseFloat(
      mapElement.querySelector('.longitude-pin').textContent,
    );
    const address = mapElement.querySelector('.address').textContent;
    const barbershopInfo =
      mapElement.querySelector('.barbershop-info').textContent;

    const myMap = new ymaps.Map('map', {
      center: [centerLatitude, centerLongitude],
      zoom: 16,
    });

    const myPlacemark = new ymaps.Placemark(
      [pinLatitude, pinLongitude],
      {
        balloonContent: address,
        hintContent: barbershopInfo,
      },
      {
        iconLayout: 'default#image',
        iconImageHref: pin,
        iconImageSize: [75, 98],
        iconImageOffset: [-37.5, -98],
      },
    );

    myMap.geoObjects.add(myPlacemark);
  } else {
    console.error('Map element not found.');
  }
};

export default branchMap;
