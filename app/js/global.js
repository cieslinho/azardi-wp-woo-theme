const navBtn = document.querySelector('.nav__btn')
const menuItemDropdown = document.querySelectorAll('.menu-item-has-children')
const musicBtn = document.querySelector('.header-video__icon')
const fabricsSubmenu = document.querySelector('.fabrics__submenu')
const fabricsSubmenuItems = document.querySelectorAll('.fabrics__submenu-item')
const fabricsImages = document.querySelectorAll('.fabrics__images')
const closePopup = document.querySelector('.promo__close')
const quiz = document.querySelector('.quiz')
const startQuiz = document.querySelector('.quiz__btn-start')
const returnQuiz = document.querySelector('.quiz__btn-again')
const introQuiz = document.querySelector('.quiz__intro')
const quizBtns = document.querySelector('.quiz__btns')
const contentQuiz = document.querySelector('.quiz__content')
const formPages = document.querySelectorAll('.quiz__answers')
const formSteps = document.querySelectorAll('.quiz__progress-step')
const prevBtn = document.querySelector('.quiz__btn-return')
const nextBtn = document.querySelector('.quiz__btn-next')
const progress = document.querySelector('.quiz__progress')
const allLabels = document.querySelectorAll('.quiz__label')
const allInputs = document.querySelectorAll('.quiz__answer')
const inputs = Array.from(document.querySelectorAll('.quiz__answer'))
const quizInfo = document.querySelector('.quiz__error')
const boxFive = document.getElementById('box-five')
const mattressBoxes = document.querySelector('.mattress__boxes')
const mattressBoxesTitle = document.querySelector('.mattress__results-title')
const navbar = document.querySelector('.nav__navbar')

jQuery(document).ready(function ($) {
	var bad_woo_fix_cat_nav_loc = window.location.origin + window.location.pathname

	if ($('ul.wc-block-product-categories-list').length) {
		$('ul.wc-block-product-categories-list li').addClass('nav-category')
	}

	$('ul.wc-block-product-categories-list')
		.find('a')
		.each(function () {
			if ($(this).parent().find('ul').length > 0) {
				$(this).parent().addClass('has-children')
			}

			if ($(this).attr('href') == bad_woo_fix_cat_nav_loc) {
				$(this).parent().addClass('active-category')
				$(this)
					.parents('.wc-block-product-categories > ul.wc-block-product-categories-list li')
					.addClass('active-category')

				$(this)
					.parents('.wc-block-product-categories > ul.wc-block-product-categories-list li')
					.removeClass('nav-category')
				$(this).parent().find('ul > li').removeClass('nav-category')
			}
		})
})

window.onscroll = function () {
	// pageYOffset or scrollY
	if (window.pageYOffset > 0) {
		navbar.classList.add('scrolled')
	} else {
		navbar.classList.remove('scrolled')
	}
}

const createButton = () => {
	menuItemDropdown.forEach(menuItem => {
		const newBtn = document.createElement('button')
		newBtn.textContent = '+'
		newBtn.classList.add('menu-item-btn')
		menuItem.appendChild(newBtn)
	})
}

const handleNav = () => {
	const navMenu = document.querySelector('.nav__list')
	const navBtnBars = document.querySelector('.nav__btn-bars')
	const navOverlay = document.querySelector('.nav__overlay')
	navMenu.classList.toggle('list--active')
	if (navMenu.classList.contains('list--active')) {
		navBtnBars.classList.add('btn--active')
		navOverlay.classList.add('overlay--active')
	} else {
		navOverlay.classList.remove('overlay--active')
		navBtnBars.classList.remove('btn--active')
	}
	function closeOverlay() {
		navOverlay.addEventListener('click', () => {
			navMenu.classList.remove('list--active')
			navOverlay.classList.remove('overlay--active')
			navBtnBars.classList.remove('btn--active')
		})
	}
	closeOverlay()
}

