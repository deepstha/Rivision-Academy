
 $(document).ready(function () {
        /** Team Carousel **/
        $('#about-team').owlCarousel({
            items: 4,
            loop: true,
            nav: true,
            margin: 50,
            autoplay: true,
            autoplaySpeed: 500,
            autoplayTimeout: 5000,
            autoplayHoverPause: false,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                600: {
                    items: 2,
                    nav: true
                },                
                768: {
                    items: 3,
                    nav: true
                },
                1000: {
                    items: 4,
                    nav: true,
                    loop: true
                },
                1200: {
                    items: 4,
                    nav: true,
                    loop: true
                }
            }
        });

        /** Banner Carousel **/

          var owl = $('#banner-wrap');

          // Top Banner
          owl.owlCarousel({
              loop:true,
              margin:0,
              navSpeed:500,
              animateIn: 'fadeIn',
              nav:true,
              autoplay: true,
              items:1
          });

          /** Banner Carousel **/
          // Welcome Banner
          $('#banner-wrap2').owlCarousel({
              loop:true,
              margin:0,
              navSpeed:500,
              animateOut: 'fadeOut',
              nav:true,
              autoplay: true,
              items:1
          });

          /** Banner Carousel **/
          // Testimonial Banner
/*          $('#banner-wrap3').owlCarousel({
              loop:true,
              margin:0,
              navSpeed:500,
              animateIn: 'fadeIn',
              animateOut: 'fadeOut',
              nav:false,
              autoplay: true,
              items:1
          });
*/
          /** Banner Carousel **/
          // Testimonial Banner
          $('#banner-wrap4').owlCarousel({
              loop:true,
              margin:0,
              navSpeed:500,
              autoplayHoverPause: false,
              nav:true,
              autoplay: true,
              items:1
          });

    /** Banner Carousel **/

          var owl2 = $('#banner-wrap3');

          // Carousel initialization
          owl2.owlCarousel({
              loop:true,
              margin:0,
              navSpeed:500,
              animateOut: 'fadeOut',
              nav:false,
              autoplay: true,
              items:1
          });

        // add animate.css class(es) to the elements to be animated
      function setAnimation ( _elem, _InOut ) {
        // Store all animationend event name in a string.
        // cf animate.css documentation
        var animationEndEvent = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

        _elem.each ( function () {
          var $elem = $(this);
          var $animationType = 'animated ' + $elem.data( 'animation-' + _InOut );

          $elem.addClass($animationType).one(animationEndEvent, function () {
            $elem.removeClass($animationType); // remove animate.css Class at the end of the animations
          });
    });
}

// Fired before current slide change
  owl2.on('change.owl2.carousel', function(event) {
      var $currentItem = $('.owl-item', owl2).eq(event.item.index);
      var $elemsToanim = $currentItem.find("[data-animation-out]");
      setAnimation ($elemsToanim, 'out');
  });

// Fired after current slide has been changed
  owl2.on('changed.owl.carousel', function(event) {

      var $currentItem = $('.owl-item', owl2).eq(event.item.index);
      var $elemsToanim = $currentItem.find("[data-animation-in]");
      setAnimation ($elemsToanim, 'in');
  })



        // add animate.css class(es) to the elements to be animated
      function setAnimation ( _elem, _InOut ) {
        // Store all animationend event name in a string.
        // cf animate.css documentation
        var animationEndEvent = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

        _elem.each ( function () {
          var $elem = $(this);
          var $animationType = 'animated ' + $elem.data( 'animation-' + _InOut );

          $elem.addClass($animationType).one(animationEndEvent, function () {
            $elem.removeClass($animationType); // remove animate.css Class at the end of the animations
          });
    });
}

// Fired before current slide change
  owl.on('change.owl.carousel', function(event) {
      var $currentItem = $('.owl-item', owl).eq(event.item.index);
      var $elemsToanim = $currentItem.find("[data-animation-out]");
      setAnimation ($elemsToanim, 'out');
  });

// Fired after current slide has been changed
  owl.on('changed.owl.carousel', function(event) {

      var $currentItem = $('.owl-item', owl).eq(event.item.index);
      var $elemsToanim = $currentItem.find("[data-animation-in]");
      setAnimation ($elemsToanim, 'in');
  })

        /** Add/Remove class **/
         $('.panel-title a').on('click', function(){
            $(this).removeClass('open').addClass('open');
            });


        /** Parallax **/

        $(document).ready(function () {
            $(window).stellar();
        });


        /** Equal height **/
        $('.equal').matchHeight();

        jQuery('.carousel').carousel({
            interval: 5000
        })

        /** Dropdown Menu **/
/*          $(function() {
          $('#main-menu').smartmenus({
            subMenusSubOffsetX: 1,
            subMenusSubOffsetY: -8
          });
        });*/
/*        var winWidth = jQuery(window).width();
        if (winWidth < 768) {

            jQuery(".js-mobile-expandable").click(function() {
                jQuery(this).find(".sub-menu").slideToggle("300");
            });
        }   */

      /** Bounce Animation **/

          function animationHover(element, animation) {
              element = $(element);
              element.hover(
                  function () {
                      element.addClass('animated ' + animation);
                  },
                  function () {
                      //wait for animation to finish before removing classes
                      window.setTimeout(function () {
                          element.removeClass('animated ' + animation);
                      }, 2000);
                  });
          }

          $('.courses-block .img-wrap').each(function() {
              animationHover(this, 'swing');
          });

          $('.logo').each(function() {
              animationHover(this, 'flipInY');
          });

        /** Sticky Sidebar **/
            $('.sticky')
                .theiaStickySidebar({
                additionalMarginTop: 100
            });


        /** Sticky Header **/
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('header').addClass("sticky");
            }
            else {
                $('header').removeClass("sticky");
            }
        });

    })

