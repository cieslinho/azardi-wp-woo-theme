<?php $args = array(
    'post_type'           => 'product',
    'posts_per_page'      => $products,
    'orderby'             => $orderby,
    'order'               => $order == 'asc' ? 'asc' : 'desc',
    'post__in'            => wc_get_featured_product_ids(),
    'posts_per_page'      => '3',
);

$query = new WP_Query( $args );
?>
<section class="featured section-padding">
    <div class="container">
        <h2 class="section-title">Najczęściej wybierane</h2>
        <div class="featured__boxes">
            <?php while ( $query->have_posts() ) : $query->the_post(); ?>
                <?php $product = wc_get_product( get_the_ID() ); ?>
                <a href="<?php the_permalink(); ?>" class="featured__product">
                    <div class="featured__product-top">
                        <img src="<?php echo wp_get_attachment_url( $product->get_image_id() ); ?>" alt="<?php echo get_post_meta( $product->get_image_id(), '_wp_attachment_image_alt', true ); ?>" class="featured__product-img">
                    </div>
                    <div class="featured__product-box">
                        <p class="featured__product-description"><?php the_title(); ?></p>
                        <p class="featured__product-title">XXX</p>
                        <p class="featured__product-price"><?php echo $product->get_price_html(); ?></p>
                    </div>
                </a>
            <?php endwhile; ?>
        </div>
    </div>
</section>