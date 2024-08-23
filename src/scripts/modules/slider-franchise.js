import Swiper from 'swiper/bundle';

const sliderFranchise = new Swiper('.slider-franchise', {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    clickable: true,
    el: '.slider__indicators',
    bulletClass: 'swiper-pagination-bullet franchise-slider--color',
    bulletActiveClass: 'franchise-slider--active',
  },
});

export default sliderFranchise;
