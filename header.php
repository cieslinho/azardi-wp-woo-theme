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
        window.smartsupp || (function (d) {
            var s, c, o = smartsupp = function () { o._.push(arguments) }; o._ = [];
            s = d.getElementsByTagName('script')[0]; c = d.createElement('script');
            c.type = 'text/javascript'; c.charset = 'utf-8'; c.async = true;
            c.src = 'https://www.smartsuppchat.com/loader.js?'; s.parentNode.insertBefore(c, s);
        })(document);
    </script>
</head>

<!-- Hotjar Tracking Code for https://www.azardi.pl -->
<script>
    (function (h, o, t, j, a, r) {
        h.hj = h.hj || function () { (h.hj.q = h.hj.q || []).push(arguments) };
        h._hjSettings = { hjid: 3472785, hjsv: 6 };
        a = o.getElementsByTagName('head')[0];
        r = o.createElement('script'); r.async = 1;
        r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
        a.appendChild(r);
    })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');
</script>

<body <?php body_class();?>>

    <nav class="nav">
        <div class="nav__overlay"></div>
        <div class="nav__top">
            <div class="nav__top-left">
                <p>Official Azardi Webshop</p>
            </div>
            <div class="nav__top-center">
                <p>Dostępne Raty 0%</p>
            </div>
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
                <img src="<?php echo get_template_directory_uri(); ?>/assets/images/logo-new-png.png"
                    alt="Azardi - Odrkyj Piękno Sypialni, Azardi Logo" class="nav__img">
            </a>
            <ul class="nav__list">
                <div class="nav__left">
                    <li class="nav__left-item">
                        <a href="/kategoria-produktu/lozka/" class="nav__left-link">Łóżka</a>
                        <div class="nav__left-submenu">
                            <div class="nav__left-subitems">
                                <a href="/kategoria-produktu/lozka/tapicerowane/"
                                    class="nav__left-subitem">Tapicerowane</a>
                                <a href="/kategoria-produktu/lozka/drewniane/" class="nav__left-subitem">Drewniane</a>
                                <a href="/kategoria-produktu/lozka/kontynentalne/"
                                    class="nav__left-subitem">Kontynentalne</a>
                                <a href="/kategoria-produktu/lozka/hotelowe/" class="nav__left-subitem">Hotelowe</a>
                                <a href="/kategoria-produktu/lozka/elektryczne/"
                                    class="nav__left-subitem">Elektryczne</a>
                                <a href="/kategoria-produktu/lozka/dla-dzieci/" class="nav__left-subitem">Dla
                                    dzieci</a>
                                <a href="/kategoria-produktu/lozka/kolekcje/" class="nav__left-subitem">Kolekcje</a>
                            </div>
                            <div class="nav__left-imgs">
                                <a href="/kontakt/" class="nav__left-linkImg">
                                    <img class="nav__left-img"
                                        src="http://azardi.local/wp-content/uploads/2024/02/Projekt-lozka.jpeg" alt="">
                                    <p class="nav__left-text">Zaprojektuj swoje łóżko</p>
                                </a>
                                <a href="/tkaniny/" class="nav__left-linkImg">
                                    <img class="nav__left-img"
                                        src="http://azardi.local/wp-content/uploads/2024/02/tkanina-2.jpeg" alt="">
                                    <p class="nav__left-text">Zamów darmowe próbki tkanin</p>
                                </a>


                            </div>
                        </div>
                    </li>
                    <li class="nav__left-item">
                        <a href="/kategoria-produktu/materace/" class="nav__left-link">Materace</a>
                        <div class="nav__left-submenu">
                            <div class="nav__left-subitems">
                                <a href="/kategoria-produktu/materace/azardi/" class="nav__left-subitem">Azardi</a>
                                <a href="/kategoria-produktu/materace/royalcoil/" class="nav__left-subitem">Royal
                                    Coil</a>
                                <a href="/kategoria-produktu/materace/magniflex/"
                                    class="nav__left-subitem">Magniflex</a>
                                <a href="/kategoria-produktu/materace/" class="nav__left-subitem">Wszystkie</a>
                                <a href="/materac-quiz/" class="nav__left-subitem">Materac Quiz</a>
                            </div>
                            <div class="nav__left-imgs">
                                <a href="/kategoria-produktu/materace/"
                                    class="nav__left-linkImg nav__left-linkImg-mattress">
                                    <img class="nav__left-img"
                                        src="http://azardi.local/wp-content/uploads/2024/02/plecy.jpg" alt="">
                                    <p class="nav__left-text">Sen jest niezwykle istotny dla naszego zdrowia. Badania
                                        wykazują, że skutecznie wpływa na poprawę koncentracji, obniżenie poziomu stresu
                                        oraz wzmocnienie odporności organizmu. Dobrej jakości sen jest kluczowy dla
                                        zachowania równowagi fizycznej i psychicznej.</p>
                                </a>
                                <a href="/kategoria-produktu/materace/"
                                    class="nav__left-linkImg nav__left-linkImg-mattress">
                                    <img class="nav__left-img"
                                        src="http://azardi.local/wp-content/uploads/2024/02/plecy.jpg" alt="">
                                    <p class="nav__left-text">Sen jest niezwykle istotny dla naszego zdrowia. Badania
                                        wykazują, że skutecznie wpływa na poprawę koncentracji, obniżenie poziomu stresu
                                        oraz wzmocnienie odporności organizmu. Dobrej jakości sen jest kluczowy dla
                                        zachowania równowagi fizycznej i psychicznej.</p>
                                </a>



                            </div>
                        </div>
                    </li>
                    <li class="nav__left-item">
                        <a href="/kategoria-produktu/meble/" class="nav__left-link">Meble</a>
                        <div class="nav__left-submenu">
                            <div class="nav__left-subitems">
                                <a href="/kategoria-produktu/meble/salon/" class="nav__left-subitem">Salon</a>
                                <a href="/kategoria-produktu/meble/sofy/" class="nav__left-subitem">Sofy</a>
                                <a href="/kategoria-produktu/meble/sypialnia/" class="nav__left-subitem">Sypialnia</a>
                                <div class="nav__left-subitems-nested">
                                    <a href="/kategoria-produktu/meble/sypialnia/poduszki/"
                                        class="nav__left-subitem">Poduszki</a>
                                    <a href="/kategoria-produktu/meble/sypialnia/nakladki/"
                                        class="nav__left-subitem">Nakładki</a>
                                </div>
                                <a href="/kategoria-produktu/meble/dodatki" class="nav__left-subitem">Dodatki</a>
                            </div>
                            <div class="nav__left-imgs">
                                <a href="/kontakt/" class="nav__left-linkImg nav__left-linkImg-mattress">
                                    <img class="nav__left-img"
                                        src="http://azardi.local/wp-content/uploads/2024/02/meble-scaled.jpg" alt="">
                                    <!-- <p class="nav__left-text"></p> -->
                                </a>
                                <a href="/kontakt/" class="nav__left-linkImg nav__left-linkImg-mattress">
                                    <img class="nav__left-img"
                                        src="http://azardi.local/wp-content/uploads/2024/02/meble-scaled.jpg" alt="">
                                    <!-- <p class="nav__left-text"></p> -->
                                </a>



                            </div>
                        </div>
                    </li>
                    <li class="nav__left-item">
                        <a href="/salony/" class="nav__left-link">Salony</a>
                        <div class="nav__left-submenu">
                            <div class="nav__left-subitems nav__left-subitems-columns">
                                <div class="nav__left-subitems-left">
                                    <a href="/salony/" class="nav__left-subitem">Wszystkie</a>
                                    <a href="/warszawa/" class="nav__left-subitem">Warszawa</a>
                                    <a href="/kepno/" class="nav__left-subitem">Kępno</a>
                                    <a href="/wroclaw/" class="nav__left-subitem">Wrocław</a>
                                    <a href="/ostrow/" class="nav__left-subitem">Ostrów</a>
                                    <a href="/kalisz/" class="nav__left-subitem">Kalisz</a>
                                </div>
                                <div class="nav__left-subitems-right">
                                    <a href="/krotoszyn/" class="nav__left-subitem">Krotoszyn</a>
                                    <a href="/kutno/" class="nav__left-subitem">Kutno</a>
                                    <a href="/lodz/" class="nav__left-subitem">Łódź</a>
                                    <a href="/nysa/" class="nav__left-subitem">Nysa</a>
                                    <a href="/plock/" class="nav__left-subitem">Płock</a>
                                    <a href="/slupsk/" class="nav__left-subitem">Słupsk</a>
                                    <a href="/sieradz/" class="nav__left-subitem">Sieradz</a>
                                </div>
                            </div>
                            <div class="nav__left-imgs">
                                <a href="/salony/" class="nav__left-linkImg nav__left-linkImg-mattress">
                                    <img class="nav__left-img"
                                        src="http://azardi.local/wp-content/uploads/2024/02/salon.png" alt="">
                                    <!-- <p class="nav__left-text"></p> -->
                                </a>
                                <a href="/salony/" class="nav__left-linkImg nav__left-linkImg-mattress">
                                    <img class="nav__left-img"
                                        src="http://azardi.local/wp-content/uploads/2024/02/salon.png" alt="">
                                    <!-- <p class="nav__left-text"></p> -->
                                </a>



                            </div>
                        </div>
                    </li>
                    <li class="nav__left-item">
                        <a href="/wspolpraca/" class="nav__left-link">Współpraca</a>
                        <div class="nav__left-submenu">
                            <div class="nav__left-subitems">

                                <a href="/wspolpraca/" class="nav__left-subitem">Architekci</a>
                                <a href="/wspolpraca/" class="nav__left-subitem">Współpraca B2B</a>

                            </div>

                            <div class="nav__left-imgs">
                                <a href="/kontakt/" class="nav__left-linkImg nav__left-linkImg-mattress">
                                    <img class="nav__left-img"
                                        src="http://azardi.local/wp-content/uploads/2024/02/salon.png" alt="">

                                </a>
                                <a href="/kontakt/" class="nav__left-linkImg nav__left-linkImg-mattress">
                                    <img class="nav__left-img"
                                        src="http://azardi.local/wp-content/uploads/2024/02/salon.png" alt="">

                                </a>



                            </div>
                        </div>
                    </li>






                </div>

                <?php wp_nav_menu(
                            array(
                                'theme_location' => 'azardi_main_menu',
                                
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
                        <span class="mini-cart-count">
                            <?php echo $items_count ? $items_count : '0'; ?>
                        </span>
                    </small>
                </a>
            </div>
        </div>
    </nav>