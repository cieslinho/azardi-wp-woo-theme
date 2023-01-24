<section class="products section-padding">
            <div class="container">
                <div class="products__boxes">
                    <?php foreach( $attributes['categories'] as $category ) : ?>
                        <div class="products__box">
                            <img src="<?php echo esc_url( $category['image']['url'] ); ?>" alt="<?php echo esc_attr( $category['image']['alt'] ); ?>" class="products__img">
                            <p class="products__text"><?php echo esc_html( $category['title'] ); ?></p>
                            <a href="<?php echo esc_url( $category['link'] ); ?>" class="products__btn">Sprawdź</a>
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>
        </section>