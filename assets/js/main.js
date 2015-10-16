var $navigation = $('.header-nav-wrapper');
var $navLinks = $navigation.find('.header-nav-list-item-link:not(.hire-us-link)');
var $menuToggle = $('.menu-toggle');
var $topBar = $('.top-bar');
var $colorChangeElements = $navLinks.add($menuToggle).add($topBar);
var $whoWeAreLink = $('.who-we-are-link');
var $whatWeDoLink = $('.what-we-do-link');

$menuToggle.click(function () {
  $(this).toggleClass('open');
  $navigation.slideToggle(250);
});

$(window).resize(function () {
  // quick copy/paste, can be revisited for betterness

  // brings back the nav if someone resizes the page
  // needs work, still breaks with several click/resize combos
  // probably unlikely that users will break it but should be fixed.
  if ($(this).width() > 449 && $navigation.is(':hidden')) {
    $navigation.show();
  }
}).scroll(function () {
  var splashTransitionHeight = $('.big-splash').height() - 45;
  if (window.scrollY > (splashTransitionHeight)) {
    $colorChangeElements.addClass('after-fold');
    $whoWeAreLink.addClass('active').siblings().removeClass('active');
  }
  else {
    $colorChangeElements.removeClass('after-fold');
    $navLinks.removeClass('active');
  }
});
