<?php
/**
 * @package Azardi
 */
get_header();
?>

<header class="header">
    <div class="header__slider">
        <div class="header__slide">
            <img src="<?php echo esc_url( get_field('slide-1-image', 'option')['url'] ); ?>" alt="<?php echo esc_attr( get_field('slide-1-image', 'option')['alt'] ); ?>">
            <div class="header__info">
                <h2 class="header__info-title"><?php echo esc_html( get_field('slide-1-title', 'option') ); ?></h2>
                <p class="header__info-description"><?php echo esc_html( get_field('slide-1-text', 'option') ); ?></p>
                <a href="<?php echo esc_url( get_field('slide-1-link', 'options')['url'] ); ?>" class="header__info-btn">Sprawdź</a>
            </div>
        </div>
        <div class="header__slide">
            <img src="<?php echo esc_url( get_field('slide-2-image', 'option')['url'] ); ?>" alt="<?php echo esc_attr( get_field('slide-2-image', 'option')['alt'] ); ?>">
            <div class="header__info">
                <h2 class="header__info-title"><?php echo esc_html( get_field('slide-2-title', 'option') ); ?></h2>
                <p class="header__info-description"><?php echo esc_html( get_field('slide-2-text', 'option') ); ?></p>
                <a href="<?php echo esc_url( get_field('slide-2-link', 'options')['url'] ); ?>" class="header__info-btn">Sprawdź</a>
            </div>
        </div>
        <div class="header__slide">
            <img src="<?php echo esc_url( get_field('slide-3-image', 'option')['url'] ); ?>" alt="<?php echo esc_attr( get_field('slide-3-image', 'option')['alt'] ); ?>">
            <div class="header__info">
                <h2 class="header__info-title"><?php echo esc_html( get_field('slide-3-title', 'option') ); ?></h2>
                <p class="header__info-description"><?php echo esc_html( get_field('slide-3-text', 'option') ); ?></p>
                <a href="<?php echo esc_url( get_field('slide-3-link', 'options')['url'] ); ?>" class="header__info-btn">Sprawdź</a>
            </div>
        </div>
    </div>
</header>

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
        <h2 class="article__title"><?php the_title(); ?></h2>
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