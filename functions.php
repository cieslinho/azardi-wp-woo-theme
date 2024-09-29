<?php
/**
 * @package Azardi
 */

if ( ! defined( '_S_VERSION' ) ) {
  define( 'S_VERSION', '2.1.0' );
}


function azardi_scripts() {
  /**
   *  Main styles 
  */
  wp_register_style( 'main-css', get_template_directory_uri() . '/assets/css/main.css', [], 2.1, false, 'all' );
	wp_register_script( 'main-js', get_template_directory_uri() . '/assets/js/script-min.js', [], 2.1, filemtime( get_template_directory() . '/assets/js/script-min.js' ), true );
  
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
  'azardi_beds_menu' => 'Azardi Beds Menu',
  'azardi_mattress_menu' => 'Azardi Mattress Menu',
  'azardi_footer_menu_first' => 'Azardi Footer Menu Contact',
  'azardi_footer_menu_second' => 'Azardi Footer Menu Offer',
  'azardi_footer_menu_third' => 'Azardi Footer Menu Informations',
  'azardi_bedcategory_menu' => 'Azardi Bed Category Menu ',
  'azardi_footer_menu_fourth' => 'Azardi Footer Menu Custom Service'
    )
  );
  add_theme_support('woocommerce', array(
    'thumbnails_image_width' => 300,
    'single_image_width' => 800,
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
add_theme_support( 'title-tag' );
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


add_filter( 'woocommerce_get_image_size_gallery_thumbnail', function( $size ) {
	return array(
		'width'  => 300,
		'height' => 300,
		'crop'   => 0
	);
} );

add_filter( 'woocommerce_get_image_size_single', function( $size ) {
  return array(
   'width' => 800,
   'height' => 800,
   'crop' => 0,
  );
 } );

add_filter( 'woocommerce_get_image_size_thumbnail', function( $size ) {
    return array(
		'width' => 300, 
		'height' => 300, 
		'crop' => 0, );
} );


 remove_action( 'woocommerce_before_shop_loop_item_title', 'woocommerce_template_loop_product_thumbnail', 10 );
add_action( 'woocommerce_before_shop_loop_item_title', 'custom_loop_product_thumbnail', 10 );
function custom_loop_product_thumbnail() {
    global $product;
    $size = 'woocommerce_thumbnail';
    $image_size = apply_filters( 'single_product_archive_thumbnail_size', $size );
    echo $product ? $product->get_image( 'large' ) : '';
}

add_shortcode ('woo_cart_count', 'woo_cart_count' );
function woo_cart_count() {
	ob_start();
		$items_count = WC()->cart->get_cart_contents_count();
    ?>
    <span class="mini-cart-count"><?php echo $items_count ? $items_count : '0'; ?></span>
    <?php
    return ob_get_clean();
}

// function my_content( $content) {
//   $content = '<p class="custom-info">W celu skonfigurowania produktu uzupełnij wszystkie pola</p>';

//   return $content;
// }

// add_filter('woocommerce_short_description', 'my_content', 10, 2);

// add_action('woocommerce_before_add_to_cart_button', 'variable_info');
// function variable_info(){
//   echo '<p class="custom-info">W celu skonfigurowania produktu uzupełnij wszystkie pola</p>';
// }
add_action('woocommerce_before_variations_form', 'variable_fabrics', 8);
function variable_fabrics(){
  echo '<a href="https://azardi.pl/tkaniny/" target="_blank" class="custom-fabrics">wzornik tkanin</a>';
  // echo '<p class="custom-fabrics-text">Wykonujemy łóżka pod wymiar. <br>Napisz do nas <a href="mailto:kontakt@azardi.pl">kontakt@azardi.pl</a></p>';
}
add_action('woocommerce_after_variations_form', 'variable_fabrics_additional_info');
function variable_fabrics_additional_info(){
  echo '
      <div class="custom-fabrics__info">
      <div class="custom-fabrics__info-box">
        <i class="bx bx-package"></i>
        <a href="https://azardi.pl/dostawa" class="custom-fabrics__info-text custom-fabrics__info-link">Dostawa do 14 dni roboczych</a>
      </div>
      <div class="custom-fabrics__info-box">
        <i class="bx bxs-file-pdf"></i>
        <a href="https://azardi.pl/pojemniki" target="_blank" class="custom-fabrics__info-text custom-fabrics__info-link">Rodzaje pojemników </a>
      </div>
      <div class="custom-fabrics__info-box">
        <i class="bx bxs-file-pdf"></i>
        <a href="https://azardi.pl/instrukcje" target="_blank" class="custom-fabrics__info-text custom-fabrics__info-link">Instrukcja montażu </a>
      </div>
      <div class="custom-fabrics__info-box">
        <i class="bx bx-badge-check"></i>
        <p class="custom-fabrics__info-text">24 miesiące gwarancji</p>
        </div>
      </div>
  
  ';
}
add_action('woocommerce_before_add_to_cart_button', 'variable1_fabrics');
// add_action('woocommerce_before_add_to_cart_button','wdm_add_custom_fields');
/**
 * Adds custom field for Product
 * @return [type] [description]
 */
function product_category_in_shop_loop() {
  error_reporting(E_ERROR | E_PARSE);

  global $product;
  $product_id = $product->get_id();
  $cat = wp_get_post_terms($product_id, 'product_cat', array('fields' => 'names'));
  $cat2 = wp_get_post_terms($product_id, 'product_cat', array('fields' => 'names'));
  
  if( !empty($cat[0]))  {
     echo '<div class="product__category-box">
            <p class="product__category-class">'.$cat[2]. '</p>
                    </div>';
  } 
}
add_action( 'woocommerce_after_shop_loop_item_title', 'product_category_in_shop_loop', 40 );
 
function variable1_fabrics(){
  global $product;

  ob_start();

  error_reporting(E_ERROR | E_PARSE);
  
  if( 
    get_the_terms( $product->ID, 'product_cat' )[0]->name === "Łóżka" || 
    get_the_terms( $product->ID, 'product_cat' )[1]->name === "Łóżka" || 
    get_the_terms( $product->ID, 'product_cat' )[2]->name === "Łóżka" ||
    get_the_terms( $product->ID, 'product_cat' )[0]->name === "Meble" ||
    get_the_terms( $product->ID, 'product_cat' )[1]->name === "Meble" ||
    get_the_terms( $product->ID, 'product_cat' )[2]->name === "Meble" 
    ) :
    ?>
  

   <div class="product__fabrics hidden">

 <div class="product__fabrics-top">
  <p class="product__fabrics-text label">wybrana tkanina</p>
  <p class="product__fabrics-current">brak</p>
</div>


  <img class="product__fabrics-img" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-5/Rustiq/Rustiq 81.jpeg" ?>">



  
  </div>
  <?php
endif;

$content = ob_get_contents();
ob_end_flush();

return $content;
}

/**
 * @snippet       Add input field to products - WooCommerce
 * @how-to        Get CustomizeWoo.com FREE
 * @author        Rodolfo Melogli
 * @compatible    WooCommerce 3.9
 * @donate $9     https://businessbloomer.com/bloomer-armada/
 */
 
// -----------------------------------------
// 1. Show custom input field above Add to Cart
 




add_action( 'woocommerce_before_add_to_cart_button', 'bbloomer_product_add_on', 8 );
 
function bbloomer_product_add_on() {
  global $product;

  ob_start();

  
error_reporting(E_ERROR | E_PARSE);


  if( 
    get_the_terms( $product->ID, 'product_cat' )[0]->name === "Łóżka" || 
    get_the_terms( $product->ID, 'product_cat' )[1]->name === "Łóżka" || 
    get_the_terms( $product->ID, 'product_cat' )[2]->name === "Łóżka" ||
    get_the_terms( $product->ID, 'product_cat' )[0]->name === "Meble" ||
    get_the_terms( $product->ID, 'product_cat' )[1]->name === "Meble" ||
    get_the_terms( $product->ID, 'product_cat' )[2]->name === "Meble" 
    ) :
    ?>


    
    <?php
    $value = isset( $_POST['custom_text_add_on'] ) ? sanitize_text_field( $_POST['custom_text_add_on'] ) : '';
    ?>
   
   <div class="custom-overlay"></div>
   <div class="custom-fabric">
    <div class="top">
      <label class="custom-label">Wypełnij pole jeśli chcesz wybrać dowolną tkaninę</label>
      <a class="close-btn"><i class='bx bx-x'></i></a>
    </div>
      
      <div class="accordion">
      <ul class="fabric__submenu">
            <li class="fabric__submenu-item">
              Plecionka
              <a class="fabric__submenu-btn" id="fabric__submenu-btn-1">+</a>
            </li>
            <ul class="fabric__tabs" id="fabric__tabs-1">
                <li data-tab-target="#fabric-boss" class="fabric__tab">Boss</li>
                <div id="fabric-boss" data-tab-content class="">
                <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Boss/Boss_01.jpg" ?>" alt="Tkanina Boss" data-fabric-group="grupa1" loading="lazy">
                <p class="fabric__image-title">01</p>
                </div>
                <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Boss/Boss_02.jpg" ?>" alt="Tkanina Boss" data-fabric-group="grupa1" loading="lazy">
                <p class="fabric__image-title">02</p>
                </div>
                <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Boss/Boss_03.jpg" ?>" alt="Tkanina Boss" data-fabric-group="grupa1" loading="lazy">
                <p class="fabric__image-title">03</p>
                </div>
                <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Boss/Boss_04.jpg" ?>" alt="Tkanina Boss" data-fabric-group="grupa1" loading="lazy">
                <p class="fabric__image-title">04</p>
                </div>
                <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Boss/Boss_05.jpg" ?>" alt="Tkanina Boss" data-fabric-group="grupa1" loading="lazy">
                <p class="fabric__image-title">05</p>
                </div>
                <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Boss/Boss_06.jpg" ?>" alt="Tkanina Boss" data-fabric-group="grupa1" loading="lazy">
                <p class="fabric__image-title">06</p>
                </div>
                <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Boss/Boss_07.jpg" ?>" alt="Tkanina Boss" data-fabric-group="grupa1" loading="lazy">
                <p class="fabric__image-title">07</p>
                </div>
                <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Boss/Boss_08.jpg" ?>" alt="Tkanina Boss" data-fabric-group="grupa1" loading="lazy">
                <p class="fabric__image-title">08</p>
                </div>
                <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Boss/Boss_09.jpg" ?>" alt="Tkanina Boss" data-fabric-group="grupa1" loading="lazy">
                <p class="fabric__image-title">09</p>
                </div>
                <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Boss/Boss_10.jpg" ?>" alt="Tkanina Boss" data-fabric-group="grupa1" loading="lazy">
                <p class="fabric__image-title">10</p>
                </div>
                <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Boss/Boss_11.jpg" ?>" alt="Tkanina Boss" data-fabric-group="grupa1" loading="lazy">
                <p class="fabric__image-title">11</p>
                </div>
                <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Boss/Boss_12.jpg" ?>" alt="Tkanina Boss" data-fabric-group="grupa1" loading="lazy">
                <p class="fabric__image-title">12</p>
                </div>
                <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Boss/Boss_13.jpg" ?>" alt="Tkanina Boss" data-fabric-group="grupa1" loading="lazy">
                <p class="fabric__image-title">13</p>
                </div>
                <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Boss/Boss_14.jpg" ?>" alt="Tkanina Boss" data-fabric-group="grupa1" loading="lazy">
                <p class="fabric__image-title">14</p>
                </div>
                <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Boss/boss_15.jpg" ?>" alt="Tkanina Boss" data-fabric-group="grupa1" loading="lazy">
                <p class="fabric__image-title">15</p>
                </div>
                

            </div>
            <li data-tab-target="#fabric-storm" class="fabric__tab">Storm</li>
            <div id="fabric-storm" data-tab-content class="">
                <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - STORM/Storm_02-1f0d4.jpg" ?>" alt="Tkanina Storm" data-fabric-group="grupa1" loading="lazy">
                <p class="fabric__image-title">02</p>
                </div>
                <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - STORM/Storm_06-d5a5d.jpg" ?>" alt="Tkanina Storm" data-fabric-group="grupa1" loading="lazy">
                <p class="fabric__image-title">06</p>
                </div>
                <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - STORM/Storm_09-621ec.jpg" ?>" alt="Tkanina Storm" data-fabric-group="grupa1" loading="lazy">
                <p class="fabric__image-title">09</p>
                </div>
                <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - STORM/Storm_18-124a6.jpg" ?>" alt="Tkanina Storm" data-fabric-group="grupa1" loading="lazy">
                <p class="fabric__image-title">18</p>
                </div>
                <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - STORM/Storm_37-e729f.jpg" ?>" alt="Tkanina Storm" data-fabric-group="grupa1" loading="lazy">
                <p class="fabric__image-title">37</p>
                </div>
                <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - STORM/Storm_48-c678d.jpg" ?>" alt="Tkanina Storm" data-fabric-group="grupa1" loading="lazy">
                <p class="fabric__image-title">48</p>
                </div>
                <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - STORM/Storm_54-09678.jpg" ?>" alt="Tkanina Storm" data-fabric-group="grupa1" loading="lazy">
                <p class="fabric__image-title">54</p>
                </div>
                <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - STORM/Storm_63-abc98.jpg" ?>" alt="Tkanina Storm" data-fabric-group="grupa1" loading="lazy">
                <p class="fabric__image-title">63</p>
                </div>
                <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - STORM/Storm_70-b14f5.jpg" ?>" alt="Tkanina Storm" data-fabric-group="grupa1" loading="lazy">
                <p class="fabric__image-title">70</p>
                </div>
                <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - STORM/Storm_71-12332.jpg" ?>" alt="Tkanina Storm" data-fabric-group="grupa1" loading="lazy">
                <p class="fabric__image-title">71</p>
                </div>
                <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - STORM/Storm_72-d02b3.jpg" ?>" alt="Tkanina Storm" data-fabric-group="grupa1" loading="lazy">
                <p class="fabric__image-title">72</p>
                </div>
                <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - STORM/Storm_77-66ea6.jpg" ?>" alt="Tkanina Storm" data-fabric-group="grupa1" loading="lazy">
                <p class="fabric__image-title">77</p>
                </div>
                <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - STORM/Storm_85-b605f.jpg" ?>" alt="Tkanina Storm" data-fabric-group="grupa1" loading="lazy">
                <p class="fabric__image-title">85</p>
                </div>
                <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - STORM/Storm_97-cddbd.jpg" ?>" alt="Tkanina Storm" data-fabric-group="grupa1" loading="lazy">
                <p class="fabric__image-title">97</p>
                </div>
                <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - STORM/Storm_99-5f08e.jpg" ?>" alt="Tkanina Storm" data-fabric-group="grupa1" loading="lazy">
                <p class="fabric__image-title">99</p>
                </div>
                <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - STORM/Strom_59-be845.jpg" ?>" alt="Tkanina Storm" data-fabric-group="grupa1" loading="lazy">
                <p class="fabric__image-title">59</p>
                </div>
                

            </div>
            <li data-tab-target="#fabric-moly" class="fabric__tab">Moly</li>
            <div id="fabric-moly" data-tab-content class="">
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Moly/Moly_02-c49ae.jpg" ?>" alt="Tkanina Moly" data-fabric-group="grupa1" loading="lazy">
        <p class="fabric__image-title">02</p>
    </div>
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Moly/Moly_03-74316.jpg" ?>" alt="Tkanina Moly" data-fabric-group="grupa1" loading="lazy">
        <p class="fabric__image-title">03</p>
    </div>
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Moly/Moly_04-22a34.jpg" ?>" alt="Tkanina Moly" data-fabric-group="grupa1" loading="lazy">
        <p class="fabric__image-title">04</p>
    </div>
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Moly/Moly_11-2c5c6.jpg" ?>" alt="Tkanina Moly" data-fabric-group="grupa1" loading="lazy">
        <p class="fabric__image-title">11</p>
    </div>
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Moly/Moly_37-e9757.jpg" ?>" alt="Tkanina Moly" data-fabric-group="grupa1" loading="lazy">
        <p class="fabric__image-title">37</p>
    </div>
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Moly/Moly_38-892b8.jpg" ?>" alt="Tkanina Moly" data-fabric-group="grupa1" loading="lazy">
        <p class="fabric__image-title">38</p>
    </div>
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Moly/Moly_46-7ba01.jpg" ?>" alt="Tkanina Moly" data-fabric-group="grupa1" loading="lazy">
        <p class="fabric__image-title">46</p>
    </div>
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Moly/Moly_51-741d2.jpg" ?>" alt="Tkanina Moly" data-fabric-group="grupa1" loading="lazy">
        <p class="fabric__image-title">51</p>
    </div>
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Moly/Moly_54-7b8c7.jpg" ?>" alt="Tkanina Moly" data-fabric-group="grupa1" loading="lazy">
        <p class="fabric__image-title">54</p>
    </div>
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Moly/Moly_55-c74cb.jpg" ?>" alt="Tkanina Moly" data-fabric-group="grupa1" loading="lazy">
        <p class="fabric__image-title">55</p>
    </div>
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Moly/Moly_59-6b437.jpg" ?>" alt="Tkanina Moly" data-fabric-group="grupa1" loading="lazy">
        <p class="fabric__image-title">59</p>
    </div>
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Moly/Moly_63-b776b.jpg" ?>" alt="Tkanina Moly" data-fabric-group="grupa1" loading="lazy">
        <p class="fabric__image-title">63</p>
    </div>
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Moly/Moly_70-6bf4c.jpg" ?>" alt="Tkanina Moly" data-fabric-group="grupa1" loading="lazy">
        <p class="fabric__image-title">70</p>
    </div>
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Moly/Moly_74-30430.jpg" ?>" alt="Tkanina Moly" data-fabric-group="grupa1" loading="lazy">
        <p class="fabric__image-title">74</p>
    </div>
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Moly/Moly_77-32b8a.jpg" ?>" alt="Tkanina Moly" data-fabric-group="grupa1" loading="lazy">
        <p class="fabric__image-title">77</p>
    </div>
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Moly/Moly_79-861c5.jpg" ?>" alt="Tkanina Moly" data-fabric-group="grupa1" loading="lazy">
        <p class="fabric__image-title">79</p>
    </div>
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Moly/Moly_80-05a2e.jpg" ?>" alt="Tkanina Moly" data-fabric-group="grupa1" loading="lazy">
        <p class="fabric__image-title">80</p>
    </div>
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Moly/Moly_85-a0b13.jpg" ?>" alt="Tkanina Moly" data-fabric-group="grupa1" loading="lazy">
        <p class="fabric__image-title">85</p>
    </div>
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Moly/Moly_97-d02af.jpg" ?>" alt="Tkanina Moly" data-fabric-group="grupa1" loading="lazy">
        <p class="fabric__image-title">97</p>
    </div>
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Moly/Moly_99-518cb.jpg" ?>" alt="Tkanina Moly" data-fabric-group="grupa1" loading="lazy">
        <p class="fabric__image-title">99</p>
    </div>
</div>
<li data-tab-target="#fabric-diosa" class="fabric__tab">Diosa</li>
<div id="fabric-diosa" data-tab-content class="">
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Diosa/Diosa_16-5ffff.jpg" ?>" alt="Tkanina Diosa" data-fabric-group="grupa1" loading="lazy">
        <p class="fabric__image-title">16</p>
    </div>
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Diosa/Diosa_19-97d3d.jpg" ?>" alt="Tkanina Diosa" data-fabric-group="grupa1" loading="lazy">
        <p class="fabric__image-title">19</p>
    </div>
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Diosa/Diosa-01-e784d.jpg" ?>" alt="Tkanina Diosa" data-fabric-group="grupa1" loading="lazy">
        <p class="fabric__image-title">01</p>
    </div>
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Diosa/Diosa-03-c93fe.jpg" ?>" alt="Tkanina Diosa" data-fabric-group="grupa1" loading="lazy">
        <p class="fabric__image-title">03</p>
    </div>
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Diosa/Diosa-08-86737.jpg" ?>" alt="Tkanina Diosa" data-fabric-group="grupa1" loading="lazy">
        <p class="fabric__image-title">08</p>
    </div>
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Diosa/Diosa-11-200ef.jpg" ?>" alt="Tkanina Diosa" data-fabric-group="grupa1" loading="lazy">
        <p class="fabric__image-title">11</p>
    </div>
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Diosa/Diosa-34-b3ebb.jpg" ?>" alt="Tkanina Diosa" data-fabric-group="grupa1" loading="lazy">
        <p class="fabric__image-title">34</p>
    </div>
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Diosa/Diosa-41-22a6a.jpg" ?>" alt="Tkanina Diosa" data-fabric-group="grupa1" loading="lazy">
        <p class="fabric__image-title">41</p>
    </div>
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Diosa/Diosa-45-c5a2a.jpg" ?>" alt="Tkanina Diosa" data-fabric-group="grupa1" loading="lazy">
        <p class="fabric__image-title">45</p>
    </div>
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Diosa/Diosa-52-5bf6a.jpg" ?>" alt="Tkanina Diosa" data-fabric-group="grupa1" loading="lazy">
        <p class="fabric__image-title">52</p>
    </div>
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Diosa/Diosa-56-66009.jpg" ?>" alt="Tkanina Diosa" data-fabric-group="grupa1" loading="lazy">
        <p class="fabric__image-title">56</p>
    </div>
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Diosa/Diosa-60-51f01.jpg" ?>" alt="Tkanina Diosa" data-fabric-group="grupa1" loading="lazy">
        <p class="fabric__image-title">60</p>
    </div>
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Diosa/Diosa-61-17080.jpg" ?>" alt="Tkanina Diosa" data-fabric-group="grupa1" loading="lazy">
        <p class="fabric__image-title">61</p>
    </div>
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Diosa/Diosa-64-5eb96.jpg" ?>" alt="Tkanina Diosa" data-fabric-group="grupa1" loading="lazy">
        <p class="fabric__image-title">64</p>
    </div>
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Diosa/Diosa-70-23fc4.jpg" ?>" alt="Tkanina Diosa" data-fabric-group="grupa1" loading="lazy">
        <p class="fabric__image-title">70</p>
    </div>
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Diosa/Diosa-71-33e4b.jpg" ?>" alt="Tkanina Diosa" data-fabric-group="grupa1" loading="lazy">
        <p class="fabric__image-title">71</p>
    </div>
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Diosa/Diosa-74-b193e.jpg" ?>" alt="Tkanina Diosa" data-fabric-group="grupa1" loading="lazy">
        <p class="fabric__image-title">74</p>
    </div>
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Diosa/Diosa-75-a2701.jpg" ?>" alt="Tkanina Diosa" data-fabric-group="grupa1" loading="lazy">
        <p class="fabric__image-title">75</p>
    </div>
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Diosa/Diosa-77-44d6e.jpg" ?>" alt="Tkanina Diosa" data-fabric-group="grupa1" loading="lazy">
        <p class="fabric__image-title">77</p>
    </div>
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Diosa/Diosa-84-e23d9.jpg" ?>" alt="Tkanina Diosa" data-fabric-group="grupa1" loading="lazy">
        <p class="fabric__image-title">84</p>
    </div>
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Diosa/Diosa-85-7f0c4.jpg" ?>" alt="Tkanina Diosa" data-fabric-group="grupa1" loading="lazy">
        <p class="fabric__image-title">85</p>
    </div>
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Diosa/Diosa-89-1bd21.jpg" ?>" alt="Tkanina Diosa" data-fabric-group="grupa1" loading="lazy">
        <p class="fabric__image-title">89</p>
    </div>
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Diosa/Diosa-93-27c91.jpg" ?>" alt="Tkanina Diosa" data-fabric-group="grupa1" loading="lazy">
        <p class="fabric__image-title">93</p>
    </div>
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Diosa/Diosa-99-8d96a.jpg" ?>" alt="Tkanina Diosa" data-fabric-group="grupa1" loading="lazy">
        <p class="fabric__image-title">99</p>
    </div>
</div>
<li data-tab-target="#fabric-luis" class="fabric__tab">Luis</li>
<div id="fabric-luis" data-tab-content class="">
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Luis/Luis_02-88d27.jpg" ?>" alt="Tkanina Luis" data-fabric-group="grupa1" loading="lazy">
        <p class="fabric__image-title">02</p>
    </div>
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Luis/Luis_03-1534c.jpg" ?>" alt="Tkanina Luis" data-fabric-group="grupa1" loading="lazy">
        <p class="fabric__image-title">03</p>
    </div>
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Luis/Luis_04-f6f1b.jpg" ?>" alt="Tkanina Luis" data-fabric-group="grupa1" loading="lazy">
        <p class="fabric__image-title">04</p>
    </div>
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Luis/Luis_13-afce5.jpg" ?>" alt="Tkanina Luis" data-fabric-group="grupa1" loading="lazy">
        <p class="fabric__image-title">13</p>
    </div>
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Luis/Luis_16-83d50.jpg" ?>" alt="Tkanina Luis" data-fabric-group="grupa1" loading="lazy">
        <p class="fabric__image-title">16</p>
    </div>
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Luis/Luis_17-01a17.jpg" ?>" alt="Tkanina Luis" data-fabric-group="grupa1" loading="lazy">
        <p class="fabric__image-title">17</p>
    </div>
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Luis/Luis_34-a94f8.jpg" ?>" alt="Tkanina Luis" data-fabric-group="grupa1" loading="lazy">
        <p class="fabric__image-title">34</p>
    </div>
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Luis/Luis_39-c3140.jpg" ?>" alt="Tkanina Luis" data-fabric-group="grupa1" loading="lazy">
        <p class="fabric__image-title">39</p>
    </div>
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Luis/Luis_48-c857e.jpg" ?>" alt="Tkanina Luis" data-fabric-group="grupa1" loading="lazy">
        <p class="fabric__image-title">48</p>
    </div>
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Luis/Luis_52-e0f79.jpg" ?>" alt="Tkanina Luis" data-fabric-group="grupa1" loading="lazy">
        <p class="fabric__image-title">52</p>
    </div>
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Luis/Luis_59-fb614.jpg" ?>" alt="Tkanina Luis" data-fabric-group="grupa1" loading="lazy">
        <p class="fabric__image-title">59</p>
    </div>
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Luis/Luis_63-c9f49.jpg" ?>" alt="Tkanina Luis" data-fabric-group="grupa1" loading="lazy">
        <p class="fabric__image-title">63</p>
    </div>
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Luis/Luis_68-eb3c0.jpg" ?>" alt="Tkanina Luis" data-fabric-group="grupa1" loading="lazy">
        <p class="fabric__image-title">68</p>
    </div>
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Luis/Luis_70-b1196.jpg" ?>" alt="Tkanina Luis" data-fabric-group="grupa1" loading="lazy">
        <p class="fabric__image-title">70</p>
    </div>
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Luis/Luis_74-ffbb7.jpg" ?>" alt="Tkanina Luis" data-fabric-group="grupa1" loading="lazy">
        <p class="fabric__image-title">74</p>
    </div>
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Luis/Luis_75-cad09.jpg" ?>" alt="Tkanina Luis" data-fabric-group="grupa1" loading="lazy">
        <p class="fabric__image-title">75</p>
    </div>
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Luis/Luis_77-39159.jpg" ?>" alt="Tkanina Luis" data-fabric-group="grupa1" loading="lazy">
        <p class="fabric__image-title">77</p>
    </div>
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Luis/Luis_80-f98d1.jpg" ?>" alt="Tkanina Luis" data-fabric-group="grupa1" loading="lazy">
        <p class="fabric__image-title">80</p>
    </div>
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Luis/Luis_83-e822f.jpg" ?>" alt="Tkanina Luis" data-fabric-group="grupa1" loading="lazy">
        <p class="fabric__image-title">83</p>
    </div>
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Luis/Luis_85-149cc.jpg" ?>" alt="Tkanina Luis" data-fabric-group="grupa1" loading="lazy">
        <p class="fabric__image-title">85</p>
    </div>
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Luis/Luis_90-1c7c6.jpg" ?>" alt="Tkanina Luis" data-fabric-group="grupa1" loading="lazy">
        <p class="fabric__image-title">90</p>
    </div>
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Luis/Luis_97-ae796.jpg" ?>" alt="Tkanina Luis" data-fabric-group="grupa1" loading="lazy">
        <p class="fabric__image-title">97</p>
    </div>
</div>
<li data-tab-target="#fabric-solid" class="fabric__tab">Solid</li>
<div id="fabric-solid" data-tab-content class="">
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - SOLID/Solid_03_plaskie-693aa.jpg" ?>" alt="Tkanina Solid" data-fabric-group="grupa1" loading="lazy">
        <p class="fabric__image-title">03</p>
    </div>
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - SOLID/Solid_06_plaskie-2fa8f.jpg" ?>" alt="Tkanina Solid" data-fabric-group="grupa1" loading="lazy">
        <p class="fabric__image-title">06</p>
    </div>
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - SOLID/Solid_09_plaskie-89d5c.jpg" ?>" alt="Tkanina Solid" data-fabric-group="grupa1" loading="lazy">
        <p class="fabric__image-title">09</p>
    </div>
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - SOLID/Solid_11_plaskie-aa58d.jpg" ?>" alt="Tkanina Solid" data-fabric-group="grupa1" loading="lazy">
        <p class="fabric__image-title">11</p>
    </div>
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - SOLID/Solid_30_plaskie-3a1d1.jpg" ?>" alt="Tkanina Solid" data-fabric-group="grupa1" loading="lazy">
        <p class="fabric__image-title">30</p>
    </div>
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - SOLID/Solid_33_plaskie-11365.jpg" ?>" alt="Tkanina Solid" data-fabric-group="grupa1" loading="lazy">
        <p class="fabric__image-title">33</p>
    </div>
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - SOLID/Solid_39_plaskie-ffe3f.jpg" ?>" alt="Tkanina Solid" data-fabric-group="grupa1" loading="lazy">
        <p class="fabric__image-title">39</p>
    </div>
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - SOLID/Solid_60_plaskie-82f45.jpg" ?>" alt="Tkanina Solid" data-fabric-group="grupa1" loading="lazy">
        <p class="fabric__image-title">60</p>
    </div>
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - SOLID/Solid_61_plaskie-c999d.jpg" ?>" alt="Tkanina Solid" data-fabric-group="grupa1" loading="lazy">
        <p class="fabric__image-title">61</p>
    </div>
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - SOLID/Solid_66_plaskie-5d2b1.jpg" ?>" alt="Tkanina Solid" data-fabric-group="grupa1" loading="lazy">
        <p class="fabric__image-title">66</p>
    </div>
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - SOLID/Solid_72_plaskie-819d1.jpg" ?>" alt="Tkanina Solid" data-fabric-group="grupa1" loading="lazy">
        <p class="fabric__image-title">72</p>
    </div>
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - SOLID/Solid_73_plaskie-33c24.jpg" ?>" alt="Tkanina Solid" data-fabric-group="grupa1" loading="lazy">
        <p class="fabric__image-title">73</p>
    </div>
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - SOLID/Solid_74_plaskie-81541.jpg" ?>" alt="Tkanina Solid" data-fabric-group="grupa1" loading="lazy">
        <p class="fabric__image-title">74</p>
    </div>
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - SOLID/Solid_77_plaskie-450f7.jpg" ?>" alt="Tkanina Solid" data-fabric-group="grupa1" loading="lazy">
        <p class="fabric__image-title">77</p>
    </div>
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - SOLID/Solid_79_plaskie-8286c.jpg" ?>" alt="Tkanina Solid" data-fabric-group="grupa1" loading="lazy">
        <p class="fabric__image-title">79</p>
    </div>
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - SOLID/Solid_80_plaskie-e0d95.jpg" ?>" alt="Tkanina Solid" data-fabric-group="grupa1" loading="lazy">
        <p class="fabric__image-title">80</p>
    </div>
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - SOLID/Solid_83_plaskie-1f749.jpg" ?>" alt="Tkanina Solid" data-fabric-group="grupa1" loading="lazy">
        <p class="fabric__image-title">83</p>
    </div>
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - SOLID/Solid_84_plaskie-fcb28.jpg" ?>" alt="Tkanina Solid" data-fabric-group="grupa1" loading="lazy">
        <p class="fabric__image-title">84</p>
    </div>
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - SOLID/Solid_89_plaskie-65be3.jpg" ?>" alt="Tkanina Solid" data-fabric-group="grupa1" loading="lazy">
        <p class="fabric__image-title">89</p>
    </div>
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - SOLID/Solid_90_plaskie-a97ca.jpg" ?>" alt="Tkanina Solid" data-fabric-group="grupa1" loading="lazy">
        <p class="fabric__image-title">90</p>
    </div>
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - SOLID/Solid_99_plaskie-82e23.jpg" ?>" alt="Tkanina Solid" data-fabric-group="grupa1" loading="lazy">
        <p class="fabric__image-title">99</p>
    </div>
</div>
<li data-tab-target="#fabric-hygge" class="fabric__tab">Hygge</li>
<div id="fabric-hygge" data-tab-content class="">
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Hygge/2531.jpg" ?>" alt="Tkanina Hygge" data-fabric-group="grupa1" loading="lazy">
        <p class="fabric__image-title">2531</p>
    </div>
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Hygge/2532.jpg" ?>" alt="Tkanina Hygge" data-fabric-group="grupa1" loading="lazy">
        <p class="fabric__image-title">2532</p>
    </div>
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Hygge/2533.jpg" ?>" alt="Tkanina Hygge" data-fabric-group="grupa1" loading="lazy">
        <p class="fabric__image-title">2533</p>
    </div>
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Hygge/2534.jpg" ?>" alt="Tkanina Hygge" data-fabric-group="grupa1" loading="lazy">
        <p class="fabric__image-title">2534</p>
    </div>
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Hygge/2535.jpg" ?>" alt="Tkanina Hygge" data-fabric-group="grupa1" loading="lazy">
        <p class="fabric__image-title">2535</p>
    </div>
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Hygge/2536.jpg" ?>" alt="Tkanina Hygge" data-fabric-group="grupa1" loading="lazy">
        <p class="fabric__image-title">2536</p>
    </div>
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Hygge/2537.jpg" ?>" alt="Tkanina Hygge" data-fabric-group="grupa1" loading="lazy">
        <p class="fabric__image-title">2537</p>
    </div>
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Hygge/2538.jpg" ?>" alt="Tkanina Hygge" data-fabric-group="grupa1" loading="lazy">
        <p class="fabric__image-title">2538</p>
    </div>
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Hygge/2539.jpg" ?>" alt="Tkanina Hygge" data-fabric-group="grupa1" loading="lazy">
        <p class="fabric__image-title">2539</p>
    </div>
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Hygge/2540.jpg" ?>" alt="Tkanina Hygge" data-fabric-group="grupa1" loading="lazy">
        <p class="fabric__image-title">2540</p>
    </div>
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Hygge/2541.jpg" ?>" alt="Tkanina Hygge" data-fabric-group="grupa1" loading="lazy">
        <p class="fabric__image-title">2541</p>
    </div>
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Hygge/2542.jpg" ?>" alt="Tkanina Hygge" data-fabric-group="grupa1" loading="lazy">
        <p class="fabric__image-title">2542</p>
    </div>
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Hygge/2543.jpg" ?>" alt="Tkanina Hygge" data-fabric-group="grupa1" loading="lazy">
        <p class="fabric__image-title">2543</p>
    </div>
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Hygge/2544.jpg" ?>" alt="Tkanina Hygge" data-fabric-group="grupa1" loading="lazy">
        <p class="fabric__image-title">2544</p>
    </div>
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Hygge/2545.jpg" ?>" alt="Tkanina Hygge" data-fabric-group="grupa1" loading="lazy">
        <p class="fabric__image-title">2545</p>
    </div>
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Hygge/2546.jpg" ?>" alt="Tkanina Hygge" data-fabric-group="grupa1" loading="lazy">
        <p class="fabric__image-title">2546</p>
    </div>
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Hygge/2547.jpg" ?>" alt="Tkanina Hygge" data-fabric-group="grupa1" loading="lazy">
        <p class="fabric__image-title">2547</p>
    </div>
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Hygge/2548.jpg" ?>" alt="Tkanina Hygge" data-fabric-group="grupa1" loading="lazy">
        <p class="fabric__image-title">2548</p>
    </div>
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Hygge/2549.jpg" ?>" alt="Tkanina Hygge" data-fabric-group="grupa1" loading="lazy">
        <p class="fabric__image-title">2549</p>
    </div>
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Hygge/2550.jpg" ?>" alt="Tkanina Hygge" data-fabric-group="grupa1" loading="lazy">
        <p class="fabric__image-title">2550</p>
    </div>
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Hygge/2551.jpg" ?>" alt="Tkanina Hygge" data-fabric-group="grupa1" loading="lazy">
        <p class="fabric__image-title">2551</p>
    </div>
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Hygge/2552.jpg" ?>" alt="Tkanina Hygge" data-fabric-group="grupa1" loading="lazy">
        <p class="fabric__image-title">2552</p>
    </div>
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Hygge/2553.jpg" ?>" alt="Tkanina Hygge" data-fabric-group="grupa1" loading="lazy">
        <p class="fabric__image-title">2553</p>
    </div>
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Hygge/2554.jpg" ?>" alt="Tkanina Hygge" data-fabric-group="grupa1" loading="lazy">
        <p class="fabric__image-title">2554</p>
    </div>
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Hygge/2555.jpg" ?>" alt="Tkanina Hygge" data-fabric-group="grupa1" loading="lazy">
        <p class="fabric__image-title">2555</p>
    </div>
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Hygge/2556.jpg" ?>" alt="Tkanina Hygge" data-fabric-group="grupa1" loading="lazy">
        <p class="fabric__image-title">2556</p>
    </div>
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Hygge/2557.jpg" ?>" alt="Tkanina Hygge" data-fabric-group="grupa1" loading="lazy">
        <p class="fabric__image-title">2557</p>
    </div>
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Hygge/2558.jpg" ?>" alt="Tkanina Hygge" data-fabric-group="grupa1" loading="lazy">
        <p class="fabric__image-title">2558</p>
    </div>
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Hygge/2559.jpg" ?>" alt="Tkanina Hygge" data-fabric-group="grupa1" loading="lazy">
        <p class="fabric__image-title">2559</p>
    </div>
</div>




               
             </ul>
             <li class="fabric__submenu-item">
              Dzianina
              <a class="fabric__submenu-btn" id="fabric__submenu-btn-2">+</a>
            </li>
            <ul class="fabric__tabs" id="fabric__tabs-2">
               
                <li data-tab-target="#fabric-milton" class="fabric__tab">Milton New</li>
                <div id="fabric-milton" data-tab-content>
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-2/Milton-New/Milton-New-01.jpeg" ?>" alt="Tkanina Milton New" data-fabric-group="grupa2" loading="lazy">
                <p class="fabric__image-title">01</p>
              </div>
                
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-2/Milton-New/Milton-New-02.jpeg" ?>" alt="Tkanina Milton New" data-fabric-group="grupa2" loading="lazy">
                <p class="fabric__image-title">02</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-2/Milton-New/Milton-New-03.jpeg" ?>" alt="Tkanina Milton New" data-fabric-group="grupa2" loading="lazy">
                <p class="fabric__image-title">03</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-2/Milton-New/Milton-New-04.jpeg" ?>" alt="Tkanina Milton New" data-fabric-group="grupa2" loading="lazy">
                <p class="fabric__image-title">04</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-2/Milton-New/Milton-New-05.jpeg" ?>" alt="Tkanina Milton New" data-fabric-group="grupa2" loading="lazy">
                <p class="fabric__image-title">05</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-2/Milton-New/Milton-New-06.jpeg" ?>" alt="Tkanina Milton New" data-fabric-group="grupa2" loading="lazy">
                <p class="fabric__image-title">06</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-2/Milton-New/Milton-New-13.jpeg" ?>" alt="Tkanina Milton New" data-fabric-group="grupa2" loading="lazy">
                <p class="fabric__image-title">13</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-2/Milton-New/Milton-New-14.jpeg" ?>" alt="Tkanina Milton New" data-fabric-group="grupa2" loading="lazy">
                <p class="fabric__image-title">14</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-2/Milton-New/Milton-New-15.jpeg" ?>" alt="Tkanina Milton New" data-fabric-group="grupa2" loading="lazy">
                <p class="fabric__image-title">15</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-2/Milton-New/Milton-New-16.jpeg" ?>" alt="Tkanina Milton New" data-fabric-group="grupa2" loading="lazy">
                <p class="fabric__image-title">16</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-2/Milton-New/Milton-New-17.jpeg" ?>" alt="Tkanina Milton New" data-fabric-group="grupa2" loading="lazy">
                <p class="fabric__image-title">17</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-2/Milton-New/Milton-New-18.jpeg" ?>" alt="Tkanina Milton New" data-fabric-group="grupa2" loading="lazy">
                <p class="fabric__image-title">18</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-2/Milton-New/Milton-New-19.jpeg" ?>" alt="Tkanina Milton New" data-fabric-group="grupa2" loading="lazy">
                <p class="fabric__image-title">19</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-2/Milton-New/Milton-New-20.jpeg" ?>" alt="Tkanina Milton New" data-fabric-group="grupa2" loading="lazy">
                <p class="fabric__image-title">20</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-2/Milton-New/Milton-New-21.jpeg" ?>" alt="Tkanina Milton New" data-fabric-group="grupa2" loading="lazy">
                <p class="fabric__image-title">21</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-2/Milton-New/Milton-New-22.jpeg" ?>" alt="Tkanina Milton New" data-fabric-group="grupa2" loading="lazy">
                <p class="fabric__image-title">22</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-2/Milton-New/Milton-New-23.jpeg" ?>" alt="Tkanina Milton New" data-fabric-group="grupa2" loading="lazy">
                <p class="fabric__image-title">23</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-2/Milton-New/Milton-New-24.jpeg" ?>" alt="Tkanina Milton New" data-fabric-group="grupa2" loading="lazy">
                <p class="fabric__image-title">24</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-2/Milton-New/Milton-New-25.jpeg" ?>" alt="Tkanina Milton New" data-fabric-group="grupa2" loading="lazy">
                <p class="fabric__image-title">25</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-2/Milton-New/Milton-New-26.jpeg" ?>" alt="Tkanina Milton New" data-fabric-group="grupa2" loading="lazy">
                <p class="fabric__image-title">26</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-2/Milton-New/Milton-New-27.jpeg" ?>" alt="Tkanina Milton New" data-fabric-group="grupa2" loading="lazy">
                <p class="fabric__image-title">27</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-2/Milton-New/Milton-New-28.jpeg" ?>" alt="Tkanina Milton New" data-fabric-group="grupa2" loading="lazy">
                <p class="fabric__image-title">28</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-2/Milton-New/Milton-New-29.jpeg" ?>" alt="Tkanina Milton New" data-fabric-group="grupa2" loading="lazy">
                <p class="fabric__image-title">29</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-2/Milton-New/Milton-New-30.jpeg" ?>" alt="Tkanina Milton New" data-fabric-group="grupa2" loading="lazy">
                <p class="fabric__image-title">30</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-2/Milton-New/Milton-New-31.jpeg" ?>" alt="Tkanina Milton New" data-fabric-group="grupa2" loading="lazy">
                <p class="fabric__image-title">31</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-2/Milton-New/Milton-New-32.jpeg" ?>" alt="Tkanina Milton New" data-fabric-group="grupa2" loading="lazy">
                <p class="fabric__image-title">32</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-2/Milton-New/Milton-New-33.jpeg" ?>" alt="Tkanina Milton New" data-fabric-group="grupa2" loading="lazy">
                <p class="fabric__image-title">33</p>
              </div>
              
            </div>
            <li data-tab-target="#fabric-zoya" class="fabric__tab">Zoya</li>
                <div id="fabric-zoya" data-tab-content>
              <div class="fabric__image-box">
              <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-2/Zoya/Zoya 01.jpeg" ?>" alt="Tkanina Zoya" data-fabric-group="grupa2" loading="lazy">
              <p class="fabric__image-title">01</p>
              </div>
                
              <div class="fabric__image-box">
              <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-2/Zoya/Zoya 02.jpeg" ?>" alt="Tkanina Zoya" data-fabric-group="grupa2" loading="lazy">
              <p class="fabric__image-title">02</p>
              </div>
              
              <div class="fabric__image-box">
              <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-2/Zoya/Zoya 03.jpeg" ?>" alt="Tkanina Zoya" data-fabric-group="grupa2" loading="lazy">
              <p class="fabric__image-title">03</p>
              </div>
              
              <div class="fabric__image-box">
              <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-2/Zoya/Zoya 04.jpeg" ?>" alt="Tkanina Zoya" data-fabric-group="grupa2" loading="lazy">
              <p class="fabric__image-title">04</p>
              </div>
              
              <div class="fabric__image-box">
              <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-2/Zoya/Zoya 05.jpeg" ?>" alt="Tkanina Zoya" data-fabric-group="grupa2" loading="lazy">
              <p class="fabric__image-title">05</p>
              </div>
              
              <div class="fabric__image-box">
              <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-2/Zoya/Zoya 06.jpeg" ?>" alt="Tkanina Zoya" data-fabric-group="grupa2" loading="lazy">
              <p class="fabric__image-title">06</p>
              </div>
              
              <div class="fabric__image-box">
              <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-2/Zoya/Zoya 07.jpeg" ?>" alt="Tkanina Zoya" data-fabric-group="grupa2" loading="lazy">
              <p class="fabric__image-title">07</p>
              </div>
              
              <div class="fabric__image-box">
              <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-2/Zoya/Zoya 08.jpeg" ?>" alt="Tkanina Zoya" data-fabric-group="grupa2" loading="lazy">
              <p class="fabric__image-title">08</p>
              </div>
              
              <div class="fabric__image-box">
              <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-2/Zoya/Zoya 09.jpeg" ?>" alt="Tkanina Zoya" data-fabric-group="grupa2" loading="lazy">
              <p class="fabric__image-title">09</p>
              </div>
              
              <div class="fabric__image-box">
              <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-2/Zoya/Zoya 10.jpeg" ?>" alt="Tkanina Zoya" data-fabric-group="grupa2" loading="lazy">
              <p class="fabric__image-title">10</p>
              </div>
              
              <div class="fabric__image-box">
              <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-2/Zoya/Zoya 11.jpeg" ?>" alt="Tkanina Zoya" data-fabric-group="grupa2" loading="lazy">
              <p class="fabric__image-title">11</p>
              </div>
              
              <div class="fabric__image-box">
              <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-2/Zoya/Zoya 12.jpeg" ?>" alt="Tkanina Zoya" data-fabric-group="grupa2" loading="lazy">
              <p class="fabric__image-title">12</p>
              </div>
              
              <div class="fabric__image-box">
              <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-2/Zoya/Zoya 13.jpeg" ?>" alt="Tkanina Zoya" data-fabric-group="grupa2" loading="lazy">
              <p class="fabric__image-title">13</p>
              </div>
              
              <div class="fabric__image-box">
              <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-2/Zoya/Zoya 14.jpeg" ?>" alt="Tkanina Zoya" data-fabric-group="grupa2" loading="lazy">
              <p class="fabric__image-title">14</p>
              </div>
              
              <div class="fabric__image-box">
              <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-2/Zoya/Zoya 15.jpeg" ?>" alt="Tkanina Zoya" data-fabric-group="grupa2" loading="lazy">
              <p class="fabric__image-title">15</p>
              </div>
              
            </div>
            <li data-tab-target="#fabric-leo" class="fabric__tab">Leo</li>
            <div id="fabric-leo" data-tab-content>
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Leo/tekstura LEO 01.jpg" ?>" alt="Tkanina Leo" data-fabric-group="grupa2" loading="lazy">
        <p class="fabric__image-title">01</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Leo/tekstura LEO 02.jpg" ?>" alt="Tkanina Leo" data-fabric-group="grupa2" loading="lazy">
        <p class="fabric__image-title">02</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Leo/tekstura LEO 03.jpg" ?>" alt="Tkanina Leo" data-fabric-group="grupa2" loading="lazy">
        <p class="fabric__image-title">03</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Leo/tekstura LEO 04.jpg" ?>" alt="Tkanina Leo" data-fabric-group="grupa2" loading="lazy">
        <p class="fabric__image-title">04</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Leo/tekstura LEO 05.jpg" ?>" alt="Tkanina Leo" data-fabric-group="grupa2" loading="lazy">
        <p class="fabric__image-title">05</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Leo/tekstura LEO 06.jpg" ?>" alt="Tkanina Leo" data-fabric-group="grupa2" loading="lazy">
        <p class="fabric__image-title">06</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Leo/tekstura LEO 07.jpg" ?>" alt="Tkanina Leo" data-fabric-group="grupa2" loading="lazy">
        <p class="fabric__image-title">07</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Leo/tekstura LEO 08.jpg" ?>" alt="Tkanina Leo" data-fabric-group="grupa2" loading="lazy">
        <p class="fabric__image-title">08</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Leo/tekstura LEO 09.jpg" ?>" alt="Tkanina Leo" data-fabric-group="grupa2" loading="lazy">
        <p class="fabric__image-title">09</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Leo/tekstura LEO 10.jpg" ?>" alt="Tkanina Leo" data-fabric-group="grupa2" loading="lazy">
        <p class="fabric__image-title">10</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Leo/tekstura LEO 11.jpg" ?>" alt="Tkanina Leo" data-fabric-group="grupa2" loading="lazy">
        <p class="fabric__image-title">11</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Leo/tekstura LEO 12.jpg" ?>" alt="Tkanina Leo" data-fabric-group="grupa2" loading="lazy">
        <p class="fabric__image-title">12</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Leo/tekstura LEO 13.jpg" ?>" alt="Tkanina Leo" data-fabric-group="grupa2" loading="lazy">
        <p class="fabric__image-title">13</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Leo/tekstura LEO 14.jpg" ?>" alt="Tkanina Leo" data-fabric-group="grupa2" loading="lazy">
        <p class="fabric__image-title">14</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Leo/tekstura LEO 15.jpg" ?>" alt="Tkanina Leo" data-fabric-group="grupa2" loading="lazy">
        <p class="fabric__image-title">15</p>
    </div>

    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Leo/tekstura LEO 16.jpg" ?>" alt="Tkanina Leo" data-fabric-group="grupa2" loading="lazy">
        <p class="fabric__image-title">16</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Leo/tekstura LEO 17.jpg" ?>" alt="Tkanina Leo" data-fabric-group="grupa2" loading="lazy">
        <p class="fabric__image-title">17</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Leo/tekstura LEO 18.jpg" ?>" alt="Tkanina Leo" data-fabric-group="grupa2" loading="lazy">
        <p class="fabric__image-title">18</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Leo/tekstura LEO 19.jpg" ?>" alt="Tkanina Leo" data-fabric-group="grupa2" loading="lazy">
        <p class="fabric__image-title">19</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Leo/tekstura LEO 20.jpg" ?>" alt="Tkanina Leo" data-fabric-group="grupa2" loading="lazy">
        <p class="fabric__image-title">20</p>
    </div>
</div>
<li data-tab-target="#fabric-forres" class="fabric__tab">Forres</li>
<div id="fabric-forres" data-tab-content>
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Forres/forres01.jpg" ?>" alt="Tkanina Forres" data-fabric-group="grupa2" loading="lazy">
        <p class="fabric__image-title">01</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Forres/forres02.jpg" ?>" alt="Tkanina Forres" data-fabric-group="grupa2" loading="lazy">
        <p class="fabric__image-title">02</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Forres/forres03.jpg" ?>" alt="Tkanina Forres" data-fabric-group="grupa2" loading="lazy">
        <p class="fabric__image-title">03</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Forres/forres04.jpg" ?>" alt="Tkanina Forres" data-fabric-group="grupa2" loading="lazy">
        <p class="fabric__image-title">04</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Forres/forres05.jpg" ?>" alt="Tkanina Forres" data-fabric-group="grupa2" loading="lazy">
        <p class="fabric__image-title">05</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Forres/forres06.jpg" ?>" alt="Tkanina Forres" data-fabric-group="grupa2" loading="lazy">
        <p class="fabric__image-title">06</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Forres/forres07.jpg" ?>" alt="Tkanina Forres" data-fabric-group="grupa2" loading="lazy">
        <p class="fabric__image-title">07</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Forres/forres08.jpg" ?>" alt="Tkanina Forres" data-fabric-group="grupa2" loading="lazy">
        <p class="fabric__image-title">08</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Forres/forres09.jpg" ?>" alt="Tkanina Forres" data-fabric-group="grupa2" loading="lazy">
        <p class="fabric__image-title">09</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Forres/forres10.jpg" ?>" alt="Tkanina Forres" data-fabric-group="grupa2" loading="lazy">
        <p class="fabric__image-title">10</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Forres/forres11.jpg" ?>" alt="Tkanina Forres" data-fabric-group="grupa2" loading="lazy">
        <p class="fabric__image-title">11</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Forres/forres12.jpg" ?>" alt="Tkanina Forres" data-fabric-group="grupa2" loading="lazy">
        <p class="fabric__image-title">12</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Forres/forres13.jpg" ?>" alt="Tkanina Forres" data-fabric-group="grupa2" loading="lazy">
        <p class="fabric__image-title">13</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Forres/forres14.jpg" ?>" alt="Tkanina Forres" data-fabric-group="grupa2" loading="lazy">
        <p class="fabric__image-title">14</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Forres/forres15.jpg" ?>" alt="Tkanina Forres" data-fabric-group="grupa2" loading="lazy">
        <p class="fabric__image-title">15</p>
    </div>

    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Forres/forres16.jpg" ?>" alt="Tkanina Forres" data-fabric-group="grupa2" loading="lazy">
        <p class="fabric__image-title">16</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Forres/forres17.jpg" ?>" alt="Tkanina Forres" data-fabric-group="grupa2" loading="lazy">
        <p class="fabric__image-title">17</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Forres/forres18.jpg" ?>" alt="Tkanina Forres" data-fabric-group="grupa2" loading="lazy">
        <p class="fabric__image-title">18</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Forres/forres19.jpg" ?>" alt="Tkanina Forres" data-fabric-group="grupa2" loading="lazy">
        <p class="fabric__image-title">19</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Forres/forres20.jpg" ?>" alt="Tkanina Forres" data-fabric-group="grupa2" loading="lazy">
        <p class="fabric__image-title">20</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Forres/forres21.jpg" ?>" alt="Tkanina Forres" data-fabric-group="grupa2" loading="lazy">
        <p class="fabric__image-title">21</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Forres/forres22.jpg" ?>" alt="Tkanina Forres" data-fabric-group="grupa2" loading="lazy">
        <p class="fabric__image-title">22</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Forres/forres23.jpg" ?>" alt="Tkanina Forres" data-fabric-group="grupa2" loading="lazy">
        <p class="fabric__image-title">23</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Forres/forres24.jpg" ?>" alt="Tkanina Forres" data-fabric-group="grupa2" loading="lazy">
        <p class="fabric__image-title">24</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Forres/forres25.jpg" ?>" alt="Tkanina Forres" data-fabric-group="grupa2" loading="lazy">
        <p class="fabric__image-title">25</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Forres/forres26.jpg" ?>" alt="Tkanina Forres" data-fabric-group="grupa2" loading="lazy">
        <p class="fabric__image-title">26</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Forres/forres27.jpg" ?>" alt="Tkanina Forres" data-fabric-group="grupa2" loading="lazy">
        <p class="fabric__image-title">27</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Forres/forres28.jpg" ?>" alt="Tkanina Forres" data-fabric-group="grupa2" loading="lazy">
        <p class="fabric__image-title">28</p>
    </div>
</div>



             </ul>
             <li class="fabric__submenu-item">
              Szenil
              <a class="fabric__submenu-btn" id="fabric__submenu-btn-3">+</a>
            </li>
            <ul class="fabric__tabs" id="fabric__tabs-3">
            <li data-tab-target="#fabric-icon" class="fabric__tab">Icon</li>
                <div id="fabric-icon" data-tab-content>
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-2/Icon/Icon-02-aa432.jpg" ?>" alt="Tkanina Icon" data-fabric-group="grupa2" loading="lazy">
                <p class="fabric__image-title">02</p>
              </div>
                
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-2/Icon/Icon-06-6e26d.jpg" ?>" alt="Tkanina Icon" data-fabric-group="grupa2" loading="lazy">
                <p class="fabric__image-title">06</p>
              </div>
              
              
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-2/Icon/Icon-81-ba0f2.jpg" ?>" alt="Tkanina Icon" data-fabric-group="grupa2" loading="lazy">
                <p class="fabric__image-title">81</p>
              </div>
              
              
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-2/Icon/Icon-95-008dc.jpg" ?>" alt="Tkanina Icon" data-fabric-group="grupa2" loading="lazy">
                <p class="fabric__image-title">95</p>
              </div>
              
            
              
            </div>
            <li data-tab-target="#fabric-tulia" class="fabric__tab">Tulia</li>
                <div id="fabric-tulia" data-tab-content>
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-3/Tulia/Tulia 01.jpeg" ?>" alt="Tkanina Tulia" data-fabric-group="grupa3" loading="lazy">
                <p class="fabric__image-title">01</p>
              </div>
                
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-3/Tulia/Tulia 02.jpeg" ?>" alt="Tkanina Tulia" data-fabric-group="grupa3" loading="lazy">
                <p class="fabric__image-title">02</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-3/Tulia/Tulia 03.jpeg" ?>" alt="Tkanina Tulia" data-fabric-group="grupa3" loading="lazy">
                <p class="fabric__image-title">03</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-3/Tulia/Tulia 04.jpeg" ?>" alt="Tkanina Tulia" data-fabric-group="grupa3" loading="lazy">
                <p class="fabric__image-title">04</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-3/Tulia/Tulia 05.jpeg" ?>" alt="Tkanina Tulia" data-fabric-group="grupa3" loading="lazy">
                <p class="fabric__image-title">05</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-3/Tulia/Tulia 06.jpeg" ?>" alt="Tkanina Tulia" data-fabric-group="grupa3" loading="lazy">
                <p class="fabric__image-title">06</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-3/Tulia/Tulia 07.jpeg" ?>" alt="Tkanina Tulia" data-fabric-group="grupa3" loading="lazy">
                <p class="fabric__image-title">07</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-3/Tulia/Tulia 08.jpeg" ?>" alt="Tkanina Tulia" data-fabric-group="grupa3" loading="lazy">
                <p class="fabric__image-title">08</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-3/Tulia/Tulia 09.jpeg" ?>" alt="Tkanina Tulia" data-fabric-group="grupa3" loading="lazy">
                <p class="fabric__image-title">09</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-3/Tulia/Tulia 10.jpeg" ?>" alt="Tkanina Tulia" data-fabric-group="grupa3" loading="lazy">
                <p class="fabric__image-title">10</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-3/Tulia/Tulia 11.jpeg" ?>" alt="Tkanina Tulia" data-fabric-group="grupa3" loading="lazy">
                <p class="fabric__image-title">11</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-3/Tulia/Tulia 12.jpeg" ?>" alt="Tkanina Tulia" data-fabric-group="grupa3" loading="lazy">
                <p class="fabric__image-title">12</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-3/Tulia/Tulia 13.jpeg" ?>" alt="Tkanina Tulia" data-fabric-group="grupa3" loading="lazy">
                <p class="fabric__image-title">13</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-3/Tulia/Tulia 14.jpeg" ?>" alt="Tkanina Tulia" data-fabric-group="grupa3" loading="lazy">
                <p class="fabric__image-title">14</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-3/Tulia/Tulia 15.jpeg" ?>" alt="Tkanina Tulia" data-fabric-group="grupa3" loading="lazy">
                <p class="fabric__image-title">15</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-3/Tulia/Tulia 16.jpeg" ?>" alt="Tkanina Tulia" data-fabric-group="grupa3" loading="lazy">
                <p class="fabric__image-title">16</p>
              </div>
              
            </div>
            
                
               
                
                
                
                
                
                
             </ul>
             <li class="fabric__submenu-item">
              Velur / Velvet
              <a class="fabric__submenu-btn" id="fabric__submenu-btn-4">+</a>
            </li>
            <ul class="fabric__tabs" id="fabric__tabs-4">
            <li data-tab-target="#fabric-monolith" class="fabric__tab">Monolith</li>
                <div id="fabric-monolith" data-tab-content>
                  <div class="fabric__image-box">
                  <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Monolith/Monolith-02-73026.jpg" ?>" alt="Tkanina Monolith" data-fabric-group="grupa1" loading="lazy">
                  <p class="fabric__image-title">02</p>
                  </div>
                  <div class="fabric__image-box">
                  <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Monolith/Monolith-04-234d3.jpg" ?>" alt="Tkanina Monolith" data-fabric-group="grupa1" loading="lazy">
                  <p class="fabric__image-title">04</p>
                  </div>
                  <div class="fabric__image-box">
                  <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Monolith/Monolith-09-b1b50.jpg" ?>" alt="Tkanina Monolith" data-fabric-group="grupa1" loading="lazy">
                  <p class="fabric__image-title">09</p>
                  </div>
                  <div class="fabric__image-box">
                  <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Monolith/Monolith-15-17ef7.jpg" ?>" alt="Tkanina Monolith" data-fabric-group="grupa1" loading="lazy">
                  <p class="fabric__image-title">15</p>
                  </div>
                  <div class="fabric__image-box">
                  <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Monolith/Monolith-20-f5a2c.jpg" ?>" alt="Tkanina Monolith" data-fabric-group="grupa1" loading="lazy">
                  <p class="fabric__image-title">20</p>
                  </div>
                  <div class="fabric__image-box">
                  <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Monolith/Monolith-29-8f0f7.jpg" ?>" alt="Tkanina Monolith" data-fabric-group="grupa1" loading="lazy">
                  <p class="fabric__image-title">29</p>
                  </div>
                  <div class="fabric__image-box">
                  <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Monolith/Monolith-37-92247.jpg" ?>" alt="Tkanina Monolith" data-fabric-group="grupa1" loading="lazy">
                  <p class="fabric__image-title">37</p>
                  </div>
                  <div class="fabric__image-box">
                  <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Monolith/Monolith-38-c659b.jpg" ?>" alt="Tkanina Monolith" data-fabric-group="grupa1" loading="lazy">
                  <p class="fabric__image-title">38</p>
                  </div>
                  <div class="fabric__image-box">
                  <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Monolith/Monolith-48-ed80a.jpg" ?>" alt="Tkanina Monolith" data-fabric-group="grupa1" loading="lazy">
                  <p class="fabric__image-title">48</p>
                  </div>
                  <div class="fabric__image-box">
                  <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Monolith/Monolith-59-a7a96.jpg" ?>" alt="Tkanina Monolith" data-fabric-group="grupa1" loading="lazy">
                  <p class="fabric__image-title">59</p>
                  </div>
                  <div class="fabric__image-box">
                  <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Monolith/Monolith-61-fdfd1.jpg" ?>" alt="Tkanina Monolith" data-fabric-group="grupa1" loading="lazy">
                  <p class="fabric__image-title">61</p>
                  </div>
                  <div class="fabric__image-box">
                  <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Monolith/Monolith-62-7f95f.jpg" ?>" alt="Tkanina Monolith" data-fabric-group="grupa1" loading="lazy">
                  <p class="fabric__image-title">62</p>
                  </div>
                  <div class="fabric__image-box">
                  <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Monolith/Monolith-63-ba50b.jpg" ?>" alt="Tkanina Monolith" data-fabric-group="grupa1" loading="lazy">
                  <p class="fabric__image-title">63</p>
                  </div>
                  <div class="fabric__image-box">
                  <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Monolith/Monolith-69-c3ea5.jpg" ?>" alt="Tkanina Monolith" data-fabric-group="grupa1" loading="lazy">
                  <p class="fabric__image-title">69</p>
                  </div>
                  <div class="fabric__image-box">
                  <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Monolith/Monolith-70-48115.jpg" ?>" alt="Tkanina Monolith" data-fabric-group="grupa1" loading="lazy">
                  <p class="fabric__image-title">70</p>
                  </div>
                  <div class="fabric__image-box">
                  <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Monolith/Monolith-72-62c71.jpg" ?>" alt="Tkanina Monolith" data-fabric-group="grupa1" loading="lazy">
                  <p class="fabric__image-title">72</p>
                  </div>
                  <div class="fabric__image-box">
                  <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Monolith/Monolith-76-307a7.jpg" ?>" alt="Tkanina Monolith" data-fabric-group="grupa1" loading="lazy">
                  <p class="fabric__image-title">76</p>
                  </div>
                  <div class="fabric__image-box">
                  <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Monolith/Monolith-77-c4a32.jpg" ?>" alt="Tkanina Monolith" data-fabric-group="grupa1" loading="lazy">
                  <p class="fabric__image-title">77</p>
                  </div>
                  <div class="fabric__image-box">
                  <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Monolith/Monolith-79-0b9a5.jpg" ?>" alt="Tkanina Monolith" data-fabric-group="grupa1" loading="lazy">
                  <p class="fabric__image-title">79</p>
                  </div>
                  <div class="fabric__image-box">
                  <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Monolith/Monolith-84-45da2.jpg" ?>" alt="Tkanina Monolith" data-fabric-group="grupa1" loading="lazy">
                  <p class="fabric__image-title">84</p>
                  </div>
                  <div class="fabric__image-box">
                  <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Monolith/Monolith-85-0c899.jpg" ?>" alt="Tkanina Monolith" data-fabric-group="grupa1" loading="lazy">
                  <p class="fabric__image-title">85</p>
                  </div>
                  <div class="fabric__image-box">
                  <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Monolith/Monolith-92-57e77.jpg" ?>" alt="Tkanina Monolith" data-fabric-group="grupa1" loading="lazy">
                  <p class="fabric__image-title">92</p>
                  </div>
                  <div class="fabric__image-box">
                  <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Monolith/Monolith-95-49ffe.jpg" ?>" alt="Tkanina Monolith" data-fabric-group="grupa1" loading="lazy">
                  <p class="fabric__image-title">95</p>
                  </div>
                  <div class="fabric__image-box">
                  <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Monolith/Monolith-97-9d7ac.jpg" ?>" alt="Tkanina Monolith" data-fabric-group="grupa1" loading="lazy">
                  <p class="fabric__image-title">97</p>
                  </div>
            </div>
                <li data-tab-target="#fabric-riviera" class="fabric__tab">Riviera</li>
                <div id="fabric-riviera" data-tab-content>
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Riviera/Riviera_69-2fae7.jpg" ?>" alt="Tkanina Riviera" data-fabric-group="grupa1" loading="lazy">
                <p class="fabric__image-title">69</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Riviera/Riviera_76-530e0.jpg" ?>" alt="Tkanina Riviera" data-fabric-group="grupa1" loading="lazy">
                <p class="fabric__image-title">76</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Riviera/Riviera_82-be6eb.jpg" ?>" alt="Tkanina Riviera" data-fabric-group="grupa1" loading="lazy">
                <p class="fabric__image-title">82</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Riviera/Riviera-16-820d8.jpg" ?>" alt="Tkanina Riviera" data-fabric-group="grupa1" loading="lazy">
                <p class="fabric__image-title">16</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Riviera/Riviera-21-0565b.jpg" ?>" alt="Tkanina Riviera" data-fabric-group="grupa1" loading="lazy">
                <p class="fabric__image-title">21</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Riviera/Riviera-24-c1d0b.jpg" ?>" alt="Tkanina Riviera" data-fabric-group="grupa1" loading="lazy">
                <p class="fabric__image-title">24</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Riviera/Riviera-26-7c7a0.jpg" ?>" alt="Tkanina Riviera" data-fabric-group="grupa1" loading="lazy">
                <p class="fabric__image-title">26</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Riviera/Riviera-28-b795c.jpg" ?>" alt="Tkanina Riviera" data-fabric-group="grupa1" loading="lazy">
                <p class="fabric__image-title">28</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Riviera/Riviera-29-2b4c9.jpg" ?>" alt="Tkanina Riviera" data-fabric-group="grupa1" loading="lazy">
                <p class="fabric__image-title">29</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Riviera/Riviera-34-18d88.jpg" ?>" alt="Tkanina Riviera" data-fabric-group="grupa1" loading="lazy">
                <p class="fabric__image-title">34</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Riviera/Riviera-36-c6458.jpg" ?>" alt="Tkanina Riviera" data-fabric-group="grupa1" loading="lazy">
                <p class="fabric__image-title">36</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Riviera/Riviera-38-02d44.jpg" ?>" alt="Tkanina Riviera" data-fabric-group="grupa1" loading="lazy">
                <p class="fabric__image-title">38</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Riviera/Riviera-41-5288b.jpg" ?>" alt="Tkanina Riviera" data-fabric-group="grupa1" loading="lazy">
                <p class="fabric__image-title">41</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Riviera/Riviera-51-2d2d0.jpg" ?>" alt="Tkanina Riviera" data-fabric-group="grupa1" loading="lazy">
                <p class="fabric__image-title">51</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Riviera/Riviera-56-c071b.png" ?>" alt="Tkanina Riviera" data-fabric-group="grupa1" loading="lazy">
                <p class="fabric__image-title">56</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Riviera/Riviera-59-9c192.jpg" ?>" alt="Tkanina Riviera" data-fabric-group="grupa1" loading="lazy">
                <p class="fabric__image-title">59</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Riviera/Riviera-61-e1857.jpg" ?>" alt="Tkanina Riviera" data-fabric-group="grupa1" loading="lazy">
                <p class="fabric__image-title">61</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Riviera/Riviera-62-b1b05.jpg" ?>" alt="Tkanina Riviera" data-fabric-group="grupa1" loading="lazy">
                <p class="fabric__image-title">62</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Riviera/Riviera-63-12964.jpg" ?>" alt="Tkanina Riviera" data-fabric-group="grupa1" loading="lazy">
                <p class="fabric__image-title">63</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Riviera/Riviera-74-1897f.jpg" ?>" alt="Tkanina Riviera" data-fabric-group="grupa1" loading="lazy">
                <p class="fabric__image-title">74</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Riviera/Riviera-79-e6ac6.jpg" ?>" alt="Tkanina Riviera" data-fabric-group="grupa1" loading="lazy">
                <p class="fabric__image-title">79</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Riviera/Riviera-80-e7345.jpg" ?>" alt="Tkanina Riviera" data-fabric-group="grupa1" loading="lazy">
                <p class="fabric__image-title">80</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Riviera/Riviera-81-2c631.jpg" ?>" alt="Tkanina Riviera" data-fabric-group="grupa1" loading="lazy">
                <p class="fabric__image-title">81</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Riviera/Riviera-87-950eb.jpg" ?>" alt="Tkanina Riviera" data-fabric-group="grupa1" loading="lazy">
                <p class="fabric__image-title">87</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Riviera/Riviera-91-19995.jpg" ?>" alt="Tkanina Riviera" data-fabric-group="grupa1" loading="lazy">
                <p class="fabric__image-title">91</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Riviera/Riviera-95-dbc73.jpg" ?>" alt="Tkanina Riviera" data-fabric-group="grupa1" loading="lazy">
                <p class="fabric__image-title">95</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Riviera/Riviera-96-8c41c.jpg" ?>" alt="Tkanina Riviera" data-fabric-group="grupa1" loading="lazy">
                <p class="fabric__image-title">96</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Riviera/Riviera-97-d2fb5.jpg" ?>" alt="Tkanina Riviera" data-fabric-group="grupa1" loading="lazy">
                <p class="fabric__image-title">97</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Riviera/Riviera-100-99ae9.jpg" ?>" alt="Tkanina Riviera" data-fabric-group="grupa1" loading="lazy">
                <p class="fabric__image-title">100</p>
              </div>
            </div>
            <li data-tab-target="#fabric-piano" class="fabric__tab">Piano</li>
                <div id="fabric-piano" data-tab-content>
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-2/Piano/Piano 01.jpeg" ?>" alt="Tkanina Piano" data-fabric-group="grupa2" loading="lazy">
                <p class="fabric__image-title">01</p>
              </div>
                
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-2/Piano/Piano 02.jpeg" ?>" alt="Tkanina Piano" data-fabric-group="grupa2" loading="lazy">
                <p class="fabric__image-title">02</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-2/Piano/Piano 03.jpeg" ?>" alt="Tkanina Piano" data-fabric-group="grupa2" loading="lazy">
                <p class="fabric__image-title">03</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-2/Piano/Piano 04.jpeg" ?>" alt="Tkanina Piano" data-fabric-group="grupa2" loading="lazy">
                <p class="fabric__image-title">04</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-2/Piano/Piano 05.jpeg" ?>" alt="Tkanina Piano" data-fabric-group="grupa2" loading="lazy">
                <p class="fabric__image-title">05</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-2/Piano/Piano 06.jpeg" ?>" alt="Tkanina Piano" data-fabric-group="grupa2" loading="lazy">
                <p class="fabric__image-title">06</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-2/Piano/Piano 07.jpeg" ?>" alt="Tkanina Piano" data-fabric-group="grupa2" loading="lazy">
                <p class="fabric__image-title">07</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-2/Piano/Piano 08.jpeg" ?>" alt="Tkanina Piano" data-fabric-group="grupa2" loading="lazy">
                <p class="fabric__image-title">08</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-2/Piano/Piano 09.jpeg" ?>" alt="Tkanina Piano" data-fabric-group="grupa2" loading="lazy">
                <p class="fabric__image-title">09</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-2/Piano/Piano 10.jpeg" ?>" alt="Tkanina Piano" data-fabric-group="grupa2" loading="lazy">
                <p class="fabric__image-title">10</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-2/Piano/Piano 11.jpeg" ?>" alt="Tkanina Piano" data-fabric-group="grupa2" loading="lazy">
                <p class="fabric__image-title">11</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-2/Piano/Piano 12.jpeg" ?>" alt="Tkanina Piano" data-fabric-group="grupa2" loading="lazy">
                <p class="fabric__image-title">12</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-2/Piano/Piano 13.jpeg" ?>" alt="Tkanina Piano" data-fabric-group="grupa2" loading="lazy">
                <p class="fabric__image-title">13</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-2/Piano/Piano 14.jpeg" ?>" alt="Tkanina Piano" data-fabric-group="grupa2" loading="lazy">
                <p class="fabric__image-title">14</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-2/Piano/Piano 15.jpeg" ?>" alt="Tkanina Piano" data-fabric-group="grupa2" loading="lazy">
                <p class="fabric__image-title">15</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-2/Piano/Piano 16.jpeg" ?>" alt="Tkanina Piano" data-fabric-group="grupa2" loading="lazy">
                <p class="fabric__image-title">16</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-2/Piano/Piano 17.jpeg" ?>" alt="Tkanina Piano" data-fabric-group="grupa2" loading="lazy">
                <p class="fabric__image-title">17</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-2/Piano/Piano 18.jpeg" ?>" alt="Tkanina Piano" data-fabric-group="grupa2" loading="lazy">
                <p class="fabric__image-title">18</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-2/Piano/Piano 19.jpeg" ?>" alt="Tkanina Piano" data-fabric-group="grupa2" loading="lazy">
                <p class="fabric__image-title">19</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-2/Piano/Piano 20.jpeg" ?>" alt="Tkanina Piano" data-fabric-group="grupa2" loading="lazy">
                <p class="fabric__image-title">20</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-2/Piano/Piano 21.jpeg" ?>" alt="Tkanina Piano" data-fabric-group="grupa2" loading="lazy">
                <p class="fabric__image-title">21</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-2/Piano/Piano 22.jpeg" ?>" alt="Tkanina Piano" data-fabric-group="grupa2" loading="lazy">
                <p class="fabric__image-title">22</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-2/Piano/Piano 23.jpeg" ?>" alt="Tkanina Piano" data-fabric-group="grupa2" loading="lazy">
                <p class="fabric__image-title">23</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-2/Piano/Piano 24.jpeg" ?>" alt="Tkanina Piano" data-fabric-group="grupa2" loading="lazy">
                <p class="fabric__image-title">24</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-2/Piano/Piano 25.jpeg" ?>" alt="Tkanina Piano" data-fabric-group="grupa2" loading="lazy">
                <p class="fabric__image-title">25</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-2/Piano/Piano 26.jpeg" ?>" alt="Tkanina Piano" data-fabric-group="grupa2" loading="lazy">
                <p class="fabric__image-title">26</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-2/Piano/Piano 28.jpeg" ?>" alt="Tkanina Piano" data-fabric-group="grupa2" loading="lazy">
                <p class="fabric__image-title">28</p>
              </div>
              
            </div>
            <li data-tab-target="#fabric-maya" class="fabric__tab">Maya</li>
                <div id="fabric-maya" data-tab-content>
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-3/Maya/Maya 01.jpeg" ?>" alt="Tkanina Maya" data-fabric-group="grupa3" loading="lazy">
                <p class="fabric__image-title">01</p>
              </div>
                
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-3/Maya/Maya 02.jpeg" ?>" alt="Tkanina Maya" data-fabric-group="grupa3" loading="lazy">
                <p class="fabric__image-title">02</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-3/Maya/Maya 03.jpeg" ?>" alt="Tkanina Maya" data-fabric-group="grupa3" loading="lazy">
                <p class="fabric__image-title">03</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-3/Maya/Maya 04.jpeg" ?>" alt="Tkanina Maya" data-fabric-group="grupa3" loading="lazy">
                <p class="fabric__image-title">04</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-3/Maya/Maya 06.jpeg" ?>" alt="Tkanina Maya" data-fabric-group="grupa3" loading="lazy">
                <p class="fabric__image-title">06</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-3/Maya/Maya 07.jpeg" ?>" alt="Tkanina Maya" data-fabric-group="grupa3" loading="lazy">
                <p class="fabric__image-title">07</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-3/Maya/Maya 09.jpeg" ?>" alt="Tkanina Maya" data-fabric-group="grupa3" loading="lazy">
                <p class="fabric__image-title">09</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-3/Maya/Maya 11.jpeg" ?>" alt="Tkanina Maya" data-fabric-group="grupa3" loading="lazy">
                <p class="fabric__image-title">11</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-3/Maya/Maya 13.jpeg" ?>" alt="Tkanina Maya" data-fabric-group="grupa3" loading="lazy">
                <p class="fabric__image-title">13</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-3/Maya/Maya 14.jpeg" ?>" alt="Tkanina Maya" data-fabric-group="grupa3" loading="lazy">
                <p class="fabric__image-title">14</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-3/Maya/Maya 15.jpeg" ?>" alt="Tkanina Maya" data-fabric-group="grupa3" loading="lazy">
                <p class="fabric__image-title">15</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-3/Maya/Maya 16.jpeg" ?>" alt="Tkanina Maya" data-fabric-group="grupa3" loading="lazy">
                <p class="fabric__image-title">16</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-3/Maya/Maya 17.jpeg" ?>" alt="Tkanina Maya" data-fabric-group="grupa3" loading="lazy">
                <p class="fabric__image-title">17</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-3/Maya/Maya 18.jpeg" ?>" alt="Tkanina Maya" data-fabric-group="grupa3" loading="lazy">
                <p class="fabric__image-title">18</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-3/Maya/Maya 19.jpeg" ?>" alt="Tkanina Maya" data-fabric-group="grupa3" loading="lazy">
                <p class="fabric__image-title">19</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-3/Maya/Maya 20.jpeg" ?>" alt="Tkanina Maya" data-fabric-group="grupa3" loading="lazy">
                <p class="fabric__image-title">20</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-3/Maya/Maya 21.jpeg" ?>" alt="Tkanina Maya" data-fabric-group="grupa3" loading="lazy">
                <p class="fabric__image-title">21</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-3/Maya/Maya 22.jpeg" ?>" alt="Tkanina Maya" data-fabric-group="grupa3" loading="lazy">
                <p class="fabric__image-title">22</p>
              </div>
              
            </div>
            
                
                <li data-tab-target="#fabric-charles" class="fabric__tab">Charles</li>
                <div id="fabric-charles" data-tab-content>
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-4/Charles/charles 01.jpeg" ?>" alt="Tkanina Charles" data-fabric-group="grupa4" loading="lazy">
                <p class="fabric__image-title">01</p>
              </div>
                
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-4/Charles/charles 02.jpeg" ?>" alt="Tkanina Charles" data-fabric-group="grupa4" loading="lazy">
                <p class="fabric__image-title">02</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-4/Charles/charles 03.jpeg" ?>" alt="Tkanina Charles" data-fabric-group="grupa4" loading="lazy">
                <p class="fabric__image-title">03</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-4/Charles/charles 04.jpeg" ?>" alt="Tkanina Charles" data-fabric-group="grupa4" loading="lazy">
                <p class="fabric__image-title">04</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-4/Charles/charles 05.jpeg" ?>" alt="Tkanina Charles" data-fabric-group="grupa4" loading="lazy">
                <p class="fabric__image-title">05</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-4/Charles/charles 06.jpeg" ?>" alt="Tkanina Charles" data-fabric-group="grupa4" loading="lazy">
                <p class="fabric__image-title">06</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-4/Charles/charles 07.jpeg" ?>" alt="Tkanina Charles" data-fabric-group="grupa4" loading="lazy">
                <p class="fabric__image-title">07</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-4/Charles/charles 08.jpeg" ?>" alt="Tkanina Charles" data-fabric-group="grupa4" loading="lazy">
                <p class="fabric__image-title">08</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-4/Charles/charles 09.jpeg" ?>" alt="Tkanina Charles" data-fabric-group="grupa4" loading="lazy">
                <p class="fabric__image-title">09</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-4/Charles/charles 10.jpeg" ?>" alt="Tkanina Charles" data-fabric-group="grupa4" loading="lazy">
                <p class="fabric__image-title">10</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-4/Charles/charles 11.jpeg" ?>" alt="Tkanina Charles" data-fabric-group="grupa4" loading="lazy">
                <p class="fabric__image-title">11</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-4/Charles/charles 12.jpeg" ?>" alt="Tkanina Charles" data-fabric-group="grupa4" loading="lazy">
                <p class="fabric__image-title">12</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-4/Charles/charles 13.jpeg" ?>" alt="Tkanina Charles" data-fabric-group="grupa4" loading="lazy">
                <p class="fabric__image-title">13</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-4/Charles/charles 14.jpeg" ?>" alt="Tkanina Charles" data-fabric-group="grupa4" loading="lazy">
                <p class="fabric__image-title">14</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-4/Charles/charles 15.jpeg" ?>" alt="Tkanina Charles" data-fabric-group="grupa4" loading="lazy">
                <p class="fabric__image-title">15</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-4/Charles/charles 16.jpeg" ?>" alt="Tkanina Charles" data-fabric-group="grupa4" loading="lazy">
                <p class="fabric__image-title">16</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-4/Charles/charles 17.jpeg" ?>" alt="Tkanina Charles" data-fabric-group="grupa4" loading="lazy">
                <p class="fabric__image-title">17</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-4/Charles/charles 18.jpeg" ?>" alt="Tkanina Charles" data-fabric-group="grupa4" loading="lazy">
                <p class="fabric__image-title">18</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-4/Charles/charles 19.jpeg" ?>" alt="Tkanina Charles" data-fabric-group="grupa4" loading="lazy">
                <p class="fabric__image-title">19</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-4/Charles/charles 21.jpeg" ?>" alt="Tkanina Charles" data-fabric-group="grupa4" loading="lazy">
                <p class="fabric__image-title">21</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-4/Charles/charles 22.jpeg" ?>" alt="Tkanina Charles" data-fabric-group="grupa4" loading="lazy">
                <p class="fabric__image-title">22</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-4/Charles/charles 23.jpeg" ?>" alt="Tkanina Charles" data-fabric-group="grupa4" loading="lazy">
                <p class="fabric__image-title">23</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-4/Charles/charles 24.jpeg" ?>" alt="Tkanina Charles" data-fabric-group="grupa4" loading="lazy">
                <p class="fabric__image-title">24</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-4/Charles/charles 25.jpeg" ?>" alt="Tkanina Charles" data-fabric-group="grupa4" loading="lazy">
                <p class="fabric__image-title">25</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-4/Charles/charles 26.jpeg" ?>" alt="Tkanina Charles" data-fabric-group="grupa4" loading="lazy">
                <p class="fabric__image-title">26</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-4/Charles/charles 27.jpeg" ?>" alt="Tkanina Charles" data-fabric-group="grupa4" loading="lazy">
                <p class="fabric__image-title">27</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-4/Charles/charles 28.jpeg" ?>" alt="Tkanina Charles" data-fabric-group="grupa4" loading="lazy">
                <p class="fabric__image-title">28</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-4/Charles/charles 29.jpeg" ?>" alt="Tkanina Charles" data-fabric-group="grupa4" loading="lazy">
                <p class="fabric__image-title">29</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-4/Charles/charles 30.jpeg" ?>" alt="Tkanina Charles" data-fabric-group="grupa4" loading="lazy">
                <p class="fabric__image-title">30</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-4/Charles/charles 31.jpeg" ?>" alt="Tkanina Charles" data-fabric-group="grupa4" loading="lazy">
                <p class="fabric__image-title">31</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-4/Charles/charles 32.jpeg" ?>" alt="Tkanina Charles" data-fabric-group="grupa4" loading="lazy">
                <p class="fabric__image-title">32</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-4/Charles/charles 33.jpeg" ?>" alt="Tkanina Charles" data-fabric-group="grupa4" loading="lazy">
                <p class="fabric__image-title">33</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-4/Charles/charles 34.jpeg" ?>" alt="Tkanina Charles" data-fabric-group="grupa4" loading="lazy">
                <p class="fabric__image-title">34</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-4/Charles/charles 35.jpeg" ?>" alt="Tkanina Charles" data-fabric-group="grupa4" loading="lazy">
                <p class="fabric__image-title">35</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-4/Charles/charles 36.jpeg" ?>" alt="Tkanina Charles" data-fabric-group="grupa4" loading="lazy">
                <p class="fabric__image-title">36</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-4/Charles/charles 37.jpeg" ?>" alt="Tkanina Charles" data-fabric-group="grupa4" loading="lazy">
                <p class="fabric__image-title">37</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-4/Charles/charles 38.jpeg" ?>" alt="Tkanina Charles" data-fabric-group="grupa4" loading="lazy">
                <p class="fabric__image-title">38</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-4/Charles/charles 39.jpeg" ?>" alt="Tkanina Charles" data-fabric-group="grupa4" loading="lazy">
                <p class="fabric__image-title">39</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-4/Charles/charles 40.jpeg" ?>" alt="Tkanina Charles" data-fabric-group="grupa4" loading="lazy">
                <p class="fabric__image-title">40</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-4/Charles/charles 41.jpeg" ?>" alt="Tkanina Charles" data-fabric-group="grupa4" loading="lazy">
                <p class="fabric__image-title">41</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-4/Charles/charles 42.jpeg" ?>" alt="Tkanina Charles" data-fabric-group="grupa4" loading="lazy">
                <p class="fabric__image-title">42</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-4/Charles/charles 43.jpeg" ?>" alt="Tkanina Charles" data-fabric-group="grupa4" loading="lazy">
                <p class="fabric__image-title">43</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-4/Charles/charles 44.jpeg" ?>" alt="Tkanina Charles" data-fabric-group="grupa4" loading="lazy">
                <p class="fabric__image-title">44</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-4/Charles/charles 45.jpeg" ?>" alt="Tkanina Charles" data-fabric-group="grupa4" loading="lazy">
                <p class="fabric__image-title">45</p>
              </div>
              
            </div>
            <li data-tab-target="#fabric-napoli" class="fabric__tab">Napoli</li>
            <div id="fabric-napoli" data-tab-content>
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Napoli/napoli01.jpg" ?>" alt="Tkanina Napoli" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">01</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Napoli/napoli02.jpg" ?>" alt="Tkanina Napoli" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">02</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Napoli/napoli03.jpg" ?>" alt="Tkanina Napoli" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">03</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Napoli/napoli04.jpg" ?>" alt="Tkanina Napoli" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">04</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Napoli/napoli06.jpg" ?>" alt="Tkanina Napoli" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">06</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Napoli/napoli07.jpg" ?>" alt="Tkanina Napoli" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">07</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Napoli/napoli08.jpg" ?>" alt="Tkanina Napoli" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">08</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Napoli/napoli09.jpg" ?>" alt="Tkanina Napoli" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">09</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Napoli/napoli10.jpg" ?>" alt="Tkanina Napoli" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">10</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Napoli/napoli11.jpg" ?>" alt="Tkanina Napoli" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">11</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Napoli/napoli12_1.jpg" ?>" alt="Tkanina Napoli" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">12</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Napoli/napoli13.jpg" ?>" alt="Tkanina Napoli" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">13</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Napoli/napoli14.jpg" ?>" alt="Tkanina Napoli" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">14</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Napoli/napoli15.jpg" ?>" alt="Tkanina Napoli" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">15</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Napoli/napoli16.jpg" ?>" alt="Tkanina Napoli" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">16</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Napoli/napoli17.jpg" ?>" alt="Tkanina Napoli" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">17</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Napoli/napoli18.jpg" ?>" alt="Tkanina Napoli" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">18</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Napoli/napoli19.jpg" ?>" alt="Tkanina Napoli" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">19</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Napoli/napoli20.jpg" ?>" alt="Tkanina Napoli" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">20</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Napoli/napoli21.jpg" ?>" alt="Tkanina Napoli" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">21</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Napoli/napoli22_1.jpg" ?>" alt="Tkanina Napoli" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">22</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Napoli/napoli23_1.jpg" ?>" alt="Tkanina Napoli" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">23</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Napoli/napoli24_1.jpg" ?>" alt="Tkanina Napoli" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">24</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Napoli/napoli25_1.jpg" ?>" alt="Tkanina Napoli" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">25</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Napoli/napoli26_1.jpg" ?>" alt="Tkanina Napoli" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">26</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Napoli/napoli27_1.jpg" ?>" alt="Tkanina Napoli" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">27</p>
    </div>
</div>
<li data-tab-target="#fabric-dream-velvet" class="fabric__tab">Dream Velvet</li>
<div id="fabric-dream-velvet" data-tab-content>
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Dream Velvet/202.01.jpg" ?>" alt="Tkanina Dream Velvet" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">01</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Dream Velvet/202.02.jpg" ?>" alt="Tkanina Dream Velvet" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">02</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Dream Velvet/202.03.jpg" ?>" alt="Tkanina Dream Velvet" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">03</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Dream Velvet/202.04.jpg" ?>" alt="Tkanina Dream Velvet" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">04</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Dream Velvet/202.05.jpg" ?>" alt="Tkanina Dream Velvet" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">05</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Dream Velvet/202.06.jpg" ?>" alt="Tkanina Dream Velvet" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">06</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Dream Velvet/202.07.jpg" ?>" alt="Tkanina Dream Velvet" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">07</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Dream Velvet/202.08.jpg" ?>" alt="Tkanina Dream Velvet" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">08</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Dream Velvet/202.09.jpg" ?>" alt="Tkanina Dream Velvet" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">09</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Dream Velvet/202.10.jpg" ?>" alt="Tkanina Dream Velvet" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">10</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Dream Velvet/202.11.jpg" ?>" alt="Tkanina Dream Velvet" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">11</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Dream Velvet/202.12.jpg" ?>" alt="Tkanina Dream Velvet" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">12</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Dream Velvet/202.13.jpg" ?>" alt="Tkanina Dream Velvet" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">13</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Dream Velvet/202.14.jpg" ?>" alt="Tkanina Dream Velvet" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">14</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Dream Velvet/202.15.jpg" ?>" alt="Tkanina Dream Velvet" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">15</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Dream Velvet/202.16.jpg" ?>" alt="Tkanina Dream Velvet" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">16</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Dream Velvet/202.17.jpg" ?>" alt="Tkanina Dream Velvet" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">17</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Dream Velvet/202.18.jpg" ?>" alt="Tkanina Dream Velvet" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">18</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Dream Velvet/202.19.jpg" ?>" alt="Tkanina Dream Velvet" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">19</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Dream Velvet/202.20.jpg" ?>" alt="Tkanina Dream Velvet" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">20</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Dream Velvet/202.21.jpg" ?>" alt="Tkanina Dream Velvet" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">21</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Dream Velvet/202.22.jpg" ?>" alt="Tkanina Dream Velvet" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">22</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Dream Velvet/202.23.jpg" ?>" alt="Tkanina Dream Velvet" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">23</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Dream Velvet/202.24.jpg" ?>" alt="Tkanina Dream Velvet" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">24</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Dream Velvet/202.25.jpg" ?>" alt="Tkanina Dream Velvet" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">25</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Dream Velvet/202.26.jpg" ?>" alt="Tkanina Dream Velvet" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">26</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Dream Velvet/202.27.jpg" ?>" alt="Tkanina Dream Velvet" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">27</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Dream Velvet/202.28.jpg" ?>" alt="Tkanina Dream Velvet" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">28</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Dream Velvet/202.29.jpg" ?>" alt="Tkanina Dream Velvet" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">29</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Dream Velvet/202.30.jpg" ?>" alt="Tkanina Dream Velvet" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">30</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Dream Velvet/202.31.jpg" ?>" alt="Tkanina Dream Velvet" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">31</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Dream Velvet/202.32.jpg" ?>" alt="Tkanina Dream Velvet" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">32</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Dream Velvet/202.33.jpg" ?>" alt="Tkanina Dream Velvet" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">33</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Dream Velvet/202.34.jpg" ?>" alt="Tkanina Dream Velvet" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">34</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Dream Velvet/202.35.jpg" ?>" alt="Tkanina Dream Velvet" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">35</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Dream Velvet/202.36.jpg" ?>" alt="Tkanina Dream Velvet" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">36</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Dream Velvet/202.37.jpg" ?>" alt="Tkanina Dream Velvet" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">37</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Dream Velvet/202.38.jpg" ?>" alt="Tkanina Dream Velvet" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">38</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Dream Velvet/202.39.jpg" ?>" alt="Tkanina Dream Velvet" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">39</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Dream Velvet/202.40.jpg" ?>" alt="Tkanina Dream Velvet" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">40</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Dream Velvet/202.41.jpg" ?>" alt="Tkanina Dream Velvet" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">41</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Dream Velvet/202.42.jpg" ?>" alt="Tkanina Dream Velvet" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">42</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Dream Velvet/202.43.jpg" ?>" alt="Tkanina Dream Velvet" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">43</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Dream Velvet/202.44.jpg" ?>" alt="Tkanina Dream Velvet" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">44</p>
    </div>
</div>
<li data-tab-target="#fabric-magic-velvet" class="fabric__tab">Magic Velvet</li>
<div id="fabric-magic-velvet" data-tab-content>
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Magic Velvet/2200.jpg" ?>" alt="Tkanina Magic Velvet" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">2200</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Magic Velvet/2201.jpg" ?>" alt="Tkanina Magic Velvet" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">2201</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Magic Velvet/2202.jpg" ?>" alt="Tkanina Magic Velvet" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">2202</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Magic Velvet/2204.jpg" ?>" alt="Tkanina Magic Velvet" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">2204</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Magic Velvet/2205.jpg" ?>" alt="Tkanina Magic Velvet" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">2205</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Magic Velvet/2206.jpg" ?>" alt="Tkanina Magic Velvet" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">2206</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Magic Velvet/2207.jpg" ?>" alt="Tkanina Magic Velvet" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">2207</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Magic Velvet/2208.jpg" ?>" alt="Tkanina Magic Velvet" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">2208</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Magic Velvet/2209.jpg" ?>" alt="Tkanina Magic Velvet" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">2209</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Magic Velvet/2210.jpg" ?>" alt="Tkanina Magic Velvet" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">2210</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Magic Velvet/2213.jpg" ?>" alt="Tkanina Magic Velvet" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">2213</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Magic Velvet/2214.jpg" ?>" alt="Tkanina Magic Velvet" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">2214</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Magic Velvet/2216.jpg" ?>" alt="Tkanina Magic Velvet" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">2216</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Magic Velvet/2217.jpg" ?>" alt="Tkanina Magic Velvet" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">2217</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Magic Velvet/2218.jpg" ?>" alt="Tkanina Magic Velvet" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">2218</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Magic Velvet/2219.jpg" ?>" alt="Tkanina Magic Velvet" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">2219</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Magic Velvet/2229.jpg" ?>" alt="Tkanina Magic Velvet" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">2229</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Magic Velvet/2239.jpg" ?>" alt="Tkanina Magic Velvet" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">2239</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Magic Velvet/2241.jpg" ?>" alt="Tkanina Magic Velvet" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">2241</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Magic Velvet/2256.jpg" ?>" alt="Tkanina Magic Velvet" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">2256</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Magic Velvet/2262.jpg" ?>" alt="Tkanina Magic Velvet" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">2262</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Magic Velvet/2270.jpg" ?>" alt="Tkanina Magic Velvet" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">2270</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Magic Velvet/2271.jpg" ?>" alt="Tkanina Magic Velvet" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">2271</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Magic Velvet/2272.jpg" ?>" alt="Tkanina Magic Velvet" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">2272</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Magic Velvet/2273.jpg" ?>" alt="Tkanina Magic Velvet" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">2273</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Magic Velvet/2274.jpg" ?>" alt="Tkanina Magic Velvet" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">2274</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Magic Velvet/2292.jpg" ?>" alt="Tkanina Magic Velvet" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">2292</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Magic Velvet/2295.jpg" ?>" alt="Tkanina Magic Velvet" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">2295</p>
    </div>
</div>
<li data-tab-target="#fabric-venus-velvet" class="fabric__tab">Venus Velvet</li>

<div id="fabric-venus-velvet" data-tab-content>
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Venus Velvet/2911.jpg" ?>" alt="Tkanina Venus Velvet" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">2911</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Venus Velvet/2914.jpg" ?>" alt="Tkanina Venus Velvet" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">2914</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Venus Velvet/2917.jpg" ?>" alt="Tkanina Venus Velvet" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">2917</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Venus Velvet/2918.jpg" ?>" alt="Tkanina Venus Velvet" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">2918</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Venus Velvet/2919.jpg" ?>" alt="Tkanina Venus Velvet" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">2919</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Venus Velvet/2921.jpg" ?>" alt="Tkanina Venus Velvet" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">2921</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Venus Velvet/2922.jpg" ?>" alt="Tkanina Venus Velvet" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">2922</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Venus Velvet/2924.jpg" ?>" alt="Tkanina Venus Velvet" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">2924</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Venus Velvet/2925.jpg" ?>" alt="Tkanina Venus Velvet" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">2925</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Venus Velvet/2927.jpg" ?>" alt="Tkanina Venus Velvet" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">2927</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Venus Velvet/2928.jpg" ?>" alt="Tkanina Venus Velvet" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">2928</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Venus Velvet/2929.jpg" ?>" alt="Tkanina Venus Velvet" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">2929</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Venus Velvet/2930.jpg" ?>" alt="Tkanina Venus Velvet" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">2930</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Venus Velvet/2931.jpg" ?>" alt="Tkanina Venus Velvet" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">2931</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Venus Velvet/2937.jpg" ?>" alt="Tkanina Venus Velvet" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">2937</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Venus Velvet/venus-velvet-2923.jpg" ?>" alt="Tkanina Venus Velvet" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">2923</p>
    </div>
</div>
<li data-tab-target="#fabric-chill-me" class="fabric__tab">Chill me</li>
<div id="fabric-chill-me" data-tab-content>
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - chill me/chill_me_01.jpg" ?>" alt="Tkanina Chill Me" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">Chill me 01</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - chill me/chill_me_02.jpg" ?>" alt="Tkanina Chill Me" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">Chill me 02</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - chill me/chill_me_03.jpg" ?>" alt="Tkanina Chill Me" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">Chill me 03</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - chill me/chill_me_04.jpg" ?>" alt="Tkanina Chill Me" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">Chill me 04</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - chill me/chill_me_05.jpg" ?>" alt="Tkanina Chill Me" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">Chill me 05</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - chill me/chill_me_06.jpg" ?>" alt="Tkanina Chill Me" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">Chill me 06</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - chill me/chill_me_07.jpg" ?>" alt="Tkanina Chill Me" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">Chill me 07</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - chill me/chill_me_08.jpg" ?>" alt="Tkanina Chill Me" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">Chill me 08</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - chill me/chill_me_09.jpg" ?>" alt="Tkanina Chill Me" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">Chill me 09</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - chill me/chill_me_10.jpg" ?>" alt="Tkanina Chill Me" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">Chill me 10</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - chill me/chill_me_11.jpg" ?>" alt="Tkanina Chill Me" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">Chill me 11</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - chill me/chill_me_12.jpg" ?>" alt="Tkanina Chill Me" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">Chill me 12</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - chill me/chill_me_13.jpg" ?>" alt="Tkanina Chill Me" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">Chill me 13</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - chill me/chill_me_14.jpg" ?>" alt="Tkanina Chill Me" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">Chill me 14</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - chill me/chill_me_15.jpg" ?>" alt="Tkanina Chill Me" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">Chill me 15</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - chill me/chill_me_16.jpg" ?>" alt="Tkanina Chill Me" data-fabric-group="grupa4" loading="lazy">
        <p class="fabric__image-title">Chill me 16</p>
    </div>
</div>



             </ul>
             <li class="fabric__submenu-item">
              Boucle
              <a class="fabric__submenu-btn" id="fabric__submenu-btn-5">+</a>
            </li>
            <ul class="fabric__tabs" id="fabric__tabs-5">
            <li data-tab-target="#fabric-baloo" class="fabric__tab">Baloo</li>
                <div id="fabric-baloo" data-tab-content>
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-3/Baloo/baloo 2071.jpeg" ?>" alt="Tkanina Baloo" data-fabric-group="grupa3" loading="lazy">
                <p class="fabric__image-title">2071</p>
              </div>
                
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-3/Baloo/Baloo 2072.jpeg" ?>" alt="Tkanina Baloo" data-fabric-group="grupa3" loading="lazy">
                <p class="fabric__image-title">2072</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-3/Baloo/Baloo 2073.jpeg" ?>" alt="Tkanina Baloo" data-fabric-group="grupa3" loading="lazy">
                <p class="fabric__image-title">2073</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-3/Baloo/Baloo 2074.jpeg" ?>" alt="Tkanina Baloo" data-fabric-group="grupa3" loading="lazy">
                <p class="fabric__image-title">2074</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-3/Baloo/Baloo 2075.jpeg" ?>" alt="Tkanina Baloo" data-fabric-group="grupa3" loading="lazy">
                <p class="fabric__image-title">2075</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-3/Baloo/Baloo 2076.jpeg" ?>" alt="Tkanina Baloo" data-fabric-group="grupa3" loading="lazy">
                <p class="fabric__image-title">2076</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-3/Baloo/Baloo 2077.jpeg" ?>" alt="Tkanina Baloo" data-fabric-group="grupa3" loading="lazy">
                <p class="fabric__image-title">2077</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-3/Baloo/baloo 2078.jpeg" ?>" alt="Tkanina Baloo" data-fabric-group="grupa3" loading="lazy">
                <p class="fabric__image-title">2078</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-3/Baloo/Baloo 2079.jpeg" ?>" alt="Tkanina Baloo" data-fabric-group="grupa3" loading="lazy">
                <p class="fabric__image-title">2079</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-3/Baloo/Baloo 2080.jpeg" ?>" alt="Tkanina Baloo" data-fabric-group="grupa3" loading="lazy">
                <p class="fabric__image-title">2080</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-3/Baloo/Baloo 2081.jpeg" ?>" alt="Tkanina Baloo" data-fabric-group="grupa3" loading="lazy">
                <p class="fabric__image-title">2081</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-3/Baloo/Baloo 2082.jpeg" ?>" alt="Tkanina Baloo" data-fabric-group="grupa3" loading="lazy">
                <p class="fabric__image-title">2082</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-3/Baloo/Baloo 2083.jpeg" ?>" alt="Tkanina Baloo" data-fabric-group="grupa3" loading="lazy">
                <p class="fabric__image-title">2083</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-3/Baloo/Baloo 2084.jpeg" ?>" alt="Tkanina Baloo" data-fabric-group="grupa3" loading="lazy">
                <p class="fabric__image-title">2084</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-3/Baloo/Baloo 2085.jpeg" ?>" alt="Tkanina Baloo" data-fabric-group="grupa3" loading="lazy">
                <p class="fabric__image-title">2085</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-3/Baloo/Baloo 2086.jpeg" ?>" alt="Tkanina Baloo" data-fabric-group="grupa3" loading="lazy">
                <p class="fabric__image-title">2086</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-3/Baloo/Baloo 2087.jpeg" ?>" alt="Tkanina Baloo" data-fabric-group="grupa3" loading="lazy">
                <p class="fabric__image-title">2087</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-3/Baloo/Baloo 2088.jpeg" ?>" alt="Tkanina Baloo" data-fabric-group="grupa3" loading="lazy">
                <p class="fabric__image-title">2088</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-3/Baloo/Baloo 2089.jpeg" ?>" alt="Tkanina Baloo" data-fabric-group="grupa3" loading="lazy">
                <p class="fabric__image-title">2089</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-3/Baloo/Baloo 2090.jpeg" ?>" alt="Tkanina Baloo" data-fabric-group="grupa3" loading="lazy">
                <p class="fabric__image-title">2090</p>
              </div>
              
            </div>
           
               
            <li data-tab-target="#fabric-presence" class="fabric__tab">Presence</li>
                <div id="fabric-presence" data-tab-content>
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-3/Presence/Presence-01-eb669.jpg" ?>" alt="Tkanina Presence" data-fabric-group="grupa3" loading="lazy">
                <p class="fabric__image-title">01</p>
              </div>
                
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-3/Presence/Presence-05-ed05a.jpg" ?>" alt="Tkanina Presence" data-fabric-group="grupa3" loading="lazy">
                <p class="fabric__image-title">05</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-3/Presence/Presence-06-d8b63.jpg" ?>" alt="Tkanina Presence" data-fabric-group="grupa3" loading="lazy">
                <p class="fabric__image-title">06</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-3/Presence/Presence-07-d2121.jpg" ?>" alt="Tkanina Presence" data-fabric-group="grupa3" loading="lazy">
                <p class="fabric__image-title">07</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-3/Presence/Presence-08-65e25.jpg" ?>" alt="Tkanina Presence" data-fabric-group="grupa3" loading="lazy">
                <p class="fabric__image-title">08</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-3/Presence/Presence-20-998bc.jpg" ?>" alt="Tkanina Presence" data-fabric-group="grupa3" loading="lazy">
                <p class="fabric__image-title">20</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-3/Presence/Presence-48-758aa.jpg" ?>" alt="Tkanina Presence" data-fabric-group="grupa3" loading="lazy">
                <p class="fabric__image-title">48</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-3/Presence/Presence-55-014c0.jpg" ?>" alt="Tkanina Presence" data-fabric-group="grupa3" loading="lazy">
                <p class="fabric__image-title">55</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-3/Presence/Presence-70-c3cf4.jpg" ?>" alt="Tkanina Presence" data-fabric-group="grupa3" loading="lazy">
                <p class="fabric__image-title">70</p>
              </div>
              
            </div>
            <li data-tab-target="#fabric-mansila" class="fabric__tab">Mansila</li>
            <div id="fabric-mansila" data-tab-content>
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Mansila/mansila-01.jpg" ?>" alt="Tkanina Mansila" data-fabric-group="grupa3" loading="lazy">
        <p class="fabric__image-title">Mansila 01</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Mansila/mansila-02.jpg" ?>" alt="Tkanina Mansila" data-fabric-group="grupa3" loading="lazy">
        <p class="fabric__image-title">Mansila 02</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Mansila/mansila-03.jpg" ?>" alt="Tkanina Mansila" data-fabric-group="grupa3" loading="lazy">
        <p class="fabric__image-title">Mansila 03</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Mansila/mansila-04.jpg" ?>" alt="Tkanina Mansila" data-fabric-group="grupa3" loading="lazy">
        <p class="fabric__image-title">Mansila 04</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Mansila/mansila-05.jpg" ?>" alt="Tkanina Mansila" data-fabric-group="grupa3" loading="lazy">
        <p class="fabric__image-title">Mansila 05</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Mansila/mansila-06.jpg" ?>" alt="Tkanina Mansila" data-fabric-group="grupa3" loading="lazy">
        <p class="fabric__image-title">Mansila 06</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Mansila/mansila-07.jpg" ?>" alt="Tkanina Mansila" data-fabric-group="grupa3" loading="lazy">
        <p class="fabric__image-title">Mansila 07</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Mansila/mansila-08.jpg" ?>" alt="Tkanina Mansila" data-fabric-group="grupa3" loading="lazy">
        <p class="fabric__image-title">Mansila 08</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Mansila/mansila-09.jpg" ?>" alt="Tkanina Mansila" data-fabric-group="grupa3" loading="lazy">
        <p class="fabric__image-title">Mansila 09</p>
    </div>
    
    <div class="fabric__image-box">
        <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Tkanina - Mansila/mansila-10.jpg" ?>" alt="Tkanina Mansila" data-fabric-group="grupa3" loading="lazy">
        <p class="fabric__image-title">Mansila 10</p>
    </div>
</div>

               
             </ul>
          </ul>
    
    </div>
        <p>
          <input class="custom-input" placeholder="Wprowadź nazwę tkaniny, np: BOSS 01" name="custom_text_add_on" value="<?php $value ?>">
        </p>

        <a class="confirm-btn">Zatwierdź</a>
    </div>
    
<script>

const fabricImages = document.querySelectorAll('.fabric__image')
const fabricInput = document.querySelector('.custom-input')
const customFabric =document.querySelector('.custom-fabric')
const anyFabric = document.querySelector('[data-value="dowolna-tkanina"]')
const closeFabric = document.querySelector('.close-btn')
const confirmBtn =document.querySelector('.confirm-btn')
const overlay = document.querySelector('.custom-overlay')
const fabricsList = document.querySelector('[aria-label="Sugerowana Tkanina"]')



 

anyFabric.addEventListener('click', () =>{
  customFabric.classList.add('active')
overlay.classList.add('active')
})

closeFabric.addEventListener('click', () => {
  customFabric.classList.remove('active')
  overlay.classList.remove('active')
})

confirmBtn.addEventListener('click', () => {
  customFabric.classList.remove('active')
  overlay.classList.remove('active')
})

fabricImages.forEach(image => {
  image.addEventListener('click', () => {
    const filename = image.src.replace(/^.*[\\\/]/, '')
    console.log(filename);
fabricInput.value = filename
			.split('.')[0]
			.split('_')
			.join(' ')
			.split('-')
			.join(' ')
			.split('%20')
			.join(' ')
			.split('plaskie')
			.join(' ')
  })
});

const allFabrics = fabricsList.getElementsByTagName('li')
Array.from(allFabrics).forEach(function (element) {
console.log(element);
const value = element.dataset.value
element.addEventListener('click', () => {
console.log(value);

if (value === 'dowolna-tkanina'){
  console.log('true')} 
  else {
    console.log('false');
    fabricInput.value = ''
  }

})

});




</script>

    
    <?php
    endif;
    

    
}




// add_action( 'woocommerce_after_order_notes', 'wpdesk_vat_field' );
// /**
// * Pole NIP w zamówieniu
// */
// function wpdesk_vat_field( $checkout ) {

//     echo '<div id="wpdesk_vat_field"><h3>' . __('Dane do Faktury') . '</h3>';
    
//     woocommerce_form_field( 'vat_number', array(
//         'type'          => 'text',
//         'class'         => array( 'vat-number-field form-row-wide') ,
//         'label'         => __( 'NIP' ),
//         'placeholder'   => __( 'Wpisz NIP, aby otrzymać fakturę' ),
//     ), $checkout->get_value( 'vat_number' ));
    
//     echo '</div>';

// }

// add_action( 'woocommerce_checkout_update_order_meta', 'wpdesk_checkout_vat_number_update_order_meta' );
// /**
// * Save VAT Number in the order meta
// */
// function wpdesk_checkout_vat_number_update_order_meta( $order_id ) {
//     if ( ! empty( $_POST['vat_number'] ) ) {
//         update_post_meta( $order_id, '_vat_number', sanitize_text_field( $_POST['vat_number'] ) );
//     }
// }

// add_action( 'woocommerce_admin_order_data_after_billing_address', 'wpdesk_vat_number_display_admin_order_meta', 10, 1 );
// /**
//  * Wyświetlenie pola NIP
//  */
// function wpdesk_vat_number_display_admin_order_meta( $order ) {
//     echo '<p><strong>' . __( 'NIP', 'woocommerce' ) . ':</strong> ' . get_post_meta( $order->id, '_vat_number', true ) . '</p>';
// }


// add_filter( 'woocommerce_email_order_meta_keys', 'wpdesk_vat_number_display_email' );
// /**
// * Pole NIP w mailu
// */
// function wpdesk_vat_number_display_email( $keys ) {
//      $keys['NIP'] = '_vat_number';
//      return $keys;
// }

 
// -----------------------------------------
// 2. Throw error if custom input field empty
 
// add_filter( 'woocommerce_add_to_cart_validation', 'bbloomer_product_add_on_validation', 10, 3 );
 
// function bbloomer_product_add_on_validation( $passed, $product_id, $qty ){
//    if( isset( $_POST['custom_text_add_on'] ) && sanitize_text_field( $_POST['custom_text_add_on'] ) == '' ) {
//       wc_add_notice( 'Custom Text Add-On is a required field', 'error' );
//       $passed = false;
//    }
//    return $passed;
// }
 
// -----------------------------------------
// 3. Save custom input field value into cart item data
 
add_filter( 'woocommerce_add_cart_item_data', 'bbloomer_product_add_on_cart_item_data', 10, 2 );
 
function bbloomer_product_add_on_cart_item_data( $cart_item, $product_id ){
    if( isset( $_POST['custom_text_add_on'] ) ) {
        $cart_item['custom_text_add_on'] = sanitize_text_field( $_POST['custom_text_add_on'] );
    }
    return $cart_item;
}
 
// -----------------------------------------
// 4. Display custom input field value @ Cart
 
add_filter( 'woocommerce_get_item_data', 'bbloomer_product_add_on_display_cart', 10, 2 );
 
function bbloomer_product_add_on_display_cart( $data, $cart_item ) {
    if ( isset( $cart_item['custom_text_add_on'] ) ){
        $data[] = array(
            'name' => 'Dowolna Tkanina',
            'value' => sanitize_text_field( $cart_item['custom_text_add_on'] )
        );
    }
    return $data;
}
 
// -----------------------------------------
// 5. Save custom input field value into order item meta
 
add_action( 'woocommerce_add_order_item_meta', 'bbloomer_product_add_on_order_item_meta', 10, 2 );
 
function bbloomer_product_add_on_order_item_meta( $item_id, $values ) {
    if ( ! empty( $values['custom_text_add_on'] ) ) {
        wc_add_order_item_meta( $item_id, 'Dowolna Tkanina', $values['custom_text_add_on'], true );
    }
}
 
// -----------------------------------------
// 6. Display custom input field value into order table
 
add_filter( 'woocommerce_order_item_product', 'bbloomer_product_add_on_display_order', 10, 2 );
 
function bbloomer_product_add_on_display_order( $cart_item, $order_item ){
    if( isset( $order_item['custom_text_add_on'] ) ){
        $cart_item['custom_text_add_on'] = $order_item['custom_text_add_on'];
    }
    return $cart_item;
}
 
// -----------------------------------------
// 7. Display custom input field value into order emails
 
add_filter( 'woocommerce_email_order_meta_fields', 'bbloomer_product_add_on_display_emails' );
 
function bbloomer_product_add_on_display_emails( $fields ) { 
    $fields['custom_text_add_on'] = 'Dowolna Tkanina:';
    return $fields; 
}

add_action( 'woocommerce_after_add_to_cart_button', 'add_content_after_addtocart_button_func' );
/*
 * Content below "Add to cart" Button.
 */
function add_content_after_addtocart_button_func() {
?>
   <script type="text/javascript" style="display:none;">
        let caratySelector = '.caraty-price-';
        if(document.querySelectorAll('.caraty-product').length > 1) {
            caratySelector = '.caraty-product .caraty-price-';
        }

        function reformat(price) {
            price = price.replace(new RegExp('[^0-9,.]', 'gi'), '');

            let lastComma = price.lastIndexOf(',');
            let lastPoint = price.lastIndexOf('.');

            if (lastComma === -1 && lastPoint === -1) {
                return price + '.00';
            }
            if (lastComma !== -1 && lastPoint !== -1) {
                if (lastComma > lastPoint) {
                    price = price.replace(new RegExp('\\.', 'gi'), '').replace(new RegExp(',', 'gi'), '.');
                } else {
                    price = price.replace(new RegExp(',', 'gi'), '');
                }
            } else if (lastPoint === -1) {
                price = price.replace(',', '.');
            }
            lastPoint = price.lastIndexOf('.');

            if (lastPoint !== price.length - 3) {
                return price.replace('.', '') + '.00';
            }
            if (lastPoint === -1) {
                return price + '.00';
            }
            return price;
        }

        function PoliczRateCA() {
            let price = document.querySelectorAll(getPriceSelector())[0].textContent
            price = reformat(price);
            url = 'https://ewniosek.credit-agricole.pl/eWniosek/simulator.jsp?PARAM_TYPE=RAT&PARAM_PROFILE=<?php echo get_option('caraty_psp'); ?>&PARAM_CREDIT_AMOUNT=' + price + '<?php if (!empty($offerId)) { echo '&offerId=' . $offerId; }?>'
            if(<?php echo get_option("caraty_img_calc"); ?>) {
                url += '&cart.imageUrl=' + getImg();
            }
            window.open(url, 'Policz_rate');
            return false;
        }

        function getImg() {
            if('<?php echo get_option("caraty_image_selector") ?>' != ''){
                // getImg = '<?php echo get_option("caraty_image_selector") ?>';
                // getImg = getImg.replace(/\\"/g, '"');
                return eval('<?php echo get_option("caraty_image_selector") ?>');
            }
            return document.querySelectorAll('.wp-post-image')[0].src;
        }

        function isCustomSelector() {
            if ('<?php echo get_option("caraty_product_selector"); ?>' !== '') {
                return document.querySelectorAll('<?php echo get_option("caraty_product_selector"); ?>').length !== 0
            }
            return false
        }

        function getPriceSelector() {
            if (isCustomSelector()) {
                return '<?php echo get_option("caraty_product_selector"); ?>'
            }

            let productId = getProductId();
            let discount = hasDiscount(productId);
            if (discount) {
                return discount;
            }
            return  caratySelector + productId;
        }

        function getProductId() {
            if (hasVariations()) {
                var id = document.getElementsByName('variation_id')[0].value;
                 if(document.querySelectorAll(caratySelector + id).length > 0) {
                    return id;
                 }
            }
            return document.getElementsByName('add-to-cart')[0].value;
        }

        function hasVariations() {
            return document.querySelectorAll('.variations').length > 0;
        }

        function hasDiscount(productId) {
            selector = caratySelector + productId
            if(document.querySelectorAll(selector + ' ins').length > 0){
                return caratySelector + productId + ' ins';
            }
            if(document.querySelectorAll(selector + ' bdi').length > 0){
                return caratySelector + productId + ' bdi';
            }
            return false;
        }
    </script>
   <p id="caraty" class="buttons_bottom_block">
        <?php if ($logoCalc === null) : ?>
        <a target="raty_symulator" title="Kupuj na Raty!" onclick="return PoliczRateCA();">
            <img alt="" src="<?php echo get_option('caraty_logo_calc') ?>" align="middle">
        </a>
        <?php else :
            global $product; ?>
            <a target="raty_symulator" title="Kupuj na Raty!" onclick="return PoliczRateCA();">
                <img id="caraty_img_auto" alt="" align="middle" src="<?= $logoCalc; ?>?creditAmount=<?php echo $product->get_price(); ?>&posId=<?= get_option('caraty_psp'); ?>&imgType=<?= get_option('caraty_logo_calc'); ?><?php if (!empty($offerId)) { echo '&offerId=' . $offerId; } ?>">
            </a>
        <?php endif; ?>
    </p>
  <?php  
//         // Echo content.
//         echo '
// 		<div class="ratyCA">
// 		<a target="raty_symulator" href="https://ewniosek.credit-agricole.pl/eWniosek/procedure.jsp?PARAM_TYPE=RAT&PARAM_PROFILE=PSP2011676" title="Kupuj na Raty!" onclick="PoliczRateCA();">
//  <img src="http://ewniosek.credit-agricole.pl/eWniosek/res/buttons/calc_sm_comp.png">
// </a>

// 		</div>
		
		
		
// 		';

function custom_alt_attribute_for_missing_alt_text( $content ) {
  global $product;
  
  if ( is_product() ) {
      $attachment_ids = $product->get_gallery_image_ids();
      
      if ( !empty( $attachment_ids ) ) {
          foreach ( $attachment_ids as $attachment_id ) {
              $alt = get_post_meta( $attachment_id, '_wp_attachment_image_alt', true );
              
              if ( empty( $alt ) ) {
                  $product_title = get_the_title();
                  $content = str_replace( 'alt=""', 'alt="' . esc_attr( $product_title ) . '"', $content );
              }
          }
      }
  }
  
  return $content;
}
add_filter( 'the_content', 'custom_alt_attribute_for_missing_alt_text' );



function change_robots_tag_specific_page($robots) {
    if (is_page('dobierz-idealny-materac')) {
        $robots = str_replace('index', 'noindex', $robots);
    }
    return $robots;
}

add_filter('wpseo_robots', 'change_robots_tag_specific_page');



}

add_filter( 'woocommerce_breadcrumb_defaults', 'custom_woocommerce_breadcrumbs' );
function custom_woocommerce_breadcrumbs() {
  return array(
    'delimiter'   => '/', // no delimiter
    'wrap_before' => '<div class="breadcrumbs"><ul class="breadcrumbs__ul">',
    'wrap_after'  => '</ul></div>',
    'before'      => '<li>',
    'after'       => '</li>',
    'home'        => _x( 'Azardi', 'breadcrumb', 'woocommerce' ),
  );
}




function custom_widgets_init() {
	register_sidebar(
		array(
			'name'          => esc_html__( 'Shop Sidebar', 'sirius' ),
			'id'            => 'sidebar-shop',
			'description'   => esc_html__( 'Add widgets here.', 'sirius' ),
			'before_widget' => '<section id="%1$s" class="widget %2$s">',
			'after_widget'  => '</section>',
			'before_title'  => '<h4>',
			'after_title'   => '</h4>',
		)
	);
} 
add_action( 'widgets_init', 'custom_widgets_init' );



 
function custom_mini_cart() {
  echo '<a href="#" class="dropdown-back" data-toggle="dropdown"> ';
  echo '<i class="fa fa-shopping-cart" aria-hidden="true"></i>';
  echo '<div class="basket-item-count" style="display: inline;">';
  echo '<span class="cart-items-count count">';
  echo WC()->cart->get_cart_contents_count();
  echo '</span>';
  echo '</div>';
  echo '</a>';
  echo '<ul class="dropdown-menu dropdown-menu-mini-cart">';
  echo '<li> <div class="widget_shopping_cart_content">';
  woocommerce_mini_cart();
  echo '</div></li></ul>';
  
  }
  add_shortcode( 'quadlayers-mini-cart', 'custom_mini_cart' );