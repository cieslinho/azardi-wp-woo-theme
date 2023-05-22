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
  'azardi_footer_menu_first' => 'Azardi Footer Menu Contact',
  'azardi_footer_menu_second' => 'Azardi Footer Menu Offer',
  'azardi_footer_menu_third' => 'Azardi Footer Menu Informations',
  'azardi_footer_menu_fourth' => 'Azardi Footer Menu Custom Service'
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

// function my_content( $content) {
//   $content = '<p class="custom-info">W celu skonfigurowania produktu uzupełnij wszystkie pola</p>';

//   return $content;
// }

// add_filter('woocommerce_short_description', 'my_content', 10, 2);

// add_action('woocommerce_before_add_to_cart_button', 'variable_info');
// function variable_info(){
//   echo '<p class="custom-info">W celu skonfigurowania produktu uzupełnij wszystkie pola</p>';
// }
add_action('woocommerce_before_variations_form', 'variable_fabrics');
function variable_fabrics(){
  echo '<a href="/tkaniny" target="_blank" class="custom-fabrics">wzornik tkanin</a>';
}
add_action('woocommerce_after_variations_form', 'variable_fabrics_additional_info');
function variable_fabrics_additional_info(){
  echo '
      <div class="custom-fabrics__info">
      <div class="custom-fabrics__info-box">
        <i class="bx bx-package"></i>
        <a href="/dostawa" class="custom-fabrics__info-text custom-fabrics__info-link">Dostawa do 14 dni roboczych</a>
      </div>
      <div class="custom-fabrics__info-box">
        <i class="bx bxs-file-pdf"></i>
        <a href="/instrukcje" target="_blank" class="custom-fabrics__info-text custom-fabrics__info-link">Instrukcja montażu </a>
      </div>
      <div class="custom-fabrics__info-box">
        <i class="bx bx-badge-check"></i>
        <p class="custom-fabrics__info-text">24 miesiące gwarancji</p>
        </div>
      </div>
  
  ';
}
add_action('woocommerce_before_add_to_cart_button', 'variable1_fabrics');
add_action('woocommerce_before_add_to_cart_button','wdm_add_custom_fields');
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
  

  echo '<div class="product__fabrics">

  <p class="product__fabrics-text label">wybrana tkanina</p>
  <p class="product__fabrics-current">brak</p>

  
  </div>';
  
endif;

$content = ob_get_contents();
ob_end_flush();

return $content;
}

