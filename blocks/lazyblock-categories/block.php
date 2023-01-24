<section class="categories section-padding">
            <div class="container">
                <h2 class="section-title">Kategorie</h2>
                <div class="categories__boxes">
                    <?php foreach( $attributes['categories'] as $category ) : ?>
                        <a href="<?php echo esc_url( $category['link'] ); ?>" class="categories__box">
                            <img src="<?php echo esc_url( $category['image']['url'] ); ?>" alt="<?php echo esc_attr( $category['image']['alt'] ); ?>" class="categories__img">
                            <div class="categories__bottom">
                                <h3 class="categories__title"><?php echo esc_html( $category['title'] ); ?></h3>
                            </div>
                        </a>
                    <?php endforeach; ?>
                </div>
            </div>
        </section>