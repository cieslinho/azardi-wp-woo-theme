<div id="promo-image" class="promo">
    <button class="promo__close">
        <i class='bx bx-x'></i>
    </button>
    <a href="<?php echo esc_url( $attributes['link'] ); ?>" class="promo__link">
       <img class="promo__img" src="<?php echo esc_url( $attributes['image']['url'] ); ?>" alt="<?php echo esc_attr( $attributes['image']['alt'] ); ?>" >
    </a>
</div>

<div class="promo__overlay"></div>