function wdm_add_custom_fields()
{

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







        <div class="wdm-custom-fields">
            <input type="hidden" name="wdm_name" id="wdm_name" value="Brak" />
        </div>
        <div class="fabric fabric--hidden">
          <div class="fabric__btns">
            <h3 class="fabric__heading">Wybierz tkaninę:</h3>
            <a class="fabric__close">
              <i class='bx bx-x'></i>
            </a>
          </div>
          <ul class="fabric__submenu">
            <li class="fabric__submenu-item">
              Grupa 1
              <a class="fabric__submenu-btn" id="fabric__submenu-btn-1">+</a>
            </li>
            <ul class="fabric__tabs" id="fabric__tabs-1">
                <li data-tab-target="#fabric-boss" class="fabric__tab">Boss - Plecionka</li>
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
                <li data-tab-target="#fabric-velvet" class="fabric__tab">Magic Velvet - Dzianina </li>
                <div id="fabric-velvet" data-tab-content>
                  <div class="fabric__image-box">
                  <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Magic-Velvet/Magic-Velvet-2203.jpeg" ?>" alt="Tkanina Magic Velvet" data-fabric-group="grupa1" loading="lazy">
                  <p class="fabric__image-title">2203</p>
                  </div>
                  <div class="fabric__image-box">
                  <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Magic-Velvet/Magic-Velvet-2218.jpeg" ?>" alt="Tkanina Magic Velvet" data-fabric-group="grupa1" loading="lazy">
                  <p class="fabric__image-title">2218</p>
                  </div>
                  <div class="fabric__image-box">
                  <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Magic-Velvet/Magic-Velvet-2225.jpeg" ?>" alt="Tkanina Magic Velvet" data-fabric-group="grupa1" loading="lazy">
                  <p class="fabric__image-title">2225</p>
                  </div>
                  <div class="fabric__image-box">
                  <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Magic-Velvet/Magic-Velvet-2227.jpeg" ?>" alt="Tkanina Magic Velvet" data-fabric-group="grupa1" loading="lazy">
                  <p class="fabric__image-title">2227</p>
                  </div>
                  <div class="fabric__image-box">
                  <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Magic-Velvet/Magic-Velvet-2248.jpeg" ?>" alt="Tkanina Magic Velvet" data-fabric-group="grupa1" loading="lazy">
                  <p class="fabric__image-title">2248</p>
                  </div>
                  <div class="fabric__image-box">
                  <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Magic-Velvet/Magic-Velvet-2249.jpeg" ?>" alt="Tkanina Magic Velvet" data-fabric-group="grupa1" loading="lazy">
                  <p class="fabric__image-title">2249</p>
                  </div>
                  <div class="fabric__image-box">
                  <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Magic-Velvet/Magic-Velvet-2260.jpeg" ?>" alt="Tkanina Magic Velvet" data-fabric-group="grupa1" loading="lazy">
                  <p class="fabric__image-title">2260</p>
                  </div>
                  <div class="fabric__image-box">
                  <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Magic-Velvet/Magic-Velvet-2264.jpeg" ?>" alt="Tkanina Magic Velvet" data-fabric-group="grupa1" loading="lazy">
                  <p class="fabric__image-title">2264</p>
                  </div>
                  <div class="fabric__image-box">
                  <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Magic-Velvet/Magic-Velvet-2271.jpeg" ?>" alt="Tkanina Magic Velvet" data-fabric-group="grupa1" loading="lazy">
                  <p class="fabric__image-title">2271</p>
                  </div>
                  <div class="fabric__image-box">
                  <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Magic-Velvet/Magic-Velvet-2274.jpeg" ?>" alt="Tkanina Magic Velvet" data-fabric-group="grupa1" loading="lazy">
                  <p class="fabric__image-title">2274</p>
                  </div>
                  <div class="fabric__image-box">
                  <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Magic-Velvet/Magic-Velvet-2292.jpeg" ?>" alt="Tkanina Magic Velvet" data-fabric-group="grupa1" loading="lazy">
                  <p class="fabric__image-title">2292</p>
                  </div>
                  <div class="fabric__image-box">
                  <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Magic-Velvet/Magic-Velvet-2297.jpeg" ?>" alt="Tkanina Magic Velvet" data-fabric-group="grupa1" loading="lazy">
                  <p class="fabric__image-title">2297</p>
                  </div>
            </div>
                <li data-tab-target="#fabric-monolith" class="fabric__tab">Monolith - Velvet</li>
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
                <li data-tab-target="#fabric-riviera" class="fabric__tab">Riviera - Velvet</li>
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
                <li data-tab-target="#fabric-ronda" class="fabric__tab">Ronda - Plecionka</li>
                <div id="fabric-ronda" data-tab-content>
              <div class="fabric__image-box">
              <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Ronda/Ronda-06-d5b2d.jpg" ?>" alt="Tkanina Ronda" data-fabric-group="grupa1" loading="lazy">
              <p class="fabric__image-title">06</p>
              </div>
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Ronda/Ronda-09-659c1.jpg" ?>" alt="Tkanina Ronda" data-fabric-group="grupa1" loading="lazy">
                <p class="fabric__image-title">09</p>
              </div>
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Ronda/Ronda-45-eb5b3.jpg" ?>" alt="Tkanina Ronda" data-fabric-group="grupa1" loading="lazy">
                <p class="fabric__image-title">45</p>
              </div>
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Ronda/Ronda-88-5622e.jpg" ?>" alt="Tkanina Ronda" data-fabric-group="grupa1" loading="lazy">
                <p class="fabric__image-title">88</p>
              </div>
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Ronda/Ronda-99-80cdc.jpg" ?>" alt="Tkanina Ronda" data-fabric-group="grupa1" loading="lazy">
                <p class="fabric__image-title">99</p>
              </div>       
            </div>
                <li data-tab-target="#fabric-solid" class="fabric__tab">Solid - Plecionka</li>
                <div id="fabric-solid" data-tab-content>
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Solid/Solid_03_plaskie-4ab38.jpg" ?>" alt="Tkanina Solid" data-fabric-group="grupa1" loading="lazy">
                <p class="fabric__image-title">03</p>
              </div>
                
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Solid/Solid_06_plaskie-f7b42.jpg" ?>" alt="Tkanina Solid" data-fabric-group="grupa1" loading="lazy">
                <p class="fabric__image-title">06</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Solid/Solid_09_plaskie-8ce73.jpg" ?>" alt="Tkanina Solid" data-fabric-group="grupa1" loading="lazy">
                <p class="fabric__image-title">09</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Solid/Solid_11_plaskie-042c7.jpg" ?>" alt="Tkanina Solid" data-fabric-group="grupa1" loading="lazy">
                <p class="fabric__image-title">11</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Solid/Solid_30_plaskie-04741.jpg" ?>" alt="Tkanina Solid" data-fabric-group="grupa1" loading="lazy">
                <p class="fabric__image-title">30</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Solid/Solid_33_plaskie-dcb5e.jpg" ?>" alt="Tkanina Solid" data-fabric-group="grupa1" loading="lazy">
                <p class="fabric__image-title">33</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Solid/Solid_39_plaskie-417b6.jpg" ?>" alt="Tkanina Solid" data-fabric-group="grupa1" loading="lazy">
                <p class="fabric__image-title">39</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Solid/Solid_60_plaskie-8825c.jpg" ?>" alt="Tkanina Solid" data-fabric-group="grupa1" loading="lazy">
                <p class="fabric__image-title">60</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Solid/Solid_61_plaskie-35588.jpg" ?>" alt="Tkanina Solid" data-fabric-group="grupa1" loading="lazy">
                <p class="fabric__image-title">61</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Solid/Solid_66_plaskie-8d783.jpg" ?>" alt="Tkanina Solid" data-fabric-group="grupa1" loading="lazy">
                <p class="fabric__image-title">66</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Solid/Solid_72_plaskie-dd914.jpg" ?>" alt="Tkanina Solid" data-fabric-group="grupa1" loading="lazy">
                <p class="fabric__image-title">72</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Solid/Solid_73_plaskie-8f816.jpg" ?>" alt="Tkanina Solid" data-fabric-group="grupa1" loading="lazy">
                <p class="fabric__image-title">73</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Solid/Solid_74_plaskie-c763c.jpg" ?>" alt="Tkanina Solid" data-fabric-group="grupa1" loading="lazy">
                <p class="fabric__image-title">74</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Solid/Solid_77_plaskie-df825.jpg" ?>" alt="Tkanina Solid" data-fabric-group="grupa1" loading="lazy">
                <p class="fabric__image-title">77</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Solid/Solid_79_plaskie-7516b.jpg" ?>" alt="Tkanina Solid" data-fabric-group="grupa1" loading="lazy">
                <p class="fabric__image-title">79</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Solid/Solid_80_plaskie-89cdc.jpg" ?>" alt="Tkanina Solid" data-fabric-group="grupa1" loading="lazy">
                <p class="fabric__image-title">80</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Solid/Solid_83_plaskie-ece5d.jpg" ?>" alt="Tkanina Solid" data-fabric-group="grupa1" loading="lazy">
                <p class="fabric__image-title">83</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Solid/Solid_84_plaskie-b0069.jpg" ?>" alt="Tkanina Solid" data-fabric-group="grupa1" loading="lazy">
                <p class="fabric__image-title">84</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Solid/Solid_89_plaskie-fea89.jpg" ?>" alt="Tkanina Solid" data-fabric-group="grupa1" loading="lazy">
                <p class="fabric__image-title">89</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Solid/Solid_90_plaskie-6b1b5.jpg" ?>" alt="Tkanina Solid" data-fabric-group="grupa1" loading="lazy">
                <p class="fabric__image-title">90</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Solid/Solid_99_plaskie-59d0b.jpg" ?>" alt="Tkanina Solid" data-fabric-group="grupa1" loading="lazy">
                <p class="fabric__image-title">99</p>
              </div>
            </div>
                <li data-tab-target="#fabric-vena" class="fabric__tab">Vena - Plecionka</li>
                <div id="fabric-vena" data-tab-content>
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Vena/Vena-01.jpg" ?>" alt="Tkanina Vena" data-fabric-group="grupa1" loading="lazy">
                <p class="fabric__image-title">01</p>
              </div>
                
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Vena/Vena-02.jpg" ?>" alt="Tkanina Vena" data-fabric-group="grupa1" loading="lazy">
                <p class="fabric__image-title">02</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Vena/Vena-03.jpg" ?>" alt="Tkanina Vena" data-fabric-group="grupa1" loading="lazy">
                <p class="fabric__image-title">03</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Vena/Vena-04.jpg" ?>" alt="Tkanina Vena" data-fabric-group="grupa1" loading="lazy">
                <p class="fabric__image-title">04</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Vena/Vena-05.jpg" ?>" alt="Tkanina Vena" data-fabric-group="grupa1" loading="lazy">
                <p class="fabric__image-title">05</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Vena/Vena-06.jpg" ?>" alt="Tkanina Vena" data-fabric-group="grupa1" loading="lazy">
                <p class="fabric__image-title">06</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Vena/Vena-07.jpg" ?>" alt="Tkanina Vena" data-fabric-group="grupa1" loading="lazy">
                <p class="fabric__image-title">07</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Vena/Vena-08.jpg" ?>" alt="Tkanina Vena" data-fabric-group="grupa1" loading="lazy">
                <p class="fabric__image-title">08</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Vena/Vena-09.jpg" ?>" alt="Tkanina Vena" data-fabric-group="grupa1" loading="lazy">
                <p class="fabric__image-title">09</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Vena/Vena-10.jpg" ?>" alt="Tkanina Vena" data-fabric-group="grupa1" loading="lazy">
                <p class="fabric__image-title">10</p>
              </div>
              
            </div>
             </ul>
             <li class="fabric__submenu-item">
              Grupa 2
              <a class="fabric__submenu-btn" id="fabric__submenu-btn-2">+</a>
            </li>
            <ul class="fabric__tabs" id="fabric__tabs-2">
                <li data-tab-target="#fabric-icon" class="fabric__tab">Icon - Szenil </li>
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
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-2/Icon/Icon-39-eccd1.jpg" ?>" alt="Tkanina Icon" data-fabric-group="grupa2" loading="lazy">
                <p class="fabric__image-title">39</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-2/Icon/Icon-45-41fb8.jpg" ?>" alt="Tkanina Icon" data-fabric-group="grupa2" loading="lazy">
                <p class="fabric__image-title">45</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-2/Icon/Icon-56-a7d4d.jpg" ?>" alt="Tkanina Icon" data-fabric-group="grupa2" loading="lazy">
                <p class="fabric__image-title">56</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-2/Icon/Icon-59-7ca7d.jpg" ?>" alt="Tkanina Icon" data-fabric-group="grupa2" loading="lazy">
                <p class="fabric__image-title">59</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-2/Icon/Icon-61-40056.jpg" ?>" alt="Tkanina Icon" data-fabric-group="grupa2" loading="lazy">
                <p class="fabric__image-title">61</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-2/Icon/Icon-69-2d849.jpg" ?>" alt="Tkanina Icon" data-fabric-group="grupa2" loading="lazy">
                <p class="fabric__image-title">69</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-2/Icon/Icon-79-61cc8.jpg" ?>" alt="Tkanina Icon" data-fabric-group="grupa2" loading="lazy">
                <p class="fabric__image-title">79</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-2/Icon/Icon-81-ba0f2.jpg" ?>" alt="Tkanina Icon" data-fabric-group="grupa2" loading="lazy">
                <p class="fabric__image-title">81</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-2/Icon/Icon-90-c9e7d.jpg" ?>" alt="Tkanina Icon" data-fabric-group="grupa2" loading="lazy">
                <p class="fabric__image-title">90</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-2/Icon/Icon-95-008dc.jpg" ?>" alt="Tkanina Icon" data-fabric-group="grupa2" loading="lazy">
                <p class="fabric__image-title">95</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-2/Icon/Icon-99-12251.jpg" ?>" alt="Tkanina Icon" data-fabric-group="grupa2" loading="lazy">
                <p class="fabric__image-title">99</p>
              </div>
              
            </div>
                <li data-tab-target="#fabric-milton" class="fabric__tab">Milton New - Dzianina </li>
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
                <li data-tab-target="#fabric-piano" class="fabric__tab">Piano - Velvet </li>
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
                <li data-tab-target="#fabric-venus" class="fabric__tab">Venus Velvet - Dzianina </li>
                <div id="fabric-venus" data-tab-content>
              <div class="fabric__image-box">
<img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-2/Venus-Velvet/Venus velvet 2914.jpeg" ?>" alt="Tkanina Venus Velvet" data-fabric-group="grupa2" loading="lazy">
              <p class="fabric__image-title">2914</p>
              </div>
                
              <div class="fabric__image-box">
<img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-2/Venus-Velvet/Venus Velvet 2918.jpeg" ?>" alt="Tkanina Venus Velvet" data-fabric-group="grupa2" loading="lazy">
              <p class="fabric__image-title">2918</p>
              </div>
              
              <div class="fabric__image-box">
<img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-2/Venus-Velvet/Venus velvet 2924.jpeg" ?>" alt="Tkanina Venus Velvet" data-fabric-group="grupa2" loading="lazy">
              <p class="fabric__image-title">2924</p>
              </div>
              
              <div class="fabric__image-box">
<img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-2/Venus-Velvet/Venus velvet 2925.jpeg" ?>" alt="Tkanina Venus Velvet" data-fabric-group="grupa2" loading="lazy">
              <p class="fabric__image-title">2925</p>
              </div>
              
              <div class="fabric__image-box">
<img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-2/Venus-Velvet/Venus velvet 2932.jpeg" ?>" alt="Tkanina Venus Velvet" data-fabric-group="grupa2" loading="lazy">
              <p class="fabric__image-title">2932</p>
              </div>
              
              <div class="fabric__image-box">
<img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-2/Venus-Velvet/Venus velvet 2934.jpeg" ?>" alt="Tkanina Venus Velvet" data-fabric-group="grupa2" loading="lazy">
              <p class="fabric__image-title">2934</p>
              </div>
              
              <div class="fabric__image-box">
<img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-2/Venus-Velvet/Venus velvet 2935.jpeg" ?>" alt="Tkanina Venus Velvet" data-fabric-group="grupa2" loading="lazy">
              <p class="fabric__image-title">2935</p>
              </div>
              
              <div class="fabric__image-box">
<img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-2/Venus-Velvet/Venus velvet 2938.jpeg" ?>" alt="Tkanina Venus Velvet" data-fabric-group="grupa2" loading="lazy">
              <p class="fabric__image-title">2938</p>
              </div>
              
              <div class="fabric__image-box">
<img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-2/Venus-Velvet/Venus velvet 2939.jpeg" ?>" alt="Tkanina Venus Velvet" data-fabric-group="grupa2" loading="lazy">
              <p class="fabric__image-title">2939</p>
              </div>
              
              <div class="fabric__image-box">
<img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-2/Venus-Velvet/Venus velvet 2940.jpeg" ?>" alt="Tkanina Venus Velvet" data-fabric-group="grupa2" loading="lazy">
              <p class="fabric__image-title">2940</p>
              </div>
              
              <div class="fabric__image-box">
<img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-2/Venus-Velvet/Venus velvet 2941.jpeg" ?>" alt="Tkanina Venus Velvet" data-fabric-group="grupa2" loading="lazy">
              <p class="fabric__image-title">2941</p>
              </div>
              
            </div>
                <li data-tab-target="#fabric-zoya" class="fabric__tab">Zoya - Dzianina</li>
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
             </ul>
             <li class="fabric__submenu-item">
              Grupa 3
              <a class="fabric__submenu-btn" id="fabric__submenu-btn-3">+</a>
            </li>
            <ul class="fabric__tabs" id="fabric__tabs-3">
                <li data-tab-target="#fabric-baloo" class="fabric__tab">Baloo - Boucle </li>
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
                <li data-tab-target="#fabric-dream" class="fabric__tab">Dream velvet - Dzianina </li>
                <div id="fabric-dream" data-tab-content>
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-3/Dream-Velvet/Dream velvet 01.jpeg" ?>" alt="Tkanina Dream Velvet" data-fabric-group="grupa3" loading="lazy">
                <p class="fabric__image-title">01</p>
              </div>
                
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-3/Dream-Velvet/Dream velvet 02.jpeg" ?>" alt="Tkanina Dream Velvet" data-fabric-group="grupa3" loading="lazy">
                <p class="fabric__image-title">02</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-3/Dream-Velvet/Dream velvet 03.jpeg" ?>" alt="Tkanina Dream Velvet" data-fabric-group="grupa3" loading="lazy">
                <p class="fabric__image-title">03</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-3/Dream-Velvet/Dream velvet 04.jpeg" ?>" alt="Tkanina Dream Velvet" data-fabric-group="grupa3" loading="lazy">
                <p class="fabric__image-title">04</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-3/Dream-Velvet/Dream velvet 06.jpeg" ?>" alt="Tkanina Dream Velvet" data-fabric-group="grupa3" loading="lazy">
                <p class="fabric__image-title">06</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-3/Dream-Velvet/Dream velvet 07.jpeg" ?>" alt="Tkanina Dream Velvet" data-fabric-group="grupa3" loading="lazy">
                <p class="fabric__image-title">07</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-3/Dream-Velvet/Dream velvet 13.jpeg" ?>" alt="Tkanina Dream Velvet" data-fabric-group="grupa3" loading="lazy">
                <p class="fabric__image-title">13</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-3/Dream-Velvet/Dream velvet 14.jpeg" ?>" alt="Tkanina Dream Velvet" data-fabric-group="grupa3" loading="lazy">
                <p class="fabric__image-title">14</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-3/Dream-Velvet/Dream velvet 18.jpeg" ?>" alt="Tkanina Dream Velvet" data-fabric-group="grupa3" loading="lazy">
                <p class="fabric__image-title">18</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-3/Dream-Velvet/Dream velvet 23.jpeg" ?>" alt="Tkanina Dream Velvet" data-fabric-group="grupa3" loading="lazy">
                <p class="fabric__image-title">23</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-3/Dream-Velvet/Dream velvet 24.jpeg" ?>" alt="Tkanina Dream Velvet" data-fabric-group="grupa3" loading="lazy">
                <p class="fabric__image-title">24</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-3/Dream-Velvet/Dream velvet 27.jpeg" ?>" alt="Tkanina Dream Velvet" data-fabric-group="grupa3" loading="lazy">
                <p class="fabric__image-title">27</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-3/Dream-Velvet/Dream velvet 31.jpeg" ?>" alt="Tkanina Dream Velvet" data-fabric-group="grupa3" loading="lazy">
                <p class="fabric__image-title">31</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-3/Dream-Velvet/Dream velvet 36.jpeg" ?>" alt="Tkanina Dream Velvet" data-fabric-group="grupa3" loading="lazy">
                <p class="fabric__image-title">36</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-3/Dream-Velvet/Dream velvet 37.jpeg" ?>" alt="Tkanina Dream Velvet" data-fabric-group="grupa3" loading="lazy">
                <p class="fabric__image-title">37</p>
              </div>
              
            </div>
                <li data-tab-target="#fabric-grace" class="fabric__tab">Grace - Plecionka</li>
                <div id="fabric-grace" data-tab-content>
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-3/Grace/Grace_01-788d8.jpg" ?>" alt="Tkanina Grace" data-fabric-group="grupa3" loading="lazy">
                <p class="fabric__image-title">01</p>
              </div>
                
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-3/Grace/Grace_11-16212.jpg" ?>" alt="Tkanina Grace" data-fabric-group="grupa3" loading="lazy">
                <p class="fabric__image-title">11</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-3/Grace/Grace_13-64ac8.jpg" ?>" alt="Tkanina Grace" data-fabric-group="grupa3" loading="lazy">
                <p class="fabric__image-title">13</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-3/Grace/Grace_16-5075d.jpg" ?>" alt="Tkanina Grace" data-fabric-group="grupa3" loading="lazy">
                <p class="fabric__image-title">16</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-3/Grace/Grace_24-05250.jpg" ?>" alt="Tkanina Grace" data-fabric-group="grupa3" loading="lazy">
                <p class="fabric__image-title">24</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-3/Grace/Grace_38-c405e.jpg" ?>" alt="Tkanina Grace" data-fabric-group="grupa3" loading="lazy">
                <p class="fabric__image-title">38</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-3/Grace/Grace_39-a81ec.jpg" ?>" alt="Tkanina Grace" data-fabric-group="grupa3" loading="lazy">
                <p class="fabric__image-title">39</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-3/Grace/Grace_55-9e035.jpg" ?>" alt="Tkanina Grace" data-fabric-group="grupa3" loading="lazy">
                <p class="fabric__image-title">55</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-3/Grace/Grace_58-ab44c.jpg" ?>" alt="Tkanina Grace" data-fabric-group="grupa3" loading="lazy">
                <p class="fabric__image-title">58</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-3/Grace/Grace_59-203e0.jpg" ?>" alt="Tkanina Grace" data-fabric-group="grupa3" loading="lazy">
                <p class="fabric__image-title">59</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-3/Grace/Grace_70-5d90f.jpg" ?>" alt="Tkanina Grace" data-fabric-group="grupa3" loading="lazy">
                <p class="fabric__image-title">70</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-3/Grace/Grace_71-61a39.jpg" ?>" alt="Tkanina Grace" data-fabric-group="grupa3" loading="lazy">
                <p class="fabric__image-title">71</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-3/Grace/Grace_73-37662.jpg" ?>" alt="Tkanina Grace" data-fabric-group="grupa3" loading="lazy">
                <p class="fabric__image-title">73</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-3/Grace/Grace_75-763e7.jpg" ?>" alt="Tkanina Grace" data-fabric-group="grupa3" loading="lazy">
                <p class="fabric__image-title">75</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-3/Grace/Grace_76-7245f.jpg" ?>" alt="Tkanina Grace" data-fabric-group="grupa3" loading="lazy">
                <p class="fabric__image-title">76</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-3/Grace/Grace_77-92413.jpg" ?>" alt="Tkanina Grace" data-fabric-group="grupa3" loading="lazy">
                <p class="fabric__image-title">77</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-3/Grace/Grace_78-4fa3c.jpg" ?>" alt="Tkanina Grace" data-fabric-group="grupa3" loading="lazy">
                <p class="fabric__image-title">78</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-3/Grace/Grace_79-16c46.jpg" ?>" alt="Tkanina Grace" data-fabric-group="grupa3" loading="lazy">
                <p class="fabric__image-title">79</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-3/Grace/Grace_92-6caa0.jpg" ?>" alt="Tkanina Grace" data-fabric-group="grupa3" loading="lazy">
                <p class="fabric__image-title">92</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-3/Grace/Grace_93-c4750.jpg" ?>" alt="Tkanina Grace" data-fabric-group="grupa3" loading="lazy">
                <p class="fabric__image-title">93</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-3/Grace/Grace_94-badb1.jpg" ?>" alt="Tkanina Grace" data-fabric-group="grupa3" loading="lazy">
                <p class="fabric__image-title">94</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-3/Grace/Grace_99-60176.jpg" ?>" alt="Tkanina Grace" data-fabric-group="grupa3" loading="lazy">
                <p class="fabric__image-title">99</p>
              </div>
              
            </div>
                <li data-tab-target="#fabric-maya" class="fabric__tab">Maya - Velvet</li>
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
                <li data-tab-target="#fabric-now-never" class="fabric__tab">Now or Never - Boucle</li>
                <div id="fabric-now-never" data-tab-content>
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-3/Now-or-Never/Now-or-never-01-9afb8.jpg" ?>" alt="Tkanina Now or Never" data-fabric-group="grupa3" loading="lazy">
                <p class="fabric__image-title">01</p>
              </div>
                
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-3/Now-or-Never/Now-or-never-03-46e38.jpg" ?>" alt="Tkanina Now or Never" data-fabric-group="grupa3" loading="lazy">
                <p class="fabric__image-title">03</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-3/Now-or-Never/Now-or-never-06-61b8f.jpg" ?>" alt="Tkanina Now or Never" data-fabric-group="grupa3" loading="lazy">
                <p class="fabric__image-title">06</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-3/Now-or-Never/Now-or-never-16-e1d4c.jpg" ?>" alt="Tkanina Now or Never" data-fabric-group="grupa3" loading="lazy">
                <p class="fabric__image-title">16</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-3/Now-or-Never/Now-or-never-83-4bfee.jpg" ?>" alt="Tkanina Now or Never" data-fabric-group="grupa3" loading="lazy">
                <p class="fabric__image-title">83</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-3/Now-or-Never/Now-or-never-92-83f0e.jpg" ?>" alt="Tkanina Now or Never" data-fabric-group="grupa3" loading="lazy">
                <p class="fabric__image-title">92</p>
              </div>
              
            </div>
                <li data-tab-target="#fabric-presence" class="fabric__tab">Presence - Boucle</li>
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
                <li data-tab-target="#fabric-tulia" class="fabric__tab">Tulia - Szenil</li>
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
                <li data-tab-target="#fabric-vera" class="fabric__tab">Vera - Velvet</li>
                <div id="fabric-vera" data-tab-content>
              <div class="fabric__image-box">
              <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-3/Vera/Vera 1.jpeg" ?>" alt="Tkanina Vera" data-fabric-group="grupa3" loading="lazy">
              <p class="fabric__image-title">01</p>
              </div>
                
              <div class="fabric__image-box">
              <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-3/Vera/Vera 02.jpeg" ?>" alt="Tkanina Vera" data-fabric-group="grupa3" loading="lazy">
              <p class="fabric__image-title">02</p>  
              </div>
              
              <div class="fabric__image-box">
              <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-3/Vera/Vera 03.jpeg" ?>" alt="Tkanina Vera" data-fabric-group="grupa3" loading="lazy">
              <p class="fabric__image-title">03</p>  
              </div>
              
              <div class="fabric__image-box">
              <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-3/Vera/Vera 04.jpeg" ?>" alt="Tkanina Vera" data-fabric-group="grupa3" loading="lazy">
              <p class="fabric__image-title">04</p>  
              </div>
              
              <div class="fabric__image-box">
              <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-3/Vera/Vera 05.jpeg" ?>" alt="Tkanina Vera" data-fabric-group="grupa3" loading="lazy">
              <p class="fabric__image-title">05</p>  
              </div>
              
              <div class="fabric__image-box">
              <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-3/Vera/Vera 06.jpeg" ?>" alt="Tkanina Vera" data-fabric-group="grupa3" loading="lazy">
              <p class="fabric__image-title">06</p>  
              </div>
              
              <div class="fabric__image-box">
              <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-3/Vera/Vera 07.jpeg" ?>" alt="Tkanina Vera" data-fabric-group="grupa3" loading="lazy">
              <p class="fabric__image-title">07</p>  
              </div>
              
              <div class="fabric__image-box">
              <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-3/Vera/Vera 08.jpeg" ?>" alt="Tkanina Vera" data-fabric-group="grupa3" loading="lazy">
              <p class="fabric__image-title">08</p>  
              </div>
              
              <div class="fabric__image-box">
              <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-3/Vera/Vera 09.jpeg" ?>" alt="Tkanina Vera" data-fabric-group="grupa3" loading="lazy">
              <p class="fabric__image-title">09</p>  
              </div>
              
              <div class="fabric__image-box">
              <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-3/Vera/Vera 10.jpeg" ?>" alt="Tkanina Vera" data-fabric-group="grupa3" loading="lazy">
              <p class="fabric__image-title">10</p>  
              </div>
              
              <div class="fabric__image-box">
              <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-3/Vera/Vera 11.jpeg" ?>" alt="Tkanina Vera" data-fabric-group="grupa3" loading="lazy">
              <p class="fabric__image-title">11</p>  
              </div>
              
              <div class="fabric__image-box">
              <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-3/Vera/Vera 12.jpeg" ?>" alt="Tkanina Vera" data-fabric-group="grupa3" loading="lazy">
              <p class="fabric__image-title">12</p>  
              </div>
              
              <div class="fabric__image-box">
              <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-3/Vera/Vera 13.jpeg" ?>" alt="Tkanina Vera" data-fabric-group="grupa3" loading="lazy">
              <p class="fabric__image-title">13</p>  
              </div>
              
              <div class="fabric__image-box">
              <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-3/Vera/Vera 14.jpeg" ?>" alt="Tkanina Vera" data-fabric-group="grupa3" loading="lazy">
              <p class="fabric__image-title">14</p>  
              </div>
              
              <div class="fabric__image-box">
              <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-3/Vera/Vera 15.jpeg" ?>" alt="Tkanina Vera" data-fabric-group="grupa3" loading="lazy">
              <p class="fabric__image-title">15</p>  
              </div>
              
            </div>
             </ul>
             <li class="fabric__submenu-item">
              Grupa 4
              <a class="fabric__submenu-btn" id="fabric__submenu-btn-4">+</a>
            </li>
            <ul class="fabric__tabs" id="fabric__tabs-4">
                <li data-tab-target="#fabric-bloom" class="fabric__tab">Bloom - Szenil </li>
                <div id="fabric-bloom" data-tab-content>
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-4/Bloom/Bloom 01.jpeg" ?>" alt="Tkanina Bloom" data-fabric-group="grupa4" loading="lazy">
                <p class="fabric__image-title">01</p>
              </div>
                
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-4/Bloom/Bloom 02.jpeg" ?>" alt="Tkanina Bloom" data-fabric-group="grupa4" loading="lazy">
                <p class="fabric__image-title">02</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-4/Bloom/Bloom 03.jpeg" ?>" alt="Tkanina Bloom" data-fabric-group="grupa4" loading="lazy">
                <p class="fabric__image-title">03</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-4/Bloom/Bloom 04.jpeg" ?>" alt="Tkanina Bloom" data-fabric-group="grupa4" loading="lazy">
                <p class="fabric__image-title">04</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-4/Bloom/Bloom 05.jpeg" ?>" alt="Tkanina Bloom" data-fabric-group="grupa4" loading="lazy">
                <p class="fabric__image-title">05</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-4/Bloom/Bloom 06.jpeg" ?>" alt="Tkanina Bloom" data-fabric-group="grupa4" loading="lazy">
                <p class="fabric__image-title">06</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-4/Bloom/Bloom 07.jpeg" ?>" alt="Tkanina Bloom" data-fabric-group="grupa4" loading="lazy">
                <p class="fabric__image-title">07</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-4/Bloom/Bloom 08.jpeg" ?>" alt="Tkanina Bloom" data-fabric-group="grupa4" loading="lazy">
                <p class="fabric__image-title">08</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-4/Bloom/Bloom 09.jpeg" ?>" alt="Tkanina Bloom" data-fabric-group="grupa4" loading="lazy">
                <p class="fabric__image-title">09</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-4/Bloom/Bloom 10.jpeg" ?>" alt="Tkanina Bloom" data-fabric-group="grupa4" loading="lazy">
                <p class="fabric__image-title">10</p>
              </div>
              
            </div>
                <li data-tab-target="#fabric-charles" class="fabric__tab">Charles - Velur</li>
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
             </ul>
             <li class="fabric__submenu-item">
              Grupa 5
              <a class="fabric__submenu-btn" id="fabric__submenu-btn-5">+</a>
            </li>
            <ul class="fabric__tabs" id="fabric__tabs-5">
                <li data-tab-target="#fabric-angola" class="fabric__tab">Angola - Boucle</li>
                <div id="fabric-angola" data-tab-content>
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-5/Angola/Angola 01.jpeg" ?>" alt="Tkanina Angola" data-fabric-group="grupa5" loading="lazy">
                <p class="fabric__image-title">01</p>
              </div>
                
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-5/Angola/Angola 02.jpeg" ?>" alt="Tkanina Angola" data-fabric-group="grupa5" loading="lazy">
                <p class="fabric__image-title">02</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-5/Angola/Angola 03.jpeg" ?>" alt="Tkanina Angola" data-fabric-group="grupa5" loading="lazy">
                <p class="fabric__image-title">03</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-5/Angola/Angola 04.jpeg" ?>" alt="Tkanina Angola" data-fabric-group="grupa5" loading="lazy">
                <p class="fabric__image-title">04</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-5/Angola/Angola 05.jpeg" ?>" alt="Tkanina Angola" data-fabric-group="grupa5" loading="lazy">
                <p class="fabric__image-title">05</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-5/Angola/Angola 06.jpeg" ?>" alt="Tkanina Angola" data-fabric-group="grupa5" loading="lazy">
                <p class="fabric__image-title">06</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-5/Angola/Angola 07.jpeg" ?>" alt="Tkanina Angola" data-fabric-group="grupa5" loading="lazy">
                <p class="fabric__image-title">07</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-5/Angola/Angola 08.jpeg" ?>" alt="Tkanina Angola" data-fabric-group="grupa5" loading="lazy">
                <p class="fabric__image-title">08</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-5/Angola/Angola 09.jpeg" ?>" alt="Tkanina Angola" data-fabric-group="grupa5" loading="lazy">
                <p class="fabric__image-title">09</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-5/Angola/Angola 10.jpeg" ?>" alt="Tkanina Angola" data-fabric-group="grupa5" loading="lazy">
                <p class="fabric__image-title">10</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-5/Angola/Angola 11.jpeg" ?>" alt="Tkanina Angola" data-fabric-group="grupa5" loading="lazy">
                <p class="fabric__image-title">11</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-5/Angola/Angola 12.jpeg" ?>" alt="Tkanina Angola" data-fabric-group="grupa5" loading="lazy">
                <p class="fabric__image-title">12</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-5/Angola/Angola 13.jpeg" ?>" alt="Tkanina Angola" data-fabric-group="grupa5" loading="lazy">
                <p class="fabric__image-title">13</p>
              </div>
              
              <div class="fabric__image-box">
                <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-5/Angola/Angola 14.jpeg" ?>" alt="Tkanina Angola" data-fabric-group="grupa5" loading="lazy">
                <p class="fabric__image-title">14</p>
              </div>
              
            </div>
                <li data-tab-target="#fabric-rustiq" class="fabric__tab">Rustiq - Tkanina Dekoracyjna</li>
                <div id="fabric-rustiq" data-tab-content>
              <div class="fabric__image-box">
                  <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-5/Rustiq/Rustiq 02.jpeg" ?>" alt="Tkanina Rustiq" data-fabric-group="grupa5" loading="lazy">
                  <p class="fabric__image-title">02</p>  
              </div>
                
              <div class="fabric__image-box">
                  <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-5/Rustiq/Rustiq 04.jpeg" ?>" alt="Tkanina Rustiq" data-fabric-group="grupa5" loading="lazy">
                  <p class="fabric__image-title">04</p>  
              </div>
              
              <div class="fabric__image-box">
                  <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-5/Rustiq/Rustiq 05.jpeg" ?>" alt="Tkanina Rustiq" data-fabric-group="grupa5" loading="lazy">
                  <p class="fabric__image-title">05</p>  
              </div>
              
              <div class="fabric__image-box">
                  <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-5/Rustiq/Rustiq 09.jpeg" ?>" alt="Tkanina Rustiq" data-fabric-group="grupa5" loading="lazy">
                  <p class="fabric__image-title">09</p>  
              </div>
              
              <div class="fabric__image-box">
                  <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-5/Rustiq/Rustiq 10.jpeg" ?>" alt="Tkanina Rustiq" data-fabric-group="grupa5" loading="lazy">
                  <p class="fabric__image-title">10</p>  
              </div>
              
              <div class="fabric__image-box">
                  <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-5/Rustiq/Rustiq 11.jpeg" ?>" alt="Tkanina Rustiq" data-fabric-group="grupa5" loading="lazy">
                  <p class="fabric__image-title">11</p>  
              </div>
              
              <div class="fabric__image-box">
                  <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-5/Rustiq/Rustiq 14.jpeg" ?>" alt="Tkanina Rustiq" data-fabric-group="grupa5" loading="lazy">
                  <p class="fabric__image-title">14</p>  
              </div>
              
              <div class="fabric__image-box">
                  <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-5/Rustiq/Rustiq 15.jpeg" ?>" alt="Tkanina Rustiq" data-fabric-group="grupa5" loading="lazy">
                  <p class="fabric__image-title">15</p>  
              </div>
              
              <div class="fabric__image-box">
                  <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-5/Rustiq/Rustiq 16.jpeg" ?>" alt="Tkanina Rustiq" data-fabric-group="grupa5" loading="lazy">
                  <p class="fabric__image-title">16</p>  
              </div>
              
              <div class="fabric__image-box">
                  <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-5/Rustiq/Rustiq 19.jpeg" ?>" alt="Tkanina Rustiq" data-fabric-group="grupa5" loading="lazy">
                  <p class="fabric__image-title">19</p>  
              </div>
              
              <div class="fabric__image-box">
                  <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-5/Rustiq/Rustiq 20.jpeg" ?>" alt="Tkanina Rustiq" data-fabric-group="grupa5" loading="lazy">
                  <p class="fabric__image-title">20</p>  
              </div>
              
              <div class="fabric__image-box">
                  <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-5/Rustiq/Rustiq 24.jpeg" ?>" alt="Tkanina Rustiq" data-fabric-group="grupa5" loading="lazy">
                  <p class="fabric__image-title">24</p>  
              </div>
              
              <div class="fabric__image-box">
                  <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-5/Rustiq/Rustiq 25.jpeg" ?>" alt="Tkanina Rustiq" data-fabric-group="grupa5" loading="lazy">
                  <p class="fabric__image-title">25</p>  
              </div>
              
              <div class="fabric__image-box">
                  <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-5/Rustiq/Rustiq 27.jpeg" ?>" alt="Tkanina Rustiq" data-fabric-group="grupa5" loading="lazy">
                  <p class="fabric__image-title">27</p>  
              </div>
              
              <div class="fabric__image-box">
                  <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-5/Rustiq/Rustiq 29.jpeg" ?>" alt="Tkanina Rustiq" data-fabric-group="grupa5" loading="lazy">
                  <p class="fabric__image-title">29</p>  
              </div>
              
              <div class="fabric__image-box">
                  <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-5/Rustiq/Rustiq 30.jpeg" ?>" alt="Tkanina Rustiq" data-fabric-group="grupa5" loading="lazy">
                  <p class="fabric__image-title">30</p>  
              </div>
              
              <div class="fabric__image-box">
                  <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-5/Rustiq/Rustiq 38.jpeg" ?>" alt="Tkanina Rustiq" data-fabric-group="grupa5" loading="lazy">
                  <p class="fabric__image-title">38</p>  
              </div>
              
              <div class="fabric__image-box">
                  <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-5/Rustiq/Rustiq 39.jpeg" ?>" alt="Tkanina Rustiq" data-fabric-group="grupa5" loading="lazy">
                  <p class="fabric__image-title">39</p>  
              </div>
              
              <div class="fabric__image-box">
                  <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-5/Rustiq/Rustiq 42.jpeg" ?>" alt="Tkanina Rustiq" data-fabric-group="grupa5" loading="lazy">
                  <p class="fabric__image-title">42</p>  
              </div>
              
              <div class="fabric__image-box">
                  <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-5/Rustiq/Rustiq 54.jpeg" ?>" alt="Tkanina Rustiq" data-fabric-group="grupa5" loading="lazy">
                  <p class="fabric__image-title">54</p>  
              </div>
              
              <div class="fabric__image-box">
                  <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-5/Rustiq/Rustiq 56.jpeg" ?>" alt="Tkanina Rustiq" data-fabric-group="grupa5" loading="lazy">
                  <p class="fabric__image-title">56</p>  
              </div>
              
              <div class="fabric__image-box">
                  <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-5/Rustiq/Rustiq 59.jpeg" ?>" alt="Tkanina Rustiq" data-fabric-group="grupa5" loading="lazy">
                  <p class="fabric__image-title">59</p>  
              </div>
              
              <div class="fabric__image-box">
                  <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-5/Rustiq/Rustiq 62.jpeg" ?>" alt="Tkanina Rustiq" data-fabric-group="grupa5" loading="lazy">
                  <p class="fabric__image-title">62</p>  
              </div>
              
              <div class="fabric__image-box">
                  <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-5/Rustiq/Rustiq 68.jpeg" ?>" alt="Tkanina Rustiq" data-fabric-group="grupa5" loading="lazy">
                  <p class="fabric__image-title">68</p>  
              </div>
              
              <div class="fabric__image-box">
                  <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-5/Rustiq/Rustiq 70.jpeg" ?>" alt="Tkanina Rustiq" data-fabric-group="grupa5" loading="lazy">
                  <p class="fabric__image-title">70</p>  
              </div>
              
              <div class="fabric__image-box">
                  <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-5/Rustiq/Rustiq 81.jpeg" ?>" alt="Tkanina Rustiq" data-fabric-group="grupa5" loading="lazy">
                  <p class="fabric__image-title">81</p>  
              </div>
              
            </div>
             </ul>
          </ul>
          <div class="fabric__current">
            <p class="fabric__current">Wybrana tkanina:</p>
            <img class="fabric__current-img" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-5/Rustiq/Rustiq 81.jpeg" ?>" alt="Aktualnie wybrana tkanina">
          </div>
        </div>
        <script src="<?php echo get_template_directory_uri() . "/assets/js/fabric.js" ?>"></script>
        <div class="clear"></div>
    <?php
    endif;

    $content = ob_get_contents();
    ob_end_flush();

    return $content;
}

