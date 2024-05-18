$(document).ready(function () {
  var $grid = $(".grid").isotope({
    itemSelector: ".all",
    percentPosition: true,
    masonry: {
      columnWidth: ".all",
    },
  });
});
$(".slider__achiev").owlCarousel({
  loop: false,
  margin: 30,
  autoplay: false,
  dots: false,
  nav: true,
  autoplayTimeout: 7000,
  smartSpeed: 1000,
  responsive: {
    0: {
      items: 2,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});
$(".works__grid__carousel").owlCarousel({
  loop: true,
  margin: 30,
  autoplay: true,
  dots: false,
  nav: true,
  autoplayTimeout: 3000,
  smartSpeed: 1000,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 2,
    },
  },
});




$(document).ready(function () {    
   $('.interviews_list_slider').slick( {
    autoplay: false,
    autoplaySpeed: 7000,
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: false,  
    responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 2,
    },
  },
  });  
} );  



$(document).ready(function() {
    $('a[href*=#]').bind('click', function(e) {
        e.preventDefault(); // prevent hard jump, the default behavior

        var target = $(this).attr("href"); // Set the target as variable

        // perform animated scrolling by getting top-position of target-element and set it as scroll target
        $('html, body').stop().animate({
            scrollTop: $(target).offset().top
        }, 600, function() {
            location.hash = target; //attach the hash (#jumptarget) to the pageurl
        });

        return false;
    });
});

$(window).scroll(function() {
    var scrollDistance = $(window).scrollTop();

    // Show/hide menu on scroll
    //if (scrollDistance >= 850) {
    //    $('nav').fadeIn("fast");
    //} else {
    //    $('nav').fadeOut("fast");
    //}
  
    // Assign active class to nav links while scolling
    $('.page-section').each(function(i) {
        if ($(this).position().top <= scrollDistance) {
            $('.sidemenu li.active').removeClass('active');
            $('.sidemenu li').eq(i).addClass('active');
        }
    });
}).scroll();

