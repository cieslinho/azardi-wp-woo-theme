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