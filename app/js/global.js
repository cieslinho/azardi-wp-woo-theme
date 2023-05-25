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
		console.log('combo-1')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/magnicool-10-soft/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/MAGNICOOL-10-SOFT-1024x719.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Magnicool Soft</p>
		</a>
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>
	`
	} else if (arrayEquals(array2, checkedInputs)) {
		console.log('combo-2')
		mattressBoxes.innerHTML = ` 
		<a href="/produkt/magnicool-10-soft/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2023/02/MAGNICOOL-10-SOFT-1024x719.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Magnicool Soft</p>
		</a>
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>
		<a href="/produkt/materac-piankowy-azardi-vitale-armonioso/" class="mattress__link">
		<img class="mattress__img"
			src="https://azardi.pl/wp-content/uploads/2022/12/1495-Materac-piankowy-AZARDI-Vitale-Armonioso.jpg"
			alt="Materac Azardi">
		<p class="mattress__name">Vitale Armonioso</p>
		</a>
	`
	} else {
		console.log('test')
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

window.addEventListener('load', function () {
	const promoPopup = document.querySelector('.promo')
	const promoOverlay = document.querySelector('.promo__overlay')
	setTimeout(function open(event) {
		promoPopup.classList.add('active')
		promoOverlay.classList.add('active')
	}, 1000)
})

closePopup.addEventListener('click', () => {
	const promoPopup = document.querySelector('.promo')
	const promoOverlay = document.querySelector('.promo__overlay')

	promoPopup.classList.remove('active')
	promoOverlay.classList.remove('active')
})

/*!
 * Lightbox v2.11.4
 * by Lokesh Dhakar
 *
 * More info:
 * http://lokeshdhakar.com/projects/lightbox2/
 *
 * Copyright Lokesh Dhakar
 * Released under the MIT license
 * https://github.com/lokesh/lightbox2/blob/master/LICENSE
 *
 * @preserve
 */

// Uses Node, AMD or browser globals to create a module.
;(function (root, factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as an anonymous module.
		define(['jquery'], factory)
	} else if (typeof exports === 'object') {
		// Node. Does not work with strict CommonJS, but
		// only CommonJS-like environments that support module.exports,
		// like Node.
		module.exports = factory(require('jquery'))
	} else {
		// Browser globals (root is window)
		root.lightbox = factory(root.jQuery)
	}
})(this, function ($) {
	function Lightbox(options) {
		this.album = []
		this.currentImageIndex = void 0
		this.init()

		// options
		this.options = $.extend({}, this.constructor.defaults)
		this.option(options)
	}

	// Descriptions of all options available on the demo site:
	// http://lokeshdhakar.com/projects/lightbox2/index.html#options
	Lightbox.defaults = {
		albumLabel: 'Image %1 of %2',
		alwaysShowNavOnTouchDevices: false,
		fadeDuration: 600,
		fitImagesInViewport: true,
		imageFadeDuration: 600,
		// maxWidth: 800,
		// maxHeight: 600,
		positionFromTop: 50,
		resizeDuration: 700,
		showImageNumberLabel: true,
		wrapAround: false,
		disableScrolling: false,
		/*
    Sanitize Title
    If the caption data is trusted, for example you are hardcoding it in, then leave this to false.
    This will free you to add html tags, such as links, in the caption.

    If the caption data is user submitted or from some other untrusted source, then set this to true
    to prevent xss and other injection attacks.
     */
		sanitizeTitle: false,
	}

	Lightbox.prototype.option = function (options) {
		$.extend(this.options, options)
	}

	Lightbox.prototype.imageCountLabel = function (currentImageNum, totalImages) {
		return this.options.albumLabel.replace(/%1/g, currentImageNum).replace(/%2/g, totalImages)
	}

	Lightbox.prototype.init = function () {
		var self = this
		// Both enable and build methods require the body tag to be in the DOM.
		$(document).ready(function () {
			self.enable()
			self.build()
		})
	}

	// Loop through anchors and areamaps looking for either data-lightbox attributes or rel attributes
	// that contain 'lightbox'. When these are clicked, start lightbox.
	Lightbox.prototype.enable = function () {
		var self = this
		$('body').on(
			'click',
			'a[rel^=lightbox], area[rel^=lightbox], a[data-lightbox], area[data-lightbox]',
			function (event) {
				self.start($(event.currentTarget))
				return false
			}
		)
	}

	// Build html for the lightbox and the overlay.
	// Attach event handlers to the new DOM elements. click click click
	Lightbox.prototype.build = function () {
		if ($('#lightbox').length > 0) {
			return
		}

		var self = this

		// The two root notes generated, #lightboxOverlay and #lightbox are given
		// tabindex attrs so they are focusable. We attach our keyboard event
		// listeners to these two elements, and not the document. Clicking anywhere
		// while Lightbox is opened will keep the focus on or inside one of these
		// two elements.
		//
		// We do this so we can prevent propogation of the Esc keypress when
		// Lightbox is open. This prevents it from intefering with other components
		// on the page below.
		//
		// Github issue: https://github.com/lokesh/lightbox2/issues/663
		$(
			'<div id="lightboxOverlay" tabindex="-1" class="lightboxOverlay"></div><div id="lightbox" tabindex="-1" class="lightbox"><div class="lb-outerContainer"><div class="lb-container"><img class="lb-image" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" alt=""/><div class="lb-nav"><a class="lb-prev" role="button" tabindex="0" aria-label="Previous image" href="" ></a><a class="lb-next" role="button" tabindex="0" aria-label="Next image" href="" ></a></div><div class="lb-loader"><a class="lb-cancel" role="button" tabindex="0"></a></div></div></div><div class="lb-dataContainer"><div class="lb-data"><div class="lb-details"><span class="lb-caption"></span><span class="lb-number"></span></div><div class="lb-closeContainer"><a class="lb-close" role="button" tabindex="0"></a></div></div></div></div>'
		).appendTo($('body'))

		// Cache jQuery objects
		this.$lightbox = $('#lightbox')
		this.$overlay = $('#lightboxOverlay')
		this.$outerContainer = this.$lightbox.find('.lb-outerContainer')
		this.$container = this.$lightbox.find('.lb-container')
		this.$image = this.$lightbox.find('.lb-image')
		this.$nav = this.$lightbox.find('.lb-nav')

		// Store css values for future lookup
		this.containerPadding = {
			top: parseInt(this.$container.css('padding-top'), 10),
			right: parseInt(this.$container.css('padding-right'), 10),
			bottom: parseInt(this.$container.css('padding-bottom'), 10),
			left: parseInt(this.$container.css('padding-left'), 10),
		}

		this.imageBorderWidth = {
			top: parseInt(this.$image.css('border-top-width'), 10),
			right: parseInt(this.$image.css('border-right-width'), 10),
			bottom: parseInt(this.$image.css('border-bottom-width'), 10),
			left: parseInt(this.$image.css('border-left-width'), 10),
		}

		// Attach event handlers to the newly minted DOM elements
		this.$overlay.hide().on('click', function () {
			self.end()
			return false
		})

		this.$lightbox.hide().on('click', function (event) {
			if ($(event.target).attr('id') === 'lightbox') {
				self.end()
			}
		})

		this.$outerContainer.on('click', function (event) {
			if ($(event.target).attr('id') === 'lightbox') {
				self.end()
			}
			return false
		})

		this.$lightbox.find('.lb-prev').on('click', function () {
			if (self.currentImageIndex === 0) {
				self.changeImage(self.album.length - 1)
			} else {
				self.changeImage(self.currentImageIndex - 1)
			}
			return false
		})

		this.$lightbox.find('.lb-next').on('click', function () {
			if (self.currentImageIndex === self.album.length - 1) {
				self.changeImage(0)
			} else {
				self.changeImage(self.currentImageIndex + 1)
			}
			return false
		})

		/*
      Show context menu for image on right-click

      There is a div containing the navigation that spans the entire image and lives above of it. If
      you right-click, you are right clicking this div and not the image. This prevents users from
      saving the image or using other context menu actions with the image.

      To fix this, when we detect the right mouse button is pressed down, but not yet clicked, we
      set pointer-events to none on the nav div. This is so that the upcoming right-click event on
      the next mouseup will bubble down to the image. Once the right-click/contextmenu event occurs
      we set the pointer events back to auto for the nav div so it can capture hover and left-click
      events as usual.
     */
		this.$nav.on('mousedown', function (event) {
			if (event.which === 3) {
				self.$nav.css('pointer-events', 'none')

				self.$lightbox.one('contextmenu', function () {
					setTimeout(
						function () {
							this.$nav.css('pointer-events', 'auto')
						}.bind(self),
						0
					)
				})
			}
		})

		this.$lightbox.find('.lb-loader, .lb-close').on('click keyup', function (e) {
			// If mouse click OR 'enter' or 'space' keypress, close LB
			if (e.type === 'click' || (e.type === 'keyup' && (e.which === 13 || e.which === 32))) {
				self.end()
				return false
			}
		})
	}

	// Show overlay and lightbox. If the image is part of a set, add siblings to album array.
	Lightbox.prototype.start = function ($link) {
		var self = this
		var $window = $(window)

		$window.on('resize', $.proxy(this.sizeOverlay, this))

		this.sizeOverlay()

		this.album = []
		var imageNumber = 0

		function addToAlbum($link) {
			self.album.push({
				alt: $link.attr('data-alt'),
				link: $link.attr('href'),
				title: $link.attr('data-title') || $link.attr('title'),
			})
		}

		// Support both data-lightbox attribute and rel attribute implementations
		var dataLightboxValue = $link.attr('data-lightbox')
		var $links

		if (dataLightboxValue) {
			$links = $($link.prop('tagName') + '[data-lightbox="' + dataLightboxValue + '"]')
			for (var i = 0; i < $links.length; i = ++i) {
				addToAlbum($($links[i]))
				if ($links[i] === $link[0]) {
					imageNumber = i
				}
			}
		} else {
			if ($link.attr('rel') === 'lightbox') {
				// If image is not part of a set
				addToAlbum($link)
			} else {
				// If image is part of a set
				$links = $($link.prop('tagName') + '[rel="' + $link.attr('rel') + '"]')
				for (var j = 0; j < $links.length; j = ++j) {
					addToAlbum($($links[j]))
					if ($links[j] === $link[0]) {
						imageNumber = j
					}
				}
			}
		}

		// Position Lightbox
		var top = $window.scrollTop() + this.options.positionFromTop
		var left = $window.scrollLeft()
		this.$lightbox
			.css({
				top: top + 'px',
				left: left + 'px',
			})
			.fadeIn(this.options.fadeDuration)

		// Disable scrolling of the page while open
		if (this.options.disableScrolling) {
			$('body').addClass('lb-disable-scrolling')
		}

		this.changeImage(imageNumber)
	}

	// Hide most UI elements in preparation for the animated resizing of the lightbox.
	Lightbox.prototype.changeImage = function (imageNumber) {
		var self = this
		var filename = this.album[imageNumber].link
		var filetype = filename.split('.').slice(-1)[0]
		var $image = this.$lightbox.find('.lb-image')

		// Disable keyboard nav during transitions
		this.disableKeyboardNav()

		// Show loading state
		this.$overlay.fadeIn(this.options.fadeDuration)
		$('.lb-loader').fadeIn('slow')
		this.$lightbox.find('.lb-image, .lb-nav, .lb-prev, .lb-next, .lb-dataContainer, .lb-numbers, .lb-caption').hide()
		this.$outerContainer.addClass('animating')

		// When image to show is preloaded, we send the width and height to sizeContainer()
		var preloader = new Image()
		preloader.onload = function () {
			var $preloader
			var imageHeight
			var imageWidth
			var maxImageHeight
			var maxImageWidth
			var windowHeight
			var windowWidth

			$image.attr({
				alt: self.album[imageNumber].alt,
				src: filename,
			})

			$preloader = $(preloader)

			$image.width(preloader.width)
			$image.height(preloader.height)

			var aspectRatio = preloader.width / preloader.height

			windowWidth = $(window).width()
			windowHeight = $(window).height()

			// Calculate the max image dimensions for the current viewport.
			// Take into account the border around the image and an additional 10px gutter on each side.
			maxImageWidth =
				windowWidth -
				self.containerPadding.left -
				self.containerPadding.right -
				self.imageBorderWidth.left -
				self.imageBorderWidth.right -
				20
			maxImageHeight =
				windowHeight -
				self.containerPadding.top -
				self.containerPadding.bottom -
				self.imageBorderWidth.top -
				self.imageBorderWidth.bottom -
				self.options.positionFromTop -
				70

			/*
      Since many SVGs have small intrinsic dimensions, but they support scaling
      up without quality loss because of their vector format, max out their
      size inside the viewport.
      */
			if (filetype === 'svg') {
				if (aspectRatio >= 1) {
					imageWidth = maxImageWidth
					imageHeight = parseInt(maxImageWidth / aspectRatio, 10)
				} else {
					imageWidth = parseInt(maxImageHeight / aspectRatio, 10)
					imageHeight = maxImageHeight
				}
				$image.width(imageWidth)
				$image.height(imageHeight)
			} else {
				// Fit image inside the viewport.
				if (self.options.fitImagesInViewport) {
					// Check if image size is larger then maxWidth|maxHeight in settings
					if (self.options.maxWidth && self.options.maxWidth < maxImageWidth) {
						maxImageWidth = self.options.maxWidth
					}
					if (self.options.maxHeight && self.options.maxHeight < maxImageHeight) {
						maxImageHeight = self.options.maxHeight
					}
				} else {
					maxImageWidth = self.options.maxWidth || preloader.width || maxImageWidth
					maxImageHeight = self.options.maxHeight || preloader.height || maxImageHeight
				}

				// Is the current image's width or height is greater than the maxImageWidth or maxImageHeight
				// option than we need to size down while maintaining the aspect ratio.
				if (preloader.width > maxImageWidth || preloader.height > maxImageHeight) {
					if (preloader.width / maxImageWidth > preloader.height / maxImageHeight) {
						imageWidth = maxImageWidth
						imageHeight = parseInt(preloader.height / (preloader.width / imageWidth), 10)
						$image.width(imageWidth)
						$image.height(imageHeight)
					} else {
						imageHeight = maxImageHeight
						imageWidth = parseInt(preloader.width / (preloader.height / imageHeight), 10)
						$image.width(imageWidth)
						$image.height(imageHeight)
					}
				}
			}

			self.sizeContainer($image.width(), $image.height())
		}

		// Preload image before showing
		preloader.src = this.album[imageNumber].link
		this.currentImageIndex = imageNumber
	}

	// Stretch overlay to fit the viewport
	Lightbox.prototype.sizeOverlay = function () {
		var self = this
		/*
    We use a setTimeout 0 to pause JS execution and let the rendering catch-up.
    Why do this? If the `disableScrolling` option is set to true, a class is added to the body
    tag that disables scrolling and hides the scrollbar. We want to make sure the scrollbar is
    hidden before we measure the document width, as the presence of the scrollbar will affect the
    number.
    */
		setTimeout(function () {
			self.$overlay.width($(document).width()).height($(document).height())
		}, 0)
	}

	// Animate the size of the lightbox to fit the image we are showing
	// This method also shows the the image.
	Lightbox.prototype.sizeContainer = function (imageWidth, imageHeight) {
		var self = this

		var oldWidth = this.$outerContainer.outerWidth()
		var oldHeight = this.$outerContainer.outerHeight()
		var newWidth =
			imageWidth +
			this.containerPadding.left +
			this.containerPadding.right +
			this.imageBorderWidth.left +
			this.imageBorderWidth.right
		var newHeight =
			imageHeight +
			this.containerPadding.top +
			this.containerPadding.bottom +
			this.imageBorderWidth.top +
			this.imageBorderWidth.bottom

		function postResize() {
			self.$lightbox.find('.lb-dataContainer').width(newWidth)
			self.$lightbox.find('.lb-prevLink').height(newHeight)
			self.$lightbox.find('.lb-nextLink').height(newHeight)

			// Set focus on one of the two root nodes so keyboard events are captured.
			self.$overlay.trigger('focus')

			self.showImage()
		}

		if (oldWidth !== newWidth || oldHeight !== newHeight) {
			this.$outerContainer.animate(
				{
					width: newWidth,
					height: newHeight,
				},
				this.options.resizeDuration,
				'swing',
				function () {
					postResize()
				}
			)
		} else {
			postResize()
		}
	}

	// Display the image and its details and begin preload neighboring images.
	Lightbox.prototype.showImage = function () {
		this.$lightbox.find('.lb-loader').stop(true).hide()
		this.$lightbox.find('.lb-image').fadeIn(this.options.imageFadeDuration)

		this.updateNav()
		this.updateDetails()
		this.preloadNeighboringImages()
		this.enableKeyboardNav()
	}

	// Display previous and next navigation if appropriate.
	Lightbox.prototype.updateNav = function () {
		// Check to see if the browser supports touch events. If so, we take the conservative approach
		// and assume that mouse hover events are not supported and always show prev/next navigation
		// arrows in image sets.
		var alwaysShowNav = false
		try {
			document.createEvent('TouchEvent')
			alwaysShowNav = this.options.alwaysShowNavOnTouchDevices ? true : false
		} catch (e) {}

		this.$lightbox.find('.lb-nav').show()

		if (this.album.length > 1) {
			if (this.options.wrapAround) {
				if (alwaysShowNav) {
					this.$lightbox.find('.lb-prev, .lb-next').css('opacity', '1')
				}
				this.$lightbox.find('.lb-prev, .lb-next').show()
			} else {
				if (this.currentImageIndex > 0) {
					this.$lightbox.find('.lb-prev').show()
					if (alwaysShowNav) {
						this.$lightbox.find('.lb-prev').css('opacity', '1')
					}
				}
				if (this.currentImageIndex < this.album.length - 1) {
					this.$lightbox.find('.lb-next').show()
					if (alwaysShowNav) {
						this.$lightbox.find('.lb-next').css('opacity', '1')
					}
				}
			}
		}
	}

	// Display caption, image number, and closing button.
	Lightbox.prototype.updateDetails = function () {
		var self = this

		// Enable anchor clicks in the injected caption html.
		// Thanks Nate Wright for the fix. @https://github.com/NateWr
		if (
			typeof this.album[this.currentImageIndex].title !== 'undefined' &&
			this.album[this.currentImageIndex].title !== ''
		) {
			var $caption = this.$lightbox.find('.lb-caption')
			if (this.options.sanitizeTitle) {
				$caption.text(this.album[this.currentImageIndex].title)
			} else {
				$caption.html(this.album[this.currentImageIndex].title)
			}
			$caption.fadeIn('fast')
		}

		if (this.album.length > 1 && this.options.showImageNumberLabel) {
			var labelText = this.imageCountLabel(this.currentImageIndex + 1, this.album.length)
			this.$lightbox.find('.lb-number').text(labelText).fadeIn('fast')
		} else {
			this.$lightbox.find('.lb-number').hide()
		}

		this.$outerContainer.removeClass('animating')

		this.$lightbox.find('.lb-dataContainer').fadeIn(this.options.resizeDuration, function () {
			return self.sizeOverlay()
		})
	}

	// Preload previous and next images in set.
	Lightbox.prototype.preloadNeighboringImages = function () {
		if (this.album.length > this.currentImageIndex + 1) {
			var preloadNext = new Image()
			preloadNext.src = this.album[this.currentImageIndex + 1].link
		}
		if (this.currentImageIndex > 0) {
			var preloadPrev = new Image()
			preloadPrev.src = this.album[this.currentImageIndex - 1].link
		}
	}

	Lightbox.prototype.enableKeyboardNav = function () {
		this.$lightbox.on('keyup.keyboard', $.proxy(this.keyboardAction, this))
		this.$overlay.on('keyup.keyboard', $.proxy(this.keyboardAction, this))
	}

	Lightbox.prototype.disableKeyboardNav = function () {
		this.$lightbox.off('.keyboard')
		this.$overlay.off('.keyboard')
	}

	Lightbox.prototype.keyboardAction = function (event) {
		var KEYCODE_ESC = 27
		var KEYCODE_LEFTARROW = 37
		var KEYCODE_RIGHTARROW = 39

		var keycode = event.keyCode
		if (keycode === KEYCODE_ESC) {
			// Prevent bubbling so as to not affect other components on the page.
			event.stopPropagation()
			this.end()
		} else if (keycode === KEYCODE_LEFTARROW) {
			if (this.currentImageIndex !== 0) {
				this.changeImage(this.currentImageIndex - 1)
			} else if (this.options.wrapAround && this.album.length > 1) {
				this.changeImage(this.album.length - 1)
			}
		} else if (keycode === KEYCODE_RIGHTARROW) {
			if (this.currentImageIndex !== this.album.length - 1) {
				this.changeImage(this.currentImageIndex + 1)
			} else if (this.options.wrapAround && this.album.length > 1) {
				this.changeImage(0)
			}
		}
	}

	// Closing time. :-(
	Lightbox.prototype.end = function () {
		this.disableKeyboardNav()
		$(window).off('resize', this.sizeOverlay)
		this.$lightbox.fadeOut(this.options.fadeDuration)
		this.$overlay.fadeOut(this.options.fadeDuration)

		if (this.options.disableScrolling) {
			$('body').removeClass('lb-disable-scrolling')
		}
	}

	return new Lightbox()
})
