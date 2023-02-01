const navBtn = document.querySelector('.nav__btn')
const navItem = document.querySelectorAll('.menu-item')
const menuItemDropdown = document.querySelectorAll('.menu-item-has-children')

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

const handleDropdown = () => {
	const dropdownMenuFirst = document.querySelector('.menu-item-177')
	const dropdownMenuSecond = document.querySelector('.menu-item-186')
	const dropdownMenuThird = document.querySelector('.menu-item-365')
	const submenuFirst = dropdownMenuFirst.querySelector('.sub-menu')
	const submenuSecond = dropdownMenuSecond.querySelector('.sub-menu')
	const submenuThird = dropdownMenuThird.querySelector('.sub-menu')
	const dropdownBtnFirst = dropdownMenuFirst.querySelector('.menu-item-btn')
	const dropdownBtnSecond = dropdownMenuSecond.querySelector('.menu-item-btn')
	const dropdownBtnThird = dropdownMenuThird.querySelector('.menu-item-btn')
	dropdownBtnFirst.addEventListener('click', () => {
		submenuFirst.classList.toggle('sub-menu-active')
	})
	dropdownBtnSecond.addEventListener('click', () => {
		submenuSecond.classList.toggle('sub-menu-active')
	})
	dropdownBtnThird.addEventListener('click', () => {
		submenuThird.classList.toggle('sub-menu-active')
	})
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

createButton()
handleDropdown()
navBtn.addEventListener('click', handleNav)
handleSlider()
