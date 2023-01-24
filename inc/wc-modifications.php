<?php
add_action('woocommerce_before_main_content', 'azardi_shop_section', 5);
function azardi_shop_section(){
  echo '<div class="shop section-padding"><div class="container"><div class="shop__layout">';
}
add_action('woocommerce_after_main_content', 'azardi_shop_section_close', 5);
function azardi_shop_section_close(){
  echo '</div></div>';
}

remove_action('woocommerce_sidebar','woocommerce_get_sidebar');
add_action('woocommerce_shop_loop_item_title', 'the_excerpt', 1);
remove_action('woocommerce_after_shop_loop_item', 'woocommerce_template_loop_add_to_cart');

?>