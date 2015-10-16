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

var buffer = 50;
var splashTransitionHeight;
var secondTransitionHeight;
var thirdTransitionHeight;

var getTransitionHeights = function () {
  splashTransitionHeight = $('.big-splash').height();
  secondTransitionHeight = splashTransitionHeight + $('#who-we-are').height();
  thirdTransitionHeight = secondTransitionHeight + $('#what-we-do').height();
};

var setActiveNav = function ($el) {
  $el.addClass('active').parent().siblings().find('.header-nav-list-item-link').removeClass('active');
};

var animateScroll = function (Ycoord) {
  $htmlBody.animate({ scrollTop: Ycoord+"px" });
};

getTransitionHeights();

$menuToggle.click(function () {
  $(this).toggleClass('open');
  $navigation.slideToggle(250);
});

$window.resize(function () {
  // quick copy/paste, can be revisited for betterness

  // brings back the nav if someone resizes the page
  // needs work, still breaks with several click/resize combos
  // probably unlikely that users will break it but should be fixed.
  if ($(this).width() > 770 && $navigation.is(':hidden')) {
    $navigation.show();
  }

  // refetch transition heights on resize as well
  getTransitionHeights();
}).scroll(function () {
  var s = window.scrollY;

  if (s >= splashTransitionHeight - buffer && s < secondTransitionHeight) {
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
$whatWeDoLink.click(function () {animateScroll(secondTransitionHeight + buffer)});
$hireUsTriggers.click(function () {animateScroll(thirdTransitionHeight + buffer)});
