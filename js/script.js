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
      margin:10,
      nav:true,
      responsive:{
          0:{
            items:1
          },
          600:{
            items:3
          },
          1000:{
            items:5
          }
      }
  })

});



// you can add this code if you want the imags to change on their own.
//   $('#slides').superslides({
//   animation: 'fade',
//   play: 5000,
//   pagination: false
// });
