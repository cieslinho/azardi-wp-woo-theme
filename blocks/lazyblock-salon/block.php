<section class="salon">
    <div class="container">
        <h2 class="section-title">Salon</h2>
        <div class="salon__boxes">
            <div class="salon__box salon__box-info">
                <h1 class="salon__box-title" id="ek-salon-h1"><?php echo $attributes['place']; ?></h1>
                    <p class="salon__box-text">
                        <i class='bx bx-current-location'></i> <?php echo $attributes['address']; ?>
                     </p>
                <p class="salon__box-text"><i class='bx bxs-watch' ></i> <?php echo $attributes['hours']; ?></p>
                <a href="<?php echo esc_attr( $attributes['mobile']); ?>" class="salon__box-link">
                <i class='bx bxs-phone' >
                </i>
                <?php echo esc_attr( $attributes['mobile-number']); ?>
            </a> 
                
                <a class="salon__box-link" href="<?php echo esc_url( $attributes['media-link'] ); ?>">
                <i class='bx bxl-facebook-circle' ></i> 
                <?php echo esc_attr( $attributes['media-link-text']); ?></a>
                <a href="<?php echo esc_url( $attributes['google-walk'] ); ?>" class="salon__box-link"><i class='bx bx-walk' ></i> 
                <?php echo esc_attr( $attributes['google-walk-text']); ?></a>
            </div>
            <div class="salon__box salon__box-map">
                 <iframe src="<?php echo esc_url( $attributes['google-map'] ); ?>" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </div>
</section>