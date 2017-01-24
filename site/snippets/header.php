<!DOCTYPE html>
<html lang="en">
<head>

  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1.0">

  <title><?php echo $site->title()->html() ?> | <?php echo $page->title()->html() ?></title>
  <meta name="description" content="<?php echo $site->description()->html() ?>">
  <meta name="keywords" content="<?php echo $site->keywords()->html() ?>">
  <script>
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
              (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-68928418-1', 'auto');
    ga('send', 'pageview');
  </script>
  <script src="https://use.typekit.net/hzp0icq.js"></script>
  <script>try{Typekit.load({ async: true });}catch(e){}</script>
  <?php echo css('assets/css/main.css') ?>

</head>
<body>
<!--Top Bar - Visible as you scroll down the page-->
<div class="top-bar top-bar-blog">
  <div class="inner-wrapper">
    <p class="logotype"><img src="<?php echo kirby()->urls()->index() ?>/assets/img/logotype-blog.svg" /></p>
    <p class="cta">We create friendly user interfaces for digital products. <a href="<?php echo kirby()->urls()->index() ?>" class="btn-hire-us">Learn More</a></p>
  </div>
</div>
<!-- End Top Bar -->
  <div id="blog" class="wide-block">
  <div class="inner-wrapper">
