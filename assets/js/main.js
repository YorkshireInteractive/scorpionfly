var $window = $(window);
var $htmlBody = $('html, body');

var $logo = $('.logo h1');
var $navigation = $('.header-nav-wrapper');
var $navLinks = $navigation.find('.header-nav-list-item-link:not(.hire-us-link)');
var $menuToggle = $('.menu-toggle');
var $topBar = $('.top-bar');
var $colorChangeElements = $navLinks.add($menuToggle).add($topBar);
var $whoWeAreLink = $('.who-we-are-link');
var $whatWeDoLink = $('.what-we-do-link');
var $hireUsLink = $('.hire-us-link');
var $hireUsButton = $('.tag-button');
var $hireUsTriggers = $hireUsLink.add($hireUsButton);

var splashTransitionHeight = $('.big-splash').height() - 45;
var secondTransitionHeight = splashTransitionHeight + $('#who-we-are').height() + 45;
var thirdTransitionHeight = secondTransitionHeight + $('#what-we-do').height() + 45;

var setActiveNav = function ($el) {
  $el.addClass('active').parent().siblings().find('.header-nav-list-item-link').removeClass('active');
};

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

/**
 * Opens and closes the mobile menu
 */
var toggleMenu = function () {
  $menuToggle.toggleClass('open');
  $navigation.slideToggle(250);
};

$menuToggle.on(getClickEvent(), toggleMenu);
$('.header-nav-list-item').on(getClickEvent(), toggleMenu);

$window.resize(function () {
  // quick copy/paste, can be revisited for betterness

  // brings back the nav if someone resizes the page
  // needs work, still breaks with several click/resize combos
  // probably unlikely that users will break it but should be fixed.
  if ($(this).width() > 770 && $navigation.is(':hidden')) {
    $navigation.show();
  }
}).scroll(function () {
  var s = window.scrollY;

  if (s >= splashTransitionHeight && s < secondTransitionHeight) {
    $colorChangeElements.addClass('after-fold');
    setActiveNav($whoWeAreLink);
  }
  else if (s >= secondTransitionHeight && s < thirdTransitionHeight) {
    $colorChangeElements.addClass('after-fold');
    setActiveNav($whatWeDoLink);
  }
  else if (s >= thirdTransitionHeight) {
    $colorChangeElements.addClass('after-fold');
    $navLinks.removeClass('active');
  }
  else {
    $colorChangeElements.removeClass('after-fold');
    $navLinks.removeClass('active');
  }
});

$logo.click(function () {animateScroll(0)});
$whoWeAreLink.click(function () {animateScroll(splashTransitionHeight)});
$whatWeDoLink.click(function () {animateScroll(secondTransitionHeight)});
$hireUsTriggers.click(function () {animateScroll(thirdTransitionHeight)});
