$(function () {

  $(".section1 button").click(function(){
    $(".section1 .ck1").animate().slideDown();
  })

  $(".slidebox").slick({
    slidesToShow: 3,
    infinite: true,
    dots: false,
    arrows: false,
    reponsive: [
      {
        breakpoint: 1199,
        setting: {
          slidesToShow: 3,
          infinite: true,
          dots: false,
          arrows: false,
        }
      },
      {
        breakpoint: 991,
        setting: {
          slidesToShow: 3,
          infinite: true,
          dots: false,
          arrows: false,
        }
      },
      {
        breakpoint: 767,
        setting: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
        }
      },
      {
        breakpoint: 575,
        secttin: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
          arrows: false,
        }
      }
    ]
  })


  $(".allbox").slick({
    slidesToShow: 1,
    infinite: false,
    dots: false,
    arrows: false,
    reponsive: [
      {
        breakpoint: 1199,
        setting: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
          arrows: false,
        }
      },
      {
        breakpoint: 767,
        setting: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
          arrows: false,
        }
      },
      {
        breakpoint: 400,
        setting: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
        }
      }
    ]

  });

  $(function(){
    $("header .bar").click(function(){
        $(".submenu").stop().animate({right:'0'},1000);
    })
    $(".submenu .close").click(function(){
        $(".submenu").stop().animate({right:'-100%'});
    })
});



  //////
});