function check() {
	const checkedInputs = inputs.filter(answer => answer.checked)

	const answerFirst = document.querySelector('#answer-1')
	const answerSecond = document.querySelector('#answer-2')
	const answerThird = document.querySelector('#answer-3')
	const answerFour = document.querySelector('#answer-4')

	const answerFive = document.querySelector('#answer-5')
	const answerSix = document.querySelector('#answer-6')
	const answerSeven = document.querySelector('#answer-7')
	const answerEight = document.querySelector('#answer-8')

	const answerNine = document.querySelector('#answer-9')
	const answerTen = document.querySelector('#answer-10')
	const answerEleven = document.querySelector('#answer-11')
	const answerTwelve = document.querySelector('#answer-12')

	const answerThirteen = document.querySelector('#answer-13')
	const answerFourteen = document.querySelector('#answer-14')
	const answerFifteen = document.querySelector('#answer-15')
	const answerSixteen = document.querySelector('#answer-16')

	const array1 = [answerFirst, answerFive, answerNine, answerThirteen]
	const array2 = [answerFirst, answerFive, answerNine, answerFourteen]
	const array3 = [answerFirst, answerFive, answerNine, answerFifteen]
	const array4 = [answerFirst, answerFive, answerNine, answerSixteen]
	const array5 = [answerFirst, answerFive, answerTen, answerThirteen]
	const array6 = [answerFirst, answerFive, answerTen, answerFourteen]
	const array7 = [answerFirst, answerFive, answerTen, answerFifteen]
	const array8 = [answerFirst, answerFive, answerTen, answerSixteen]
	const array9 = [answerFirst, answerFive, answerEleven, answerThirteen]
	const array10 = [answerFirst, answerFive, answerEleven, answerFourteen]
	const array11 = [answerFirst, answerFive, answerEleven, answerFifteen]
	const array12 = [answerFirst, answerFive, answerEleven, answerSixteen]
	const array13 = [answerFirst, answerFive, answerTwelve, answerThirteen]
	const array14 = [answerFirst, answerFive, answerTwelve, answerFourteen]
	const array15 = [answerFirst, answerFive, answerTwelve, answerFifteen]
	const array16 = [answerFirst, answerFive, answerTwelve, answerSixteen]
	const array17 = [answerFirst, answerSix, answerNine, answerThirteen]
	const array18 = [answerFirst, answerSix, answerNine, answerFourteen]
	const array19 = [answerFirst, answerSix, answerNine, answerFifteen]
	const array20 = [answerFirst, answerSix, answerNine, answerSixteen]
	const array21 = [answerFirst, answerSix, answerTen, answerThirteen]
	const array22 = [answerFirst, answerSix, answerTen, answerFourteen]
	const array23 = [answerFirst, answerSix, answerTen, answerFifteen]
	const array24 = [answerFirst, answerSix, answerTen, answerSixteen]
	const array25 = [answerFirst, answerSix, answerEleven, answerThirteen]
	const array26 = [answerFirst, answerSix, answerEleven, answerFourteen]
	const array27 = [answerFirst, answerSix, answerEleven, answerFifteen]
	const array28 = [answerFirst, answerSix, answerEleven, answerSixteen]
	const array29 = [answerFirst, answerSix, answerTwelve, answerThirteen]
	const array30 = [answerFirst, answerSix, answerTwelve, answerFourteen]
	const array31 = [answerFirst, answerSix, answerTwelve, answerFifteen]
	const array32 = [answerFirst, answerSix, answerTwelve, answerSixteen]
	const array33 = [answerFirst, answerSeven, answerNine, answerThirteen]
	const array34 = [answerFirst, answerSeven, answerNine, answerFourteen]
	const array35 = [answerFirst, answerSeven, answerNine, answerFifteen]
	const array36 = [answerFirst, answerSeven, answerNine, answerSixteen]
	const array37 = [answerFirst, answerSeven, answerTen, answerThirteen]
	const array38 = [answerFirst, answerSeven, answerTen, answerFourteen]
	const array39 = [answerFirst, answerSeven, answerTen, answerFifteen]
	const array40 = [answerFirst, answerSeven, answerTen, answerSixteen]
	const array41 = [answerFirst, answerSeven, answerEleven, answerThirteen]
	const array42 = [answerFirst, answerSeven, answerEleven, answerFourteen]
	const array43 = [answerFirst, answerSeven, answerEleven, answerFifteen]
	const array44 = [answerFirst, answerSeven, answerEleven, answerSixteen]
	const array45 = [answerFirst, answerSeven, answerTwelve, answerThirteen]
	const array46 = [answerFirst, answerSeven, answerTwelve, answerFourteen]
	const array47 = [answerFirst, answerSeven, answerTwelve, answerFifteen]
	const array48 = [answerFirst, answerSeven, answerTwelve, answerSixteen]
	const array49 = [answerFirst, answerEight, answerNine, answerThirteen]
	const array50 = [answerFirst, answerEight, answerNine, answerFourteen]
	const array51 = [answerFirst, answerEight, answerNine, answerFifteen]
	const array52 = [answerFirst, answerEight, answerNine, answerSixteen]
	const array53 = [answerFirst, answerEight, answerTen, answerThirteen]
	const array54 = [answerFirst, answerEight, answerTen, answerFourteen]
	const array55 = [answerFirst, answerEight, answerTen, answerFifteen]
	const array56 = [answerFirst, answerEight, answerTen, answerSixteen]
	const array57 = [answerFirst, answerEight, answerEleven, answerThirteen]
	const array58 = [answerFirst, answerEight, answerEleven, answerFourteen]
	const array59 = [answerFirst, answerEight, answerEleven, answerFifteen]
	const array60 = [answerFirst, answerEight, answerEleven, answerSixteen]
	const array61 = [answerFirst, answerEight, answerTwelve, answerThirteen]
	const array62 = [answerFirst, answerEight, answerTwelve, answerFourteen]
	const array63 = [answerFirst, answerEight, answerTwelve, answerFifteen]
	const array64 = [answerFirst, answerEight, answerTwelve, answerSixteen]
	const array65 = [answerSecond, answerFive, answerNine, answerThirteen]
	const array66 = [answerSecond, answerFive, answerNine, answerFourteen]
	const array67 = [answerSecond, answerFive, answerNine, answerFifteen]
	const array68 = [answerSecond, answerFive, answerNine, answerSixteen]
	const array69 = [answerSecond, answerFive, answerTen, answerThirteen]
	const array70 = [answerSecond, answerFive, answerTen, answerFourteen]
	const array71 = [answerSecond, answerFive, answerTen, answerFifteen]
	const array72 = [answerSecond, answerFive, answerTen, answerSixteen]
	const array73 = [answerSecond, answerFive, answerEleven, answerThirteen]
	const array74 = [answerSecond, answerFive, answerEleven, answerFourteen]
	const array75 = [answerSecond, answerFive, answerEleven, answerFifteen]
	const array76 = [answerSecond, answerFive, answerEleven, answerSixteen]
	const array77 = [answerSecond, answerFive, answerTwelve, answerThirteen]
	const array78 = [answerSecond, answerFive, answerTwelve, answerFourteen]
	const array79 = [answerSecond, answerFive, answerTwelve, answerFifteen]
	const array80 = [answerSecond, answerFive, answerTwelve, answerSixteen]
	const array81 = [answerSecond, answerSix, answerNine, answerThirteen]
	const array82 = [answerSecond, answerSix, answerNine, answerFourteen]
	const array83 = [answerSecond, answerSix, answerNine, answerFifteen]
	const array84 = [answerSecond, answerSix, answerNine, answerSixteen]
	const array85 = [answerSecond, answerSix, answerTen, answerThirteen]
	const array86 = [answerSecond, answerSix, answerTen, answerFourteen]
	const array87 = [answerSecond, answerSix, answerTen, answerFifteen]
	const array88 = [answerSecond, answerSix, answerTen, answerSixteen]
	const array89 = [answerSecond, answerSix, answerEleven, answerThirteen]
	const array90 = [answerSecond, answerSix, answerEleven, answerFourteen]
	const array91 = [answerSecond, answerSix, answerEleven, answerFifteen]
	const array92 = [answerSecond, answerSix, answerEleven, answerSixteen]
	const array93 = [answerSecond, answerSix, answerTwelve, answerThirteen]
	const array94 = [answerSecond, answerSix, answerTwelve, answerFourteen]
	const array95 = [answerSecond, answerSix, answerTwelve, answerFifteen]
	const array96 = [answerSecond, answerSix, answerTwelve, answerSixteen]
	const array97 = [answerSecond, answerSeven, answerNine, answerThirteen]
	const array98 = [answerSecond, answerSeven, answerNine, answerFourteen]
	const array99 = [answerSecond, answerSeven, answerNine, answerFifteen]
	const array100 = [answerSecond, answerSeven, answerNine, answerSixteen]
	const array101 = [answerSecond, answerSeven, answerTen, answerThirteen]
	const array102 = [answerSecond, answerSeven, answerTen, answerFourteen]
	const array103 = [answerSecond, answerSeven, answerTen, answerFifteen]
	const array104 = [answerSecond, answerSeven, answerTen, answerSixteen]
	const array105 = [answerSecond, answerSeven, answerEleven, answerThirteen]
	const array106 = [answerSecond, answerSeven, answerEleven, answerFourteen]
	const array107 = [answerSecond, answerSeven, answerEleven, answerFifteen]
	const array108 = [answerSecond, answerSeven, answerEleven, answerSixteen]
	const array109 = [answerSecond, answerSeven, answerTwelve, answerThirteen]
	const array110 = [answerSecond, answerSeven, answerTwelve, answerFourteen]
	const array111 = [answerSecond, answerSeven, answerTwelve, answerFifteen]
	const array112 = [answerSecond, answerSeven, answerTwelve, answerSixteen]
	const array113 = [answerSecond, answerEight, answerNine, answerThirteen]
	const array114 = [answerSecond, answerEight, answerNine, answerFourteen]
	const array115 = [answerSecond, answerEight, answerNine, answerFifteen]
	const array116 = [answerSecond, answerEight, answerNine, answerSixteen]
	const array117 = [answerSecond, answerEight, answerTen, answerThirteen]
	const array118 = [answerSecond, answerEight, answerTen, answerFourteen]
	const array119 = [answerSecond, answerEight, answerTen, answerFifteen]
	const array120 = [answerSecond, answerEight, answerTen, answerSixteen]
	const array121 = [answerSecond, answerEight, answerEleven, answerThirteen]
	const array122 = [answerSecond, answerEight, answerEleven, answerFourteen]
	const array123 = [answerSecond, answerEight, answerEleven, answerFifteen]
	const array124 = [answerSecond, answerEight, answerEleven, answerSixteen]
	const array125 = [answerSecond, answerEight, answerTwelve, answerThirteen]
	const array126 = [answerSecond, answerEight, answerTwelve, answerFourteen]
	const array127 = [answerSecond, answerEight, answerTwelve, answerFifteen]
	const array128 = [answerSecond, answerEight, answerTwelve, answerSixteen]
	const array129 = [answerThird, answerFive, answerNine, answerThirteen]
	const array130 = [answerThird, answerFive, answerNine, answerFourteen]
	const array131 = [answerThird, answerFive, answerNine, answerFifteen]
	const array132 = [answerThird, answerFive, answerNine, answerSixteen]
	const array133 = [answerThird, answerFive, answerTen, answerThirteen]
	const array134 = [answerThird, answerFive, answerTen, answerFourteen]
	const array135 = [answerThird, answerFive, answerTen, answerFifteen]
	const array136 = [answerThird, answerFive, answerTen, answerSixteen]
	const array137 = [answerThird, answerFive, answerEleven, answerThirteen]
	const array138 = [answerThird, answerFive, answerEleven, answerFourteen]
	const array139 = [answerThird, answerFive, answerEleven, answerFifteen]
	const array140 = [answerThird, answerFive, answerEleven, answerSixteen]
	const array141 = [answerThird, answerFive, answerTwelve, answerThirteen]
	const array142 = [answerThird, answerFive, answerTwelve, answerFourteen]
	const array143 = [answerThird, answerFive, answerTwelve, answerFifteen]
	const array144 = [answerThird, answerFive, answerTwelve, answerSixteen]
	const array145 = [answerThird, answerSix, answerNine, answerThirteen]
	const array146 = [answerThird, answerSix, answerNine, answerFourteen]
	const array147 = [answerThird, answerSix, answerNine, answerFifteen]
	const array148 = [answerThird, answerSix, answerNine, answerSixteen]
	const array149 = [answerThird, answerSix, answerTen, answerThirteen]
	const array150 = [answerThird, answerSix, answerTen, answerFourteen]
	const array151 = [answerThird, answerSix, answerTen, answerFifteen]
	const array152 = [answerThird, answerSix, answerTen, answerSixteen]
	const array153 = [answerThird, answerSix, answerEleven, answerThirteen]
	const array154 = [answerThird, answerSix, answerEleven, answerFourteen]
	const array155 = [answerThird, answerSix, answerEleven, answerFifteen]
	const array156 = [answerThird, answerSix, answerEleven, answerSixteen]
	const array157 = [answerThird, answerSix, answerTwelve, answerThirteen]
	const array158 = [answerThird, answerSix, answerTwelve, answerFourteen]
	const array159 = [answerThird, answerSix, answerTwelve, answerFifteen]
	const array160 = [answerThird, answerSix, answerTwelve, answerSixteen]
	const array161 = [answerThird, answerSeven, answerNine, answerThirteen]
	const array162 = [answerThird, answerSeven, answerNine, answerFourteen]
	const array163 = [answerThird, answerSeven, answerNine, answerFifteen]
	const array164 = [answerThird, answerSeven, answerNine, answerSixteen]
	const array165 = [answerThird, answerSeven, answerTen, answerThirteen]
	const array166 = [answerThird, answerSeven, answerTen, answerFourteen]
	const array167 = [answerThird, answerSeven, answerTen, answerFifteen]
	const array168 = [answerThird, answerSeven, answerTen, answerSixteen]
	const array169 = [answerThird, answerSeven, answerEleven, answerThirteen]
	const array170 = [answerThird, answerSeven, answerEleven, answerFourteen]
	const array171 = [answerThird, answerSeven, answerEleven, answerFifteen]
	const array172 = [answerThird, answerSeven, answerEleven, answerSixteen]
	const array173 = [answerThird, answerSeven, answerTwelve, answerThirteen]
	const array174 = [answerThird, answerSeven, answerTwelve, answerFourteen]
	const array175 = [answerThird, answerSeven, answerTwelve, answerFifteen]
	const array176 = [answerThird, answerSeven, answerTwelve, answerSixteen]
	const array177 = [answerThird, answerEight, answerNine, answerThirteen]
	const array178 = [answerThird, answerEight, answerNine, answerFourteen]
	const array179 = [answerThird, answerEight, answerNine, answerFifteen]
	const array180 = [answerThird, answerEight, answerNine, answerSixteen]
	const array181 = [answerThird, answerEight, answerTen, answerThirteen]
	const array182 = [answerThird, answerEight, answerTen, answerFourteen]
	const array183 = [answerThird, answerEight, answerTen, answerFifteen]
	const array184 = [answerThird, answerEight, answerTen, answerSixteen]
	const array185 = [answerThird, answerEight, answerEleven, answerThirteen]
	const array186 = [answerThird, answerEight, answerEleven, answerFourteen]
	const array187 = [answerThird, answerEight, answerEleven, answerFifteen]
	const array188 = [answerThird, answerEight, answerEleven, answerSixteen]
	const array189 = [answerThird, answerEight, answerTwelve, answerThirteen]
	const array190 = [answerThird, answerEight, answerTwelve, answerFourteen]
	const array191 = [answerThird, answerEight, answerTwelve, answerFifteen]
	const array192 = [answerThird, answerEight, answerTwelve, answerSixteen]
	const array193 = [answerFour, answerFive, answerNine, answerThirteen]
	const array194 = [answerFour, answerFive, answerNine, answerFourteen]
	const array195 = [answerFour, answerFive, answerNine, answerFifteen]
	const array196 = [answerFour, answerFive, answerNine, answerSixteen]
	const array197 = [answerFour, answerFive, answerTen, answerThirteen]
	const array198 = [answerFour, answerFive, answerTen, answerFourteen]
	const array199 = [answerFour, answerFive, answerTen, answerFifteen]
	const array200 = [answerFour, answerFive, answerTen, answerSixteen]
	const array201 = [answerFour, answerFive, answerEleven, answerThirteen]
	const array202 = [answerFour, answerFive, answerEleven, answerFourteen]
	const array203 = [answerFour, answerFive, answerEleven, answerFifteen]
	const array204 = [answerFour, answerFive, answerEleven, answerSixteen]
	const array205 = [answerFour, answerFive, answerTwelve, answerThirteen]
	const array206 = [answerFour, answerFive, answerTwelve, answerFourteen]
	const array207 = [answerFour, answerFive, answerTwelve, answerFifteen]
	const array208 = [answerFour, answerFive, answerTwelve, answerSixteen]
	const array209 = [answerFour, answerSix, answerNine, answerThirteen]
	const array210 = [answerFour, answerSix, answerNine, answerFourteen]
	const array211 = [answerFour, answerSix, answerNine, answerFifteen]
	const array212 = [answerFour, answerSix, answerNine, answerSixteen]
	const array213 = [answerFour, answerSix, answerTen, answerThirteen]
	const array214 = [answerFour, answerSix, answerTen, answerFourteen]
	const array215 = [answerFour, answerSix, answerTen, answerFifteen]
	const array216 = [answerFour, answerSix, answerTen, answerSixteen]
	const array217 = [answerFour, answerSix, answerEleven, answerThirteen]
	const array218 = [answerFour, answerSix, answerEleven, answerFourteen]
	const array219 = [answerFour, answerSix, answerEleven, answerFifteen]
	const array220 = [answerFour, answerSix, answerEleven, answerSixteen]
	const array221 = [answerFour, answerSix, answerTwelve, answerThirteen]
	const array222 = [answerFour, answerSix, answerTwelve, answerFourteen]
	const array223 = [answerFour, answerSix, answerTwelve, answerFifteen]
	const array224 = [answerFour, answerSix, answerTwelve, answerSixteen]
	const array225 = [answerFour, answerSeven, answerNine, answerThirteen]
	const array226 = [answerFour, answerSeven, answerNine, answerFourteen]
	const array227 = [answerFour, answerSeven, answerNine, answerFifteen]
	const array228 = [answerFour, answerSeven, answerNine, answerSixteen]
	const array229 = [answerFour, answerSeven, answerTen, answerThirteen]
	const array230 = [answerFour, answerSeven, answerTen, answerFourteen]
	const array231 = [answerFour, answerSeven, answerTen, answerFifteen]
	const array232 = [answerFour, answerSeven, answerTen, answerSixteen]
	const array233 = [answerFour, answerSeven, answerEleven, answerThirteen]
	const array234 = [answerFour, answerSeven, answerEleven, answerFourteen]
	const array235 = [answerFour, answerSeven, answerEleven, answerFifteen]
	const array236 = [answerFour, answerSeven, answerEleven, answerSixteen]
	const array237 = [answerFour, answerSeven, answerTwelve, answerThirteen]
	const array238 = [answerFour, answerSeven, answerTwelve, answerFourteen]
	const array239 = [answerFour, answerSeven, answerTwelve, answerFifteen]
	const array240 = [answerFour, answerSeven, answerTwelve, answerSixteen]
	const array241 = [answerFour, answerEight, answerNine, answerThirteen]
	const array242 = [answerFour, answerEight, answerNine, answerFourteen]
	const array243 = [answerFour, answerEight, answerNine, answerFifteen]
	const array244 = [answerFour, answerEight, answerNine, answerSixteen]
	const array245 = [answerFour, answerEight, answerTen, answerThirteen]
	const array246 = [answerFour, answerEight, answerTen, answerFourteen]
	const array247 = [answerFour, answerEight, answerTen, answerFifteen]
	const array248 = [answerFour, answerEight, answerTen, answerSixteen]
	const array249 = [answerFour, answerEight, answerEleven, answerThirteen]
	const array250 = [answerFour, answerEight, answerEleven, answerFourteen]
	const array251 = [answerFour, answerEight, answerEleven, answerFifteen]
	const array252 = [answerFour, answerEight, answerEleven, answerSixteen]
	const array253 = [answerFour, answerEight, answerTwelve, answerThirteen]
	const array254 = [answerFour, answerEight, answerTwelve, answerFourteen]
	const array255 = [answerFour, answerEight, answerTwelve, answerFifteen]
	const array256 = [answerFour, answerEight, answerTwelve, answerSixteen]

	console.log(checkedInputs)

	function arrayEquals(a, b) {
		return Array.isArray(a) && Array.isArray(b) && a.length === b.length && a.every((val, index) => val === b[index])
	}

	if (arrayEquals(array1, checkedInputs)) {
		console.log('array1')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/magnicool-10-soft/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/MAGNICOOL-10-SOFT-1024x719.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Magnicool 10 Soft</p>
		</a>
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>
	`
	} else if (arrayEquals(array2, checkedInputs)) {
		console.log('array2')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>
	`
	} else if (arrayEquals(array3, checkedInputs)) {
		console.log('array3')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>
	`
	} else if (arrayEquals(array4, checkedInputs)) {
		console.log('array4')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>
	`
	} else if (arrayEquals(array5, checkedInputs)) {
		console.log('array5')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/magnicool-10-soft/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/MAGNICOOL-10-SOFT-1024x719.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Magnicool 10 Soft</p>
		</a>
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>
	`
	} else if (arrayEquals(array6, checkedInputs)) {
		console.log('array6')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/dolce-vita-dual-8/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/dolce-vita-dual-8-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">DOLCE VITA DUAL 8</p>
		</a>
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>
	`
	} else if (arrayEquals(array7, checkedInputs)) {
		console.log('array7')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/dolce-vita-dual-8/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/dolce-vita-dual-8-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">DOLCE VITA DUAL 8</p>
		</a>
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>
	`
	} else if (arrayEquals(array8, checkedInputs)) {
		console.log('array8')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/dolce-vita-dual-8/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/dolce-vita-dual-8-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">DOLCE VITA DUAL 8</p>
		</a>
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>
	`
	} else if (arrayEquals(array9, checkedInputs)) {
		console.log('array9')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/magnicool-10-soft/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/MAGNICOOL-10-SOFT-1024x719.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Magnicool 10 Soft</p>
		</a>
	`
	} else if (arrayEquals(array10, checkedInputs)) {
		console.log('array10')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/dolce-vita-dual-8/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/dolce-vita-dual-8-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">DOLCE VITA DUAL 8</p>
		</a>
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>
	`
	} else if (arrayEquals(array11, checkedInputs)) {
		console.log('array11')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>
	`
	} else if (arrayEquals(array12, checkedInputs)) {
		console.log('array12')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/dolce-vita-dual-8/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/dolce-vita-dual-8-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">DOLCE VITA DUAL 8</p>
		</a>
		<a href="/produkt/magnicool-10-soft/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/MAGNICOOL-10-SOFT-1024x719.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Magnicool 10 Soft</p>
		</a>
		<a href="/produkt/magnicool-10-firm/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/MAGNICOOL-10-FIRM-1024x719.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Magnicool 10 Firm</p>
		</a>
	`
	} else if (arrayEquals(array13, checkedInputs)) {
		console.log('array13')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/magnicool-10-soft/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/MAGNICOOL-10-SOFT-1024x719.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Magnicool 10 Soft</p>
		</a>
	`
	} else if (arrayEquals(array14, checkedInputs)) {
		console.log('array14')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/dolce-vita-dual-8/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/dolce-vita-dual-8-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">DOLCE VITA DUAL 8</p>
		</a>
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>
	`
	} else if (arrayEquals(array15, checkedInputs)) {
		console.log('array15')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>
	`
	} else if (arrayEquals(array16, checkedInputs)) {
		console.log('array16')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/dolce-vita-dual-8/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/dolce-vita-dual-8-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">DOLCE VITA DUAL 8</p>
		</a>
		<a href="/produkt/magnicool-10-soft/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/MAGNICOOL-10-SOFT-1024x719.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Magnicool 10 Soft</p>
		</a>
		<a href="/produkt/magnicool-10-firm/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/MAGNICOOL-10-FIRM-1024x719.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Magnicool 10 Firm</p>
		</a>
	`
	} else if (arrayEquals(array17, checkedInputs)) {
		console.log('array17')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/magnicool-10-soft/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/MAGNICOOL-10-SOFT-1024x719.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Magnicool 10 Soft</p>
		</a>
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>
	`
	} else if (arrayEquals(array18, checkedInputs)) {
		console.log('array18')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/dolce-vita-dual-8/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/dolce-vita-dual-8-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">DOLCE VITA DUAL 8</p>
		</a>
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>
	`
	} else if (arrayEquals(array19, checkedInputs)) {
		console.log('array19')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>
	`
	} else if (arrayEquals(array20, checkedInputs)) {
		console.log('array20')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>
	`
	} else if (arrayEquals(array21, checkedInputs)) {
		console.log('array21')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/dolce-vita-dual-8/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/dolce-vita-dual-8-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">DOLCE VITA DUAL 8</p>
		</a>
		<a href="/produkt/magnicool-10-soft/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/MAGNICOOL-10-SOFT-1024x719.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Magnicool 10 Soft</p>
		</a>
	`
	} else if (arrayEquals(array22, checkedInputs)) {
		console.log('array22')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/dolce-vita-dual-8/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/dolce-vita-dual-8-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">DOLCE VITA DUAL 8</p>
		</a>
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>
	`
	} else if (arrayEquals(array23, checkedInputs)) {
		console.log('array23')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>
	`
	} else if (arrayEquals(array24, checkedInputs)) {
		console.log('array24')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/dolce-vita-dual-8/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/dolce-vita-dual-8-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">DOLCE VITA DUAL 8</p>
		</a>
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>
	`
	} else if (arrayEquals(array25, checkedInputs)) {
		console.log('array25')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/magnicool-10-soft/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/MAGNICOOL-10-SOFT-1024x719.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Magnicool 10 Soft</p>
		</a>
		<a href="/produkt/magnicool-10-firm/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/MAGNICOOL-10-FIRM-1024x719.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Magnicool 10 Firm</p>
		</a>
	`
	} else if (arrayEquals(array26, checkedInputs)) {
		console.log('array26')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/dolce-vita-dual-8/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/dolce-vita-dual-8-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">DOLCE VITA DUAL 8</p>
		</a>
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>
	`
	} else if (arrayEquals(array27, checkedInputs)) {
		console.log('array27')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>

	`
	} else if (arrayEquals(array28, checkedInputs)) {
		console.log('array28')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/dolce-vita-dual-8/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/dolce-vita-dual-8-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">DOLCE VITA DUAL 8</p>
		</a>
		<a href="/produkt/magnicool-10-soft/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/MAGNICOOL-10-SOFT-1024x719.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Magnicool 10 Soft</p>
		</a>
		<a href="/produkt/magnicool-10-firm/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/MAGNICOOL-10-FIRM-1024x719.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Magnicool 10 Firm</p>
		</a>
	`
	} else if (arrayEquals(array29, checkedInputs)) {
		console.log('array29')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/magnicool-10-soft/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/MAGNICOOL-10-SOFT-1024x719.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Magnicool 10 Soft</p>
		</a>
	`
	} else if (arrayEquals(array30, checkedInputs)) {
		console.log('array30')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/dolce-vita-dual-8/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/dolce-vita-dual-8-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">DOLCE VITA DUAL 8</p>
		</a>
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>
	`
	} else if (arrayEquals(array31, checkedInputs)) {
		console.log('array31')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/magnicool-10-firm/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/MAGNICOOL-10-FIRM-1024x719.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Magnicool 10 Firm</p>
		</a>
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>
	`
	} else if (arrayEquals(array32, checkedInputs)) {
		console.log('array32')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/dolce-vita-dual-8/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/dolce-vita-dual-8-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">DOLCE VITA DUAL 8</p>
		</a>
		<a href="/produkt/magnicool-10-firm/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/MAGNICOOL-10-FIRM-1024x719.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Magnicool 10 Firm</p>
		</a>
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>
	`
	} else if (arrayEquals(array33, checkedInputs)) {
		console.log('array33')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/magnicool-10-soft/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/MAGNICOOL-10-SOFT-1024x719.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Magnicool 10 Soft</p>
		</a>
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>
	`
	} else if (arrayEquals(array34, checkedInputs)) {
		console.log('array34')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>
	`
	} else if (arrayEquals(array35, checkedInputs)) {
		console.log('array35')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>
	`
	} else if (arrayEquals(array36, checkedInputs)) {
		console.log('array36')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>
	`
	} else if (arrayEquals(array37, checkedInputs)) {
		console.log('array37')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/magnicool-10-soft/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/MAGNICOOL-10-SOFT-1024x719.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Magnicool 10 Soft</p>
		</a>
	`
	} else if (arrayEquals(array38, checkedInputs)) {
		console.log('array38')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/dolce-vita-dual-8/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/dolce-vita-dual-8-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">DOLCE VITA DUAL 8</p>
		</a>
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>
	`
	} else if (arrayEquals(array39, checkedInputs)) {
		console.log('array39')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>
	`
	} else if (arrayEquals(array40, checkedInputs)) {
		console.log('array40')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/dolce-vita-dual-8/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/dolce-vita-dual-8-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">DOLCE VITA DUAL 8</p>
		</a>
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>
	`
	} else if (arrayEquals(array41, checkedInputs)) {
		console.log('array41')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/magnicool-10-soft/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/MAGNICOOL-10-SOFT-1024x719.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Magnicool 10 Soft</p>
		</a>
	`
	} else if (arrayEquals(array42, checkedInputs)) {
		console.log('array42')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/dolce-vita-dual-8/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/dolce-vita-dual-8-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">DOLCE VITA DUAL 8</p>
		</a>
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>
	`
	} else if (arrayEquals(array43, checkedInputs)) {
		console.log('array43')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>
		<a href="/produkt/magnicool-10-firm/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/MAGNICOOL-10-FIRM-1024x719.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Magnicool 10 Firm</p>
		</a>
	`
	} else if (arrayEquals(array44, checkedInputs)) {
		console.log('array44')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/dolce-vita-dual-8/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/dolce-vita-dual-8-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">DOLCE VITA DUAL 8</p>
		</a>
		<a href="/produkt/magnicool-10-soft/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/MAGNICOOL-10-SOFT-1024x719.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Magnicool 10 Soft</p>
		</a>
		<a href="/produkt/magnicool-10-firm/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/MAGNICOOL-10-FIRM-1024x719.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Magnicool 10 Firm</p>
		</a>
	`
	} else if (arrayEquals(array45, checkedInputs)) {
		console.log('array45')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/magnicool-10-soft/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/MAGNICOOL-10-SOFT-1024x719.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Magnicool 10 Soft</p>
		</a>
	`
	} else if (arrayEquals(array46, checkedInputs)) {
		console.log('array46')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/dolce-vita-dual-8/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/dolce-vita-dual-8-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">DOLCE VITA DUAL 8</p>
		</a>
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>
	`
	} else if (arrayEquals(array47, checkedInputs)) {
		console.log('array47')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/dolce-vita-dual-8/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/dolce-vita-dual-8-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">DOLCE VITA DUAL 8</p>
		</a>
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>
	`
	} else if (arrayEquals(array48, checkedInputs)) {
		console.log('array48')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/dolce-vita-dual-8/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/dolce-vita-dual-8-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">DOLCE VITA DUAL 8</p>
		</a>
		<a href="/produkt/magnicool-10-soft/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/MAGNICOOL-10-SOFT-1024x719.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Magnicool 10 Soft</p>
		</a>
		<a href="/produkt/magnicool-10-firm/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/MAGNICOOL-10-FIRM-1024x719.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Magnicool 10 Firm</p>
		</a>
	`
	} else if (arrayEquals(array49, checkedInputs)) {
		console.log('array49')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/magnicool-10-soft/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/MAGNICOOL-10-SOFT-1024x719.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Magnicool 10 Soft</p>
		</a>
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>
	`
	} else if (arrayEquals(array50, checkedInputs)) {
		console.log('array50')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>
	`
	} else if (arrayEquals(array51, checkedInputs)) {
		console.log('array51')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/magnicool-10-firm/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/MAGNICOOL-10-FIRM-1024x719.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Magnicool 10 Firm</p>
		</a>
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>
	`
	} else if (arrayEquals(array52, checkedInputs)) {
		console.log('array52')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>
	`
	} else if (arrayEquals(array53, checkedInputs)) {
		console.log('array53')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/magnicool-10-firm/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/MAGNICOOL-10-FIRM-1024x719.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Magnicool 10 Firm</p>
		</a>
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>
	`
	} else if (arrayEquals(array54, checkedInputs)) {
		console.log('array54')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/dolce-vita-dual-8/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/dolce-vita-dual-8-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">DOLCE VITA DUAL 8</p>
		</a>
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>
	`
	} else if (arrayEquals(array55, checkedInputs)) {
		console.log('array55')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/magnicool-10-firm/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/MAGNICOOL-10-FIRM-1024x719.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Magnicool 10 Firm</p>
		</a>
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>
	`
	} else if (arrayEquals(array56, checkedInputs)) {
		console.log('array56')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/dolce-vita-dual-8/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/dolce-vita-dual-8-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">DOLCE VITA DUAL 8</p>
		</a>
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>
	`
	} else if (arrayEquals(array57, checkedInputs)) {
		console.log('array57')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/magnicool-10-soft/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/MAGNICOOL-10-SOFT-1024x719.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Magnicool 10 Soft</p>
		</a>
		
	`
	} else if (arrayEquals(array58, checkedInputs)) {
		console.log('array58')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/dolce-vita-dual-8/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/dolce-vita-dual-8-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">DOLCE VITA DUAL 8</p>
		</a>
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>
	`
	} else if (arrayEquals(array59, checkedInputs)) {
		console.log('array59')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/magnicool-10-firm/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/MAGNICOOL-10-FIRM-1024x719.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Magnicool 10 Firm</p>
		</a>
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>
	`
	} else if (arrayEquals(array60, checkedInputs)) {
		console.log('array60')
		mattressBoxes.innerHTML = ` 
		
		
		<a href="/produkt/dolce-vita-dual-8/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/dolce-vita-dual-8-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">DOLCE VITA DUAL 8</p>
		</a>
		<a href="/produkt/magnicool-10-soft/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/MAGNICOOL-10-SOFT-1024x719.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Magnicool 10 Soft</p>
		</a>
		<a href="/produkt/magnicool-10-firm/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/MAGNICOOL-10-FIRM-1024x719.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Magnicool 10 Firm</p>
		</a>
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>

	`
	} else if (arrayEquals(array61, checkedInputs)) {
		console.log('array61')
		mattressBoxes.innerHTML = ` 
		
		<a href="/produkt/magnicool-10-soft/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/MAGNICOOL-10-SOFT-1024x719.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Magnicool 10 Soft</p>
		</a>

	`
	} else if (arrayEquals(array62, checkedInputs)) {
		console.log('array62')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/dolce-vita-dual-8/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/dolce-vita-dual-8-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">DOLCE VITA DUAL 8</p>
		</a>
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>

	`
	} else if (arrayEquals(array63, checkedInputs)) {
		console.log('array63')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/magnicool-10-firm/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/MAGNICOOL-10-FIRM-1024x719.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Magnicool 10 Firm</p>
		</a>
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>

	`
	} else if (arrayEquals(array64, checkedInputs)) {
		console.log('array64')
		mattressBoxes.innerHTML = ` 
		
		
		<a href="/produkt/dolce-vita-dual-8/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/dolce-vita-dual-8-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">DOLCE VITA DUAL 8</p>
		</a>
		<a href="/produkt/magnicool-10-soft/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/MAGNICOOL-10-SOFT-1024x719.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Magnicool 10 Soft</p>
		</a>
		<a href="/produkt/magnicool-10-firm/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/MAGNICOOL-10-FIRM-1024x719.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Magnicool 10 Firm</p>
		</a>
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>

	`
	} else if (arrayEquals(array65, checkedInputs)) {
		console.log('array65')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-vario-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1409-Materac-Vario-AZARDI-kieszeniowy-visco-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO</p>
		</a>
		<a href="/produkt/materac-vario-plus-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1415-Materac-Vario-Plus-AZARDI-kieszeniowy-visco.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO PLUS</p>
		</a>
		<a href="/produkt/materac-azardi-premium-komfort-royal/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1432-Materac-AZARDI-Premium-Komfort-Royal-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT ROYAL</p>
		</a>
	
	`
	} else if (arrayEquals(array66, checkedInputs)) {
		console.log('array66')
		mattressBoxes.innerHTML = ` 
		
		<a href="/produkt/materac-azardi-premium-kieszeniowy/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1426-Materac-AZARDI-Premium-kieszeniowy-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM</p>
		</a>
	
	`
	} else if (arrayEquals(array67, checkedInputs)) {
		console.log('array67')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-vario-plus-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1415-Materac-Vario-Plus-AZARDI-kieszeniowy-visco.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO PLUS</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-premium-komfort/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1422-Materac-kieszeniowy-AZARDI-Premium-Komfort-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT</p>
		</a>
		<a href="/produkt/materac-azardi-premium-komfort-royal/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1432-Materac-AZARDI-Premium-Komfort-Royal-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT ROYAL</p>
		</a>
		<a href="/produkt/essence/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1477-Materac-kieszeniowy-AZARDI-Essence-Royal-Coil-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Essence</p>
		</a>
	
	`
	} else if (arrayEquals(array68, checkedInputs)) {
		console.log('array68')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-vario-plus-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1415-Materac-Vario-Plus-AZARDI-kieszeniowy-visco.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO PLUS</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-premium-komfort/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1422-Materac-kieszeniowy-AZARDI-Premium-Komfort-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT</p>
		</a>
		<a href="/produkt/materac-azardi-premium-komfort-royal/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1432-Materac-AZARDI-Premium-Komfort-Royal-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT ROYAL</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-claremont-latex/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1447-Materac-kieszeniowy-Azardi-Claremont-latex-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">CLAREMONT LATEX</p>
		</a>
	
	`
	} else if (arrayEquals(array69, checkedInputs)) {
		console.log('array69')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-kieszeniowy-azardi-vouge-royal-coil/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1456-Materac-kieszeniowy-Azardi-Vouge-Royal-Coil.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vouge</p>
		</a>
	
	
	`
	} else if (arrayEquals(array70, checkedInputs)) {
		console.log('array70')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-kieszeniowy-azardi-king-firm/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1438-Materac-kieszeniowy-Azardi-King-Firm.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">King Firm</p>
		</a>
		<a href="/produkt/materac-azardi-premium-kieszeniowy/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1426-Materac-AZARDI-Premium-kieszeniowy-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM</p>
		</a>
	
	
	`
	} else if (arrayEquals(array71, checkedInputs)) {
		console.log('array71')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-azardi-premium-kieszeniowy/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1426-Materac-AZARDI-Premium-kieszeniowy-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-premium-komfort/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1422-Materac-kieszeniowy-AZARDI-Premium-Komfort-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-vouge-royal-coil/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1456-Materac-kieszeniowy-Azardi-Vouge-Royal-Coil.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vouge</p>
		</a>
	
	
	`
	} else if (arrayEquals(array72, checkedInputs)) {
		console.log('array72')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-azardi-premium-kieszeniowy/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1426-Materac-AZARDI-Premium-kieszeniowy-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-king-firm/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1438-Materac-kieszeniowy-Azardi-King-Firm.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">King Firm</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-vouge-royal-coil/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1456-Materac-kieszeniowy-Azardi-Vouge-Royal-Coil.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vouge</p>
		</a>
	
	
	`
	} else if (arrayEquals(array73, checkedInputs)) {
		console.log('array73')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-azardi-premium-komfort-royal/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1432-Materac-AZARDI-Premium-Komfort-Royal-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT ROYAL</p>
		</a>
	
	
	`
	} else if (arrayEquals(array74, checkedInputs)) {
		console.log('array74')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-azardi-premium-kieszeniowy/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1426-Materac-AZARDI-Premium-kieszeniowy-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-king-firm/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1438-Materac-kieszeniowy-Azardi-King-Firm.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">King Firm</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-vouge-royal-coil/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1456-Materac-kieszeniowy-Azardi-Vouge-Royal-Coil.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vouge</p>
		</a>
	
	
	`
	} else if (arrayEquals(array75, checkedInputs)) {
		console.log('array75')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-vario-plus-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1415-Materac-Vario-Plus-AZARDI-kieszeniowy-visco.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO PLUS</p>
		</a>


		<a href="/produkt/materac-kieszeniowy-azardi-premium-komfort/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1422-Materac-kieszeniowy-AZARDI-Premium-Komfort-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT</p>
		</a>
		
		<a href="/produkt/materac-kieszeniowy-azardi-claremont-latex/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1447-Materac-kieszeniowy-Azardi-Claremont-latex-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">CLAREMONT LATEX</p>
		</a>
		<a href="/produkt/essence/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1477-Materac-kieszeniowy-AZARDI-Essence-Royal-Coil-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Essence</p>
		</a>

	
	`
	} else if (arrayEquals(array76, checkedInputs)) {
		console.log('array76')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-vario-plus-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1415-Materac-Vario-Plus-AZARDI-kieszeniowy-visco.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO PLUS</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-premium-komfort/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1422-Materac-kieszeniowy-AZARDI-Premium-Komfort-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT</p>
		</a>
		<a href="/produkt/materac-azardi-premium-komfort-royal/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1432-Materac-AZARDI-Premium-Komfort-Royal-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT ROYAL</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-vouge-royal-coil/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1456-Materac-kieszeniowy-Azardi-Vouge-Royal-Coil.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vouge</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-king-firm/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1438-Materac-kieszeniowy-Azardi-King-Firm.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">King Firm</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-claremont-latex/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1447-Materac-kieszeniowy-Azardi-Claremont-latex-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">CLAREMONT LATEX</p>
		</a>


	
	`
	} else if (arrayEquals(array77, checkedInputs)) {
		console.log('array77')
		mattressBoxes.innerHTML = ` 
		
		<a href="/produkt/materac-vario-plus-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1415-Materac-Vario-Plus-AZARDI-kieszeniowy-visco.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO PLUS</p>
		</a>
		<a href="/produkt/materac-azardi-premium-komfort-royal/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1432-Materac-AZARDI-Premium-Komfort-Royal-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT ROYAL</p>
		</a>
	


	
	`
	} else if (arrayEquals(array78, checkedInputs)) {
		console.log('array78')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-azardi-premium-kieszeniowy/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1426-Materac-AZARDI-Premium-kieszeniowy-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-king-firm/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1438-Materac-kieszeniowy-Azardi-King-Firm.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">King Firm</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-vouge-royal-coil/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1456-Materac-kieszeniowy-Azardi-Vouge-Royal-Coil.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vouge</p>
		</a>
	
	


	
	`
	} else if (arrayEquals(array79, checkedInputs)) {
		console.log('array79')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-vario-plus-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1415-Materac-Vario-Plus-AZARDI-kieszeniowy-visco.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO PLUS</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-premium-komfort/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1422-Materac-kieszeniowy-AZARDI-Premium-Komfort-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT</p>
		</a>
		<a href="/produkt/essence/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1477-Materac-kieszeniowy-AZARDI-Essence-Royal-Coil-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Essence</p>
		</a>



	
	`
	} else if (arrayEquals(array80, checkedInputs)) {
		console.log('array80')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-vario-plus-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1415-Materac-Vario-Plus-AZARDI-kieszeniowy-visco.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO PLUS</p>
		</a>
		<a href="/produkt/materac-azardi-premium-kieszeniowy/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1426-Materac-AZARDI-Premium-kieszeniowy-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-premium-komfort/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1422-Materac-kieszeniowy-AZARDI-Premium-Komfort-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT</p>
		</a>
		<a href="/produkt/materac-azardi-premium-komfort-royal/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1432-Materac-AZARDI-Premium-Komfort-Royal-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT ROYAL</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-vouge-royal-coil/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1456-Materac-kieszeniowy-Azardi-Vouge-Royal-Coil.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vouge</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-king-firm/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1438-Materac-kieszeniowy-Azardi-King-Firm.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">King Firm</p>
		</a>
		<a href="/produkt/essence/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1477-Materac-kieszeniowy-AZARDI-Essence-Royal-Coil-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Essence</p>
		</a>

	
	`
	} else if (arrayEquals(array81, checkedInputs)) {
		console.log('array81')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-azardi-premium-komfort-royal/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1432-Materac-AZARDI-Premium-Komfort-Royal-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT ROYAL</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-claremont-latex/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1447-Materac-kieszeniowy-Azardi-Claremont-latex-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">CLAREMONT LATEX</p>
		</a>
		<a href="/produkt/essence/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1477-Materac-kieszeniowy-AZARDI-Essence-Royal-Coil-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Essence</p>
		</a>

	
	`
	} else if (arrayEquals(array82, checkedInputs)) {
		console.log('array82')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-azardi-premium-kieszeniowy/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1426-Materac-AZARDI-Premium-kieszeniowy-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-vouge-royal-coil/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1456-Materac-kieszeniowy-Azardi-Vouge-Royal-Coil.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vouge</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-king-firm/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1438-Materac-kieszeniowy-Azardi-King-Firm.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">King Firm</p>
		</a>


	
	`
	} else if (arrayEquals(array83, checkedInputs)) {
		console.log('array83')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-kieszeniowy-azardi-premium-komfort/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1422-Materac-kieszeniowy-AZARDI-Premium-Komfort-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-claremont-latex/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1447-Materac-kieszeniowy-Azardi-Claremont-latex-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">CLAREMONT LATEX</p>
		</a>
		<a href="/produkt/essence/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1477-Materac-kieszeniowy-AZARDI-Essence-Royal-Coil-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Essence</p>
		</a>


	
	`
	} else if (arrayEquals(array84, checkedInputs)) {
		console.log('array84')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-vario-plus-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1415-Materac-Vario-Plus-AZARDI-kieszeniowy-visco.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO PLUS</p>
		</a>
		<a href="/produkt/materac-azardi-premium-kieszeniowy/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1426-Materac-AZARDI-Premium-kieszeniowy-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-premium-komfort/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1422-Materac-kieszeniowy-AZARDI-Premium-Komfort-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT</p>
		</a>
		<a href="/produkt/materac-azardi-premium-komfort-royal/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1432-Materac-AZARDI-Premium-Komfort-Royal-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT ROYAL</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-claremont-latex/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1447-Materac-kieszeniowy-Azardi-Claremont-latex-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">CLAREMONT LATEX</p>
		</a>
		<a href="/produkt/essence/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1477-Materac-kieszeniowy-AZARDI-Essence-Royal-Coil-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Essence</p>
		</a>


	
	`
	} else if (arrayEquals(array85, checkedInputs)) {
		console.log('array85')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-vario-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1409-Materac-Vario-AZARDI-kieszeniowy-visco-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO</p>
		</a>

		<a href="/produkt/materac-vario-plus-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1415-Materac-Vario-Plus-AZARDI-kieszeniowy-visco.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO PLUS</p>
		</a>
		
		<a href="/produkt/essence/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1477-Materac-kieszeniowy-AZARDI-Essence-Royal-Coil-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Essence</p>
		</a>


	
	`
	} else if (arrayEquals(array86, checkedInputs)) {
		console.log('array86')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-azardi-premium-kieszeniowy/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1426-Materac-AZARDI-Premium-kieszeniowy-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-vouge-royal-coil/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1456-Materac-kieszeniowy-Azardi-Vouge-Royal-Coil.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vouge</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-king-firm/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1438-Materac-kieszeniowy-Azardi-King-Firm.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">King Firm</p>
		</a>


	
	`
	} else if (arrayEquals(array87, checkedInputs)) {
		console.log('array87')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-vario-plus-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1415-Materac-Vario-Plus-AZARDI-kieszeniowy-visco.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO PLUS</p>
		</a>
		<a href="/produkt/materac-azardi-premium-kieszeniowy/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1426-Materac-AZARDI-Premium-kieszeniowy-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-king-firm/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1438-Materac-kieszeniowy-Azardi-King-Firm.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">King Firm</p>
		</a>


	
	`
	} else if (arrayEquals(array88, checkedInputs)) {
		console.log('array88')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-azardi-premium-kieszeniowy/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1426-Materac-AZARDI-Premium-kieszeniowy-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-vouge-royal-coil/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1456-Materac-kieszeniowy-Azardi-Vouge-Royal-Coil.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vouge</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-king-firm/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1438-Materac-kieszeniowy-Azardi-King-Firm.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">King Firm</p>
		</a>


	
	`
	} else if (arrayEquals(array89, checkedInputs)) {
		console.log('array89')
		mattressBoxes.innerHTML = ` 

		<a href="/produkt/materac-vario-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1409-Materac-Vario-AZARDI-kieszeniowy-visco-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO</p>
		</a>
		<a href="/produkt/materac-vario-plus-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1415-Materac-Vario-Plus-AZARDI-kieszeniowy-visco.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO PLUS</p>
		</a>
		<a href="/produkt/materac-azardi-premium-komfort-royal/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1432-Materac-AZARDI-Premium-Komfort-Royal-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT ROYAL</p>
		</a>
	`
	} else if (arrayEquals(array90, checkedInputs)) {
		console.log('array90')
		mattressBoxes.innerHTML = ` 

		<a href="/produkt/materac-azardi-premium-kieszeniowy/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1426-Materac-AZARDI-Premium-kieszeniowy-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-vouge-royal-coil/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1456-Materac-kieszeniowy-Azardi-Vouge-Royal-Coil.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vouge</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-king-firm/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1438-Materac-kieszeniowy-Azardi-King-Firm.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">King Firm</p>
		</a>
	`
	} else if (arrayEquals(array91, checkedInputs)) {
		console.log('array91')
		mattressBoxes.innerHTML = ` 

		<a href="/produkt/materac-vario-plus-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1415-Materac-Vario-Plus-AZARDI-kieszeniowy-visco.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO PLUS</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-premium-komfort/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1422-Materac-kieszeniowy-AZARDI-Premium-Komfort-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT</p>
		</a>
		<a href="/produkt/materac-azardi-premium-komfort-royal/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1432-Materac-AZARDI-Premium-Komfort-Royal-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT ROYAL</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-claremont-latex/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1447-Materac-kieszeniowy-Azardi-Claremont-latex-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">CLAREMONT LATEX</p>
		</a>
		<a href="/produkt/essence/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1477-Materac-kieszeniowy-AZARDI-Essence-Royal-Coil-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Essence</p>
		</a>
	`
	} else if (arrayEquals(array92, checkedInputs)) {
		console.log('array92')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-vario-plus-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1415-Materac-Vario-Plus-AZARDI-kieszeniowy-visco.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO PLUS</p>
		</a>
		<a href="/produkt/materac-azardi-premium-kieszeniowy/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1426-Materac-AZARDI-Premium-kieszeniowy-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-premium-komfort/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1422-Materac-kieszeniowy-AZARDI-Premium-Komfort-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT</p>
		</a>
		<a href="/produkt/materac-azardi-premium-komfort-royal/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1432-Materac-AZARDI-Premium-Komfort-Royal-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT ROYAL</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-vouge-royal-coil/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1456-Materac-kieszeniowy-Azardi-Vouge-Royal-Coil.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vouge</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-claremont-latex/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1447-Materac-kieszeniowy-Azardi-Claremont-latex-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">CLAREMONT LATEX</p>
		</a>
		<a href="/produkt/essence/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1477-Materac-kieszeniowy-AZARDI-Essence-Royal-Coil-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Essence</p>
		</a>

	`
	} else if (arrayEquals(array93, checkedInputs)) {
		console.log('array93')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-vario-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1409-Materac-Vario-AZARDI-kieszeniowy-visco-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO</p>
		</a>
		<a href="/produkt/materac-vario-plus-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1415-Materac-Vario-Plus-AZARDI-kieszeniowy-visco.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO PLUS</p>
		</a>
		<a href="/produkt/materac-azardi-premium-komfort-royal/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1432-Materac-AZARDI-Premium-Komfort-Royal-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT ROYAL</p>
		</a>

	`
	} else if (arrayEquals(array94, checkedInputs)) {
		console.log('array94')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-azardi-premium-kieszeniowy/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1426-Materac-AZARDI-Premium-kieszeniowy-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-vouge-royal-coil/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1456-Materac-kieszeniowy-Azardi-Vouge-Royal-Coil.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vouge</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-king-firm/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1438-Materac-kieszeniowy-Azardi-King-Firm.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">King Firm</p>
		</a>

	`
	} else if (arrayEquals(array95, checkedInputs)) {
		console.log('array95')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-vario-plus-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1415-Materac-Vario-Plus-AZARDI-kieszeniowy-visco.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO PLUS</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-premium-komfort/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1422-Materac-kieszeniowy-AZARDI-Premium-Komfort-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT</p>
		</a>
		<a href="/produkt/materac-azardi-premium-komfort-royal/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1432-Materac-AZARDI-Premium-Komfort-Royal-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT ROYAL</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-claremont-latex/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1447-Materac-kieszeniowy-Azardi-Claremont-latex-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">CLAREMONT LATEX</p>
		</a>
		<a href="/produkt/essence/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1477-Materac-kieszeniowy-AZARDI-Essence-Royal-Coil-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Essence</p>
		</a>

	`
	} else if (arrayEquals(array96, checkedInputs)) {
		console.log('array96')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-vario-plus-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1415-Materac-Vario-Plus-AZARDI-kieszeniowy-visco.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO PLUS</p>
		</a>
		<a href="/produkt/materac-azardi-premium-kieszeniowy/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1426-Materac-AZARDI-Premium-kieszeniowy-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-premium-komfort/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1422-Materac-kieszeniowy-AZARDI-Premium-Komfort-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT</p>
		</a>
		<a href="/produkt/materac-azardi-premium-komfort-royal/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1432-Materac-AZARDI-Premium-Komfort-Royal-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT ROYAL</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-vouge-royal-coil/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1456-Materac-kieszeniowy-Azardi-Vouge-Royal-Coil.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vouge</p>
		</a>
		<a href="/produkt/essence/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1477-Materac-kieszeniowy-AZARDI-Essence-Royal-Coil-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Essence</p>
		</a>

	`
	} else if (arrayEquals(array97, checkedInputs)) {
		console.log('array97')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-vario-plus-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1415-Materac-Vario-Plus-AZARDI-kieszeniowy-visco.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO PLUS</p>
		</a>
		<a href="/produkt/materac-azardi-premium-komfort-royal/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1432-Materac-AZARDI-Premium-Komfort-Royal-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT ROYAL</p>
		</a>

	`
	} else if (arrayEquals(array98, checkedInputs)) {
		console.log('array98')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-azardi-premium-kieszeniowy/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1426-Materac-AZARDI-Premium-kieszeniowy-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-vouge-royal-coil/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1456-Materac-kieszeniowy-Azardi-Vouge-Royal-Coil.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vouge</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-king-firm/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1438-Materac-kieszeniowy-Azardi-King-Firm.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">King Firm</p>
		</a>

	`
	} else if (arrayEquals(array99, checkedInputs)) {
		console.log('array99')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-vario-plus-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1415-Materac-Vario-Plus-AZARDI-kieszeniowy-visco.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO PLUS</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-premium-komfort/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1422-Materac-kieszeniowy-AZARDI-Premium-Komfort-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT</p>
		</a>
		<a href="/produkt/materac-azardi-premium-komfort-royal/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1432-Materac-AZARDI-Premium-Komfort-Royal-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT ROYAL</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-claremont-latex/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1447-Materac-kieszeniowy-Azardi-Claremont-latex-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">CLAREMONT LATEX</p>
		</a>
		<a href="/produkt/essence/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1477-Materac-kieszeniowy-AZARDI-Essence-Royal-Coil-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Essence</p>
		</a>

	`
	} else if (arrayEquals(array100, checkedInputs)) {
		console.log('array100')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-vario-plus-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1415-Materac-Vario-Plus-AZARDI-kieszeniowy-visco.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO PLUS</p>
		</a>
		<a href="/produkt/materac-azardi-premium-kieszeniowy/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1426-Materac-AZARDI-Premium-kieszeniowy-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-premium-komfort/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1422-Materac-kieszeniowy-AZARDI-Premium-Komfort-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT</p>
		</a>
		<a href="/produkt/materac-azardi-premium-komfort-royal/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1432-Materac-AZARDI-Premium-Komfort-Royal-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT ROYAL</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-claremont-latex/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1447-Materac-kieszeniowy-Azardi-Claremont-latex-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">CLAREMONT LATEX</p>
		</a>


	`
	} else if (arrayEquals(array101, checkedInputs)) {
		console.log('array101')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-vario-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1409-Materac-Vario-AZARDI-kieszeniowy-visco-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO</p>
		</a>
		<a href="/produkt/materac-vario-plus-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1415-Materac-Vario-Plus-AZARDI-kieszeniowy-visco.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO PLUS</p>
		</a>
		<a href="/produkt/materac-azardi-premium-komfort-royal/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1432-Materac-AZARDI-Premium-Komfort-Royal-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT ROYAL</p>
		</a>


	`
	} else if (arrayEquals(array102, checkedInputs)) {
		console.log('array102')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-azardi-premium-kieszeniowy/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1426-Materac-AZARDI-Premium-kieszeniowy-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-vouge-royal-coil/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1456-Materac-kieszeniowy-Azardi-Vouge-Royal-Coil.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vouge</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-king-firm/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1438-Materac-kieszeniowy-Azardi-King-Firm.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">King Firm</p>
		</a>


	`
	} else if (arrayEquals(array103, checkedInputs)) {
		console.log('array103')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-vario-plus-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1415-Materac-Vario-Plus-AZARDI-kieszeniowy-visco.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO PLUS</p>
		</a>
		<a href="/produkt/materac-azardi-premium-kieszeniowy/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1426-Materac-AZARDI-Premium-kieszeniowy-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM</p>
		</a>
		<a href="/produkt/essence/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1477-Materac-kieszeniowy-AZARDI-Essence-Royal-Coil-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Essence</p>
		</a>


	`
	} else if (arrayEquals(array104, checkedInputs)) {
		console.log('array104')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-azardi-premium-kieszeniowy/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1426-Materac-AZARDI-Premium-kieszeniowy-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-vouge-royal-coil/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1456-Materac-kieszeniowy-Azardi-Vouge-Royal-Coil.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vouge</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-king-firm/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1438-Materac-kieszeniowy-Azardi-King-Firm.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">King Firm</p>
		</a>


	`
	} else if (arrayEquals(array105, checkedInputs)) {
		console.log('array105')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-vario-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1409-Materac-Vario-AZARDI-kieszeniowy-visco-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO</p>
		</a>
		<a href="/produkt/materac-vario-plus-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1415-Materac-Vario-Plus-AZARDI-kieszeniowy-visco.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO PLUS</p>
		</a>
		<a href="/produkt/materac-azardi-premium-komfort-royal/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1432-Materac-AZARDI-Premium-Komfort-Royal-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT ROYAL</p>
		</a>


	`
	} else if (arrayEquals(array106, checkedInputs)) {
		console.log('array106')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-azardi-premium-kieszeniowy/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1426-Materac-AZARDI-Premium-kieszeniowy-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-vouge-royal-coil/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1456-Materac-kieszeniowy-Azardi-Vouge-Royal-Coil.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vouge</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-king-firm/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1438-Materac-kieszeniowy-Azardi-King-Firm.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">King Firm</p>
		</a>


	`
	} else if (arrayEquals(array107, checkedInputs)) {
		console.log('array107')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-vario-plus-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1415-Materac-Vario-Plus-AZARDI-kieszeniowy-visco.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO PLUS</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-premium-komfort/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1422-Materac-kieszeniowy-AZARDI-Premium-Komfort-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT</p>
		</a>
		<a href="/produkt/materac-azardi-premium-komfort-royal/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1432-Materac-AZARDI-Premium-Komfort-Royal-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT ROYAL</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-claremont-latex/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1447-Materac-kieszeniowy-Azardi-Claremont-latex-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">CLAREMONT LATEX</p>
		</a>
		<a href="/produkt/essence/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1477-Materac-kieszeniowy-AZARDI-Essence-Royal-Coil-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Essence</p>
		</a>


	`
	} else if (arrayEquals(array108, checkedInputs)) {
		console.log('array108')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-vario-plus-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1415-Materac-Vario-Plus-AZARDI-kieszeniowy-visco.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO PLUS</p>
		</a>
		<a href="/produkt/materac-azardi-premium-kieszeniowy/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1426-Materac-AZARDI-Premium-kieszeniowy-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-premium-komfort/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1422-Materac-kieszeniowy-AZARDI-Premium-Komfort-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT</p>
		</a>
		<a href="/produkt/materac-azardi-premium-komfort-royal/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1432-Materac-AZARDI-Premium-Komfort-Royal-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT ROYAL</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-vouge-royal-coil/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1456-Materac-kieszeniowy-Azardi-Vouge-Royal-Coil.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vouge</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-king-firm/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1438-Materac-kieszeniowy-Azardi-King-Firm.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">King Firm</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-claremont-latex/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1447-Materac-kieszeniowy-Azardi-Claremont-latex-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">CLAREMONT LATEX</p>
		</a>



	`
	} else if (arrayEquals(array109, checkedInputs)) {
		console.log('array109')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-vario-plus-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1415-Materac-Vario-Plus-AZARDI-kieszeniowy-visco.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO PLUS</p>
		</a>
		<a href="/produkt/materac-azardi-premium-komfort-royal/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1432-Materac-AZARDI-Premium-Komfort-Royal-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT ROYAL</p>
		</a>
		



	`
	} else if (arrayEquals(array110, checkedInputs)) {
		console.log('array110')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-azardi-premium-kieszeniowy/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1426-Materac-AZARDI-Premium-kieszeniowy-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-vouge-royal-coil/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1456-Materac-kieszeniowy-Azardi-Vouge-Royal-Coil.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vouge</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-king-firm/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1438-Materac-kieszeniowy-Azardi-King-Firm.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">King Firm</p>
		</a>



	`
	} else if (arrayEquals(array111, checkedInputs)) {
		console.log('array111')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-vario-plus-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1415-Materac-Vario-Plus-AZARDI-kieszeniowy-visco.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO PLUS</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-premium-komfort/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1422-Materac-kieszeniowy-AZARDI-Premium-Komfort-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT</p>
		</a>
		<a href="/produkt/materac-azardi-premium-komfort-royal/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1432-Materac-AZARDI-Premium-Komfort-Royal-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT ROYAL</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-claremont-latex/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1447-Materac-kieszeniowy-Azardi-Claremont-latex-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">CLAREMONT LATEX</p>
		</a>
		<a href="/produkt/essence/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1477-Materac-kieszeniowy-AZARDI-Essence-Royal-Coil-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Essence</p>
		</a>



	`
	} else if (arrayEquals(array112, checkedInputs)) {
		console.log('array112')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-vario-plus-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1415-Materac-Vario-Plus-AZARDI-kieszeniowy-visco.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO PLUS</p>
		</a>
		<a href="/produkt/materac-azardi-premium-kieszeniowy/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1426-Materac-AZARDI-Premium-kieszeniowy-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-premium-komfort/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1422-Materac-kieszeniowy-AZARDI-Premium-Komfort-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT</p>
		</a>
		<a href="/produkt/materac-azardi-premium-komfort-royal/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1432-Materac-AZARDI-Premium-Komfort-Royal-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT ROYAL</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-vouge-royal-coil/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1456-Materac-kieszeniowy-Azardi-Vouge-Royal-Coil.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vouge</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-king-firm/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1438-Materac-kieszeniowy-Azardi-King-Firm.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">King Firm</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-claremont-latex/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1447-Materac-kieszeniowy-Azardi-Claremont-latex-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">CLAREMONT LATEX</p>
		</a>


	`
	} else if (arrayEquals(array113, checkedInputs)) {
		console.log('array113')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-vario-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1409-Materac-Vario-AZARDI-kieszeniowy-visco-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO</p>
		</a>
		<a href="/produkt/materac-vario-plus-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1415-Materac-Vario-Plus-AZARDI-kieszeniowy-visco.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO PLUS</p>
		</a>
		<a href="/produkt/materac-azardi-premium-komfort-royal/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1432-Materac-AZARDI-Premium-Komfort-Royal-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT ROYAL</p>
		</a>


	`
	} else if (arrayEquals(array114, checkedInputs)) {
		console.log('array114')
		mattressBoxes.innerHTML = ` 
		
		<a href="/produkt/materac-azardi-premium-kieszeniowy/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1426-Materac-AZARDI-Premium-kieszeniowy-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-king-firm/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1438-Materac-kieszeniowy-Azardi-King-Firm.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">King Firm</p>
		</a>

	`
	} else if (arrayEquals(array115, checkedInputs)) {
		console.log('array115')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-vario-plus-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1415-Materac-Vario-Plus-AZARDI-kieszeniowy-visco.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO PLUS</p>
		</a>
		<a href="/produkt/materac-azardi-premium-kieszeniowy/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1426-Materac-AZARDI-Premium-kieszeniowy-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-premium-komfort/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1422-Materac-kieszeniowy-AZARDI-Premium-Komfort-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT</p>
		</a>

	`
	} else if (arrayEquals(array116, checkedInputs)) {
		console.log('array116')
		mattressBoxes.innerHTML = ` 
		
		<a href="/produkt/materac-vario-plus-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1415-Materac-Vario-Plus-AZARDI-kieszeniowy-visco.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO PLUS</p>
		</a>
		<a href="/produkt/materac-azardi-premium-kieszeniowy/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1426-Materac-AZARDI-Premium-kieszeniowy-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-premium-komfort/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1422-Materac-kieszeniowy-AZARDI-Premium-Komfort-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-claremont-latex/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1447-Materac-kieszeniowy-Azardi-Claremont-latex-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">CLAREMONT LATEX</p>
		</a>
		<a href="/produkt/essence/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1477-Materac-kieszeniowy-AZARDI-Essence-Royal-Coil-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Essence</p>
		</a>



	`
	} else if (arrayEquals(array117, checkedInputs)) {
		console.log('array117')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-vario-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1409-Materac-Vario-AZARDI-kieszeniowy-visco-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-premium-komfort/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1422-Materac-kieszeniowy-AZARDI-Premium-Komfort-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT</p>
		</a>
		



	`
	} else if (arrayEquals(array118, checkedInputs)) {
		console.log('array118')
		mattressBoxes.innerHTML = ` 
		
		
		<a href="/produkt/materac-azardi-premium-kieszeniowy/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1426-Materac-AZARDI-Premium-kieszeniowy-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-king-firm/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1438-Materac-kieszeniowy-Azardi-King-Firm.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">King Firm</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-vouge-royal-coil/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1456-Materac-kieszeniowy-Azardi-Vouge-Royal-Coil.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vouge</p>
		</a>
	
		



	`
	} else if (arrayEquals(array119, checkedInputs)) {
		console.log('array119')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-vario-plus-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1415-Materac-Vario-Plus-AZARDI-kieszeniowy-visco.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO PLUS</p>
		</a>
		<a href="/produkt/materac-azardi-premium-kieszeniowy/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1426-Materac-AZARDI-Premium-kieszeniowy-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-premium-komfort/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1422-Materac-kieszeniowy-AZARDI-Premium-Komfort-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT</p>
		</a>
		
		
	
		



	`
	} else if (arrayEquals(array120, checkedInputs)) {
		console.log('array120')
		mattressBoxes.innerHTML = ` 
		
		
		<a href="/produkt/materac-azardi-premium-kieszeniowy/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1426-Materac-AZARDI-Premium-kieszeniowy-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-king-firm/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1438-Materac-kieszeniowy-Azardi-King-Firm.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">King Firm</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-vouge-royal-coil/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1456-Materac-kieszeniowy-Azardi-Vouge-Royal-Coil.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vouge</p>
		</a>
		
	
		



	`
	} else if (arrayEquals(array121, checkedInputs)) {
		console.log('array121')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-vario-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1409-Materac-Vario-AZARDI-kieszeniowy-visco-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO</p>
		</a>
		<a href="/produkt/materac-azardi-premium-komfort-royal/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1432-Materac-AZARDI-Premium-Komfort-Royal-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT ROYAL</p>
		</a>
	
		



	`
	} else if (arrayEquals(array122, checkedInputs)) {
		console.log('array122')
		mattressBoxes.innerHTML = ` 
		
		<a href="/produkt/materac-azardi-premium-kieszeniowy/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1426-Materac-AZARDI-Premium-kieszeniowy-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-vouge-royal-coil/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1456-Materac-kieszeniowy-Azardi-Vouge-Royal-Coil.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vouge</p>
		</a>
		



	`
	} else if (arrayEquals(array123, checkedInputs)) {
		console.log('array123')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-vario-plus-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1415-Materac-Vario-Plus-AZARDI-kieszeniowy-visco.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO PLUS</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-premium-komfort/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1422-Materac-kieszeniowy-AZARDI-Premium-Komfort-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT</p>
		</a>
		<a href="/produkt/materac-azardi-premium-komfort-royal/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1432-Materac-AZARDI-Premium-Komfort-Royal-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT ROYAL</p>
		</a>
		<a href="/produkt/essence/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1477-Materac-kieszeniowy-AZARDI-Essence-Royal-Coil-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Essence</p>
		</a>
		



	`
	} else if (arrayEquals(array124, checkedInputs)) {
		console.log('array124')
		mattressBoxes.innerHTML = ` 
		
		
		
		<a href="/produkt/materac-vario-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1409-Materac-Vario-AZARDI-kieszeniowy-visco-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO</p>
		</a>
		<a href="/produkt/materac-vario-plus-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1415-Materac-Vario-Plus-AZARDI-kieszeniowy-visco.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO PLUS</p>
		</a>
		<a href="/produkt/materac-azardi-premium-kieszeniowy/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1426-Materac-AZARDI-Premium-kieszeniowy-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-premium-komfort/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1422-Materac-kieszeniowy-AZARDI-Premium-Komfort-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT</p>
		</a>
		<a href="/produkt/materac-azardi-premium-komfort-royal/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1432-Materac-AZARDI-Premium-Komfort-Royal-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT ROYAL</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-king-firm/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1438-Materac-kieszeniowy-Azardi-King-Firm.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">King Firm</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-claremont-latex/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1447-Materac-kieszeniowy-Azardi-Claremont-latex-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">CLAREMONT LATEX</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-vouge-royal-coil/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1456-Materac-kieszeniowy-Azardi-Vouge-Royal-Coil.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vouge</p>
		</a>
		<a href="/produkt/essence/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1477-Materac-kieszeniowy-AZARDI-Essence-Royal-Coil-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Essence</p>
		</a>
		



	`
	} else if (arrayEquals(array124, checkedInputs)) {
		console.log('array124')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-vario-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1409-Materac-Vario-AZARDI-kieszeniowy-visco-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO</p>
		</a>
		<a href="/produkt/materac-vario-plus-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1415-Materac-Vario-Plus-AZARDI-kieszeniowy-visco.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO PLUS</p>
		</a>
		<a href="/produkt/materac-azardi-premium-komfort-royal/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1432-Materac-AZARDI-Premium-Komfort-Royal-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT ROYAL</p>
		</a>



	`
	} else if (arrayEquals(array125, checkedInputs)) {
		console.log('array125')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-vario-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1409-Materac-Vario-AZARDI-kieszeniowy-visco-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO</p>
		</a>
		<a href="/produkt/materac-vario-plus-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1415-Materac-Vario-Plus-AZARDI-kieszeniowy-visco.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO PLUS</p>
		</a>
		<a href="/produkt/materac-azardi-premium-komfort-royal/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1432-Materac-AZARDI-Premium-Komfort-Royal-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT ROYAL</p>
		</a>



	`
	} else if (arrayEquals(array126, checkedInputs)) {
		console.log('array126')
		mattressBoxes.innerHTML = ` 
		
		<a href="/produkt/materac-azardi-premium-kieszeniowy/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1426-Materac-AZARDI-Premium-kieszeniowy-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-king-firm/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1438-Materac-kieszeniowy-Azardi-King-Firm.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">King Firm</p>
		</a>


	`
	} else if (arrayEquals(array127, checkedInputs)) {
		console.log('array127')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-vario-plus-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1415-Materac-Vario-Plus-AZARDI-kieszeniowy-visco.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO PLUS</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-premium-komfort/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1422-Materac-kieszeniowy-AZARDI-Premium-Komfort-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT</p>
		</a>
		<a href="/produkt/materac-azardi-premium-komfort-royal/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1432-Materac-AZARDI-Premium-Komfort-Royal-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT ROYAL</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-claremont-latex/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1447-Materac-kieszeniowy-Azardi-Claremont-latex-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">CLAREMONT LATEX</p>
		</a>
		<a href="/produkt/essence/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1477-Materac-kieszeniowy-AZARDI-Essence-Royal-Coil-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Essence</p>
		</a>


	`
	} else if (arrayEquals(array128, checkedInputs)) {
		console.log('array128')
		mattressBoxes.innerHTML = ` 
		
		
		
		<a href="/produkt/materac-vario-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1409-Materac-Vario-AZARDI-kieszeniowy-visco-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO</p>
		</a>
		<a href="/produkt/materac-vario-plus-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1415-Materac-Vario-Plus-AZARDI-kieszeniowy-visco.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO PLUS</p>
		</a>
		<a href="/produkt/materac-azardi-premium-kieszeniowy/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1426-Materac-AZARDI-Premium-kieszeniowy-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-premium-komfort/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1422-Materac-kieszeniowy-AZARDI-Premium-Komfort-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT</p>
		</a>
		<a href="/produkt/materac-azardi-premium-komfort-royal/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1432-Materac-AZARDI-Premium-Komfort-Royal-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT ROYAL</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-king-firm/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1438-Materac-kieszeniowy-Azardi-King-Firm.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">King Firm</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-claremont-latex/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1447-Materac-kieszeniowy-Azardi-Claremont-latex-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">CLAREMONT LATEX</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-vouge-royal-coil/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1456-Materac-kieszeniowy-Azardi-Vouge-Royal-Coil.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vouge</p>
		</a>
		<a href="/produkt/essence/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1477-Materac-kieszeniowy-AZARDI-Essence-Royal-Coil-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Essence</p>
		</a>


	`
	} else if (arrayEquals(array129, checkedInputs)) {
		console.log('array129')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-vario-plus-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1415-Materac-Vario-Plus-AZARDI-kieszeniowy-visco.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO PLUS</p>
		</a>
		<a href="/produkt/materac-azardi-premium-komfort-royal/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1432-Materac-AZARDI-Premium-Komfort-Royal-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT ROYAL</p>
		</a>
		


	`
	} else if (arrayEquals(array130, checkedInputs)) {
		console.log('array130')
		mattressBoxes.innerHTML = ` 
		
		<a href="/produkt/dolce-vita-dual-8/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/dolce-vita-dual-8-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">DOLCE VITA DUAL 8</p>
		</a>
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>


	`
	} else if (arrayEquals(array131, checkedInputs)) {
		console.log('array131')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-vario-plus-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1415-Materac-Vario-Plus-AZARDI-kieszeniowy-visco.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO PLUS</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-premium-komfort/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1422-Materac-kieszeniowy-AZARDI-Premium-Komfort-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT</p>
		</a>
		<a href="/produkt/materac-azardi-premium-komfort-royal/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1432-Materac-AZARDI-Premium-Komfort-Royal-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT ROYAL</p>
		</a>
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>


	`
	} else if (arrayEquals(array132, checkedInputs)) {
		console.log('array132')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-vario-plus-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1415-Materac-Vario-Plus-AZARDI-kieszeniowy-visco.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO PLUS</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-premium-komfort/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1422-Materac-kieszeniowy-AZARDI-Premium-Komfort-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT</p>
		</a>
		<a href="/produkt/materac-azardi-premium-komfort-royal/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1432-Materac-AZARDI-Premium-Komfort-Royal-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT ROYAL</p>
		</a>



	`
	} else if (arrayEquals(array133, checkedInputs)) {
		console.log('array133')
		mattressBoxes.innerHTML = ` 

		<a href="/produkt/dolce-vita-dual-8/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/dolce-vita-dual-8-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">DOLCE VITA DUAL 8</p>
		</a>
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>



	`
	} else if (arrayEquals(array134, checkedInputs)) {
		console.log('array134')
		mattressBoxes.innerHTML = ` 
		
		<a href="/produkt/dolce-vita-dual-8/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/dolce-vita-dual-8-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">DOLCE VITA DUAL 8</p>


	`
	} else if (arrayEquals(array135, checkedInputs)) {
		console.log('array135')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-vario-plus-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1415-Materac-Vario-Plus-AZARDI-kieszeniowy-visco.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO PLUS</p>
		</a>
		<a href="/produkt/materac-azardi-premium-komfort-royal/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1432-Materac-AZARDI-Premium-Komfort-Royal-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT ROYAL</p>
		</a>
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>

	`
	} else if (arrayEquals(array136, checkedInputs)) {
		console.log('array136')
		mattressBoxes.innerHTML = ` 
		
		<a href="/produkt/dolce-vita-dual-8/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/dolce-vita-dual-8-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">DOLCE VITA DUAL 8</p>
		</a>
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>

	`
	} else if (arrayEquals(array137, checkedInputs)) {
		console.log('array137')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-vario-plus-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1415-Materac-Vario-Plus-AZARDI-kieszeniowy-visco.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO PLUS</p>
		</a>
		<a href="/produkt/materac-azardi-premium-komfort-royal/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1432-Materac-AZARDI-Premium-Komfort-Royal-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT ROYAL</p>
		</a>

	`
	} else if (arrayEquals(array138, checkedInputs)) {
		console.log('array138')
		mattressBoxes.innerHTML = ` 
		
		<a href="/produkt/dolce-vita-dual-8/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/dolce-vita-dual-8-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">DOLCE VITA DUAL 8</p>
		</a>
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>
	`
	} else if (arrayEquals(array139, checkedInputs)) {
		console.log('array139')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-vario-plus-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1415-Materac-Vario-Plus-AZARDI-kieszeniowy-visco.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO PLUS</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-premium-komfort/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1422-Materac-kieszeniowy-AZARDI-Premium-Komfort-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT</p>
		</a>
		<a href="/produkt/materac-azardi-premium-komfort-royal/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1432-Materac-AZARDI-Premium-Komfort-Royal-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT ROYAL</p>
		</a>
	`
	} else if (arrayEquals(array140, checkedInputs)) {
		console.log('array140')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-vario-plus-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1415-Materac-Vario-Plus-AZARDI-kieszeniowy-visco.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO PLUS</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-premium-komfort/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1422-Materac-kieszeniowy-AZARDI-Premium-Komfort-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT</p>
		</a>
		<a href="/produkt/materac-azardi-premium-komfort-royal/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1432-Materac-AZARDI-Premium-Komfort-Royal-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT ROYAL</p>
		</a>
		<a href="/produkt/dolce-vita-dual-8/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/dolce-vita-dual-8-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">DOLCE VITA DUAL 8</p>
		</a>
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>
	`
	} else if (arrayEquals(array141, checkedInputs)) {
		console.log('array141')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-vario-plus-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1415-Materac-Vario-Plus-AZARDI-kieszeniowy-visco.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO PLUS</p>
		</a>
		<a href="/produkt/materac-azardi-premium-komfort-royal/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1432-Materac-AZARDI-Premium-Komfort-Royal-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT ROYAL</p>
		</a>
	`
	} else if (arrayEquals(array142, checkedInputs)) {
		console.log('array142')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/dolce-vita-dual-8/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/dolce-vita-dual-8-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">DOLCE VITA DUAL 8</p>
		</a>
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>
	`
	} else if (arrayEquals(array143, checkedInputs)) {
		console.log('array143')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-vario-plus-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1415-Materac-Vario-Plus-AZARDI-kieszeniowy-visco.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO PLUS</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-premium-komfort/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1422-Materac-kieszeniowy-AZARDI-Premium-Komfort-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT</p>
		</a>
		<a href="/produkt/materac-azardi-premium-komfort-royal/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1432-Materac-AZARDI-Premium-Komfort-Royal-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT ROYAL</p>
		</a>
	`
	} else if (arrayEquals(array144, checkedInputs)) {
		console.log('array144')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-vario-plus-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1415-Materac-Vario-Plus-AZARDI-kieszeniowy-visco.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO PLUS</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-premium-komfort/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1422-Materac-kieszeniowy-AZARDI-Premium-Komfort-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT</p>
		</a>
		<a href="/produkt/materac-azardi-premium-komfort-royal/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1432-Materac-AZARDI-Premium-Komfort-Royal-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT ROYAL</p>
		</a>
		<a href="/produkt/dolce-vita-dual-8/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/dolce-vita-dual-8-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">DOLCE VITA DUAL 8</p>
		</a>
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>
	`
	} else if (arrayEquals(array145, checkedInputs)) {
		console.log('array145')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-vario-plus-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1415-Materac-Vario-Plus-AZARDI-kieszeniowy-visco.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO PLUS</p>
		</a>
		<a href="/produkt/materac-azardi-premium-komfort-royal/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1432-Materac-AZARDI-Premium-Komfort-Royal-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT ROYAL</p>
		</a>

	`
	} else if (arrayEquals(array146, checkedInputs)) {
		console.log('array146')
		mattressBoxes.innerHTML = ` 
		
		<a href="/produkt/dolce-vita-dual-8/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/dolce-vita-dual-8-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">DOLCE VITA DUAL 8</p>
		</a>
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>

	`
	} else if (arrayEquals(array147, checkedInputs)) {
		console.log('array147')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-vario-plus-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1415-Materac-Vario-Plus-AZARDI-kieszeniowy-visco.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO PLUS</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-premium-komfort/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1422-Materac-kieszeniowy-AZARDI-Premium-Komfort-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT</p>
		</a>
		<a href="/produkt/materac-azardi-premium-komfort-royal/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1432-Materac-AZARDI-Premium-Komfort-Royal-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT ROYAL</p>
		</a>

	`
	} else if (arrayEquals(array148, checkedInputs)) {
		console.log('array148')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-vario-plus-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1415-Materac-Vario-Plus-AZARDI-kieszeniowy-visco.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO PLUS</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-premium-komfort/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1422-Materac-kieszeniowy-AZARDI-Premium-Komfort-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT</p>
		</a>
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>

	`
	} else if (arrayEquals(array149, checkedInputs)) {
		console.log('array149')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-azardi-premium-komfort-royal/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1432-Materac-AZARDI-Premium-Komfort-Royal-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT ROYAL</p>
		</a>

	`
	} else if (arrayEquals(array150, checkedInputs)) {
		console.log('array150')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/dolce-vita-dual-8/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/dolce-vita-dual-8-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">DOLCE VITA DUAL 8</p>
		</a>
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>

	`
	} else if (arrayEquals(array151, checkedInputs)) {
		console.log('array151')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-vario-plus-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1415-Materac-Vario-Plus-AZARDI-kieszeniowy-visco.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO PLUS</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-premium-komfort/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1422-Materac-kieszeniowy-AZARDI-Premium-Komfort-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT</p>
		</a>
		<a href="/produkt/materac-azardi-premium-komfort-royal/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1432-Materac-AZARDI-Premium-Komfort-Royal-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT ROYAL</p>
		</a>

	`
	} else if (arrayEquals(array152, checkedInputs)) {
		console.log('array152')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/dolce-vita-dual-8/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/dolce-vita-dual-8-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">DOLCE VITA DUAL 8</p>
		</a>
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>

	`
	} else if (arrayEquals(array153, checkedInputs)) {
		console.log('array153')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-azardi-premium-komfort-royal/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1432-Materac-AZARDI-Premium-Komfort-Royal-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT ROYAL</p>
		</a>

	`
	} else if (arrayEquals(array154, checkedInputs)) {
		console.log('array154')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/dolce-vita-dual-8/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/dolce-vita-dual-8-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">DOLCE VITA DUAL 8</p>
		</a>
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>

	`
	} else if (arrayEquals(array155, checkedInputs)) {
		console.log('array155')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-vario-plus-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1415-Materac-Vario-Plus-AZARDI-kieszeniowy-visco.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO PLUS</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-premium-komfort/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1422-Materac-kieszeniowy-AZARDI-Premium-Komfort-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT</p>
		</a>
		<a href="/produkt/materac-azardi-premium-komfort-royal/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1432-Materac-AZARDI-Premium-Komfort-Royal-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT ROYAL</p>
		</a>
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>

	`
	} else if (arrayEquals(array156, checkedInputs)) {
		console.log('array156')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-vario-plus-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1415-Materac-Vario-Plus-AZARDI-kieszeniowy-visco.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO PLUS</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-premium-komfort/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1422-Materac-kieszeniowy-AZARDI-Premium-Komfort-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT</p>
		</a>
		<a href="/produkt/materac-azardi-premium-komfort-royal/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1432-Materac-AZARDI-Premium-Komfort-Royal-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT ROYAL</p>
		</a>
		<a href="/produkt/dolce-vita-dual-8/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/dolce-vita-dual-8-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">DOLCE VITA DUAL 8</p>
		</a>
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>

	`
	} else if (arrayEquals(array157, checkedInputs)) {
		console.log('array157')
		mattressBoxes.innerHTML = ` 

		<a href="/produkt/materac-azardi-premium-komfort-royal/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1432-Materac-AZARDI-Premium-Komfort-Royal-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT ROYAL</p>
		</a>

	`
	} else if (arrayEquals(array158, checkedInputs)) {
		console.log('array158')
		mattressBoxes.innerHTML = ` 

		<a href="/produkt/dolce-vita-dual-8/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/dolce-vita-dual-8-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">DOLCE VITA DUAL 8</p>
		</a>
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>

	`
	} else if (arrayEquals(array159, checkedInputs)) {
		console.log('array159')
		mattressBoxes.innerHTML = ` 

		<a href="/produkt/materac-vario-plus-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1415-Materac-Vario-Plus-AZARDI-kieszeniowy-visco.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO PLUS</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-premium-komfort/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1422-Materac-kieszeniowy-AZARDI-Premium-Komfort-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT</p>
		</a>
		<a href="/produkt/materac-azardi-premium-komfort-royal/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1432-Materac-AZARDI-Premium-Komfort-Royal-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT ROYAL</p>
		</a>
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>


	`
	} else if (arrayEquals(array160, checkedInputs)) {
		console.log('array160')
		mattressBoxes.innerHTML = ` 

		<a href="/produkt/materac-vario-plus-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1415-Materac-Vario-Plus-AZARDI-kieszeniowy-visco.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO PLUS</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-premium-komfort/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1422-Materac-kieszeniowy-AZARDI-Premium-Komfort-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT</p>
		</a>
		<a href="/produkt/materac-azardi-premium-komfort-royal/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1432-Materac-AZARDI-Premium-Komfort-Royal-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT ROYAL</p>
		</a>
		<a href="/produkt/dolce-vita-dual-8/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/dolce-vita-dual-8-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">DOLCE VITA DUAL 8</p>
		</a>
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>


	`
	} else if (arrayEquals(array161, checkedInputs)) {
		console.log('array161')
		mattressBoxes.innerHTML = ` 

		<a href="/produkt/materac-azardi-premium-komfort-royal/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1432-Materac-AZARDI-Premium-Komfort-Royal-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT ROYAL</p>
		</a>


	`
	} else if (arrayEquals(array162, checkedInputs)) {
		console.log('array162')
		mattressBoxes.innerHTML = ` 

		
		<a href="/produkt/dolce-vita-dual-8/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/dolce-vita-dual-8-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">DOLCE VITA DUAL 8</p>
		</a>
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>


	`
	} else if (arrayEquals(array163, checkedInputs)) {
		console.log('array163')
		mattressBoxes.innerHTML = ` 

		<a href="/produkt/materac-vario-plus-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1415-Materac-Vario-Plus-AZARDI-kieszeniowy-visco.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO PLUS</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-premium-komfort/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1422-Materac-kieszeniowy-AZARDI-Premium-Komfort-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT</p>
		</a>
		<a href="/produkt/materac-azardi-premium-komfort-royal/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1432-Materac-AZARDI-Premium-Komfort-Royal-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT ROYAL</p>
		</a>
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>

	`
	} else if (arrayEquals(array164, checkedInputs)) {
		console.log('array164')
		mattressBoxes.innerHTML = ` 

		<a href="/produkt/materac-vario-plus-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1415-Materac-Vario-Plus-AZARDI-kieszeniowy-visco.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO PLUS</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-premium-komfort/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1422-Materac-kieszeniowy-AZARDI-Premium-Komfort-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT</p>
		</a>
		<a href="/produkt/materac-azardi-premium-komfort-royal/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1432-Materac-AZARDI-Premium-Komfort-Royal-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT ROYAL</p>
		</a>
	`
	} else if (arrayEquals(array165, checkedInputs)) {
		console.log('array165')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-kieszeniowy-azardi-premium-komfort/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1422-Materac-kieszeniowy-AZARDI-Premium-Komfort-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT</p>
		</a>
		<a href="/produkt/materac-azardi-premium-komfort-royal/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1432-Materac-AZARDI-Premium-Komfort-Royal-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT ROYAL</p>
		</a>
	`
	} else if (arrayEquals(array166, checkedInputs)) {
		console.log('array166')
		mattressBoxes.innerHTML = ` 
		
		<a href="/produkt/dolce-vita-dual-8/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/dolce-vita-dual-8-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">DOLCE VITA DUAL 8</p>
		</a>
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>

	`
	} else if (arrayEquals(array167, checkedInputs)) {
		console.log('array167')
		mattressBoxes.innerHTML = ` 

		<a href="/produkt/materac-vario-plus-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1415-Materac-Vario-Plus-AZARDI-kieszeniowy-visco.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO PLUS</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-premium-komfort/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1422-Materac-kieszeniowy-AZARDI-Premium-Komfort-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT</p>
		</a>
		<a href="/produkt/materac-azardi-premium-komfort-royal/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1432-Materac-AZARDI-Premium-Komfort-Royal-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT ROYAL</p>
		</a>
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>

	`
	} else if (arrayEquals(array168, checkedInputs)) {
		console.log('array168')
		mattressBoxes.innerHTML = ` 

		
		<a href="/produkt/dolce-vita-dual-8/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/dolce-vita-dual-8-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">DOLCE VITA DUAL 8</p>
		</a>
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>

	`
	} else if (arrayEquals(array169, checkedInputs)) {
		console.log('array169')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-azardi-premium-komfort-royal/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1432-Materac-AZARDI-Premium-Komfort-Royal-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT ROYAL</p>
		</a>

	`
	} else if (arrayEquals(array170, checkedInputs)) {
		console.log('array170')
		mattressBoxes.innerHTML = ` 
		
		<a href="/produkt/dolce-vita-dual-8/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/dolce-vita-dual-8-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">DOLCE VITA DUAL 8</p>
		</a>
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>

	`
	} else if (arrayEquals(array171, checkedInputs)) {
		console.log('array171')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-vario-plus-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1415-Materac-Vario-Plus-AZARDI-kieszeniowy-visco.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO PLUS</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-premium-komfort/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1422-Materac-kieszeniowy-AZARDI-Premium-Komfort-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT</p>
		</a>
		<a href="/produkt/materac-azardi-premium-komfort-royal/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1432-Materac-AZARDI-Premium-Komfort-Royal-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT ROYAL</p>
		</a>
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>

	`
	} else if (arrayEquals(array172, checkedInputs)) {
		console.log('array172')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-vario-plus-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1415-Materac-Vario-Plus-AZARDI-kieszeniowy-visco.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO PLUS</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-premium-komfort/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1422-Materac-kieszeniowy-AZARDI-Premium-Komfort-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT</p>
		</a>
		<a href="/produkt/materac-azardi-premium-komfort-royal/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1432-Materac-AZARDI-Premium-Komfort-Royal-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT ROYAL</p>
		</a>
		<a href="/produkt/dolce-vita-dual-8/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/dolce-vita-dual-8-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">DOLCE VITA DUAL 8</p>
		</a>
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>

	`
	} else if (arrayEquals(array173, checkedInputs)) {
		console.log('array173')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-azardi-premium-komfort-royal/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1432-Materac-AZARDI-Premium-Komfort-Royal-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT ROYAL</p>
		</a>

	`
	} else if (arrayEquals(array174, checkedInputs)) {
		console.log('array174')
		mattressBoxes.innerHTML = ` 
		
		<a href="/produkt/dolce-vita-dual-8/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/dolce-vita-dual-8-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">DOLCE VITA DUAL 8</p>
		</a>
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>

	`
	} else if (arrayEquals(array175, checkedInputs)) {
		console.log('array175')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-vario-plus-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1415-Materac-Vario-Plus-AZARDI-kieszeniowy-visco.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO PLUS</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-premium-komfort/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1422-Materac-kieszeniowy-AZARDI-Premium-Komfort-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT</p>
		</a>
		<a href="/produkt/materac-azardi-premium-komfort-royal/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1432-Materac-AZARDI-Premium-Komfort-Royal-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT ROYAL</p>
		</a>
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>
	`
	} else if (arrayEquals(array176, checkedInputs)) {
		console.log('array176')
		mattressBoxes.innerHTML = ` 
		
		<a href="/produkt/dolce-vita-dual-8/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/dolce-vita-dual-8-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">DOLCE VITA DUAL 8</p>
		</a>
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>
	`
	} else if (arrayEquals(array177, checkedInputs)) {
		console.log('array177')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-azardi-premium-komfort-royal/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1432-Materac-AZARDI-Premium-Komfort-Royal-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT ROYAL</p>
		</a>
	`
	} else if (arrayEquals(array178, checkedInputs)) {
		console.log('array178')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/dolce-vita-dual-8/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/dolce-vita-dual-8-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">DOLCE VITA DUAL 8</p>
		</a>
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>
	`
	} else if (arrayEquals(array179, checkedInputs)) {
		console.log('array179')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-vario-plus-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1415-Materac-Vario-Plus-AZARDI-kieszeniowy-visco.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO PLUS</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-premium-komfort/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1422-Materac-kieszeniowy-AZARDI-Premium-Komfort-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT</p>
		</a>
		<a href="/produkt/materac-azardi-premium-komfort-royal/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1432-Materac-AZARDI-Premium-Komfort-Royal-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT ROYAL</p>
	`
	} else if (arrayEquals(array180, checkedInputs)) {
		console.log('array180')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-vario-plus-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1415-Materac-Vario-Plus-AZARDI-kieszeniowy-visco.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO PLUS</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-premium-komfort/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1422-Materac-kieszeniowy-AZARDI-Premium-Komfort-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT</p>
		</a>
		<a href="/produkt/materac-azardi-premium-komfort-royal/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1432-Materac-AZARDI-Premium-Komfort-Royal-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT ROYAL</p>
		</a>
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>
	`
	} else if (arrayEquals(array181, checkedInputs)) {
		console.log('array181')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-kieszeniowy-azardi-premium-komfort/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1422-Materac-kieszeniowy-AZARDI-Premium-Komfort-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT</p>
		</a>
		<a href="/produkt/materac-azardi-premium-komfort-royal/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1432-Materac-AZARDI-Premium-Komfort-Royal-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT ROYAL</p>
		</a>
	`
	} else if (arrayEquals(array182, checkedInputs)) {
		console.log('array182')
		mattressBoxes.innerHTML = ` 
		
		<a href="/produkt/dolce-vita-dual-8/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/dolce-vita-dual-8-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">DOLCE VITA DUAL 8</p>
		</a>
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>
	`
	} else if (arrayEquals(array183, checkedInputs)) {
		console.log('array183')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/dolce-vita-dual-8/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/dolce-vita-dual-8-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">DOLCE VITA DUAL 8</p>
		</a>
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>
	`
	} else if (arrayEquals(array184, checkedInputs)) {
		console.log('array184')
		mattressBoxes.innerHTML = ` 
		
		<a href="/produkt/dolce-vita-dual-8/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/dolce-vita-dual-8-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">DOLCE VITA DUAL 8</p>
		</a>
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>
	`
	} else if (arrayEquals(array185, checkedInputs)) {
		console.log('array185')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-kieszeniowy-azardi-premium-komfort/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1422-Materac-kieszeniowy-AZARDI-Premium-Komfort-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT</p>
		</a>
		<a href="/produkt/materac-azardi-premium-komfort-royal/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1432-Materac-AZARDI-Premium-Komfort-Royal-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT ROYAL</p>
		</a>
	`
	} else if (arrayEquals(array186, checkedInputs)) {
		console.log('array186')
		mattressBoxes.innerHTML = ` 
		
		<a href="/produkt/dolce-vita-dual-8/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/dolce-vita-dual-8-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">DOLCE VITA DUAL 8</p>
		</a>
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>
	`
	} else if (arrayEquals(array187, checkedInputs)) {
		console.log('array187')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-vario-plus-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1415-Materac-Vario-Plus-AZARDI-kieszeniowy-visco.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO PLUS</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-premium-komfort/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1422-Materac-kieszeniowy-AZARDI-Premium-Komfort-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT</p>
		</a>
		<a href="/produkt/materac-azardi-premium-komfort-royal/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1432-Materac-AZARDI-Premium-Komfort-Royal-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT ROYAL</p>
		</a>
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>
	`
	} else if (arrayEquals(array188, checkedInputs)) {
		console.log('array188')
		mattressBoxes.innerHTML = ` 
		
		<a href="/produkt/materac-vario-plus-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1415-Materac-Vario-Plus-AZARDI-kieszeniowy-visco.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO PLUS</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-premium-komfort/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1422-Materac-kieszeniowy-AZARDI-Premium-Komfort-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT</p>
		</a>
		<a href="/produkt/materac-azardi-premium-komfort-royal/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1432-Materac-AZARDI-Premium-Komfort-Royal-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT ROYAL</p>
		</a>
		<a href="/produkt/dolce-vita-dual-8/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/dolce-vita-dual-8-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">DOLCE VITA DUAL 8</p>
		</a>
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>
	`
	} else if (arrayEquals(array189, checkedInputs)) {
		console.log('array189')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-kieszeniowy-azardi-premium-komfort/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1422-Materac-kieszeniowy-AZARDI-Premium-Komfort-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT</p>
		</a>
		<a href="/produkt/materac-azardi-premium-komfort-royal/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1432-Materac-AZARDI-Premium-Komfort-Royal-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT ROYAL</p>
		</a>
	`
	} else if (arrayEquals(array190, checkedInputs)) {
		console.log('array190')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-kieszeniowy-azardi-premium-komfort/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1422-Materac-kieszeniowy-AZARDI-Premium-Komfort-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT</p>
		</a>
		<a href="/produkt/materac-azardi-premium-komfort-royal/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1432-Materac-AZARDI-Premium-Komfort-Royal-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT ROYAL</p>
		</a>
	`
	} else if (arrayEquals(array191, checkedInputs)) {
		console.log('array191')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-vario-plus-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1415-Materac-Vario-Plus-AZARDI-kieszeniowy-visco.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO PLUS</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-premium-komfort/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1422-Materac-kieszeniowy-AZARDI-Premium-Komfort-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT</p>
		</a>
		<a href="/produkt/materac-azardi-premium-komfort-royal/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1432-Materac-AZARDI-Premium-Komfort-Royal-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT ROYAL</p>
		</a>
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>
	`
	} else if (arrayEquals(array192, checkedInputs)) {
		console.log('array192')
		mattressBoxes.innerHTML = ` 
		
		<a href="/produkt/materac-vario-plus-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1415-Materac-Vario-Plus-AZARDI-kieszeniowy-visco.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO PLUS</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-premium-komfort/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1422-Materac-kieszeniowy-AZARDI-Premium-Komfort-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT</p>
		</a>
		<a href="/produkt/materac-azardi-premium-komfort-royal/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1432-Materac-AZARDI-Premium-Komfort-Royal-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT ROYAL</p>
		</a>
		<a href="/produkt/dolce-vita-dual-8/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/dolce-vita-dual-8-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">DOLCE VITA DUAL 8</p>
		</a>
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>
	`
	} else if (arrayEquals(array193, checkedInputs)) {
		console.log('array193')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-vario-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1409-Materac-Vario-AZARDI-kieszeniowy-visco-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO</p>
		</a>
		<a href="/produkt/materac-vario-plus-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1415-Materac-Vario-Plus-AZARDI-kieszeniowy-visco.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO PLUS</p>
		</a>
		<a href="/produkt/materac-azardi-premium-komfort-royal/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1432-Materac-AZARDI-Premium-Komfort-Royal-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT ROYAL</p>
		</a>
	`
	} else if (arrayEquals(array194, checkedInputs)) {
		console.log('array194')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-azardi-premium-kieszeniowy/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1426-Materac-AZARDI-Premium-kieszeniowy-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM</p>
		</a>
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>
	`
	} else if (arrayEquals(array195, checkedInputs)) {
		console.log('array195')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-vario-plus-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1415-Materac-Vario-Plus-AZARDI-kieszeniowy-visco.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO PLUS</p>
		</a>
		<a href="/produkt/materac-azardi-premium-kieszeniowy/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1426-Materac-AZARDI-Premium-kieszeniowy-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-premium-komfort/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1422-Materac-kieszeniowy-AZARDI-Premium-Komfort-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT</p>
		</a>
		<a href="/produkt/materac-azardi-premium-komfort-royal/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1432-Materac-AZARDI-Premium-Komfort-Royal-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT ROYAL</p>
		</a>
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>
	`
	} else if (arrayEquals(array196, checkedInputs)) {
		console.log('array196')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-vario-plus-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1415-Materac-Vario-Plus-AZARDI-kieszeniowy-visco.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO PLUS</p>
		</a>
		<a href="/produkt/materac-azardi-premium-kieszeniowy/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1426-Materac-AZARDI-Premium-kieszeniowy-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-premium-komfort/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1422-Materac-kieszeniowy-AZARDI-Premium-Komfort-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT</p>
		</a>
		<a href="/produkt/materac-azardi-premium-komfort-royal/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1432-Materac-AZARDI-Premium-Komfort-Royal-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT ROYAL</p>
		</a>
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>
	`
	} else if (arrayEquals(array197, checkedInputs)) {
		console.log('array197')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-vario-plus-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1415-Materac-Vario-Plus-AZARDI-kieszeniowy-visco.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO PLUS</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-premium-komfort/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1422-Materac-kieszeniowy-AZARDI-Premium-Komfort-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT</p>
		</a>
	`
	} else if (arrayEquals(array198, checkedInputs)) {
		console.log('array198')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-azardi-premium-kieszeniowy/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1426-Materac-AZARDI-Premium-kieszeniowy-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-king-firm/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1438-Materac-kieszeniowy-Azardi-King-Firm.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">King Firm</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-vouge-royal-coil/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1456-Materac-kieszeniowy-Azardi-Vouge-Royal-Coil.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vouge</p>
		</a>
		<a href="/produkt/dolce-vita-dual-8/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/dolce-vita-dual-8-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">DOLCE VITA DUAL 8</p>
		</a>
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>
	
	`
	} else if (arrayEquals(array199, checkedInputs)) {
		console.log('array199')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-vario-plus-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1415-Materac-Vario-Plus-AZARDI-kieszeniowy-visco.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO PLUS</p>
		</a>
		<a href="/produkt/materac-azardi-premium-kieszeniowy/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1426-Materac-AZARDI-Premium-kieszeniowy-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-premium-komfort/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1422-Materac-kieszeniowy-AZARDI-Premium-Komfort-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT</p>
		</a>
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-claremont-latex/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1447-Materac-kieszeniowy-Azardi-Claremont-latex-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">CLAREMONT LATEX</p>
		</a>
		<a href="/produkt/essence/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1477-Materac-kieszeniowy-AZARDI-Essence-Royal-Coil-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Essence</p>
		</a>
	`
	} else if (arrayEquals(array200, checkedInputs)) {
		console.log('array200')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-vario-plus-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1415-Materac-Vario-Plus-AZARDI-kieszeniowy-visco.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO PLUS</p>
		</a>
		<a href="/produkt/materac-azardi-premium-kieszeniowy/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1426-Materac-AZARDI-Premium-kieszeniowy-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-premium-komfort/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1422-Materac-kieszeniowy-AZARDI-Premium-Komfort-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-king-firm/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1438-Materac-kieszeniowy-Azardi-King-Firm.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">King Firm</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-vouge-royal-coil/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1456-Materac-kieszeniowy-Azardi-Vouge-Royal-Coil.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vouge</p>
		</a>
		<a href="/produkt/dolce-vita-dual-8/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/dolce-vita-dual-8-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">DOLCE VITA DUAL 8</p>
		</a>
	`
	} else if (arrayEquals(array201, checkedInputs)) {
		console.log('array201')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/magnicool-10-soft/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/MAGNICOOL-10-SOFT-1024x719.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Magnicool 10 Soft</p>
		</a>
		<a href="/produkt/materac-vario-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1409-Materac-Vario-AZARDI-kieszeniowy-visco-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO</p>
		</a>
		<a href="/produkt/materac-vario-plus-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1415-Materac-Vario-Plus-AZARDI-kieszeniowy-visco.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO PLUS</p>
		</a>
		<a href="/produkt/materac-azardi-premium-komfort-royal/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1432-Materac-AZARDI-Premium-Komfort-Royal-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT ROYAL</p>
		</a>
	
	`
	} else if (arrayEquals(array202, checkedInputs)) {
		console.log('array202')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-azardi-premium-kieszeniowy/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1426-Materac-AZARDI-Premium-kieszeniowy-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-king-firm/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1438-Materac-kieszeniowy-Azardi-King-Firm.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">King Firm</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-vouge-royal-coil/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1456-Materac-kieszeniowy-Azardi-Vouge-Royal-Coil.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vouge</p>
		</a>
		<a href="/produkt/dolce-vita-dual-8/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/dolce-vita-dual-8-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">DOLCE VITA DUAL 8</p>
		</a>
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>
	
	`
	} else if (arrayEquals(array203, checkedInputs)) {
		console.log('array203')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-vario-plus-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1415-Materac-Vario-Plus-AZARDI-kieszeniowy-visco.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO PLUS</p>
		</a>
		<a href="/produkt/materac-azardi-premium-kieszeniowy/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1426-Materac-AZARDI-Premium-kieszeniowy-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-premium-komfort/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1422-Materac-kieszeniowy-AZARDI-Premium-Komfort-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT</p>
		</a>
		<a href="/produkt/materac-azardi-premium-komfort-royal/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1432-Materac-AZARDI-Premium-Komfort-Royal-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT ROYAL</p>
		</a>
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-claremont-latex/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1447-Materac-kieszeniowy-Azardi-Claremont-latex-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">CLAREMONT LATEX</p>
		</a>
		<a href="/produkt/essence/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1477-Materac-kieszeniowy-AZARDI-Essence-Royal-Coil-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Essence</p>
		</a>
		<a href="/produkt/magnicool-10-firm/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/MAGNICOOL-10-FIRM-1024x719.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Magnicool 10 Firm</p>
		</a>
	`
	} else if (arrayEquals(array204, checkedInputs)) {
		console.log('array204')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-vario-plus-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1415-Materac-Vario-Plus-AZARDI-kieszeniowy-visco.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO PLUS</p>
		</a>
		<a href="/produkt/materac-azardi-premium-kieszeniowy/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1426-Materac-AZARDI-Premium-kieszeniowy-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-premium-komfort/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1422-Materac-kieszeniowy-AZARDI-Premium-Komfort-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT</p>
		</a>
		<a href="/produkt/materac-azardi-premium-komfort-royal/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1432-Materac-AZARDI-Premium-Komfort-Royal-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT ROYAL</p>
		</a>
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>
		<a href="/produkt/dolce-vita-dual-8/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/dolce-vita-dual-8-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">DOLCE VITA DUAL 8</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-claremont-latex/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1447-Materac-kieszeniowy-Azardi-Claremont-latex-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">CLAREMONT LATEX</p>
		</a>
		<a href="/produkt/essence/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1477-Materac-kieszeniowy-AZARDI-Essence-Royal-Coil-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Essence</p>
		</a>
		<a href="/produkt/magnicool-10-soft/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/MAGNICOOL-10-SOFT-1024x719.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Magnicool 10 Soft</p>
		</a>
		<a href="/produkt/magnicool-10-firm/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/MAGNICOOL-10-FIRM-1024x719.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Magnicool 10 Firm</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-vouge-royal-coil/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1456-Materac-kieszeniowy-Azardi-Vouge-Royal-Coil.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vouge</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-king-firm/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1438-Materac-kieszeniowy-Azardi-King-Firm.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">King Firm</p>
		</a>
	
	`
	} else if (arrayEquals(array205, checkedInputs)) {
		console.log('array205')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/magnicool-10-soft/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/MAGNICOOL-10-SOFT-1024x719.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Magnicool 10 Soft</p>
		</a>
		<a href="/produkt/magnicool-10-firm/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/MAGNICOOL-10-FIRM-1024x719.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Magnicool 10 Firm</p>
		</a>
		<a href="/produkt/materac-azardi-premium-komfort-royal/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1432-Materac-AZARDI-Premium-Komfort-Royal-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT ROYAL</p>
		</a>
	`
	} else if (arrayEquals(array206, checkedInputs)) {
		console.log('array206')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-azardi-premium-kieszeniowy/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1426-Materac-AZARDI-Premium-kieszeniowy-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-king-firm/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1438-Materac-kieszeniowy-Azardi-King-Firm.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">King Firm</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-vouge-royal-coil/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1456-Materac-kieszeniowy-Azardi-Vouge-Royal-Coil.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vouge</p>
		</a>
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>
		<a href="/produkt/dolce-vita-dual-8/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/dolce-vita-dual-8-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">DOLCE VITA DUAL 8</p>
		</a>
	`
	} else if (arrayEquals(array207, checkedInputs)) {
		console.log('array207')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-vario-plus-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1415-Materac-Vario-Plus-AZARDI-kieszeniowy-visco.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO PLUS</p>
		</a>
		<a href="/produkt/materac-azardi-premium-kieszeniowy/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1426-Materac-AZARDI-Premium-kieszeniowy-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-premium-komfort/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1422-Materac-kieszeniowy-AZARDI-Premium-Komfort-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT</p>
		</a>
		<a href="/produkt/materac-azardi-premium-komfort-royal/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1432-Materac-AZARDI-Premium-Komfort-Royal-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT ROYAL</p>
		</a>
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-claremont-latex/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1447-Materac-kieszeniowy-Azardi-Claremont-latex-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">CLAREMONT LATEX</p>
		</a>
		<a href="/produkt/essence/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1477-Materac-kieszeniowy-AZARDI-Essence-Royal-Coil-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Essence</p>
		</a>
	`
	} else if (arrayEquals(array208, checkedInputs)) {
		console.log('array208')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-vario-plus-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1415-Materac-Vario-Plus-AZARDI-kieszeniowy-visco.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO PLUS</p>
		</a>
		<a href="/produkt/materac-azardi-premium-kieszeniowy/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1426-Materac-AZARDI-Premium-kieszeniowy-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-premium-komfort/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1422-Materac-kieszeniowy-AZARDI-Premium-Komfort-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT</p>
		</a>
		<a href="/produkt/materac-azardi-premium-komfort-royal/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1432-Materac-AZARDI-Premium-Komfort-Royal-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT ROYAL</p>
		</a>
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>
		<a href="/produkt/dolce-vita-dual-8/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/dolce-vita-dual-8-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">DOLCE VITA DUAL 8</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-claremont-latex/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1447-Materac-kieszeniowy-Azardi-Claremont-latex-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">CLAREMONT LATEX</p>
		</a>
		<a href="/produkt/essence/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1477-Materac-kieszeniowy-AZARDI-Essence-Royal-Coil-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Essence</p>
		</a>
		<a href="/produkt/magnicool-10-soft/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/MAGNICOOL-10-SOFT-1024x719.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Magnicool 10 Soft</p>
		</a>
		<a href="/produkt/magnicool-10-firm/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/MAGNICOOL-10-FIRM-1024x719.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Magnicool 10 Firm</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-vouge-royal-coil/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1456-Materac-kieszeniowy-Azardi-Vouge-Royal-Coil.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vouge</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-king-firm/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1438-Materac-kieszeniowy-Azardi-King-Firm.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">King Firm</p>
		</a>
	
	`
	} else if (arrayEquals(array209, checkedInputs)) {
		console.log('array209')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-vario-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1409-Materac-Vario-AZARDI-kieszeniowy-visco-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO</p>
		</a>
		<a href="/produkt/materac-vario-plus-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1415-Materac-Vario-Plus-AZARDI-kieszeniowy-visco.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO PLUS</p>
		</a>
		<a href="/produkt/materac-azardi-premium-komfort-royal/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1432-Materac-AZARDI-Premium-Komfort-Royal-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT ROYAL</p>
		</a>
	`
	} else if (arrayEquals(array210, checkedInputs)) {
		console.log('array210')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-azardi-premium-kieszeniowy/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1426-Materac-AZARDI-Premium-kieszeniowy-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM</p>
		</a>
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>
	`
	} else if (arrayEquals(array211, checkedInputs)) {
		console.log('array211')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-vario-plus-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1415-Materac-Vario-Plus-AZARDI-kieszeniowy-visco.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO PLUS</p>
		</a>
		<a href="/produkt/materac-azardi-premium-kieszeniowy/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1426-Materac-AZARDI-Premium-kieszeniowy-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-premium-komfort/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1422-Materac-kieszeniowy-AZARDI-Premium-Komfort-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT</p>
		</a>
		<a href="/produkt/materac-azardi-premium-komfort-royal/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1432-Materac-AZARDI-Premium-Komfort-Royal-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT ROYAL</p>
		</a>
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>
	`
	} else if (arrayEquals(array212, checkedInputs)) {
		console.log('array212')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-vario-plus-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1415-Materac-Vario-Plus-AZARDI-kieszeniowy-visco.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO PLUS</p>
		</a>
		<a href="/produkt/materac-azardi-premium-kieszeniowy/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1426-Materac-AZARDI-Premium-kieszeniowy-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-premium-komfort/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1422-Materac-kieszeniowy-AZARDI-Premium-Komfort-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT</p>
		</a>
		<a href="/produkt/materac-azardi-premium-komfort-royal/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1432-Materac-AZARDI-Premium-Komfort-Royal-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT ROYAL</p>
		</a>
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>
	`
	} else if (arrayEquals(array213, checkedInputs)) {
		console.log('array213')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-vario-plus-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1415-Materac-Vario-Plus-AZARDI-kieszeniowy-visco.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO PLUS</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-premium-komfort/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1422-Materac-kieszeniowy-AZARDI-Premium-Komfort-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT</p>
		</a>
	`
	} else if (arrayEquals(array214, checkedInputs)) {
		console.log('array214')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-azardi-premium-kieszeniowy/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1426-Materac-AZARDI-Premium-kieszeniowy-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-king-firm/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1438-Materac-kieszeniowy-Azardi-King-Firm.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">King Firm</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-vouge-royal-coil/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1456-Materac-kieszeniowy-Azardi-Vouge-Royal-Coil.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vouge</p>
		</a>
		<a href="/produkt/dolce-vita-dual-8/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/dolce-vita-dual-8-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">DOLCE VITA DUAL 8</p>
		</a>
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>
	
	`
	} else if (arrayEquals(array215, checkedInputs)) {
		console.log('array215')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-vario-plus-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1415-Materac-Vario-Plus-AZARDI-kieszeniowy-visco.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO PLUS</p>
		</a>
		<a href="/produkt/materac-azardi-premium-kieszeniowy/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1426-Materac-AZARDI-Premium-kieszeniowy-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-premium-komfort/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1422-Materac-kieszeniowy-AZARDI-Premium-Komfort-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT</p>
		</a>
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-claremont-latex/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1447-Materac-kieszeniowy-Azardi-Claremont-latex-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">CLAREMONT LATEX</p>
		</a>
		<a href="/produkt/essence/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1477-Materac-kieszeniowy-AZARDI-Essence-Royal-Coil-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Essence</p>
		</a>
	`
	} else if (arrayEquals(array216, checkedInputs)) {
		console.log('array216')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-vario-plus-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1415-Materac-Vario-Plus-AZARDI-kieszeniowy-visco.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO PLUS</p>
		</a>
		<a href="/produkt/materac-azardi-premium-kieszeniowy/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1426-Materac-AZARDI-Premium-kieszeniowy-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-premium-komfort/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1422-Materac-kieszeniowy-AZARDI-Premium-Komfort-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-king-firm/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1438-Materac-kieszeniowy-Azardi-King-Firm.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">King Firm</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-vouge-royal-coil/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1456-Materac-kieszeniowy-Azardi-Vouge-Royal-Coil.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vouge</p>
		</a>
		<a href="/produkt/dolce-vita-dual-8/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/dolce-vita-dual-8-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">DOLCE VITA DUAL 8</p>
		</a>
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>
	`
	} else if (arrayEquals(array217, checkedInputs)) {
		console.log('array217')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/magnicool-10-soft/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/MAGNICOOL-10-SOFT-1024x719.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Magnicool 10 Soft</p>
		</a>
		<a href="/produkt/materac-vario-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1409-Materac-Vario-AZARDI-kieszeniowy-visco-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO</p>
		</a>
		<a href="/produkt/materac-vario-plus-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1415-Materac-Vario-Plus-AZARDI-kieszeniowy-visco.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO PLUS</p>
		</a>
		<a href="/produkt/materac-azardi-premium-komfort-royal/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1432-Materac-AZARDI-Premium-Komfort-Royal-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT ROYAL</p>
		</a>
	
	`
	} else if (arrayEquals(array218, checkedInputs)) {
		console.log('array218')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-azardi-premium-kieszeniowy/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1426-Materac-AZARDI-Premium-kieszeniowy-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-king-firm/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1438-Materac-kieszeniowy-Azardi-King-Firm.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">King Firm</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-vouge-royal-coil/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1456-Materac-kieszeniowy-Azardi-Vouge-Royal-Coil.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vouge</p>
		</a>
		<a href="/produkt/dolce-vita-dual-8/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/dolce-vita-dual-8-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">DOLCE VITA DUAL 8</p>
		</a>
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>
	
	`
	} else if (arrayEquals(array219, checkedInputs)) {
		console.log('array219')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-vario-plus-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1415-Materac-Vario-Plus-AZARDI-kieszeniowy-visco.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO PLUS</p>
		</a>
		<a href="/produkt/materac-azardi-premium-kieszeniowy/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1426-Materac-AZARDI-Premium-kieszeniowy-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-premium-komfort/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1422-Materac-kieszeniowy-AZARDI-Premium-Komfort-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT</p>
		</a>
		<a href="/produkt/materac-azardi-premium-komfort-royal/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1432-Materac-AZARDI-Premium-Komfort-Royal-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT ROYAL</p>
		</a>
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-claremont-latex/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1447-Materac-kieszeniowy-Azardi-Claremont-latex-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">CLAREMONT LATEX</p>
		</a>
		<a href="/produkt/essence/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1477-Materac-kieszeniowy-AZARDI-Essence-Royal-Coil-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Essence</p>
		</a>
		<a href="/produkt/magnicool-10-firm/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/MAGNICOOL-10-FIRM-1024x719.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Magnicool 10 Firm</p>
		</a>
	`
	} else if (arrayEquals(array220, checkedInputs)) {
		console.log('array220')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-vario-plus-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1415-Materac-Vario-Plus-AZARDI-kieszeniowy-visco.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO PLUS</p>
		</a>
		<a href="/produkt/materac-azardi-premium-kieszeniowy/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1426-Materac-AZARDI-Premium-kieszeniowy-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-premium-komfort/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1422-Materac-kieszeniowy-AZARDI-Premium-Komfort-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT</p>
		</a>
		<a href="/produkt/materac-azardi-premium-komfort-royal/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1432-Materac-AZARDI-Premium-Komfort-Royal-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT ROYAL</p>
		</a>
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>
		<a href="/produkt/dolce-vita-dual-8/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/dolce-vita-dual-8-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">DOLCE VITA DUAL 8</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-claremont-latex/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1447-Materac-kieszeniowy-Azardi-Claremont-latex-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">CLAREMONT LATEX</p>
		</a>
		<a href="/produkt/essence/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1477-Materac-kieszeniowy-AZARDI-Essence-Royal-Coil-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Essence</p>
		</a>
		<a href="/produkt/magnicool-10-soft/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/MAGNICOOL-10-SOFT-1024x719.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Magnicool 10 Soft</p>
		</a>
		<a href="/produkt/magnicool-10-firm/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/MAGNICOOL-10-FIRM-1024x719.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Magnicool 10 Firm</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-vouge-royal-coil/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1456-Materac-kieszeniowy-Azardi-Vouge-Royal-Coil.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vouge</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-king-firm/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1438-Materac-kieszeniowy-Azardi-King-Firm.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">King Firm</p>
		</a>
	
	`
	} else if (arrayEquals(array221, checkedInputs)) {
		console.log('array221')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/magnicool-10-soft/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/MAGNICOOL-10-SOFT-1024x719.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Magnicool 10 Soft</p>
		</a>
		<a href="/produkt/magnicool-10-firm/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/MAGNICOOL-10-FIRM-1024x719.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Magnicool 10 Firm</p>
		</a>
		<a href="/produkt/materac-azardi-premium-komfort-royal/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1432-Materac-AZARDI-Premium-Komfort-Royal-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT ROYAL</p>
		</a>
	`
	} else if (arrayEquals(array222, checkedInputs)) {
		console.log('array222')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-azardi-premium-kieszeniowy/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1426-Materac-AZARDI-Premium-kieszeniowy-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-king-firm/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1438-Materac-kieszeniowy-Azardi-King-Firm.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">King Firm</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-vouge-royal-coil/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1456-Materac-kieszeniowy-Azardi-Vouge-Royal-Coil.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vouge</p>
		</a>
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>
		<a href="/produkt/dolce-vita-dual-8/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/dolce-vita-dual-8-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">DOLCE VITA DUAL 8</p>
		</a>
	`
	} else if (arrayEquals(array223, checkedInputs)) {
		console.log('array223')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-vario-plus-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1415-Materac-Vario-Plus-AZARDI-kieszeniowy-visco.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO PLUS</p>
		</a>
		<a href="/produkt/materac-azardi-premium-kieszeniowy/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1426-Materac-AZARDI-Premium-kieszeniowy-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-premium-komfort/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1422-Materac-kieszeniowy-AZARDI-Premium-Komfort-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT</p>
		</a>
		<a href="/produkt/materac-azardi-premium-komfort-royal/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1432-Materac-AZARDI-Premium-Komfort-Royal-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT ROYAL</p>
		</a>
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-claremont-latex/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1447-Materac-kieszeniowy-Azardi-Claremont-latex-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">CLAREMONT LATEX</p>
		</a>
		<a href="/produkt/essence/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1477-Materac-kieszeniowy-AZARDI-Essence-Royal-Coil-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Essence</p>
		</a>
	`
	} else if (arrayEquals(array224, checkedInputs)) {
		console.log('array224')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-vario-plus-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1415-Materac-Vario-Plus-AZARDI-kieszeniowy-visco.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO PLUS</p>
		</a>
		<a href="/produkt/materac-azardi-premium-kieszeniowy/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1426-Materac-AZARDI-Premium-kieszeniowy-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-premium-komfort/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1422-Materac-kieszeniowy-AZARDI-Premium-Komfort-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT</p>
		</a>
		<a href="/produkt/materac-azardi-premium-komfort-royal/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1432-Materac-AZARDI-Premium-Komfort-Royal-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT ROYAL</p>
		</a>
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>
		<a href="/produkt/dolce-vita-dual-8/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/dolce-vita-dual-8-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">DOLCE VITA DUAL 8</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-claremont-latex/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1447-Materac-kieszeniowy-Azardi-Claremont-latex-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">CLAREMONT LATEX</p>
		</a>
		<a href="/produkt/essence/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1477-Materac-kieszeniowy-AZARDI-Essence-Royal-Coil-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Essence</p>
		</a>
		<a href="/produkt/magnicool-10-soft/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/MAGNICOOL-10-SOFT-1024x719.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Magnicool 10 Soft</p>
		</a>
		<a href="/produkt/magnicool-10-firm/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/MAGNICOOL-10-FIRM-1024x719.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Magnicool 10 Firm</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-vouge-royal-coil/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1456-Materac-kieszeniowy-Azardi-Vouge-Royal-Coil.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vouge</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-king-firm/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1438-Materac-kieszeniowy-Azardi-King-Firm.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">King Firm</p>
		</a>
	
	`
	} else if (arrayEquals(array225, checkedInputs)) {
		console.log('array225')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-vario-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1409-Materac-Vario-AZARDI-kieszeniowy-visco-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO</p>
		</a>
		<a href="/produkt/materac-vario-plus-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1415-Materac-Vario-Plus-AZARDI-kieszeniowy-visco.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO PLUS</p>
		</a>
		<a href="/produkt/materac-azardi-premium-komfort-royal/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1432-Materac-AZARDI-Premium-Komfort-Royal-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT ROYAL</p>
		</a>
	`
	} else if (arrayEquals(array226, checkedInputs)) {
		console.log('array226')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-azardi-premium-kieszeniowy/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1426-Materac-AZARDI-Premium-kieszeniowy-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM</p>
		</a>
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>
	`
	} else if (arrayEquals(array227, checkedInputs)) {
		console.log('array227')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-vario-plus-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1415-Materac-Vario-Plus-AZARDI-kieszeniowy-visco.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO PLUS</p>
		</a>
		<a href="/produkt/materac-azardi-premium-kieszeniowy/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1426-Materac-AZARDI-Premium-kieszeniowy-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-premium-komfort/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1422-Materac-kieszeniowy-AZARDI-Premium-Komfort-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT</p>
		</a>
		<a href="/produkt/materac-azardi-premium-komfort-royal/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1432-Materac-AZARDI-Premium-Komfort-Royal-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT ROYAL</p>
		</a>
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>
	`
	} else if (arrayEquals(array228, checkedInputs)) {
		console.log('array228')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-vario-plus-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1415-Materac-Vario-Plus-AZARDI-kieszeniowy-visco.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO PLUS</p>
		</a>
		<a href="/produkt/materac-azardi-premium-kieszeniowy/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1426-Materac-AZARDI-Premium-kieszeniowy-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-premium-komfort/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1422-Materac-kieszeniowy-AZARDI-Premium-Komfort-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT</p>
		</a>
		<a href="/produkt/materac-azardi-premium-komfort-royal/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1432-Materac-AZARDI-Premium-Komfort-Royal-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT ROYAL</p>
		</a>
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>
	`
	} else if (arrayEquals(array229, checkedInputs)) {
		console.log('array229')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-vario-plus-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1415-Materac-Vario-Plus-AZARDI-kieszeniowy-visco.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO PLUS</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-premium-komfort/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1422-Materac-kieszeniowy-AZARDI-Premium-Komfort-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT</p>
		</a>
	`
	} else if (arrayEquals(array230, checkedInputs)) {
		console.log('array230')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-azardi-premium-kieszeniowy/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1426-Materac-AZARDI-Premium-kieszeniowy-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-king-firm/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1438-Materac-kieszeniowy-Azardi-King-Firm.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">King Firm</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-vouge-royal-coil/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1456-Materac-kieszeniowy-Azardi-Vouge-Royal-Coil.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vouge</p>
		</a>
		<a href="/produkt/dolce-vita-dual-8/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/dolce-vita-dual-8-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">DOLCE VITA DUAL 8</p>
		</a>
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>
	
	`
	} else if (arrayEquals(array231, checkedInputs)) {
		console.log('array231')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-vario-plus-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1415-Materac-Vario-Plus-AZARDI-kieszeniowy-visco.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO PLUS</p>
		</a>
		<a href="/produkt/materac-azardi-premium-kieszeniowy/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1426-Materac-AZARDI-Premium-kieszeniowy-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-premium-komfort/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1422-Materac-kieszeniowy-AZARDI-Premium-Komfort-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT</p>
		</a>
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-claremont-latex/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1447-Materac-kieszeniowy-Azardi-Claremont-latex-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">CLAREMONT LATEX</p>
		</a>
		<a href="/produkt/essence/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1477-Materac-kieszeniowy-AZARDI-Essence-Royal-Coil-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Essence</p>
		</a>
	`
	} else if (arrayEquals(array232, checkedInputs)) {
		console.log('array232')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-vario-plus-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1415-Materac-Vario-Plus-AZARDI-kieszeniowy-visco.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO PLUS</p>
		</a>
		<a href="/produkt/materac-azardi-premium-kieszeniowy/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1426-Materac-AZARDI-Premium-kieszeniowy-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-premium-komfort/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1422-Materac-kieszeniowy-AZARDI-Premium-Komfort-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-king-firm/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1438-Materac-kieszeniowy-Azardi-King-Firm.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">King Firm</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-vouge-royal-coil/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1456-Materac-kieszeniowy-Azardi-Vouge-Royal-Coil.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vouge</p>
		</a>
		<a href="/produkt/dolce-vita-dual-8/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/dolce-vita-dual-8-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">DOLCE VITA DUAL 8</p>
		</a>
	`
	} else if (arrayEquals(array233, checkedInputs)) {
		console.log('array233')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/magnicool-10-soft/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/MAGNICOOL-10-SOFT-1024x719.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Magnicool 10 Soft</p>
		</a>
		<a href="/produkt/materac-vario-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1409-Materac-Vario-AZARDI-kieszeniowy-visco-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO</p>
		</a>
		<a href="/produkt/materac-vario-plus-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1415-Materac-Vario-Plus-AZARDI-kieszeniowy-visco.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO PLUS</p>
		</a>
		<a href="/produkt/materac-azardi-premium-komfort-royal/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1432-Materac-AZARDI-Premium-Komfort-Royal-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT ROYAL</p>
		</a>
	
	`
	} else if (arrayEquals(array234, checkedInputs)) {
		console.log('array234')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-azardi-premium-kieszeniowy/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1426-Materac-AZARDI-Premium-kieszeniowy-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-king-firm/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1438-Materac-kieszeniowy-Azardi-King-Firm.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">King Firm</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-vouge-royal-coil/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1456-Materac-kieszeniowy-Azardi-Vouge-Royal-Coil.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vouge</p>
		</a>
		<a href="/produkt/dolce-vita-dual-8/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/dolce-vita-dual-8-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">DOLCE VITA DUAL 8</p>
		</a>
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>
	
	`
	} else if (arrayEquals(array235, checkedInputs)) {
		console.log('array235')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-vario-plus-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1415-Materac-Vario-Plus-AZARDI-kieszeniowy-visco.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO PLUS</p>
		</a>
		<a href="/produkt/materac-azardi-premium-kieszeniowy/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1426-Materac-AZARDI-Premium-kieszeniowy-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-premium-komfort/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1422-Materac-kieszeniowy-AZARDI-Premium-Komfort-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT</p>
		</a>
		<a href="/produkt/materac-azardi-premium-komfort-royal/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1432-Materac-AZARDI-Premium-Komfort-Royal-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT ROYAL</p>
		</a>
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-claremont-latex/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1447-Materac-kieszeniowy-Azardi-Claremont-latex-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">CLAREMONT LATEX</p>
		</a>
		<a href="/produkt/essence/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1477-Materac-kieszeniowy-AZARDI-Essence-Royal-Coil-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Essence</p>
		</a>
		<a href="/produkt/magnicool-10-firm/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/MAGNICOOL-10-FIRM-1024x719.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Magnicool 10 Firm</p>
		</a>
	`
	} else if (arrayEquals(array236, checkedInputs)) {
		console.log('array236')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-vario-plus-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1415-Materac-Vario-Plus-AZARDI-kieszeniowy-visco.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO PLUS</p>
		</a>
		<a href="/produkt/materac-azardi-premium-kieszeniowy/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1426-Materac-AZARDI-Premium-kieszeniowy-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-premium-komfort/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1422-Materac-kieszeniowy-AZARDI-Premium-Komfort-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT</p>
		</a>
		<a href="/produkt/materac-azardi-premium-komfort-royal/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1432-Materac-AZARDI-Premium-Komfort-Royal-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT ROYAL</p>
		</a>
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>
		<a href="/produkt/dolce-vita-dual-8/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/dolce-vita-dual-8-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">DOLCE VITA DUAL 8</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-claremont-latex/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1447-Materac-kieszeniowy-Azardi-Claremont-latex-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">CLAREMONT LATEX</p>
		</a>
		<a href="/produkt/essence/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1477-Materac-kieszeniowy-AZARDI-Essence-Royal-Coil-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Essence</p>
		</a>
		<a href="/produkt/magnicool-10-soft/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/MAGNICOOL-10-SOFT-1024x719.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Magnicool 10 Soft</p>
		</a>
		<a href="/produkt/magnicool-10-firm/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/MAGNICOOL-10-FIRM-1024x719.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Magnicool 10 Firm</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-vouge-royal-coil/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1456-Materac-kieszeniowy-Azardi-Vouge-Royal-Coil.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vouge</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-king-firm/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1438-Materac-kieszeniowy-Azardi-King-Firm.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">King Firm</p>
		</a>
	
	`
	} else if (arrayEquals(array237, checkedInputs)) {
		console.log('array237')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/magnicool-10-soft/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/MAGNICOOL-10-SOFT-1024x719.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Magnicool 10 Soft</p>
		</a>
		<a href="/produkt/magnicool-10-firm/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/MAGNICOOL-10-FIRM-1024x719.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Magnicool 10 Firm</p>
		</a>
		<a href="/produkt/materac-azardi-premium-komfort-royal/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1432-Materac-AZARDI-Premium-Komfort-Royal-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT ROYAL</p>
		</a>
	`
	} else if (arrayEquals(array238, checkedInputs)) {
		console.log('array238')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-azardi-premium-kieszeniowy/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1426-Materac-AZARDI-Premium-kieszeniowy-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-king-firm/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1438-Materac-kieszeniowy-Azardi-King-Firm.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">King Firm</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-vouge-royal-coil/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1456-Materac-kieszeniowy-Azardi-Vouge-Royal-Coil.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vouge</p>
		</a>
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>
		<a href="/produkt/dolce-vita-dual-8/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/dolce-vita-dual-8-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">DOLCE VITA DUAL 8</p>
		</a>
	`
	} else if (arrayEquals(array239, checkedInputs)) {
		console.log('array239')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-vario-plus-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1415-Materac-Vario-Plus-AZARDI-kieszeniowy-visco.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO PLUS</p>
		</a>
		<a href="/produkt/materac-azardi-premium-kieszeniowy/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1426-Materac-AZARDI-Premium-kieszeniowy-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-premium-komfort/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1422-Materac-kieszeniowy-AZARDI-Premium-Komfort-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT</p>
		</a>
		<a href="/produkt/materac-azardi-premium-komfort-royal/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1432-Materac-AZARDI-Premium-Komfort-Royal-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT ROYAL</p>
		</a>
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-claremont-latex/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1447-Materac-kieszeniowy-Azardi-Claremont-latex-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">CLAREMONT LATEX</p>
		</a>
		<a href="/produkt/essence/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1477-Materac-kieszeniowy-AZARDI-Essence-Royal-Coil-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Essence</p>
		</a>
	`
	} else if (arrayEquals(array240, checkedInputs)) {
		console.log('array240')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-vario-plus-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1415-Materac-Vario-Plus-AZARDI-kieszeniowy-visco.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO PLUS</p>
		</a>
		<a href="/produkt/materac-azardi-premium-kieszeniowy/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1426-Materac-AZARDI-Premium-kieszeniowy-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-premium-komfort/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1422-Materac-kieszeniowy-AZARDI-Premium-Komfort-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT</p>
		</a>
		<a href="/produkt/materac-azardi-premium-komfort-royal/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1432-Materac-AZARDI-Premium-Komfort-Royal-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT ROYAL</p>
		</a>
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>
		<a href="/produkt/dolce-vita-dual-8/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/dolce-vita-dual-8-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">DOLCE VITA DUAL 8</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-claremont-latex/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1447-Materac-kieszeniowy-Azardi-Claremont-latex-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">CLAREMONT LATEX</p>
		</a>
		<a href="/produkt/essence/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1477-Materac-kieszeniowy-AZARDI-Essence-Royal-Coil-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Essence</p>
		</a>
		<a href="/produkt/magnicool-10-soft/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/MAGNICOOL-10-SOFT-1024x719.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Magnicool 10 Soft</p>
		</a>
		<a href="/produkt/magnicool-10-firm/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/MAGNICOOL-10-FIRM-1024x719.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Magnicool 10 Firm</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-vouge-royal-coil/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1456-Materac-kieszeniowy-Azardi-Vouge-Royal-Coil.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vouge</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-king-firm/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1438-Materac-kieszeniowy-Azardi-King-Firm.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">King Firm</p>
		</a>
	
	`
	} else if (arrayEquals(array241, checkedInputs)) {
		console.log('array241')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-vario-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1409-Materac-Vario-AZARDI-kieszeniowy-visco-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO</p>
		</a>
		<a href="/produkt/materac-vario-plus-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1415-Materac-Vario-Plus-AZARDI-kieszeniowy-visco.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO PLUS</p>
		</a>
		<a href="/produkt/materac-azardi-premium-komfort-royal/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1432-Materac-AZARDI-Premium-Komfort-Royal-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT ROYAL</p>
		</a>
	`
	} else if (arrayEquals(array242, checkedInputs)) {
		console.log('array242')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-azardi-premium-kieszeniowy/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1426-Materac-AZARDI-Premium-kieszeniowy-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM</p>
		</a>
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>
	`
	} else if (arrayEquals(array243, checkedInputs)) {
		console.log('array243')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-vario-plus-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1415-Materac-Vario-Plus-AZARDI-kieszeniowy-visco.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO PLUS</p>
		</a>
		<a href="/produkt/materac-azardi-premium-kieszeniowy/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1426-Materac-AZARDI-Premium-kieszeniowy-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-premium-komfort/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1422-Materac-kieszeniowy-AZARDI-Premium-Komfort-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT</p>
		</a>
		<a href="/produkt/materac-azardi-premium-komfort-royal/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1432-Materac-AZARDI-Premium-Komfort-Royal-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT ROYAL</p>
		</a>
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>
	`
	} else if (arrayEquals(array244, checkedInputs)) {
		console.log('array244')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-vario-plus-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1415-Materac-Vario-Plus-AZARDI-kieszeniowy-visco.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO PLUS</p>
		</a>
		<a href="/produkt/materac-azardi-premium-kieszeniowy/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1426-Materac-AZARDI-Premium-kieszeniowy-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-premium-komfort/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1422-Materac-kieszeniowy-AZARDI-Premium-Komfort-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT</p>
		</a>
		<a href="/produkt/materac-azardi-premium-komfort-royal/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1432-Materac-AZARDI-Premium-Komfort-Royal-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT ROYAL</p>
		</a>
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>
	`
	} else if (arrayEquals(array245, checkedInputs)) {
		console.log('array245')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-vario-plus-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1415-Materac-Vario-Plus-AZARDI-kieszeniowy-visco.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO PLUS</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-premium-komfort/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1422-Materac-kieszeniowy-AZARDI-Premium-Komfort-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT</p>
		</a>
	`
	} else if (arrayEquals(array246, checkedInputs)) {
		console.log('array246')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-azardi-premium-kieszeniowy/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1426-Materac-AZARDI-Premium-kieszeniowy-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-king-firm/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1438-Materac-kieszeniowy-Azardi-King-Firm.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">King Firm</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-vouge-royal-coil/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1456-Materac-kieszeniowy-Azardi-Vouge-Royal-Coil.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vouge</p>
		</a>
		<a href="/produkt/dolce-vita-dual-8/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/dolce-vita-dual-8-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">DOLCE VITA DUAL 8</p>
		</a>
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>
	
	`
	} else if (arrayEquals(array247, checkedInputs)) {
		console.log('array247')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-vario-plus-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1415-Materac-Vario-Plus-AZARDI-kieszeniowy-visco.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO PLUS</p>
		</a>
		<a href="/produkt/materac-azardi-premium-kieszeniowy/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1426-Materac-AZARDI-Premium-kieszeniowy-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-premium-komfort/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1422-Materac-kieszeniowy-AZARDI-Premium-Komfort-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT</p>
		</a>
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-claremont-latex/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1447-Materac-kieszeniowy-Azardi-Claremont-latex-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">CLAREMONT LATEX</p>
		</a>
		<a href="/produkt/essence/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1477-Materac-kieszeniowy-AZARDI-Essence-Royal-Coil-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Essence</p>
		</a>
	`
	} else if (arrayEquals(array248, checkedInputs)) {
		console.log('array248')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-vario-plus-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1415-Materac-Vario-Plus-AZARDI-kieszeniowy-visco.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO PLUS</p>
		</a>
		<a href="/produkt/materac-azardi-premium-kieszeniowy/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1426-Materac-AZARDI-Premium-kieszeniowy-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-premium-komfort/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1422-Materac-kieszeniowy-AZARDI-Premium-Komfort-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-king-firm/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1438-Materac-kieszeniowy-Azardi-King-Firm.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">King Firm</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-vouge-royal-coil/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1456-Materac-kieszeniowy-Azardi-Vouge-Royal-Coil.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vouge</p>
		</a>
		<a href="/produkt/dolce-vita-dual-8/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/dolce-vita-dual-8-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">DOLCE VITA DUAL 8</p>
		</a>
	`
	} else if (arrayEquals(array249, checkedInputs)) {
		console.log('array249')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/magnicool-10-soft/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/MAGNICOOL-10-SOFT-1024x719.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Magnicool 10 Soft</p>
		</a>
		<a href="/produkt/materac-vario-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1409-Materac-Vario-AZARDI-kieszeniowy-visco-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO</p>
		</a>
		<a href="/produkt/materac-vario-plus-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1415-Materac-Vario-Plus-AZARDI-kieszeniowy-visco.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO PLUS</p>
		</a>
		<a href="/produkt/materac-azardi-premium-komfort-royal/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1432-Materac-AZARDI-Premium-Komfort-Royal-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT ROYAL</p>
		</a>
	
	`
	} else if (arrayEquals(array250, checkedInputs)) {
		console.log('array250')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-azardi-premium-kieszeniowy/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1426-Materac-AZARDI-Premium-kieszeniowy-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-king-firm/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1438-Materac-kieszeniowy-Azardi-King-Firm.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">King Firm</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-vouge-royal-coil/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1456-Materac-kieszeniowy-Azardi-Vouge-Royal-Coil.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vouge</p>
		</a>
		<a href="/produkt/dolce-vita-dual-8/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/dolce-vita-dual-8-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">DOLCE VITA DUAL 8</p>
		</a>
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>
	
	`
	} else if (arrayEquals(array251, checkedInputs)) {
		console.log('array251')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-vario-plus-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1415-Materac-Vario-Plus-AZARDI-kieszeniowy-visco.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO PLUS</p>
		</a>
		<a href="/produkt/materac-azardi-premium-kieszeniowy/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1426-Materac-AZARDI-Premium-kieszeniowy-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-premium-komfort/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1422-Materac-kieszeniowy-AZARDI-Premium-Komfort-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT</p>
		</a>
		<a href="/produkt/materac-azardi-premium-komfort-royal/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1432-Materac-AZARDI-Premium-Komfort-Royal-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT ROYAL</p>
		</a>
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-claremont-latex/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1447-Materac-kieszeniowy-Azardi-Claremont-latex-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">CLAREMONT LATEX</p>
		</a>
		<a href="/produkt/essence/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1477-Materac-kieszeniowy-AZARDI-Essence-Royal-Coil-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Essence</p>
		</a>
		<a href="/produkt/magnicool-10-firm/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/MAGNICOOL-10-FIRM-1024x719.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Magnicool 10 Firm</p>
		</a>
	`
	} else if (arrayEquals(array252, checkedInputs)) {
		console.log('array252')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-vario-plus-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1415-Materac-Vario-Plus-AZARDI-kieszeniowy-visco.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO PLUS</p>
		</a>
		<a href="/produkt/materac-azardi-premium-kieszeniowy/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1426-Materac-AZARDI-Premium-kieszeniowy-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-premium-komfort/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1422-Materac-kieszeniowy-AZARDI-Premium-Komfort-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT</p>
		</a>
		<a href="/produkt/materac-azardi-premium-komfort-royal/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1432-Materac-AZARDI-Premium-Komfort-Royal-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT ROYAL</p>
		</a>
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>
		<a href="/produkt/dolce-vita-dual-8/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/dolce-vita-dual-8-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">DOLCE VITA DUAL 8</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-claremont-latex/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1447-Materac-kieszeniowy-Azardi-Claremont-latex-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">CLAREMONT LATEX</p>
		</a>
		<a href="/produkt/essence/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1477-Materac-kieszeniowy-AZARDI-Essence-Royal-Coil-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Essence</p>
		</a>
		<a href="/produkt/magnicool-10-soft/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/MAGNICOOL-10-SOFT-1024x719.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Magnicool 10 Soft</p>
		</a>
		<a href="/produkt/magnicool-10-firm/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/MAGNICOOL-10-FIRM-1024x719.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Magnicool 10 Firm</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-vouge-royal-coil/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1456-Materac-kieszeniowy-Azardi-Vouge-Royal-Coil.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vouge</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-king-firm/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1438-Materac-kieszeniowy-Azardi-King-Firm.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">King Firm</p>
		</a>
	
	`
	} else if (arrayEquals(array253, checkedInputs)) {
		console.log('array253')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/magnicool-10-soft/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/MAGNICOOL-10-SOFT-1024x719.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Magnicool 10 Soft</p>
		</a>
		<a href="/produkt/magnicool-10-firm/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/MAGNICOOL-10-FIRM-1024x719.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Magnicool 10 Firm</p>
		</a>
		<a href="/produkt/materac-azardi-premium-komfort-royal/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1432-Materac-AZARDI-Premium-Komfort-Royal-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT ROYAL</p>
		</a>
	`
	} else if (arrayEquals(array254, checkedInputs)) {
		console.log('array254')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-azardi-premium-kieszeniowy/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1426-Materac-AZARDI-Premium-kieszeniowy-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-king-firm/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1438-Materac-kieszeniowy-Azardi-King-Firm.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">King Firm</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-vouge-royal-coil/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1456-Materac-kieszeniowy-Azardi-Vouge-Royal-Coil.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vouge</p>
		</a>
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>
		<a href="/produkt/dolce-vita-dual-8/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/dolce-vita-dual-8-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">DOLCE VITA DUAL 8</p>
		</a>
	`
	} else if (arrayEquals(array255, checkedInputs)) {
		console.log('array255')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/materac-vario-plus-azardi-kieszeniowy-visco/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1415-Materac-Vario-Plus-AZARDI-kieszeniowy-visco.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">VARIO PLUS</p>
		</a>
		<a href="/produkt/materac-azardi-premium-kieszeniowy/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1426-Materac-AZARDI-Premium-kieszeniowy-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-premium-komfort/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1422-Materac-kieszeniowy-AZARDI-Premium-Komfort-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT</p>
		</a>
		<a href="/produkt/materac-azardi-premium-komfort-royal/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1432-Materac-AZARDI-Premium-Komfort-Royal-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">PREMIUM KOMFORT ROYAL</p>
		</a>
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>
		<a href="/produkt/materac-kieszeniowy-azardi-claremont-latex/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1447-Materac-kieszeniowy-Azardi-Claremont-latex-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">CLAREMONT LATEX</p>
		</a>
		<a href="/produkt/essence/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1477-Materac-kieszeniowy-AZARDI-Essence-Royal-Coil-300x180.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Essence</p>
		</a>
	`
	}
	if (arrayEquals(array256, checkedInputs)) {
		console.log('array256')
		console.log('brak jakiejkolwiek logicznej odp - array256')
		mattressBoxesTitle.textContent =
			'Musisz wybrać przynajmniej jedną odpowiedź, która pozwoli na dopasowanie odpowiedniego materaca 😊'
	} else {
		mattressBoxesTitle.textContent = 'Twój idealny materac to:'
	}
}

const handleQuiz = () => {
	quiz.classList.add('active')
	progress.classList.add('active')
	quizBtns.classList.add('active')
	introQuiz.classList.add('hidden')
	contentQuiz.classList.add('active')
	quizInfo.classList.add('active')

	quizInfo.textContent = 'Zaznacz odpowiedź'

	allInputs.forEach(input => {
		if (input.checked === false) {
			quizInfo.textContent = 'Zaznacz odpowiedź'
			nextBtn.disabled = true
		}
		allLabels.forEach(label => {
			label.addEventListener('click', () => {
				if (input.checked === false) {
					input.parentElement.classList.remove('selected')
				}
				input.addEventListener('click', () => {
					if (input.checked === true) {
						input.parentElement.classList.add('selected')
						quizInfo.textContent = ''
						nextBtn.disabled = false
					}
				})
			})
		})
	})
}

let currentStep = 1

const handleNextBtn = () => {
	currentStep++
	if (currentStep > formSteps.length) {
		currentStep = formSteps.length
	}

	handleProgressBar()
	if (boxFive.classList.contains('active-page')) {
		quizInfo.textContent = ''
	}
	check()
}

const handlePrevBtn = () => {
	currentStep--

	if (currentStep < 1) {
		currentStep = 1
	}
	console.log(currentStep)
	handleProgressBar()

	allInputs.forEach(input => {
		if (input.checked === true) {
			quizInfo.textContent = ''
			nextBtn.disabled = false
		}
		allLabels.forEach(label => {
			label.addEventListener('click', () => {
				if (input.checked === false) {
					input.parentElement.classList.remove('selected')
				}
				input.addEventListener('click', () => {
					if (input.checked === true) {
						input.parentElement.classList.add('selected')
						quizInfo.textContent = ''
						nextBtn.disabled = false
					}
				})
			})
		})
	})

	mattressBoxes.innerHTML = ''
}

const handleProgressBar = () => {
	formSteps.forEach((step, index) => {
		if (index < currentStep) {
			step.classList.add('active-step')
		} else {
			step.classList.remove('active-step')
		}
	})
	handleButtons()
	handleFormPage()
}

const handleButtons = () => {
	if (currentStep === 1) {
		prevBtn.disabled = true
	} else if (currentStep === formSteps.length) {
		nextBtn.disabled = true
	} else {
		prevBtn.disabled = false
		nextBtn.disabled = false
	}
}

const handleFormPage = () => {
	checkInput()
	formPages.forEach(page => {
		if (currentStep == page.dataset.number) {
			page.classList.add('active-page')
		} else {
			page.classList.remove('active-page')
		}
	})
}

const clearQuiz = () => {
	quiz.classList.remove('active')
	progress.classList.remove('active')
	introQuiz.classList.remove('hidden')
	contentQuiz.classList.remove('active')
	quizBtns.classList.remove('active')

	currentStep = 1
	formPages.forEach(page => {
		if (currentStep == page.dataset.number) {
			page.classList.add('active-page')
		} else {
			page.classList.remove('active-page')
		}
	})
	formSteps.forEach((step, index) => {
		if (index < currentStep) {
			step.classList.add('active-step')
		} else {
			step.classList.remove('active-step')
		}
	})
	allInputs.forEach(input => {
		input.checked = false
	})

	allLabels.forEach(label => {
		label.classList.remove('selected')
	})
	mattressBoxesTitle.textContent = 'Twój idealny materac to:'
	prevBtn.disabled = true
	nextBtn.disabled = false
	quizInfo.textContent = ''
	mattressBoxes.innerHTML = ''
}

const handleDropdown = () => {
	const dropdownMenuFirst = document.querySelector('.menu-item-177')
	const dropdownMenuSecond = document.querySelector('.menu-item-192')
	const dropdownMenuFourth = document.querySelector('.menu-item-6839')
	const submenuFirst = dropdownMenuFirst.querySelector('.sub-menu')
	const submenuSecond = dropdownMenuSecond.querySelector('.sub-menu')
	const submenuFourth = dropdownMenuFourth.querySelector('.sub-menu')
	const dropdownBtnFirst = dropdownMenuFirst.querySelector('.menu-item-btn')
	const dropdownBtnSecond = dropdownMenuSecond.querySelector('.menu-item-btn')
	const dropdownBtnFourth = dropdownMenuFourth.querySelector('.menu-item-btn')
	dropdownBtnFirst.addEventListener('click', () => {
		submenuFirst.classList.toggle('sub-menu-active')
	})
	dropdownBtnSecond.addEventListener('click', () => {
		submenuSecond.classList.toggle('sub-menu-active')
	})
	dropdownBtnFourth.addEventListener('click', () => {
		submenuFourth.classList.toggle('sub-menu-active')
	})
}

const handleMultiDropdown = () => {
	const ulMainMenu = document.querySelector('#menu-top-menu')
	const dropdownMenuItem = ulMainMenu.querySelector('#menu-item-186')
	const submenu = dropdownMenuItem.querySelector('.sub-menu')
	dropdownMenuItem.lastChild.addEventListener('click', () => {
		submenu.classList.toggle('sub-menu-active')
	})
}

const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
	tab.addEventListener('click', () => {
		const target = document.querySelector(tab.dataset.tabTarget)
		tabContents.forEach(tabContent => {
			tabContent.classList.remove('active')
		})
		tabs.forEach(tab => {
			tab.classList.remove('active')
		})
		tab.classList.add('active')
		target.classList.add('active')
	})
})

const toggleTab = () => {
	const allMenus = document.querySelectorAll('.fabric__tabs')
	allMenus.forEach(menu => {
		if (menu.classList.contains('show-tabs')) {
		} else {
			tabContents.forEach(tabContent => {
				tabContent.classList.remove('active')
			})
			tabContents.forEach(popup => {
				popup.classList.remove('active')
			})
		}
	})
}

document.querySelectorAll('.fabric__submenu-item').forEach((element, index) =>
	element.addEventListener('click', () => {
		document.querySelector('#fabric__tabs-' + (index + 1)).classList.toggle('show-tabs')
		toggleTab()
	})
)

fabricsSubmenuItems.forEach(fabricsSubmenuItem => {
	fabricsSubmenuItem.addEventListener('click', () => {
		fabricsSubmenuItem.nextElementSibling.classList.toggle('active')
		handlePopup()
	})
})

let currentColor = document.querySelector('.fabrics__popup-current')
let currentColorLink = document.getElementById('fabrics__popup-link')
let downloadFile = document.getElementById('fabrics__popup-download')
const vena = document.getElementById('box-first')
const charles = document.getElementById('box-second')
const rustiq = document.getElementById('box-third')

const handlePopup = () => {
	const popupOverlay = document.querySelector('.fabrics__popup-overlay')
	const popup = document.querySelector('.fabrics__popup')
	fabricsImages.forEach(fabricsImage => {
		if (fabricsImage.classList.contains('active')) {
			const imagesBoxs = fabricsImage.querySelectorAll('[data-group-images]')
			imagesBoxs.forEach(imageBox => {
				imageBox.addEventListener('click', () => {
					popup.classList.add('active')
					popupOverlay.classList.add('active')
					const colorsId = imageBox.dataset.groupImages
					const colors = document.getElementById(colorsId)
					colors.classList.add('active')

					currentColor.src = imageBox.lastElementChild.src
					let newSrc = imageBox.lastElementChild.src
					currentColorLink.href = newSrc

					const colorsTitle = document.querySelector('.fabrics__popup-title')
					let colorDescription = document.querySelector('.fabrics__popup-description')

					colorDescription.textContent = imageBox.lastElementChild.dataset.groupId

					if (imageBox.dataset.groupImages === 'group-1') {
						colorsTitle.textContent = 'Boss'
						downloadFile.href = '/wp-content/themes/azardi/assets/files/boss.pdf'
					}
					if (imageBox.dataset.groupImages === 'group-2') {
						colorsTitle.textContent = 'Magic Velvet'
						downloadFile.href =
							'/wp-content/themes/azardi/assets/files/magic_velvet_karta_techniczna_datasheet_compressed.pdf'
					}
					if (imageBox.dataset.groupImages === 'group-3') {
						colorsTitle.textContent = 'Monolith'
						downloadFile.href = '/wp-content/themes/azardi/assets/files/Monolith - karta produktowa.pdf'
					}
					if (imageBox.dataset.groupImages === 'group-4') {
						colorsTitle.textContent = 'Riviera'
						downloadFile.href = '/wp-content/themes/azardi/assets/files/Riviera - karta produktowa.pdf'
					}
					if (imageBox.dataset.groupImages === 'group-5') {
						colorsTitle.textContent = 'Ronda'
						downloadFile.href = '/wp-content/themes/azardi/assets/files/RONDA - KARTA PRODUKTOWA.pdf'
					}
					if (imageBox.dataset.groupImages === 'group-6') {
						colorsTitle.textContent = 'Solid'
						downloadFile.href = '/wp-content/themes/azardi/assets/files/Solid - karta produktowa.pdf'
					}
					if (imageBox.dataset.groupImages === 'group-7') {
						colorsTitle.textContent = 'Vena'

						downloadFile.removeAttribute('href', '')
						downloadFile.removeAttribute('target', '')
						downloadFile.addEventListener('click', () => {
							vena.classList.add('vena')
							charles.classList.remove('charles')
							rustiq.classList.remove('rustiq')
						})
					}
					if (imageBox.dataset.groupImages === 'group-8') {
						colorsTitle.textContent = 'Icon'
						downloadFile.href = '/wp-content/themes/azardi/assets/files/Icon - karta produktowa.pdf'
					}
					if (imageBox.dataset.groupImages === 'group-9') {
						colorsTitle.textContent = 'Milton New'
						downloadFile.href = '/wp-content/themes/azardi/assets/files/827ulotka-magic-home.pdf'
					}
					if (imageBox.dataset.groupImages === 'group-10') {
						colorsTitle.textContent = 'Piano'
						downloadFile.href = '/wp-content/themes/azardi/assets/files/827ulotka-magic-home.pdf'
					}
					if (imageBox.dataset.groupImages === 'group-11') {
						colorsTitle.textContent = 'Venus Velvet'
						downloadFile.href =
							'/wp-content/themes/azardi/assets/files/venus_velvet_karta_techniczna_datasheet_compressed.pdf'
					}
					if (imageBox.dataset.groupImages === 'group-12') {
						colorsTitle.textContent = 'Zoya'
						downloadFile.href = '/wp-content/themes/azardi/assets/files/827ulotka-magic-home.pdf'
					}
					if (imageBox.dataset.groupImages === 'group-13') {
						colorsTitle.textContent = 'Baloo'
						downloadFile.href = '/wp-content/themes/azardi/assets/files/baloo_karta_techniczna_datasheet_compressed.pdf'
					}
					if (imageBox.dataset.groupImages === 'group-14') {
						colorsTitle.textContent = 'Dream Velvet'
						downloadFile.href =
							'/wp-content/themes/azardi/assets/files/dream_velvet_karta_techniczna_datasheet_compressed.pdf'
					}
					if (imageBox.dataset.groupImages === 'group-15') {
						colorsTitle.textContent = 'Grace'
						downloadFile.href = '/wp-content/themes/azardi/assets/files/Grace - karta produktowa.pdf'
					}
					if (imageBox.dataset.groupImages === 'group-16') {
						colorsTitle.textContent = 'Maya'
						downloadFile.href = '/wp-content/themes/azardi/assets/files/827ulotka-magic-home.pdf'
					}
					if (imageBox.dataset.groupImages === 'group-17') {
						colorsTitle.textContent = 'Now Or Never'
						downloadFile.href = '/wp-content/themes/azardi/assets/files/Now or never - karta produktowa.pdf'
					}
					if (imageBox.dataset.groupImages === 'group-18') {
						colorsTitle.textContent = 'Presence'
						downloadFile.href = '/wp-content/themes/azardi/assets/files/Presence - karta produktowa.pdf'
					}
					if (imageBox.dataset.groupImages === 'group-19') {
						colorsTitle.textContent = 'Tulia'
						downloadFile.href = '/wp-content/themes/azardi/assets/files/827ulotka-magic-home.pdf'
					}
					if (imageBox.dataset.groupImages === 'group-20') {
						colorsTitle.textContent = 'Vera'
						downloadFile.href = '/wp-content/themes/azardi/assets/files/827ulotka-magic-home.pdf'
					}
					if (imageBox.dataset.groupImages === 'group-21') {
						colorsTitle.textContent = 'Bloom'
						downloadFile.href = '/wp-content/themes/azardi/assets/files/827ulotka-magic-home.pdf'
					}
					if (imageBox.dataset.groupImages === 'group-22') {
						colorsTitle.textContent = 'Charles'
						downloadFile.removeAttribute('href', '')
						downloadFile.removeAttribute('target', '')
						downloadFile.addEventListener('click', () => {
							charles.classList.add('charles')
							vena.classList.remove('vena')
							rustiq.classList.remove('rustiq')
						})
					}
					if (imageBox.dataset.groupImages === 'group-23') {
						colorsTitle.textContent = 'Angola'
						downloadFile.href = '/wp-content/themes/azardi/assets/files/827ulotka-magic-home.pdf'
					}
					if (imageBox.dataset.groupImages === 'group-24') {
						colorsTitle.textContent = 'Rustiq'
						downloadFile.removeAttribute('href', '')
						downloadFile.removeAttribute('target', '')
						downloadFile.addEventListener('click', () => {
							rustiq.classList.add('rustiq')
							vena.classList.remove('vena')
							charles.classList.remove('charles')
						})
					}

					const closeBtns = document.querySelectorAll('.fabrics__popup-close')
					closeBtns.forEach(closeBtn => {
						closeBtn.addEventListener('click', () => {
							popup.classList.remove('active')
							popupOverlay.classList.remove('active')
							colors.classList.remove('active')
							vena.classList.remove('vena')
							charles.classList.remove('charles')
							rustiq.classList.remove('rustiq')
						})
					})

					const popupColors = document.querySelectorAll('.fabrics__popup-color')
					popupColors.forEach(popupColor => {
						popupColor.addEventListener('click', () => {
							currentColor.src = popupColor.src
							let newSrcSecond = popupColor.src
							currentColorLink.href = newSrcSecond
							colorDescription.textContent = popupColor.dataset.groupId
						})
					})

					popupOverlay.addEventListener('click', () => {
						popup.classList.remove('active')
						popupOverlay.classList.remove('active')
						colors.classList.remove('active')
						vena.classList.remove('vena')
						charles.classList.remove('charles')
						rustiq.classList.remove('rustiq')
					})
				})
			})
			// console.log(imagesBoxs)
		} else {
			popup.classList.remove('active')
			popupOverlay.classList.remove('active')
		}
	})
}

handlePopup()

navBtn.addEventListener('click', handleNav)

createButton()
handleDropdown()
handleMultiDropdown()

window.addEventListener('DOMContentLoaded', () => {
	let slideIndex = 0
	showSlides()
	function showSlides() {
		let i
		let slides = document.getElementsByClassName('header__slide')
		for (i = 0; i < slides.length; i++) {
			slides[i].style.opacity = '0'
			slides[i].style.visibility = 'hidden'
		}
		slideIndex++
		if (slideIndex > slides.length) {
			slideIndex = 1
		}
		slides[slideIndex - 1].style.opacity = '1'
		slides[slideIndex - 1].style.visibility = 'visible'
		setTimeout(showSlides, 3000) // Change image every 2 seconds
	}
})
startQuiz.addEventListener('click', handleQuiz)
nextBtn.addEventListener('click', handleNextBtn)
prevBtn.addEventListener('click', handlePrevBtn)
returnQuiz.addEventListener('click', clearQuiz)

function checkInput() {
	if ((quizInfo.textContent = 'Zaznacz odpowiedź')) {
		console.log('true')
		nextBtn.disabled = true
	} else {
		nextBtn.disabled = false
	}
}

checkInput()

musicBtn.addEventListener('click', () => {
	const headerVideo = document.querySelector('.header-video__video')
	headerVideo.muted = !headerVideo.muted
	musicBtn.classList.toggle('active')
})

var swiperImages = new Swiper('.swiper-images', {
	pagination: {
		el: '.worth__slide-img-pagination',
	},
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	effect: 'fade',
})

var swiperTexts = new Swiper('.swiper-texts', {
	pagination: {
		el: '.worth__slide-texts-pagination',
	},
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	spaceBetween: 30,
})

var swiperProducts = new Swiper('.swiper__featured', {
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	pagination: {
		el: '.swiper__featured-pagination',
	},
	spaceBetween: 30,
	breakpoints: {
		568: {
			slidesPerView: 2,
		},
		768: {
			slidesPerView: 3,
		},
	},
})

window.addEventListener('load', function () {
	const promoPopup = document.querySelector('.promo')
	const promoOverlay = document.querySelector('.promo__overlay')
	setTimeout(function open(event) {
		promoPopup.classList.add('active')
		promoOverlay.classList.add('active')
	}, 1000)
})

const closePopupRaty = document.querySelector('.promo__close-raty')

window.addEventListener('load', function () {
	const promoPopupRaty = document.querySelector('.promo-raty')
	const promoOverlayRaty = document.querySelector('.promo__overlay-raty')
	setTimeout(function open(event) {
		promoPopupRaty.classList.add('active')
		promoOverlayRaty.classList.add('active')
	}, 2300)
})

closePopupRaty.addEventListener('click', () => {
	const promoPopupRaty = document.querySelector('.promo-raty')
	const promoOverlayRaty = document.querySelector('.promo__overlay-raty')

	promoPopupRaty.classList.remove('active')
	promoOverlayRaty.classList.remove('active')
})

closePopup.addEventListener('click', () => {
	const promoPopup = document.querySelector('.promo')
	const promoOverlay = document.querySelector('.promo__overlay')

	promoPopup.classList.remove('active')
	promoOverlay.classList.remove('active')
})
