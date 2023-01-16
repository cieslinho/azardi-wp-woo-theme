const navBtn = document.querySelector('.nav__btn')
const navItem = document.querySelectorAll('.menu-item')

const handleNav = () => {
	const navMenu = document.querySelector('.nav__list')
	const navBtnBars = document.querySelector('.nav__btn-bars')
	const navOverlay = document.querySelector('.nav__overlay')
	navMenu.classList.toggle('list--active')
	if (navMenu.classList.contains('list--active')) {
		console.log('true')
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

const handleSlider = () => {
	let slideIndex = 0
	showSlides()
	function showSlides() {
		let i
		let slides = document.getElementsByClassName('header__slide')
		for (i = 0; i < slides.length; i++) {
			slides[i].style.opacity = '0'
		}
		slideIndex++
		if (slideIndex > slides.length) {
			slideIndex = 1
		}
		slides[slideIndex - 1].style.opacity = '1'
		setTimeout(showSlides, 3000) // Change image every 2 seconds
	}
}
handleSlider()
navBtn.addEventListener('click', handleNav)
