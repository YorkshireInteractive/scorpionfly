<?php snippet('header') ?>

<div id="fb-root"></div>
<script>(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.8&appId=227176770664550";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>

<script>window.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);

  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };

  return t;
}(document, "script", "twitter-wjs"));</script>
<section class="content blogarticle">

<header id="blog-article-header" class="initial-scroll">
  <a class="home-link" href="<?php echo kirby()->urls()->index() ?>/blog"><img class="blog-mark" src="<?php echo kirby()->urls()->index() ?>/assets/img/pigeon-dark.svg" /></a>
  <h1><?php echo $page->title()->html() ?></h1>
  <p class="topic-header">Posted on <?php echo $page->postdate()->html() ?> by <?php echo $page->author()->html() ?></p>
  <?php snippet('share') ?>
</header>
  <article>
    <?php echo $page->text()->kirbytext() ?>
    <?php snippet('share') ?>
  </article>
  <hr>
  <div class="article-comments">
      <h2>Comments</h2>
      <div class="fb-comments" data-href="http://google.com" data-width="100%" data-numposts="10"></div>
  </div>
</section>

<?php snippet('footer') ?>
