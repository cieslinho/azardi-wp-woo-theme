<section class="samples">
  <div class="container">
    <h2 class="section-title">Bezpłatne próbki tkanin</h2>
    <p class="samples__text">Masz wątpliwości, czy wybrany przez Ciebie kolor jest dokładnie tym, czego oczekujesz?</p>
    <p class="samples__text">Przed zakupem zamów bezpłatne próbki tkanin, dopasowane do Twoich preferencji. Wypełnij
      poniższy formularz, a nasz konsultant skontaktuje się z Tobą i prześle Ci bezpłatny zestaw próbek.</p>
    <div class="samples__box">
      <form action="<?php echo get_template_directory_uri(); ?>/samples.php" method="POST" class="samples__form">
        <div class="samples__form-top">
          <label for="name" class="samples__form-label">Imię i nazwisko:</label>
          <input name="name" id="name" type="text" class="samples__form-input" required>
          <label for="email" class="samples__form-label">Adres e-mail:</label>
          <input name="email" id="email" type="email" class="samples__form-input" required>
        </div>
        <div class="samples__form-middle">
          <label for="mobile" class="samples__form-label">Telefon:</label>
          <input name="mobile" id="mobile" type="number" class="samples__form-input" required>
          <label for="city" class="samples__form-label">Miasto:</label>
          <input name="city" id="city" type="text" class="samples__form-input" required>
          <label for="street" class="samples__form-label">Ulica i numer domu:</label>
          <input name="street" id="street" type="text" class="samples__form-input" required>
          <label for="postal" class="samples__form-label">Kod pocztowy:</label>
          <input name="postal" id="postal" type="text" class="samples__form-input" required>
        </div>
        <div class="samples__form-bottom">
          <label for="samples" class="samples__form-label">nazwa tkanin/tkaniny:</label>
          <input id="samples" name="samples" type="text" required class="samples__form-input">
          <button type="submit" class="samples__form-btn">zamów bezpłatne próbki</button>
          <p class="samples__form-info">twoja prośba o przesłanie próbek została wysłana. dziękujemy!</p>
        </div>
      </form>
    </div>
</section>