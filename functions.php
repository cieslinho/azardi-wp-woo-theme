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

// add_action('woocommerce_before_add_to_cart_button','wdm_add_custom_fields');
/**
 * Adds custom field for Product
 * @return [type] [description]
 */
function wdm_add_custom_fields()
{

    global $product;

    ob_start();

    if( 
      get_the_terms( $product->ID, 'product_cat' )[0]->name === "Łóżka" || 
      get_the_terms( $product->ID, 'product_cat' )[1]->name === "Łóżka" || 
      get_the_terms( $product->ID, 'product_cat' )[2]->name === "Łóżka" 
      ) :
    ?>
        <div class="wdm-custom-fields">
            <input type="hidden" name="wdm_name" id="wdm_name" value="Brak" />
        </div>
        <style>
          .tabs {
            display: flex;
            justify-content: space-around;
            list-style-type: none;
            margin: 0;
            padding: 0;
            border-bottom: 1px solid black;
          }

          .tab {
            cursor: pointer;
            padding: 10px;
          }

          .tab.active {
            background-color: #CCC;
          }

          .tab:hover {
            background-color: #AAA;
          }

          .tab-content {
            margin-left: 20px;
            margin-right: 20px;
          }

          [data-tab-content] {
            display: none;
          }

          .active[data-tab-content] {
            display: block;
          }
        </style>
        <div class="fabric fabric--hidden">
          <h3 class="fabric__heading">Wybierz tkaninę:</h3>
          <ul class="tabs">
            <li data-tab-target="#fabric-boss" class="active tab">Tkaniny Boss</li>
            <li data-tab-target="#fabric-vena" class="tab">Tkaniny Vena</li>
            <li data-tab-target="#fabric-ronda" class="tab">Tkaniny Ronda</li>
            <li data-tab-target="#about" class="tab">About</li>
          </ul>

          <div class="tab-content">
            <div id="fabric-boss" data-tab-content class="active">
              <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Boss/Boss_01.jpg" ?>" alt="Tkanina Boss" data-fabric-group="grupa1" loading="lazy">
              <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Boss/Boss_02.jpg" ?>" alt="Tkanina Boss" data-fabric-group="grupa1" loading="lazy">
              <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Boss/Boss_03.jpg" ?>" alt="Tkanina Boss" data-fabric-group="grupa1" loading="lazy">
              <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Boss/Boss_04.jpg" ?>" alt="Tkanina Boss" data-fabric-group="grupa1" loading="lazy">
              <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Boss/Boss_05.jpg" ?>" alt="Tkanina Boss" data-fabric-group="grupa1" loading="lazy">
              <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Boss/Boss_06.jpg" ?>" alt="Tkanina Boss" data-fabric-group="grupa1" loading="lazy">
              <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Boss/Boss_07.jpg" ?>" alt="Tkanina Boss" data-fabric-group="grupa1" loading="lazy">
              <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Boss/Boss_08.jpg" ?>" alt="Tkanina Boss" data-fabric-group="grupa1" loading="lazy">
              <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Boss/Boss_09.jpg" ?>" alt="Tkanina Boss" data-fabric-group="grupa1" loading="lazy">
              <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Boss/Boss_10.jpg" ?>" alt="Tkanina Boss" data-fabric-group="grupa1" loading="lazy">
              <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Boss/Boss_11.jpg" ?>" alt="Tkanina Boss" data-fabric-group="grupa1" loading="lazy">
              <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Boss/Boss_12.jpg" ?>" alt="Tkanina Boss" data-fabric-group="grupa1" loading="lazy">
              <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Boss/Boss_13.jpg" ?>" alt="Tkanina Boss" data-fabric-group="grupa1" loading="lazy">
              <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Boss/Boss_14.jpg" ?>" alt="Tkanina Boss" data-fabric-group="grupa1" loading="lazy">
              <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Boss/Boss_15.jpg" ?>" alt="Tkanina Boss" data-fabric-group="grupa1" loading="lazy">
            </div>
            <div id="fabric-vena" data-tab-content>
              <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Vena/Vena-01.jpg" ?>" alt="Tkanina Vena" data-fabric-group="grupa1" loading="lazy">
              <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Vena/Vena-02.jpg" ?>" alt="Tkanina Vena" data-fabric-group="grupa1" loading="lazy">
              <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Vena/Vena-03.jpg" ?>" alt="Tkanina Vena" data-fabric-group="grupa1" loading="lazy">
              <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Vena/Vena-04.jpg" ?>" alt="Tkanina Vena" data-fabric-group="grupa1" loading="lazy">
              <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Vena/Vena-05.jpg" ?>" alt="Tkanina Vena" data-fabric-group="grupa1" loading="lazy">
              <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Vena/Vena-06.jpg" ?>" alt="Tkanina Vena" data-fabric-group="grupa1" loading="lazy">
              <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Vena/Vena-07.jpg" ?>" alt="Tkanina Vena" data-fabric-group="grupa1" loading="lazy">
              <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Vena/Vena-08.jpg" ?>" alt="Tkanina Vena" data-fabric-group="grupa1" loading="lazy">
              <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Vena/Vena-09.jpg" ?>" alt="Tkanina Vena" data-fabric-group="grupa1" loading="lazy">
              <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Vena/Vena-10.jpg" ?>" alt="Tkanina Vena" data-fabric-group="grupa1" loading="lazy">
            </div>
            <div id="fabric-ronda" data-tab-content>
              <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Vena/Vena-01.jpg" ?>" alt="Tkanina Vena" data-fabric-group="grupa1" loading="lazy">
              <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Vena/Vena-02.jpg" ?>" alt="Tkanina Vena" data-fabric-group="grupa1" loading="lazy">
              <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Vena/Vena-03.jpg" ?>" alt="Tkanina Vena" data-fabric-group="grupa1" loading="lazy">
              <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Vena/Vena-04.jpg" ?>" alt="Tkanina Vena" data-fabric-group="grupa1" loading="lazy">
              <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Vena/Vena-05.jpg" ?>" alt="Tkanina Vena" data-fabric-group="grupa1" loading="lazy">
              <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Vena/Vena-06.jpg" ?>" alt="Tkanina Vena" data-fabric-group="grupa1" loading="lazy">
              <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Vena/Vena-07.jpg" ?>" alt="Tkanina Vena" data-fabric-group="grupa1" loading="lazy">
              <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Vena/Vena-08.jpg" ?>" alt="Tkanina Vena" data-fabric-group="grupa1" loading="lazy">
              <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Vena/Vena-09.jpg" ?>" alt="Tkanina Vena" data-fabric-group="grupa1" loading="lazy">
              <img class="fabric__image" src="<?php echo get_template_directory_uri() . "/assets/images/fabric/Grupa-1/Vena/Vena-10.jpg" ?>" alt="Tkanina Vena" data-fabric-group="grupa1" loading="lazy">
            </div>
            <div id="about" data-tab-content>
              <h1>About</h1>
              <p>Let me tell you about me</p>
            </div>
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

// add_filter('woocommerce_add_cart_item_data','wdm_add_item_data',10,3);

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

// add_filter('woocommerce_get_item_data','wdm_add_item_meta',10,2);

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

// add_action( 'woocommerce_checkout_create_order_line_item', 'wdm_add_custom_order_line_item_meta',10,4 );

function wdm_add_custom_order_line_item_meta($item, $cart_item_key, $values, $order)
{

    if(array_key_exists('wdm_name', $values))
    {
        $item->add_meta_data('_wdm_name',$values['wdm_name']);
    }
}