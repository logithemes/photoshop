$(document).ready(function () {

    //team
$(".team-det").mousemove(function(event){
    $(".team-det img").css("opacity", "0");
    $(this).children(".team-det img").css("opacity", "1");
    var _left = event.pageX + "px";
    $(".team-det img").css({left : _left});
    
})

    "use strict";
    //RESPONSIVE MENU BUTTON
    $(".menu-bar i").on("click", function () {
        $(".menu").addClass("menuact");
    });
    //RESPONSIVE MENU BUTTON REMOVE
    $(".menu span").on("click", function(){
        $(".menu").removeClass("menuact");
    })




    //SIDE BAR ACT
    $(".sidebat-act").on("click", function(){
        $(".side-bar").addClass("act");
    })

      //SIDE BAR REMOVE
      $(".side-bar-im i").on("click", function(){
        $(".side-bar").removeClass("act");
    })

  

//ON WINDOW SCROOL FUNCTION
$(window).on("scroll", function(){

  //nav fixed
    var _topval = $(window).scrollTop();
    if(_topval >= 150){
        $(".nav").addClass("act");
    }
    else{
        $(".nav").removeClass("act");
    }


    $(".anima").each(function(){
        var _anitop = $(this).offset().top - 100;
        if(_topval >= _anitop){
           var _getid = $(this).attr("id");
           $(".menu a").removeClass("act");
           $("." + _getid + "_nav").addClass("act");
        }
    })
   

});


});




