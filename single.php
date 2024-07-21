<?php
/**
 * @package Azardi
 */
get_header();
?>

<section class="azardi-post">
<?php while ( have_posts() ) : the_post();
		?>
    <div class="container">
    <article class="article">
        <div class="article__top">
            <img class="article__thumbnail" src="<?php the_post_thumbnail_url(); ?>">
            <div class="article__top-info">
            <p class="article__date"><i class='bx bx-copy-alt' ></i><?php the_date(); ?>
        </p>
            <?php the_category(); ?>
            </div>
        </div>
        <h1 class="article__title" id="ek-article-title"><?php the_title(); ?></h1>
        <div class="article__content">
            <?php the_content(); ?>
        </div>
            <?php
	endwhile;
	?>
            </article>
    </div>
</section>

<?php
get_footer();
?>