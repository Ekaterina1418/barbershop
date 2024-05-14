import pin from '../../images/pin.png';

const map = document.querySelector('.map');

const mapInit = () => {
  if (map) {
    const centerLatitude = map.querySelector('.latitude-center').textContent;
    const centerLongitude = map.querySelector('.longitude-center').textContent;
    const pinLatitude = map.querySelector('.latitude-pin').textContent;
    const pinLongitude = map.querySelector('.longitude-pin').textContent;
    const address = map.querySelector('.address').textContent;
    const barbershopInfo = map.querySelector('.barbershop-info').textContent;

    var myMap = new ymaps.Map('map', {
        center: [centerLatitude, centerLongitude],
        zoom: 16,
      }),
      myPlacemark = new ymaps.Placemark(
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
  }
};
export default mapInit;