add_filter('woocommerce_add_cart_item_data','wdm_add_item_data',10,3);

/**
 * Add custom data to Cart
 * @param  [type] $cart_item_data [description]
 * @param  [type] $product_id     [description]
 * @param  [type] $variation_id   [description]
 * @return [type]                 [description]
 */
function wdm_add_item_data($cart_item_data, $product_id, $variation_id)
{
    if(isset($_REQUEST['wdm_name']))
    {
        $cart_item_data['wdm_name'] = sanitize_text_field($_REQUEST['wdm_name']);
    }

    return $cart_item_data;
}

add_filter('woocommerce_get_item_data','wdm_add_item_meta',10,2);

/**
 * Display information as Meta on Cart page
 * @param  [type] $item_data [description]
 * @param  [type] $cart_item [description]
 * @return [type]            [description]
 */
function wdm_add_item_meta($item_data, $cart_item)
{

    if(array_key_exists('wdm_name', $cart_item))
    {
        $custom_details = $cart_item['wdm_name'];

        $item_data[] = array(
            'key'   => 'Tkanina-ID',
            'value' => $custom_details
        );
    }

    return $item_data;
}

add_action( 'woocommerce_checkout_create_order_line_item', 'wdm_add_custom_order_line_item_meta',10,4 );

function wdm_add_custom_order_line_item_meta($item, $cart_item_key, $values, $order)
{

    if(array_key_exists('wdm_name', $values))
    {
        $item->add_meta_data('_wdm_name',$values['wdm_name']);
    }
}

add_filter('woocommerce_add_to_cart_fragments', 'wc_refresh_mini_cart_count');
function wc_refresh_mini_cart_count($fragments){
	ob_start();
	$items_count = WC()->cart->get_cart_contents_count();
?>
<span class="mini-cart-count"><?php echo $items_count ? $items_count : '0'; ?></span>
<?php
    $fragments['.mini-cart-count'] = ob_get_clean();
	return $fragments;
}
