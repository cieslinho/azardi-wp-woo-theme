<?php
/**
 * @package Azardi
 */
?>

<!DOCTYPE html>
<html <?php language_attributes();?>>

<head>
    <meta charset="<?php bloginfo('charset');?>">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;700&display=swap" rel="stylesheet">
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <?php wp_head(); ?>

	
	<!-- Smartsupp Live Chat script -->
<script type="text/javascript">
var _smartsupp = _smartsupp || {};
_smartsupp.key = '56ac3ac15b7d852d16fc81769183161e403935ba';
window.smartsupp||(function(d) {
  var s,c,o=smartsupp=function(){ o._.push(arguments)};o._=[];
  s=d.getElementsByTagName('script')[0];c=d.createElement('script');
  c.type='text/javascript';c.charset='utf-8';c.async=true;
  c.src='https://www.smartsuppchat.com/loader.js?';s.parentNode.insertBefore(c,s);
})(document);
</script>
</head>

<body <?php body_class();?>>

    <nav class="nav">
            <div class="nav__overlay"></div>
            <div class="nav__top">
                <div class="nav__top-info">
                    
                    <a href="tel:+48884822444">
                    <i class='bx bxs-phone'></i>
                    +48 884 822 444</a>
                </div>
            </div>
            <div class="nav__navbar">
                <button class="nav__btn">
                    <div class="nav__btn-box">
                        <div class="nav__btn-bars"></div>
                    </div>
                </button>
                <a href="<?php echo get_home_url(); ?>" class="nav__logo">
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/images/logo.png" alt="Azardi - Odrkyj Piękno Sypialni, Azardi Logo" class="nav__img">
                </a>
                <ul class="nav__list">
                    <?php wp_nav_menu(
                            array(
                                'theme_location' => 'azardi_main_menu'
                            )
                        );
                    ?>
                    <p class="nav__motto">„Odkryj Piękno Sypialni”</p>
                </ul>
                <div class="nav__tools">
                    <div class="nav__search">
                        <?php echo do_shortcode('[wpdreams_ajaxsearchlite]'); ?>
                    </div>
                    <a href="/moje-konto">
                        <i class='bx bx-user'></i>
                    </a>
                    <a href="<?php echo wc_get_cart_url(); ?>">
                        <i class='bx bx-cart'></i>
                        <small class="product_counter">
	<?php $items_count = WC()->cart->get_cart_contents_count(); ?>
	<span class="mini-cart-count"><?php echo $items_count ? $items_count : '0'; ?></span>
</small>
                    </a>
                </div>
            </div>
        </nav>