
var nagbar, yPos;
function yScroll(){
  nagbar = document.getElementById('nagbar');
  yPos = window.pageYOffset; 
  if(yPos > 150){
    nagbar.style.height = "60px";
    nagbar.style.paddingTop = "0px";
    nagbar.style.background = "rgba(0,0,0, 0.4)";
    $(".top-page").show();
    //nagbar.style.opacity = '0.5';
    $(".brand-logo img").css({"width": "180px", "height": "24px", "transition": "0.5s"});
    $(".inner-contact").css({"backgroundColor": "rgba(0,0,0, 0.9)", "transition": "5s"});
  } else {
    nagbar.style.height = "80px";
    nagbar.style.paddingTop = "5px";
    nagbar.style.background = "transparent";
    $(".top-page").hide();
    $(".brand-logo img").css({"width": "240px", "height": "38px", "transition": "0.5s"});
    $(".inner-contact").css({"backgroundColor": ""});
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
    $("#quotation").slideToggle(1000);
    // $(".caret-pop").slideToggle(300);
    // preventDefaul();
  });
   $(".contact-us").click(function(){
    $("#quotation").slideToggle(1000);
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
// $(function(){
//   $(".clear").hide();
//   $(".menu").click(function(){
//     $(".menu").hide(1000);
//     $(".clear").show(500);
//   });
//   $(".clear").click(function(){
//     $(".clear").hide(1000);
//     $(".menu").show(500);
//   });
// });


$(function(){
  $("li .button").on('click', function(){
    $("#quotation").animate({height: "toggle"}, 600);
    // $("li .button").css({"background-color": "red"});

  });
});
$(function(){
  $('.parallax').parallax();
});

// $(function(){
//   $(".property").mouseenter(function(){
//     $(this).css({"background": "red"}).fadeIn(3000);
//   });
// });







