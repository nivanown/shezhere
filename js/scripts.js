/*- menu-btn -*/
var siteBtn = $('.menu-btn'),
  siteMenu= $('.header__bottom-panel');

siteBtn.on('click', function(){
  $(this).toggleClass('open');
  siteMenu.toggleClass('show');
});

/*- partners-slider -*/
var swiper = new Swiper('.partners-slider', {
  slidesPerView: 5,
  spaceBetween: 92,
  loop: true,
  navigation: {
    nextEl: '.partners-slider-wrap .swiper-button-next',
    prevEl: '.partners-slider-wrap .swiper-button-prev',
  },
  breakpoints: {
    0: {
      autoHeight: true,
      slidesPerView: 2,
      spaceBetween: 15,
    },
    580: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1190: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
});

/*- mov-slider -*/
var swiper = new Swiper('.mov-slider', {
  autoHeight: true,
  slidesPerView: 3,
  spaceBetween: 12,
  loop: true,
  navigation: {
    nextEl: '.mov-slider-wrap .swiper-button-next',
    prevEl: '.mov-slider-wrap .swiper-button-prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 5,
    },
    420: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    680: {
      slidesPerView: 3,
      spaceBetween: 12,
    },
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