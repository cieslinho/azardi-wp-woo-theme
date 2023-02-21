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
	
	<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-X1QCNJBD9R"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-X1QCNJBD9R');
</script>
	
</head>

<body <?php body_class();?>>
    <nav class="nav">
            <div class="nav__overlay"></div>
            <div class="nav__top">
                <div class="nav__top-socials">
                    <a href="https://www.facebook.com/lozkamaterace/">
                        <i class='bx bxl-facebook-circle'></i>
                    </a>
                    <a href="https://www.instagram.com/azardi.art/?igshid=YmMyMTA2M2Y%3D">
                        <i class='bx bxl-instagram-alt'></i>
                    </a>
                </div>
                <div class="nav__top-info">
                    <p>Zadzwoń do doradcy:</p>
                    <a href="tel:+48884822444">+48 884 822 444</a>
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
                    </a>
                </div>
            </div>
        </nav>