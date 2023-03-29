const navBtn = document.querySelector('.nav__btn')
const navItem = document.querySelectorAll('.menu-item')
const menuItemDropdown = document.querySelectorAll('.menu-item-has-children')
const fabricsPopupBtnFirst = document.querySelector('.fabrics__specification-desktop-first')
const fabricsPopupBtnFirstMobile = document.querySelector('.fabrics__specification-mobile-first')
const fabricsPopups = document.querySelectorAll('.fabrics__popup')
const fabricsPopupFirst = document.querySelector('.fabrics__popup-first')
const fabricsPopupBtnSecond = document.querySelector('.fabrics__specification-desktop-second')
const fabricsPopupBtnSecondMobile = document.querySelector('.fabrics__specification-mobile-second')
const fabricsPopupSecond = document.querySelector('.fabrics__popup-second')
const fabricsPopupBtnThird = document.querySelector('.fabrics__specification-desktop-third')
const fabricsPopupBtnThirdMobile = document.querySelector('.fabrics__specification-mobile-third')
const fabricsPopupThird = document.querySelector('.fabrics__popup-third')

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

const handleSlider = () => {
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
			fabricsPopups.forEach(popup => {
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

const handleFabricsPopup = () => {
	fabricsPopupBtnFirst.addEventListener('click', () => {
		fabricsPopupFirst.classList.toggle('active')
	})
	fabricsPopupBtnFirstMobile.addEventListener('click', () => {
		fabricsPopupFirst.classList.toggle('active')
	})
	fabricsPopupBtnSecond.addEventListener('click', () => {
		fabricsPopupSecond.classList.toggle('active')
	})
	fabricsPopupBtnSecondMobile.addEventListener('click', () => {
		fabricsPopupSecond.classList.toggle('active')
	})
	fabricsPopupBtnThird.addEventListener('click', () => {
		fabricsPopupThird.classList.toggle('active')
	})
	fabricsPopupBtnThirdMobile.addEventListener('click', () => {
		fabricsPopupThird.classList.toggle('active')
	})
}

createButton()
handleDropdown()
handleMultiDropdown()
navBtn.addEventListener('click', handleNav)
handleSlider()
handleFabricsPopup()
