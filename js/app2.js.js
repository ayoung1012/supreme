$(function(){
  $(".slidebox").slick({
    slidesToShow: 1,
    infinite: false,
    dots: false,
    reponsive:[
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
        breakpoint: 991,
        setting: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        }
      }

    ]
  })






////////
});