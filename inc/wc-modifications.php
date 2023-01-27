<?php
add_action('woocommerce_before_main_content', 'azardi_shop_section', 5);
function azardi_shop_section(){
  echo '<div class="shop section-padding"><div class="container"><div class="shop__layout">';
}
add_action('woocommerce_after_main_content', 'azardi_shop_section_close', 5);
function azardi_shop_section_close(){
  echo '</div></div>';
}


function my_account_menu_order($menu_items){
 
  $reordered_items = array(
      'dashboard' => __('Start', 'woocommerce'),
      'edit-address' => __('Adresy', 'woocommerce'),
      'edit-account' => __('Edytuj dane konta', 'woocommerce'),
      'orders' => __('Orders', 'woocommerce'),
      'payment-methods' => __('Metody Płatności', 'woocommerce'),
      'customer-logout' => __('Logout', 'woocommerce')
  );

  return $reordered_items;
}

add_filter('woocommerce_account_menu_items', 'my_account_menu_order');

function my_account_rename_items($menu_items){
  $menu_items['payment-methods'] = __('Metody płatności', 'my_text_domain');
  return $menu_items;
}

add_filter('woocommerce_account_menu_items', 'my_account_rename_items');


remove_action('woocommerce_sidebar','woocommerce_get_sidebar');
add_action('woocommerce_shop_loop_item_title', 'the_excerpt', 1);
remove_action('woocommerce_after_shop_loop_item', 'woocommerce_template_loop_add_to_cart');

?>