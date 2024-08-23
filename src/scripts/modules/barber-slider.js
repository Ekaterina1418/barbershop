import Swiper from 'swiper/bundle';

const swiperBarbers = new Swiper('.barber-slider', {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  pagination: {
    clickable: true,
    el: '.slider__indicators-secondary',
    bulletClass:
      'swiper-pagination-bullet swiper-pagination-bullet--color-secondary',
    bulletActiveClass: 'swiper-pagination-bullet--active-secondary',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
    1280: {
      slidesPerView: 4,
    },
  },
});

export default swiperBarbers;
