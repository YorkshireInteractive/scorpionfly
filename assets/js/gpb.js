$('.big-splash-center-title').fitText(1.25, { minFontSize: '45px', maxFontSize: '80px' });
$('.page-not-found-title').fitText(.5, { minFontSize: '100px' });
$('.page-not-found-message').fitText(4, { minFontSize: '20px', maxFontSize: '60px' });

var $navigation = $('.header-nav-wrapper');

$('.menu-toggle').click(function () {
  $(this).toggleClass('open');
  $navigation.slideToggle(250);
});

$(window).resize(function() {
  // quick copy from EggDrop, can be revisited for betterness

  // brings back the nav if someone resizes the page
  // needs work, still breaks with several click/resize combos
  // probably unlikely that users will break it but should be fixed.
  if ($(this).width() > 449 && $navigation.is(':hidden')) {
    $navigation.show();
  }
});
