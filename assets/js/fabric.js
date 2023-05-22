const fabricSelect = document.querySelector('#pa_tkanina')
const fabricModal = document.querySelector('.fabric')
const fabricImages = document.querySelectorAll('.fabric__image')
const fabricHiddenInput = document.querySelector('#wdm_name')
const resetVariations = document.querySelector('.reset_variations')
const containerSelect = document.querySelector('#pa_pojemnik')
const frameSelect = document.querySelector('#pa_stelaz')
const closeBtn = document.querySelector('.fabric__close')

let isSafari =
	navigator.vendor &&
	navigator.vendor.indexOf('Apple') > -1 &&
	navigator.userAgent &&
	navigator.userAgent.indexOf('CriOS') == -1 &&
	navigator.userAgent.indexOf('FxiOS') == -1

// if (containerSelect && frameSelect) {
// 	frameSelect.value = ''
// 	fabricSelect.value = ''
// 	containerSelect.value = ''

// 	containerSelect.addEventListener('change', () => {
// 		if (containerSelect.value === 'dwupozycyjny' || containerSelect.value === 'zwykly') {
// 			frameSelect.value = 'elastyczny'
// 			frameSelect.setAttribute('disabled', 'disabled')
// 		} else {
// 			frameSelect.value = ''
// 			frameSelect.removeAttribute('disabled')
// 		}
// 	})
// }

if (isSafari) {
	fabricSelect.addEventListener('change', () => {
		fabricSelect.setAttribute('disabled', 'disabled')
		fabricModal.classList.toggle('fabric--hidden')
	})
} else {
	fabricSelect.addEventListener('click', () => {
		fabricSelect.setAttribute('disabled', 'disabled')
		fabricModal.classList.toggle('fabric--hidden')
	})
}

fabricImages.forEach(image =>
	image.addEventListener('click', () => {
		const currentFabric = document.querySelector('.fabric__current-img')
		const fabricTitle = document.querySelector('.product__fabrics-current')
		const filename = image.src.replace(/^.*[\\\/]/, '')
		const imageFabricGroup = image.getAttribute('data-fabric-group')
		// fabricModal.classList.toggle('fabric--hidden')
		fabricHiddenInput.value = filename.replace(/\.[^/.]+$/, '')
		fabricSelect.value = imageFabricGroup
		fabricSelect.removeAttribute('disabled')
		document.querySelector('.variations_form').dispatchEvent(new CustomEvent('check_variations'))
		currentFabric.src = image.src
		fabricTitle.textContent = filename.replace(/\.[^/.]+$/, '')
	})
)

// const tabs = document.querySelectorAll('[data-tab-target]')
// const tabContents = document.querySelectorAll('[data-tab-content]')

// tabs.forEach(tab => {
// 	tab.addEventListener('click', () => {
// 		const target = document.querySelector(tab.dataset.tabTarget)
// 		tabContents.forEach(tabContent => {
// 			tabContent.classList.remove('active')
// 		})
// 		tabs.forEach(tab => {
// 			tab.classList.remove('active')
// 		})
// 		tab.classList.add('active')
// 		target.classList.add('active')
// 	})
// })

// const toggleTab = () => {
// 	const allMenus = document.querySelectorAll('.fabric__tabs')
// 	allMenus.forEach(menu => {
// 		if (menu.classList.contains('show-tabs')) {
// 		} else {
// 			tabContents.forEach(tabContent => {
// 				tabContent.classList.remove('active')
// 			})
// 		}
// 	})
// }

// document.querySelectorAll('.fabric__submenu-item').forEach((element, index) =>
// 	element.addEventListener('click', () => {
// 		document.querySelector('#fabric__tabs-' + (index + 1)).classList.toggle('show-tabs')
// 		toggleTab()
// 	})
// )

closeBtn.addEventListener('click', () => {
	fabricModal.classList.add('fabric--hidden')
	if (fabricModal.classList.contains('fabric--hidden')) {
		fabricSelect.removeAttribute('disabled')
	}
})
