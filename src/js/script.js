$('.cardSlider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 6,
    responsive: [
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
});


$('.asideSliderr').slick({
  arrows: true,
  dots: false,
  infinite: true,
  speed: 300,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 1,
  
});

$('.asideSliderrr').slick({
  arrows: true,
  dots: false,
  infinite: true,
  speed: 300,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 5,
  responsive: [
    {
      breakpoint: 950,
      settings: {
        slidesToShow: 4,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 540,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
});

$('.promotion').slick({
  arrows: true,
  dots: false,
  infinite: true,
  speed: 300,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 6,
  responsive: [
    {
      breakpoint: 950,
      settings: {
        slidesToShow: 5,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 4,
      }
    },
    {
      breakpoint: 540,
      settings: {
        slidesToShow: 2,
      }
    }
  ]
});