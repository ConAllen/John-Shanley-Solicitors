
$(document).ready(function() {



  /*  Sticky Nav*/
  $('.js--about-us-section').waypoint(function(direction) {
      if(direction == "down"){

        $('nav').addClass('sticky');

      } else {

        $('nav').removeClass('sticky');
      }

});

  /*  scroll to button sections */

    $('.js--scroll-to-services').click(function(){

        $('html,body').animate({scrollTop: $('.js--section-features').offset().top},1000);

    });


    $('.js--scroll-to-contact').click(function(){

      $('html,body').animate({scrollTop: $('.js--section-contact').offset().top},1000);

  });

/*
    navigation on scroll
*/


  // Select all links with hashes
  $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });



  /*
animations on scroll
*/




$('.js--wp-1').waypoint(function(direction) {
    $('.js--wp-1').addClass('animated fadeInUp');
     } ,{
       offset:'50%'
     });



     $('.js--wp-left').waypoint(function(direction) {
      $('.js--wp-left').addClass('animated fadeIn');
       } ,{
         offset:'50%'
       });

       $('.js--wp-right').waypoint(function(direction) {
        $('.js--wp-right').addClass('animated fadeIn');
         } ,{
           offset:'50%'
         });

         $('.js--wp-btn').waypoint(function(direction) {
          $('.js--wp-btn').addClass('animated bounce');
           } ,{
             offset:'50%'
           });






/*  map */
var map = new GMaps({
    div: '.map',
    lat: 53.3475418,
    lng: -6.2106185,
    zoom:12
  });

  map.addMarker({
    lat: 53.3459612,
    lng: -6.2765109,
    title:'Dublin',
    infoWindow: {
      content: '<p> John Shanley Offices </p>'
    }
  });

});

