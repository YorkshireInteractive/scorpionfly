var $window = $(window);
var $htmlBody = $('html, body');

var $navigation = $('.header-nav-wrapper');
var $navLinks = $navigation.find('.header-nav-list-item-link:not(.hire-us-link)');
var $topBar = $('.top-bar');
var $colorChangeElements = $navLinks.add($topBar);

var buffer = 50;
var splashTransitionHeight;
var secondTransitionHeight;
var thirdTransitionHeight;

/**
 * Figures out where page needs to transition colors/styles of nav/top-bar elements
 */
var getTransitionHeights = function () {
  splashTransitionHeight = $('.big-splash').height();
  secondTransitionHeight = splashTransitionHeight + $('#who-we-are').height();
  thirdTransitionHeight = secondTransitionHeight + $('#what-we-do').height();
};

/**
 * Sets element passed to it to active and removes active class from sibling nav
 */
var setActiveNav = function ($el) {
  $el.addClass('active').parent().siblings().find('.header-nav-list-item-link').removeClass('active');
};

/**
 * Scroll animates page to Ycoord
 */
var animateScroll = function (Ycoord) {
  $htmlBody.animate({ scrollTop: Ycoord+"px" });
};

/**
 * Figures out which type of event to use. We don't want to use click on mobile
 * because there's a 300ms delay as it waits for a doubleclick.
 */
var getClickEvent = function () {
  return 'ontouchstart' in document.documentElement ? 'touchend' : 'click';
};


$window.resize(function () {
  // refetch transition heights on resize as well
  getTransitionHeights();
}).scroll(function () {
  var s = window.scrollY;

  if (s >= splashTransitionHeight && s < secondTransitionHeight) {
    $colorChangeElements.addClass('after-fold');
  }
  else if (s >= secondTransitionHeight && s < thirdTransitionHeight) {
    $colorChangeElements.addClass('after-fold');
  }
  else if (s >= thirdTransitionHeight) {
    $colorChangeElements.addClass('after-fold');
  }
  else {
    $colorChangeElements.removeClass('after-fold');
  }
});


getTransitionHeights();

/* Contact Modal*/
$(document).ready(function (){
  $("#Read-More").click(function() {
      $('html, body').animate({
          scrollTop: $("#intro-block").offset().top
      }, 600);
  });

  $(".btn-hire-us").click(function() {
    $('#contact-form-modal').fadeToggle();
    $('#hire-us-wrapper').fadeToggle();

  });
  $(".modal-dismiss-btn").click(function() {
    $('#contact-form-modal').fadeToggle();
    $('#hire-us-wrapper').fadeToggle();
  });

});
