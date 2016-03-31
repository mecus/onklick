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
//= require materialize-sprockets
//= require materialize/extras/nouislider
//= require jquery_ujs
//= require turbolinks



var nagbar, yPos;
function yScroll(){
  nagbar = document.getElementById('nagbar');
  yPos = window.pageYOffset; 
  if(yPos > 700){
    nagbar.style.height = "60px";
    nagbar.style.paddingTop = "0px";
    nagbar.style.background = "rgba(0,0,0, 0.4)";
    //nagbar.style.opacity = '0.5';
  } else {
    nagbar.style.height = "100px";
    nagbar.style.paddingTop = "20px";
    nagbar.style.background = "transparent";
  }
}
window.addEventListener("scroll", yScroll);

window.addEventListener("load", function(){
  var preloader = document.getElementById("preloader");
  document.body.removeChild(preloader);
});

$(document).ready(function(){
  $("#inner-header img").hide();
  $("#inner-header img").show(1000);
});
$(document).ready(function(){
  $("#inner-header h1").hide();
  $("#inner-header h1").slideToggle(1200); 
});

$(function(){
  $(".form-button").click(function(){
    $("#contact-f").slideToggle(300);
  })
});




