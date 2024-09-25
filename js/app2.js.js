$(function(){
  $(".slidebox").slick({
    slidesToShow: 1,
    infinite: false,
    dots: false,
    arrows: false,
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
  });

  $(function(){
    $("header .bar").click(function(){
        $(".submenu").stop().animate({right:'0'},1000);
    })
    $(".submenu .close").click(function(){
        $(".submenu").stop().animate({right:'100%'},1000)
    })
});






////////
});