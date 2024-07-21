<section class="salons">
    <div class="container">
        <h1 class="section-title">Salony Azardi</h1>
        <div class="salons__boxes">
        <?php foreach( $attributes['box'] as $boxSalon ): ?>
            <div class="salons__box">
                
                <h3 class="salons__title"><?php echo $boxSalon['title']; ?></h3>
                <p class="salons__text">
                    <i class="bx bx-current-location"></i> <?php echo $boxSalon['address']; ?>
                </p>
                <p class="salons__text">
                    <i class="bx bxs-watch"></i> <?php echo $boxSalon['opening']; ?>
                </p>
                <a href="<?php echo esc_attr( $boxSalon['mobile-link']); ?>" class="salons__link">
                    <i class="bx bxs-phone">
                    </i>
                    <?php echo $boxSalon['mobile-text']; ?></a>
            </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>