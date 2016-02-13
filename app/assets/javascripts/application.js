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
  if(yPos > 50){
    nagbar.style.height = "60px";
    nagbar.style.paddingTop = "0px";
    nagbar.style.boxShadow = "grey light";
  } else {
    nagbar.style.height = "100px";
    nagbar.style.paddingTop = "20px";
  }
}
window.addEventListener("scroll", yScroll);