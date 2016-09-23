var $window = $(window);
var $htmlBody = $('html, body');

var $navigation = $('.header-nav-wrapper');
var $navLinks = $navigation.find('.header-nav-list-item-link:not(.hire-us-link)');
var $topBar = $('.top-bar');
var $colorChangeElements = $navLinks.add($topBar);

var splashTransitionHeight;
var secondTransitionHeight;
var thirdTransitionHeight;

/**
 * Figures out where page needs to transition colors/styles of nav/top-bar elements
 */
var getTransitionHeights = function () {
  splashTransitionHeight = $('.big-splash').height();
};

$window.resize(function () {
  // refetch transition heights on resize as well
  getTransitionHeights();
}).scroll(function () {
  if (window.scrollY >= splashTransitionHeight) {
    $colorChangeElements.addClass('after-fold');
  }
  else {
    $colorChangeElements.removeClass('after-fold');
  }
});


getTransitionHeights();

/* Contact Modal*/
  $("#Read-More").click(function() {
      $('html, body').animate({
          scrollTop: $("#intro-block").offset().top
      }, 600);
  });

  $(".btn-hire-us").click(function() {
    $('#contact-form-modal, #hire-us-wrapper').fadeToggle();

  });
  $(".modal-dismiss-btn").click(function() {
    $('#contact-form-modal, #hire-us-wrapper').fadeToggle();
  });
