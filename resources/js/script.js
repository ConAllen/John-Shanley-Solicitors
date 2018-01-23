
$(document).ready(function() {

/*
animations on scroll
*/

$('.js--wp-1').waypoint(function(direction) {
      $('.js--wp-1').addClass('animated pulse');
  }, {
    offset: '50%'
  });

  $('.js--wp-btn').waypoint(function(direction) {
      $('.js--wp-btn').addClass('animated bounce');
  }, {
    offset: '100%'
});



});
