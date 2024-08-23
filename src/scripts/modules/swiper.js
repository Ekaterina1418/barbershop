import Swiper from 'swiper/bundle';

const slideTexts = [
  {
    subtitle: 'Высоко-квалифицированные мастера',
    paragraphs: [
      'В&nbsp;Brixton работают только опытные барберы, прошедшие строгий отбор и&nbsp;обучение',
      'Они в&nbsp;совершенстве владеют современными техниками стрижки и&nbsp;оформления бороды',
      'Мастера умеют подобрать индивидуальный стиль, учитывая особенности и&nbsp;пожелания каждого клиента',
    ],
  },
  {
    subtitle: 'Безупречный сервис',
    paragraphs: [
      'Мы предоставляем высококачественный сервис, чтобы каждый клиент оставался довольным.',
      'Наши барберы заботятся о вашем комфорте и всегда готовы выслушать ваши пожелания.',
      'Мы стремимся сделать каждое ваше посещение приятным и комфортным.',
    ],
  },
  {
    subtitle: 'Комфортная атмосфера',
    paragraphs: [
      'Наши салоны созданы для вашего полного релакса и удобства.',
      'Вы сможете отдохнуть и расслабиться, наслаждаясь уютной атмосферой.',
      'Наслаждайтесь приятной музыкой и дружелюбной обстановкой во время визита.',
    ],
  },
  {
    subtitle: 'Высококачественная продукция',
    paragraphs: [
      'Мы используем только проверенную и качественную продукцию для ухода за волосами и бородой.',
      'В нашем ассортименте есть средства для ухода от ведущих мировых брендов.',
      'Мы заботимся о том, чтобы ваши волосы и борода всегда выглядели безупречно.',
    ],
  },
  {
    subtitle: 'Безопасность',
    paragraphs: [
      'Мы строго соблюдаем все санитарные нормы и правила, чтобы обеспечить вашу безопасность.',
      'Все инструменты проходят регулярную дезинфекцию и стерилизацию.',
      'Ваше здоровье и безопасность – наш главный приоритет.',
    ],
  },
];

const swiper = new Swiper('.mySwiper', {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    clickable: true,
    el: '.slider__indicators',
    bulletClass:
      'swiper-pagination-bullet swiper-pagination-bullet--color-main',
    bulletActiveClass: 'swiper-pagination-bullet--active-main',
  },
});

swiper.on('slideChange', () => {
  const activeIndex = swiper.realIndex;
  const activeText = slideTexts[activeIndex];

  document.getElementById('slider-subtitle').innerHTML = activeText.subtitle;
  document.getElementById('slider-paragraph-1').innerHTML =
    activeText.paragraphs[0];
  document.getElementById('slider-paragraph-2').innerHTML =
    activeText.paragraphs[1];
  document.getElementById('slider-paragraph-3').innerHTML =
    activeText.paragraphs[2];
});

export default swiper;
