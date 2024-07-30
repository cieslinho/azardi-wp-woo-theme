<section class="section worth">
    <div class="container">
        <div class="worth__boxes">
            <div class="worth__box swiper swiper-images">
                <div class="worth__wrapper swiper-wrapper">
                    <?php foreach( $attributes['slides'] as $slides ): ?>
                    <div class="worth__slide worth__slide-img swiper-slide">
                        <img src="<?php echo esc_url( $slides['slide']['url'] ); ?>"
                            alt="<?php echo esc_attr( $slides['slide']['alt'] ); ?>">
                    </div>
                    <?php endforeach; ?>

                </div>
                <div class="swiper-pagination worth__slide-img-pagination"></div>
            </div>
            <div class="worth__box swiper swiper-texts ">
                <div class="worth__wrapper swiper-wrapper">
                    <?php foreach( $attributes['texts'] as $text ): ?>
                    <div class="worth__slide worth__slide-texts swiper-slide">
                        <h2 class="worth__title">
                            <?php echo $text['title']; ?>
                        </h2>
                        <p class="worth__text">
                            <?php echo $text['text']; ?>
                        </p>
                    </div>
                    <?php endforeach; ?>
                </div>
                <!-- <div class="swiper-pagination worth__slide-texts-pagination"></div> -->
            </div>
        </div>
    </div>
</section>