<section class="contact">
    <div class="container">
        <h2 class="section-title">Kontakt</h2>
        <div class="contact__boxes">
            <div class="contact__box contact__box-left">
                <div class="contact__box">
                <div class="contact__box-icons">
                <i class='bx bxs-phone'></i>
                <p class="contact__box-text">Infolinia</p>
                </div>
                <div class="contact__box-middle">
                    <a class="contact__box-btn"  href="tel:+48 884 822 444">+48 884 822 444</a>
                </div>
                <div class="contact__box-bottom">
                    <p class="contact__box-text">pn-sb:  8:00 – 16:00</p>
                </div>
            </div>
            <div class="contact__box">
                <div class="contact__box-icons">
                <i class='bx bxs-envelope'></i>
                <p class="contact__box-text">Wiadomość</p>
                </div>
                <div class="contact__box-middle">
                <p class="contact__box-text">Wolisz do nas napisać? Nie ma problemu! Wyślij swoje zapytanie na adres:</p>
                </div>
                <div class="contact__box-bottom">
                <a  class="contact__box-btn" href="mailto:kontakt@azardi.pl">kontakt@azardi.pl</a>
                <p class="contact__box-text">
                Lub wypełnij formularz kontaktowy. Nasi eksperci odpowiedzą na twoją wiadomość w możliwie najszybszym czasie.
                </p>
                </div>
            </div>
            <div class="contact__box contact__box-map-desktop">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2498.828861244121!2d17.987917415917103!3d51.22222823933426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47107500e55ea879%3A0x599579f6f1006203!2sAZARDI%20-%20Producent%20%C5%81%C3%B3%C5%BCek%20i%20Materacy%20Mrocze%C5%84!5e0!3m2!1spl!2spl!4v1674660055529!5m2!1spl!2spl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
            <div class="contact__box contact__box-right">
                <form action="<?php echo get_template_directory_uri(); ?>/mail.php" method="post" class="contact__form">
                    <div class="contact__form-top">
                    <label for="name" class="contact__form-label">Imię i nazwisko:</label>
                    <input name="name" type="text" class="contact__form-input" id="name" required>
                    <label for="email" class="contact__form-label">Adres e-mail:</label>
                    <input name="email" type="email" class="contact__form-input" id="email" required>
                    </div>
                    <div class="contact__form-middle">
                    <label for="mobile" class="contact__form-label">Telefon:</label>
                    <input name="mobile" type="tel" class="contact__form-input" id="mobile" required>
                    <label for="subject" class="contact__form-label">Temat:</label>
                    <input name="subject" type="text" class="contact__form-input" id="subject" required>
                    </div>
                    <div class="contact__form-bottom">
                    <label for="message" class="contact__form-label">Treść wiadomości:</label>
                    <textarea name="message" id="message" cols="30" rows="10" required class="contact__form-textarea"></textarea>
                    <button class="contact__form-btn" type="submit">wyślij</button>
                    </div>
                </form>
            </div>
            <div class="contact__box contact__box-map-mobile">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2498.828861244121!2d17.987917415917103!3d51.22222823933426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47107500e55ea879%3A0x599579f6f1006203!2sAZARDI%20-%20Producent%20%C5%81%C3%B3%C5%BCek%20i%20Materacy%20Mrocze%C5%84!5e0!3m2!1spl!2spl!4v1674660055529!5m2!1spl!2spl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </div>
</section>