$(document).ready(function() {

var startSection = 'beer';
  
$(".nav-link").click(function() {
  var current = $(this).attr("data-target");
  var $current = $("#" + current);

  $(".nav-link.active").removeClass("active");

  $(".nav-link" + "." + current).addClass("active");
  $(".content.active").removeClass("active").addClass("visuallyhidden");
  $current.addClass("active").removeClass("visuallyhidden");
});

$(".nav-link" + "." + startSection).click();

});