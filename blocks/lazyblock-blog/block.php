<?php

$args = array(
    'post_type' => 'post',
    'post_status' => 'publish',
    'category_name' => 'wyroznione',
    'posts_per_page' => 3,
);
$arr_posts = new WP_Query( $args );



  ?>


<section class="blog section-padding">
    <div class="container">
        <div class="section-titlebox">
            <h2 class="section-title section-title--first">Wyróżnione wpisy</h2>
        </div>
        <div class="blog__boxes">
            <?php
            if ( $arr_posts->have_posts() ) :
                
                while ( $arr_posts->have_posts() ) :
                    $arr_posts->the_post();
                    ?>
            <a class="blog__box" id="post-<?php the_ID(); ?>" href="<?php the_permalink(); ?>">

                <?php
                        if ( has_post_thumbnail() ) :
                            the_post_thumbnail();
                        endif;
                        ?>
                <div class="blog__content">
                    <h4 class="blog__title">
                        <?php 
                        $title = get_the_title(); 
                        $getlength = strlen($title);
                        $thelength = 100;
                        echo substr($title, 0, $thelength);
                        if ($getlength > $thelength) echo "...";

                         
                        ?>

                    </h4>
                    <button class="blog__btn">
                        Odkryj teraz
                    </button>




                </div>



            </a>

            <?php
                endwhile;
                wp_reset_postdata();
            endif;
            ?>
        </div>
    </div>
</section>