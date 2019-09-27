$(document).ready(function(){

  $('#slides').superslides();

  var typed = new Typed(".typed", {
    strings: ["Web Developer.", "Software Engineer.", "Entrepreneur."],
    typeSpeed: 70,
    loop: true,
    startDelay: 1000,
    showCursor: false
  });
});



// you can add this code if you want the imags to change on their own.
//   $('#slides').superslides({
//   animation: 'fade',
//   play: 5000,
//   pagination: false
// });
