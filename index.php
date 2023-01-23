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
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/images/A3_2952.jpeg" alt="Łóżko Azardi">
                    <div class="header__info">
                        <h2 class="header__info-title">Łóżko Aron</h2>
                        <p class="header__info-description">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Neque ullam
                            cumque eius repellat laborum repudiandae?</p>
                        <a href="#" class="header__info-btn">Sprawdź</a>
                    </div>
                </div>
                <div class="header__slide">
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/images/AR_carmen_2313_low_res.jpeg" alt="Łóżko Cypr">
                    <div class="header__info">
                        <h2 class="header__info-title">Łóżko Cypr</h2>
                        <p class="header__info-description">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Neque ullam
                            cumque eius repellat laborum repudiandae?</p>
                        <a href="#" class="header__info-btn">Sprawdź</a>
                    </div>
                </div>
                <div class="header__slide">
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/images/Łózko-dreniane-aranż_29064_maly-RGB.jpeg" alt="Łóżko Honey">
                    <div class="header__info">
                        <h2 class="header__info-title">Łóżko Honey</h2>
                        <p class="header__info-description">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Neque ullam
                            cumque eius repellat laborum repudiandae?</p>
                        <a href="#" class="header__info-btn">Sprawdź</a>
                    </div>
                </div>
            </div>
        </header>
 
            <section class="blog section-padding">
                <div class="container">
                    <h2 class="section-title">Blog</h2>
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
