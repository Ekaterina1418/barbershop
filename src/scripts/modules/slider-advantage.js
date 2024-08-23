import Swiper from 'swiper/bundle';

const sliderAdvantages = new Swiper('.advantages-slider__wrapper', {
  slidesPerView: 1,
  spaceBetween: 80,
  pagination: {
    clickable: true,
    el: '.swiper-pagination',
    bulletClass:
      'swiper-pagination-bullet swiper-pagination-bullet--color-franchise',
    bulletActiveClass: 'swiper-pagination-bullet--active-franchise',
  },
});

export default sliderAdvantages;
