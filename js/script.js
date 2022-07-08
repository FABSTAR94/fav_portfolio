// loader
$(window).on("load", function() {

    $(".loader .inner").fadeOut(500, function() {
        $(".loader").fadeOut(750);
    });

    $(".items").isotope({
        filter: '*',
        animationOptions: {
            duration: 1000,
            easing: 'linear',
            queue: false
        }
    });
})

// text on banner slides
$(document).ready(function() {

    $('#slides').superslides();

    let typed = new Typed(".typed", {
        strings: [ "Software Engineer.", "Front End Engineer.", "Software QA Engineer"],
        typeSpeed: 70,
        loop: true,
        startDelay: 1000,
        showCursor: false
    });

    $('.owl-carousel').owlCarousel({
        loop: true,
        items: 4,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 3
            },
            938: {
                items: 4
            }
        }
    });


    // navbar
    $("#navigation li a").click(function(e) {
        e.preventDefault();

        let targetElement = $(this).attr("href");
        let targetPosition = $(targetElement).offset().top;
        $("html, body").animate({ scrollTop: targetPosition - 50 }, "slow");
        // target element is referring to the about, skills, etc
    });





    // use const if it will never be reassigned else use let
    const nav = $("#navigation");
    const navTop = nav.offset().top;

    $(window).on("scroll", stickyNavigation);

    function stickyNavigation() {

        let body = $("body");

        if ($(window).scrollTop() >= navTop) {
            body.css("padding-top", nav.outerHeight() + "px");
            body.addClass("fixedNav");
        } else {
            body.css("padding-top", 0);
            body.removeClass("fixedNav");
        }


    }

});


// owl carousel filters
 $("[data-fancybox]").fancybox();



$("#filters a").click(function() {

$("#filters .current").removeClass("current");
$(this).addClass("current");

  var selector = $(this).attr("data-filter");

   $(".items").isotope({
      filter: selector,
      animationOptions: {
        duration: 1500,
        easing:'linear',
        queue: false
      }
    });

   return false;

});






// you can add this code if you want the imags to change on their own.
//   $('#slides').superslides({
//   animation: 'fade',
//   play: 5000,
//   pagination: false
// });
