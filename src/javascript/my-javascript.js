// home slider

$(document).ready(function () {
  $('.home-slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 2000,
  });
});


// package Details slider

$(document).ready(function () {
  $('.package-details-slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 2000,
  });
});

//testimonials

$(document).ready(function () {
  $('.testimonial').slick({
    infinite: true,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    arrows: true,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]

  });
});


