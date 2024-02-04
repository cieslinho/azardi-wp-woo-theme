<section class="fabricsHome">
    <div class="container">
        <h2 class="section-title">Tkaniny</h2>
        <div class="fabricsHome__boxes">
            <div class="fabricsHome__box fabricsHome__box-left">
                <video playsinline autoplay muted loop src="<?php echo esc_url( $attributes['video']['url'] ); ?>"
                    class="fabricsHome__video"></video>
                <p class="fabricsHome__text">
                    <?php echo esc_html( $attributes['text-left'] ); ?>
                </p>
                <a href="<?php echo esc_url( $attributes['link-left'] ); ?>" class="fabricsHome__btn">
                    <?php echo esc_html( $attributes['btn-left'] ); ?>
                </a>
            </div>
            <div class="fabricsHome__box fabricsHome__box-rights">
                <img src="<?php echo esc_url( $attributes['image']['url'] ); ?>"
                    alt="<?php echo esc_attr( $attributes['image']['alt'] ); ?>" class="fabricsHome__img">
                <p class="fabricsHome__text">
                    <?php echo esc_html( $attributes['text-right'] ); ?>
                </p>
                <a href="<?php echo esc_url( $attributes['link-right'] ); ?>" class="fabricsHome__btn">
                    <?php echo esc_html( $attributes['btn-right'] ); ?>
                </a>
            </div>
        </div>
    </div>
</section>