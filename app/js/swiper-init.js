const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  speed: 430,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // autoplay
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },

  // slide effect
  effect: 'slide',

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

