<?php
/**
 * @package Azardi
 */
?>
</div>
</div>
<footer class="footer section-padding">
    <div class="container">
        <div class="footer__boxes">
            <div class="footer__box footer__box--first">
                <a href="<?php echo get_home_url(); ?>" class="footer__logo">
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/images/logonew2.png" alt="Logo firmy Azardi, Azardi sklep meblarski"
                        class="footer__img">
                </a>
                <p class="footer__motto">
                    Nasza oferta skierowana jest do każdego świadomego klienta, poszukującego mebli wysokiej jakości
                    prosto od Polskiego producenta
                </p>
                <div class="footer__box-address">
                    <p class="footer__link menu-item">
                        <i class='bx bxs-map'></i>
                        Mroczeń 93, 63-604 Baranów
                    </p>
                    <a class="footer__link menu-item" href="mailto:kontakt@azardi.pl">
                        <i class='bx bxs-envelope'></i>
                        kontakt@azardi.pl
                    </a>
                    <a class="footer__link menu-item" href="tel:+48 790 231 122">
                        <i class='bx bxs-phone'></i>
                        +48 790 231 122</a>
                    <a class="footer__link menu-item" href="tel:+48 884 822 444">
                        <i class='bx bxs-phone'></i>
                        +48 884 822 444</a>
                </div>
                <div class="nav__top-socials">
                    <a href="https://www.facebook.com/lozkamaterace/">
                        <i class='bx bxl-facebook-circle'></i>
                    </a>
                    <a href="https://www.instagram.com/azardi.art/?igshid=YmMyMTA2M2Y%3D">
                        <i class='bx bxl-instagram-alt'></i>
                    </a>
                </div>
            </div>
            <div class="footer__box">
                <p class="footer__box-title">Godziny otwarcia</p>
                    <p class="footer__text">
                        Pon - Pt: 8:00 - 16:00
                    </p>
                    <p class="footer__text">
                        Sobota: 9:00-13:00
                    </p>
                    <p class="footer__text">
                        Niedziela: Nieczynne
                    </p>
                    <div class="footer__box-opening">
                    <?php wp_nav_menu(
                    array(
                        'theme_location' => 'azardi_footer_menu_first'
                    )
                    );
                    ?>
                    </div>
            </div>
            <div class="footer__box">
                <p class="footer__box-title">Oferta</p>
                <div class="footer__box-offer">
 <?php wp_nav_menu(
    array(
        'theme_location' => 'azardi_footer_menu_second'
    )
    );
    ?>
                </div>
            </div>
            <div class="footer__box">
                <p class="footer__box-title">Informacje</p>
                <div class="footer__box-informations">
                <?php wp_nav_menu(
    array(
        'theme_location' => 'azardi_footer_menu_third'
    )
    );
    ?>
                </div>
            </div>
        </div>
        <div class="footer__middle">
            <div class="footer__middle-apps">
                <a href="https://apps.apple.com/pl/app/azardi/id1635741425" class="footer__middle-link">
                <img src="<?php echo get_template_directory_uri(); ?>/assets/images/app-store.png" alt="Logo app store"
                        class="footer__middle-img">
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.arlity.cloud.azardi&hl=pl&gl=US" class="footer__middle-link">
                <img src="<?php echo get_template_directory_uri(); ?>/assets/images/google-play-badge.png" alt="Logo google store"
                        class="footer__middle-img">
                </a>
            </div>
            <div class="footer__middle-payments">
                <p class="footer__middle-text">Bezpieczne płatności</p>
            <img src="<?php echo get_template_directory_uri(); ?>/assets/images/przelewy24.png" alt="Logo płatności przelewy24"
                        class="footer__middle-img">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/eraty.png" alt="Logo płatności eraty"
                        class="footer__middle-img">
            </div>
        </div>
        <div class="footer__bottom">
            <p class="footer__bottom-text">
                Copyright &copy; AZARDI All rights reserved 
            </p>
            <p class="footer__bottom-text"> <span class="footer__bottom-span">|</span>Realizacja: 
                <a href="https://www.cieslaszymon.pl" class="footer__bottom-link">Cieśla Szymon</a>
            </p>
        </div>

    </div>
</footer>
<?php wp_footer(); ?>
</body>

</html>