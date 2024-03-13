$(function () {

  $(".section1 button").click(function(){
    $(".section1 .ck1").animate().slideDown();
  })

  $(".allbox").slick({
    slidesToShow: 1,
    infinite: false,
    dots: false,
    reponsive: [
      {
        breakpoint: 1199,
        setting: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        }
      },
      {
        breakpoint: 767,
        setting: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        }
      }
    ]

  })



  //////
});