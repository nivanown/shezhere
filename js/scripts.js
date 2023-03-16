/*- partners-slider -*/
var swiper = new Swiper('.partners-slider', {
  slidesPerView: 5,
  spaceBetween: 92,
  loop: true,
  navigation: {
    nextEl: '.partners-slider .swiper-button-next',
    prevEl: '.partners-slider .swiper-button-prev',
  },
});

/*- mov-slider -*/
var swiper = new Swiper('.mov-slider', {
  slidesPerView: 3,
  spaceBetween: 12,
  loop: true,
  navigation: {
    nextEl: '.mov-slider-wrap .swiper-button-next',
    prevEl: '.mov-slider-wrap .swiper-button-prev',
  },
});

/*- info-slider -*/
var swiper = new Swiper('.info-slider', {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  navigation: {
    nextEl: '.info-slider-wrap .swiper-button-next',
    prevEl: '.info-slider-wrap .swiper-button-prev',
  },
});