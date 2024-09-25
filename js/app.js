$(function(){
    $("header .bar").click(function(){
        $(".submenu").stop().animate({right:'0'},1000);
    })
    $(".submenu .close").click(function(){
        $(".submenu").stop().animate({right:'-100%'},1000);
    });
});


