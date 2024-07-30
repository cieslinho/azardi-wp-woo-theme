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
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/images/azardi-white.png" alt="Logo firmy Azardi, Azardi sklep meblarski"
                        class="footer__img">
                </a>
				 <a style="font-style: italic;" class="footer__link menu-item" href="https://www.royalcoil.pl/">
                       „Oficjalny dystrybutor materacy Royal Coil” 
                                            </a>
                <div class="footer__box-address">
                    <p class="footer__link menu-item">
                        <i class='bx bxs-map'></i>
                        Mroczeń 93, 63-604 Baranów
                    </p>
                    <a class="footer__link menu-item" href="mailto:kontakt@azardi.pl">
                        <i class='bx bxs-envelope'></i>
                        kontakt@azardi.pl
                    </a>
					
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
                <p class="footer__box-title">Meble</p>
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
            <div class="footer__box">
                <p class="footer__box-title">Obsługa klienta</p>
                    <div class="footer__box-opening">
                    <?php wp_nav_menu(
                    array(
                        'theme_location' => 'azardi_footer_menu_fourth'
                    )
                    );
                    ?>
                    </div>
            </div>
            <div class="footer__box">
                <p class="footer__box-title">Infolinia</p>
<!--                     <a class="footer__link menu-item" href="tel:+48 790 231 122">
                        <i class='bx bxs-phone'></i>
                        +48 790 231 122</a> -->
                    <a class="footer__link menu-item" href="tel:+48 884 822 444">
                        <i class='bx bxs-phone'></i>
                        +48 884 822 444</a>
                        <p class="footer__text">
                        Pon - Pt: 8:00 - 16:00
                    </p>
                    <p class="footer__text">
                        Sobota: 9:00-13:00
                    </p>
            </div>
        </div>
        <div class="footer__middle">
            <div class="footer__middle-apps">
                <p class="footer__middle-app">Azardi Apps</p>
           <div class="footer__middle-icons">
            <a href="https://apps.apple.com/pl/app/azardi/id1635741425" class="footer__middle-link">
                <img src="<?php echo get_template_directory_uri(); ?>/assets/images/app-store.png" alt="Logo app store"
                        class="footer__middle-img">
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.arlity.cloud.azardi&hl=pl&gl=US" class="footer__middle-link">
                <img src="<?php echo get_template_directory_uri(); ?>/assets/images/google-play-badge.png" alt="Logo google store"
                        class="footer__middle-img">
                </a>
           </div>
            </div>
            <div class="footer__middle-payments">
                <p class="footer__middle-text">Bezpieczne płatności</p>
            <img src="<?php echo get_template_directory_uri(); ?>/assets/images/przelewy24.png" alt="Logo płatności przelewy24"
                        class="footer__middle-img">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/eraty-2.svg" alt="Logo płatności eraty"
                        class="footer__middle-img">
				<img src="https://azardi.pl/wp-content/uploads/2024/01/ca-logo-768.png" alt="Logo płatności CA Raty"
                        class="footer__middle-img">
				<img src="<?php echo get_template_directory_uri(); ?>/assets/images/raty0.jpeg" alt="Logo płatności CA Raty"
                        class="footer__middle-img">
            </div>
        </div>
        <div class="footer__bottom">
            <p class="footer__bottom-text">
                Copyright &copy; AZARDI All rights reserved 
            </p>
            <p class="footer__bottom-text"> <span class="footer__bottom-span">|</span>Realizacja: 
                <a href="mailto:contact@cieslaszymon.pl" class="footer__bottom-link">Cieśla Szymon</a>
            </p>
        </div>

    </div>
</footer>
<?php wp_footer(); ?>
<script type="application/ld+json">
{
"@context": "https://schema.org",
"@type": "Organization",
"url": "https://azardi.pl/",
"logo": "https://azardi.pl/wp-content/themes/azardi/assets/images/logo-new-png.png"
}
</script>

<script type="application/ld+json">
{
  "@context": "http://schema.org",
  "@type": "FurnitureStore",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Baranów",
    "streetAddress": "Mroczeń 93",
    "postalCode": "63-604",
    "addressRegion": "Wielkopolskie",
    "addressCountry": "PL"
  },
  "name": "Azardi",
  "legalName": "Azardi s.c.",
  "alternateName": "azardi.pl",
  "brand": "Azardi",
  "email": "kontakt@azardi.pl",
  "telephone": "+48884822444",
  "image": "https://azardi.pl/wp-content/themes/azardi/assets/images/logo-new-png.png",
  "logo": "https://azardi.pl/wp-content/themes/azardi/assets/images/logo-new-png.png",
  "priceRange": "PLN",
  "url": "https://azardi.pl/",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:00",
      "closes": "16:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Saturday"
      ],
      "opens": "08:00",
      "closes": "16:00"
    }
  ],
  "sameAs": [
    "https://www.facebook.com/lozkamaterace/",
    "https://www.instagram.com/azardi.art/"
  ],
  "hasMap": "https://maps.app.goo.gl/Z6ijBUWU2zBta9Rv9",
  "taxID": "6192048542"
}
</script>

</body>

</html>