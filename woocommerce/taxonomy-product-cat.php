<?php
/**
 * The Template for displaying products in a product category. Simply includes the archive template
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/taxonomy-product-cat.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see         https://docs.woocommerce.com/document/template-structure/
 * @package     WooCommerce\Templates
 * @version     4.7.0
 */


        

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

get_header()
?>

<header class="header">
            <div class="header__slider">
                <div class="header__slide">
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/images/A3_2952.jpeg" alt="Łóżko Azardi">
                    <div class="header__info">
                        <h2 class="header__info-title">Łóżko Aron</h2>
                        <p class="header__info-description">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Neque ullam
                            cumque eius repellat laborum repudiandae?</p>
                        <a href="#" class="header__info-btn">Sprawdź</a>
                    </div>
                </div>
                <div class="header__slide">
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/images/AR_carmen_2313_low_res.jpeg" alt="Łóżko Cypr">
                    <div class="header__info">
                        <h2 class="header__info-title">Łóżko Cypr</h2>
                        <p class="header__info-description">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Neque ullam
                            cumque eius repellat laborum repudiandae?</p>
                        <a href="#" class="header__info-btn">Sprawdź</a>
                    </div>
                </div>
                <div class="header__slide">
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/images/Łózko-dreniane-aranż_29064_maly-RGB.jpeg" alt="Łóżko Honey">
                    <div class="header__info">
                        <h2 class="header__info-title">Łóżko Honey</h2>
                        <p class="header__info-description">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Neque ullam
                            cumque eius repellat laborum repudiandae?</p>
                        <a href="#" class="header__info-btn">Sprawdź</a>
                    </div>
                </div>
            </div>
        </header>
        
        <?php

wc_get_template( 'archive-product.php' );