/*function resizeWindow() {
  var wWidth = $(window).width();
  if(wWidth>767) {*/
    /** Dropdown Hover **/
/*    $('ul.nav li.dropdown').hover(function() {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
      }, function() {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
    });
    $('a.dropdown-toggle').removeAttr('data-toggle');

    console.log(wWidth);
  } else {
    $('a.dropdown-toggle').attr('data-toggle', 'dropdown');
  }
}
$(document).ready(function() {
  resizeWindow();
  $(window).on('resize', function(){
    resizeWindow();
  });
});*/

 
 //jQuery is required to run this code
$( document ).ready(function() {

    scaleVideoContainer();

    initBannerVideoSize('.video-container .poster img');
    initBannerVideoSize('.video-container .filter');
    initBannerVideoSize('.video-container video');

    $(window).on('resize', function() {
        scaleVideoContainer();
        scaleBannerVideoSize('.video-container .poster img');
        scaleBannerVideoSize('.video-container .filter');
        scaleBannerVideoSize('.video-container video');
    });

});

function scaleVideoContainer() {

    var height = $(window).height() + 5;
    var unitHeight = parseInt(height) + 'px';
    $('.homepage-hero-module').css('height',unitHeight);

}

function initBannerVideoSize(element){

    $(element).each(function(){
        $(this).data('height', $(this).height());
        $(this).data('width', $(this).width());
    });

    scaleBannerVideoSize(element);

}

function scaleBannerVideoSize(element){

    var windowWidth = $(window).width(),
    windowHeight = $(window).height() + 5,
    videoWidth,
    videoHeight;

    // console.log(windowHeight);

    $(element).each(function(){
        var videoAspectRatio = $(this).data('height')/$(this).data('width');

        $(this).width(windowWidth);

        if(windowWidth < 1000){
            videoHeight = windowHeight;
            videoWidth = videoHeight / videoAspectRatio;
            $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});

            $(this).width(videoWidth).height(videoHeight);
        }

        $('.homepage-hero-module .video-container video').addClass('fadeIn animated');

    });
}