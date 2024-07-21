<section class="expo">
    <div class="container">
        <div class="expo__boxes">
        <?php foreach( $attributes['box'] as $box ) : ?>
            <div class="expo__box">
                        <h1 class="section-title"><?php echo esc_html( $box['expo-title'] ); ?></h1>
                            <div class="expo__images">
                            <?php foreach( $attributes['box-images'] as $image ) : ?>
                    <a href="<?php echo esc_url( $image['image']['url'] ); ?>" data-lightbox="image-33" data-title="Targi 2022" class="expo__link">
                        <img class="expo__image" src="<?php echo esc_url( $image['image']['url'] ); ?>" alt="Zdjecie z targow Azardi">
                    </a>
                    <?php endforeach; ?>
                </div>
            </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>