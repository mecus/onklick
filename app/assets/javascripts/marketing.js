$(function(){
   $(".email-marketing").click(function(){
    $("#email").slideToggle(800);
    $(".email-marketing").css({"cursor": "crosshair"});
    $("#twitter").hide();
    $("#facebook").hide();
    $("#linkedin").hide();
  });
  $(".twitter").click(function(){
    $("#twitter").slideToggle(800);
    $(".twitter").css({"cursor": "crosshair"});
    $("#email").hide();
    $("#facebook").hide();
    $("#linkedin").hide();
  });
  $(".facebook").click(function(){
    $("#facebook").slideToggle(800);
    $(".facebook").css({"cursor": "crosshair"});
    $("#email").hide();
    $("#twitter").hide();
    $("#linkedin").hide();
  });
  $(".linkedin").click(function(){
    $("#linkedin").slideToggle(800);
    $(".linkedin").css({"cursor": "crosshair"});
    $("#email").hide();
    $("#facebook").hide();
    $("#twitter").hide();
  });
  //header session
  $("#text-caption h1").hide();
  $("#text-caption h1").delay(600).animate({width: "show"}, 3000);
  $("#text-caption p").hide();
  $("#text-caption p").delay(1600).fadeIn(1000);
  $("#text-caption hr").hide();
  $("#text-caption hr").delay(1200).fadeIn(1000);
});














// $(function(){
//   $(".email-marketing, #email").mouseenter(function(){
//     $("#email").animate({width: "show"});
//     $(".email-marketing").css({"opacity": "0.5", "cursor": "crosshair"});
//   });
//   $(".email-marketing, #email").mouseleave(function(){
//     $("#email").animate({width: "hide"});
//     $(".email-marketing").css({"opacity": "1"});
//   });

//   $(".twitter, #twitter").mouseenter(function(){
//     $("#twitter").animate({width: "show"});
//     $(".twitter").css({"opacity": "0.5", "cursor": "crosshair"});
//   });
//   $(".twitter, #twitter").mouseleave(function(){
//     $("#twitter").animate({width: "hide"});
//     $(".twitter").css({"opacity": "01"});
//   });
//   $(".facebook, #facebook").mouseenter(function(){
//     $("#facebook").animate({width: "show"});
//     $(".facebook").css({"opacity": "0.5", "cursor": "crosshair"});
//   });
//   $(".facebook, #facebook").mouseleave(function(){
//     $("#facebook").animate({width: "hide"});
//     $(".facebook").css({"opacity": "1"});
//   });
//   $(".linkedin, #linkedin").mouseenter(function(){
//     $("#linkedin").animate({width: "show"});
//     $(".linkedin").css({"opacity": "0.5", "cursor": "crosshair"});
//   });
//   $(".linkedin, #linkedin").mouseleave(function(){
//     $("#linkedin").animate({width: "hide"});
//     $(".linkedin").css({"opacity": "1"});
//   });

// });
