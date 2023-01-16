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
                    <a href="tel:+537895760">+48 537 895 760</a>
                </div>
            </div>
            <div class="nav__navbar">
                <button class="nav__btn">
                    <div class="nav__btn-box">
                        <div class="nav__btn-bars"></div>
                    </div>
                </button>
                <a href="http://azardishop.local/" class="nav__logo">
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
                    <a href="">
                        <i class='bx bx-search'></i>
                    </a>
                    <a href="">
                        <i class='bx bx-user'></i>
                    </a>
                    <a href="">
                        <i class='bx bx-cart'></i>
                    </a>
                </div>
            </div>
        </nav>