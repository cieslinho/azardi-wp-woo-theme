<?php
add_action('woocommerce_before_main_content', 'azardi_shop_section', 5);
function azardi_shop_section(){
  echo '<div class="shop container"><div class="shop__layout">';
}
add_action('woocommerce_after_main_content', 'azardi_shop_section_close', 5);
function azardi_shop_section_close(){
  echo '</div></div>';
}

function remove_image_zoom_support() {
  remove_theme_support( 'wc-product-gallery-zoom' );
}
add_action( 'wp', 'remove_image_zoom_support', 100 );

remove_action('woocommerce_sidebar','woocommerce_get_sidebar');
add_action('woocommerce_shop_loop_item_title', 'the_excerpt', 1);
remove_action('woocommerce_after_shop_loop_item', 'woocommerce_template_loop_add_to_cart');
add_action( 'after_setup_theme', 'my_remove_product_result_count', 99 );
function my_remove_product_result_count() { 
    remove_action( 'woocommerce_before_shop_loop' , 'woocommerce_result_count', 20 );
    remove_action( 'woocommerce_after_shop_loop' , 'woocommerce_result_count', 20 );
}
?>


