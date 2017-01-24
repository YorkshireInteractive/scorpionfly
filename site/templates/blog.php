<?php snippet('header') ?>

<section class="content blog">
<header class="initial-scroll">
  <a class="home-link" href="<?php echo kirby()->urls()->index() ?>/blog"><img class="blog-mark" src="<?php echo kirby()->urls()->index() ?>/assets/img/pigeon-dark.svg" /></a>
  <h1>The Yorkshire Blog</h1>
  <p class="topic-header">Thoughts. Code. Fluff.</p>
</header>
  <?php foreach($page->children()->visible()->flip() as $article): ?>
    <hr>

  <article>
    <h2><a href="<?php echo $article->url() ?>"><?php echo $article->title()->html() ?></a></h2>
    <p class="timestamp">Posted on <?php echo $article->postdate()->html() ?> by <?php echo $article->author()->html() ?></p>
    <p><?php echo $article->intro() ?></p>
    <a class="btn read-more" href="<?php echo $article->url() ?>">Read more…</a>
  </article>

  <?php endforeach ?>

</section>

<?php snippet('footer') ?>
