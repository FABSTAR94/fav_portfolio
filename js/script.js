$(document).ready(function(){

  $('#slides').superslides();

  var typed = new Typed(".typed", {
    strings: ["Web Developer.", "Software Engineer.", "Entrepreneur."],
    typeSpeed: 70,
    loop: true,
    startDelay: 1000,
    showCursor: false
  });

  $('.owl-carousel').owlCarousel({
      loop:true,
      items: 4,
      responsive:{
          0:{
            items:1
          },
          480:{
            items:2
          },
          768:{
            items:3
          },
          938:{
            items:4
          }
      }
  });
// this shows how many you want to be displayed depending on the screen size.


  var skillsTopOffset = $(".skillsSection").offset().top;

  $(window).scroll(function() {


    if(window.pageYOffset > skillsTopOffset - $(window).height() + 200) {

      $('.chart').easyPieChart({
        easing: 'easeInOut',
        barColor: '#fff',
        trackColor: false,
        scaleColor: false,
        lineWidth: 4,
        size: 152,
        onStep: function(from, to, percent) {
          $(this.el).find('.percent').text(Math.round(percent));
    }
  });



    }

  });

});




// you can add this code if you want the imags to change on their own.
//   $('#slides').superslides({
//   animation: 'fade',
//   play: 5000,
//   pagination: false
// });
