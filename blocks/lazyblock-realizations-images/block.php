<section class="realizations">
    <div class="container">
        <h2 class="section-title">Przykładowe realizacje</h2>
        <div class="realizations__images">
        <?php foreach( $attributes['images'] as $image ) : ?>
             <a href="<?php echo esc_url( $image['image']['url'] ); ?>" class="realizations__link" data-lightbox="image-27" data-title="Realizacja 1">
                <img src="<?php echo esc_url( $image['image']['url'] ); ?>" class="realizations__image" alt="zdjecie realizacji lozka azardi">
            </a>
            <?php endforeach; ?>
        </div>
    </div>
</section>