<section class="mattress">
    <div class="container">
        <h2 class="section-title">Dobierz idealny materac</h2>
        <div class="quiz">
            <div class="quiz__intro">
                <h3 class="quiz__intro-title">Quiz</h3>
                <img class="quiz__intro-img" src="<?php echo get_template_directory_uri(); ?>/assets/images/logo.png"
                    alt="Azardi - Odrkyj Piękno Sypialni, Azardi Logo">
                <button class="quiz__btn quiz__btn-start">Rozpocznij</button>
            </div>

            <div class="quiz__progress">
                <div class="quiz__again">
                    <button class="quiz__btn quiz__btn-again">Od początku</button>
                </div>
                <div class="quiz__steps">
                    <div class="quiz__progress-step active-step"></div>
                    <div class="quiz__progress-step"></div>
                    <div class="quiz__progress-step"></div>
                    <div class="quiz__progress-step"></div>
                    <div class="quiz__progress-step"></div>
                </div>
            </div>

            <div class="quiz__content">
                <div class="quiz__answers active-page" data-number="1" id="box-first">
                    <h3 class="quiz__question">Jaki rodzaj materaca preferujesz?</h3>

                    <div class="quiz__labels">
                        <label class="quiz__label" id="first-label" for="answer-1">
                            <input type="radio" name="question-1" id="answer-1" class="quiz__answer">
                            Piankowy
                        </label>


                        <label class="quiz__label" id="first-label" for="answer-2">
                            <input type="radio" name="question-1" id="answer-2" class="quiz__answer">
                            Sprężynowy
                        </label>



                        <label class="quiz__label" id="first-label" for="answer-3">
                            <input type="radio" name="question-1" id="answer-3" class="quiz__answer">
                            Dwustronny
                        </label>



                        <label class="quiz__label" id="first-label" for="answer-4">
                            <input type="radio" name="question-1" id="answer-4" class="quiz__answer">
                            Nie mam zdania
                        </label>
                    </div>



                </div>
                <div class="quiz__answers" data-number="2" id="box-second">
                    <h3 class="quiz__question">Czy posiadasz aktualnie, któryś z poniższych problemów?</h3>

                    <div class="quiz__labels">
                        <label class="quiz__label" for="answer-5">
                            <input type="radio" name="question-2" id="answer-5" class="quiz__answer">
                            Problemy z zaśnięciem
                        </label>


                        <label class="quiz__label" for="answer-6">
                            <input type="radio" name="question-2" id="answer-6" class="quiz__answer">
                            Bóle kręgosłupa
                        </label>



                        <label class="quiz__label" for="answer-7">
                            <input type="radio" name="question-2" id="answer-7" class="quiz__answer">
                            Przewracanie się w nocy osoby obok
                        </label>



                        <label class="quiz__label" for="answer-8">
                            <input type="radio" name="question-2" id="answer-8" class="quiz__answer">
                            Żadne z tych
                        </label>
                    </div>


                </div>
                <div class="quiz__answers" data-number="3" id="box-third">
                    <h3 class="quiz__question">W jakiej pozycji śpisz?</h3>
                    <div class="quiz__labels">
                        <label class="quiz__label" for="answer-9">
                            <input type="radio" name="question-3" id="answer-9" class="quiz__answer">
                            Na boku
                        </label>


                        <label class="quiz__label" for="answer-10">
                            <input type="radio" name="question-3" id="answer-10" class="quiz__answer">
                            Na plecach
                        </label>



                        <label class="quiz__label" for="answer-11">
                            <input type="radio" name="question-3" id="answer-11" class="quiz__answer">
                            Na brzuchu
                        </label>



                        <label class="quiz__label" for="answer-12">
                            <input type="radio" name="question-3" id="answer-12" class="quiz__answer">
                            To się zmienia
                        </label>
                    </div>


                </div>
                <div class="quiz__answers" data-number="4" id="box-fourth">
                    <h3 class="quiz__question">Jaki chcesz żeby był Twój materac?</h3>

                    <div class="quiz__labels">
                        <label class="quiz__label" for="answer-13">
                            <input type="radio" name="question-4" id="answer-13" class="quiz__answer">
                            Miękki
                        </label>


                        <label class="quiz__label" for="answer-14">
                            <input type="radio" name="question-4" id="answer-14" class="quiz__answer">
                            Twardy
                        </label>



                        <label class="quiz__label" for="answer-15">
                            <input type="radio" name="question-4" id="answer-15" class="quiz__answer">
                            Średnio twardy / Średnio miękki
                        </label>



                        <label class="quiz__label" for="answer-16">
                            <input type="radio" name="question-4" id="answer-16" class="quiz__answer">
                            Obojętnie
                        </label>
                    </div>


                </div>

                <div class="mattress__results quiz__answers" id="box-five" data-number="5">
                    <p class="mattress__results-title">Twoj idealny materac to:</p>
                    <div class="mattress__boxes">
                        <a href="/produkt/materac-piankowy-azardi-piano/" class="mattress__link">
                            <img class="mattress__img"
                                src="<?php echo get_template_directory_uri(); ?>/assets/images/piano.jpg"
                                alt="Materac Azardi">
                            <p class="mattress__name">Piano</p>
                        </a>
                        <a href="/produkt/materac-piankowy-azardi-piano/" class="mattress__link">
                            <img class="mattress__img"
                                src="<?php echo get_template_directory_uri(); ?>/assets/images/piano.jpg"
                                alt="Materac Azardi">
                            <p class="mattress__name">Piano</p>
                        </a>
                        <a href="/produkt/materac-piankowy-azardi-piano/" class="mattress__link">
                            <img class="mattress__img"
                                src="<?php echo get_template_directory_uri(); ?>/assets/images/piano.jpg"
                                alt="Materac Azardi">
                            <p class="mattress__name">Piano</p>
                        </a>
                        <a href="/produkt/materac-piankowy-azardi-piano/" class="mattress__link">
                            <img class="mattress__img"
                                src="<?php echo get_template_directory_uri(); ?>/assets/images/piano.jpg"
                                alt="Materac Azardi">
                            <p class="mattress__name">Piano</p>
                        </a>
                    </div>
                </div>




            </div>

            <div class="quiz__info">
                <p class="quiz__error"></p>
            </div>

            <div class="quiz__btns">
                <button disabled class="quiz__btn quiz__btn-return">Wstecz</button>
                <button class="quiz__btn quiz__btn-next">Dalej</button>
            </div>
        </div>
    </div>
</section>