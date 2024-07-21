<?php
/**
 * @package Azardi
 */
get_header();
?>
<main>
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
            <section class="blog section-padding">
                <div class="container">
                    <h1 class="section-title">Blog</h1>
                    <div class="blog__cards">
                    <?php 
                    if (have_posts()):
                        while (have_posts()): the_post();
                        ?>
                        
                        <a class="blog__card" href="<?php echo the_permalink(); ?>">
<div class="blog__card-bottom">                      
      <h2 class="blog__card-title"><?php the_title(); ?></h2>
                        <p class="blog__card-date"><?php echo get_the_date(); ?></p></div>
                        <img class="blog__card-img"
                src="<?php the_post_thumbnail_url(); ?>">
                   

                    </a>
                        <?php
                    endwhile;
                else:
            ?>
                            <p>Brak postów do wyświetlenia.</p>
                            <?php endif; ?>
                            </div>
                            </div>
                </div>
            </section>
        </main>
        <?php 
get_footer();
