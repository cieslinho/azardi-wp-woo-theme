<?php
/**
 * @package Azardi
 */

if ( ! defined( '_S_VERSION' ) ) {
  define( 'S_VERSION', '1.0.0' );
}


function azardi_scripts() {
  /**
   *  Main styles 
  */
  wp_register_style( 'main-css', get_template_directory_uri() . '/assets/css/main.css', [], false, 'all' );
	wp_register_script( 'main-js', get_template_directory_uri() . '/assets/js/script-min.js', [], filemtime( get_template_directory() . '/assets/js/script-min.js' ), true );
  
  wp_enqueue_style( 'main-css' );
	wp_enqueue_script( 'main-js' );
}
add_action( 'wp_enqueue_scripts', 'azardi_scripts');

/**
 * Add admin styles and scripts
 */
function azardi_admin_style() {
	wp_enqueue_style( 'main-admin-style', get_template_directory_uri() . '/assets/css/admin.css', [], false, 'all' );
}
add_action( 'admin_enqueue_scripts', 'azardi_admin_style' );


function azardi_config(){
  register_nav_menus(
    array(
  'azardi_main_menu' => 'Azardi Main Menu',
  'azardi_footer_menu_first' => 'Azardi Footer Menu Contact',
  'azardi_footer_menu_second' => 'Azardi Footer Menu Offer',
  'azardi_footer_menu_third' => 'Azardi Footer Menu Informations'
    )
  );
  add_theme_support('woocommerce', array(
    'thumbnails_image_width' => 200,
    'single_image_width' => 1024,
    'product_grid' => array(
      'default_rows' => 10,
      'min_rows' => 1,
      'max_rows' => 10,
      'default_columns' => 1,
      'min_columns' => 1,
      'max_columns' => 5
    )
  ));
  add_theme_support('wc-product-gallery-zoom');
  add_theme_support('wc-product-gallery-lightbox');
  add_theme_support('wc-product-gallery-slider');
}

add_action('after_setup_theme', 'azardi_config', 0);
require get_template_directory() . '/inc/wc-modifications.php';

if( function_exists('acf_add_options_page') ) {
  acf_add_options_page( array( 
    'page_title' => 'Ustawienia globalne',
    'menu_title' => 'Ustawienia globalne',
    'menu_slug'  => 'global-settings',
    'capability' => 'edit_posts',
    'icon_url'   => 'dashicons-admin-tools'
  ) );
}