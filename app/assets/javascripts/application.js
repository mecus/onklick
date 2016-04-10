// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery.turbolinks
//= require jquery_ujs
//= require materialize-sprockets
//= require materialize/extras/nouislider
//= require turbolinks



var nagbar, yPos;
function yScroll(){
  nagbar = document.getElementById('nagbar');
  yPos = window.pageYOffset; 
  if(yPos > 600){
    nagbar.style.height = "60px";
    nagbar.style.paddingTop = "0px";
    nagbar.style.background = "rgba(0,0,0, 0.4)";
    $(".top-page").show();
    //nagbar.style.opacity = '0.5';
  } else {
    nagbar.style.height = "100px";
    nagbar.style.paddingTop = "20px";
    nagbar.style.background = "transparent";
    $(".top-page").hide();
  }
}
window.addEventListener("scroll", yScroll);

window.addEventListener("load", function(){
  var preloader = document.getElementById("preloader");
  document.body.removeChild(preloader);
});

$(function(){
  $("#inner-header img").hide();
  $("#inner-header img").show(1000);
});
$(function(){
  $("#inner-header h1").hide();
  $("#inner-header h1").delay(600).animate({width: "show"}, 1200);
  $("#inner-header hr").hide();
  $("#inner-header a").hide();
  $("#inner-header hr").delay(1600).animate({width: "show"}, 1000);
  $("#inner-header a").delay(2000).animate({width: "show"}, 150);
});

$(function(){
  $(".form-button").click(function(){
    $("#quotation").animate({height: "toggle"}, 600);
    //$(".caret-pop").slideToggle(300);
    // preventDefaul();
  });
  $(".solid-button").click(function(){
    $("#quotation").slideToggle(300);
    // $(".caret-pop").slideToggle(300);
    // preventDefaul();
  });
  //beaspoke pop up
  $(".hero-image-bespoke").mouseenter(function(){
    $(".bespoke-pop").animate({width: "show"}, 300);
    $(".bespoke-pop h2").delay(300).slideDown(300);
    $(".bespoke-pop p").delay(200).slideDown(300);
  });
    $(".hero-image-bespoke").mouseleave(function(){
      $(".bespoke-pop").delay(300).animate({width: "hide"}, 300);
      $(".bespoke-pop h2").slideUp(500);
      $(".bespoke-pop p").slideUp(300);
      // $(".bespoke-pop").delay(300).hide("slide", {direction: "left"}, 1200);
  });
   $(".hero-image-hosting").mouseenter(function(){
    $(".hosting-pop").animate({width: "show"}, 300);
    $(".hosting-pop h2").delay(300).slideDown(300);
    $(".hosting-pop p").delay(200).slideDown(300);
  });
    $(".hero-image-hosting").mouseleave(function(){
      $(".hosting-pop").delay(300).animate({width: "hide"}, 300);
      $(".hosting-pop h2").slideUp(500);
      $(".hosting-pop p").slideUp(300);
      // $(".bespoke-pop").delay(300).hide("slide", {direction: "left"}, 1200);
  });

  // $(".form-button").hover(function(){
  //   $(".form-button").css("")
  // })
});


$(function(){
  $(".email-marketing, #email").mouseenter(function(){
    $("#email").animate({width: "show"});
    $(".email-marketing").css({"opacity": "0.5", "cursor": "crosshair"});
  });
  $(".email-marketing, #email").mouseleave(function(){
    $("#email").animate({width: "hide"});
    $(".email-marketing").css({"opacity": "1"});
  });

  $(".twitter, #twitter").mouseenter(function(){
    $("#twitter").animate({width: "show"});
    $(".twitter").css({"opacity": "0.5", "cursor": "crosshair"});
  });
  $(".twitter, #twitter").mouseleave(function(){
    $("#twitter").animate({width: "hide"});
    $(".twitter").css({"opacity": "01"});
  });
  $(".facebook, #facebook").mouseenter(function(){
    $("#facebook").animate({width: "show"});
    $(".facebook").css({"opacity": "0.5", "cursor": "crosshair"});
  });
  $(".facebook, #facebook").mouseleave(function(){
    $("#facebook").animate({width: "hide"});
    $(".facebook").css({"opacity": "1"});
  });
  $(".linkedin, #linkedin").mouseenter(function(){
    $("#linkedin").animate({width: "show"});
    $(".linkedin").css({"opacity": "0.5", "cursor": "crosshair"});
  });
  $(".linkedin, #linkedin").mouseleave(function(){
    $("#linkedin").animate({width: "hide"});
    $(".linkedin").css({"opacity": "1"});
  });

});

$(function(){
  $("li .button").on('click', function(){
    $("#quotation").animate({height: "toggle"}, 600);
    // $("li .button").css({"background-color": "red"});

  });
});









