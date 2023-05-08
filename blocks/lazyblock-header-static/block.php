<header class="header-static">
<?php if ( isset( $attributes['image']['url'] ) ) : ?>
  <img class="header-static__img" src="<?php echo esc_url( $attributes['image']['url'] ); ?>" alt="<?php echo esc_attr( $attributes['image']['alt'] ); ?>">
<?php endif; ?>
</header>