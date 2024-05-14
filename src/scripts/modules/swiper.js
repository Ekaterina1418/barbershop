import Swiper from 'swiper/bundle';

const swiper = new Swiper('.mySwiper', {
  pagination: {
    clickable: true,
    el: '.slider__indicators',
  },
});

export default swiper;
