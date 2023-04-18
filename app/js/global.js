const navBtn = document.querySelector('.nav__btn')
const menuItemDropdown = document.querySelectorAll('.menu-item-has-children')
const musicBtn = document.querySelector('.header-video__icon')
const fabricsSubmenu = document.querySelector('.fabrics__submenu')
const fabricsSubmenuItems = document.querySelectorAll('.fabrics__submenu-item')
const fabricsImages = document.querySelectorAll('.fabrics__images')

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
		// console.log(fabricsSubmenuItem)
		fabricsSubmenuItem.nextElementSibling.classList.toggle('active')
		handlePopup()
	})
})

let currentColor = document.querySelector('.fabrics__popup-current')

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

					console.log(colors)
					console.log(colorsId)

					currentColor.src = imageBox.lastElementChild.src

					const colorsTitle = document.querySelector('.fabrics__popup-title')
					const colorsDescription = document.querySelector('.fabrics__popup-description')
					console.log(colorsTitle)

					if (imageBox.dataset.groupImages === 'group-1') {
						colorsTitle.textContent = 'Boss'
					}
					if (imageBox.dataset.groupImages === 'group-2') {
						colorsTitle.textContent = 'Magic Velvet'
					}
					if (imageBox.dataset.groupImages === 'group-3') {
						colorsTitle.textContent = 'Monolith'
					}
					if (imageBox.dataset.groupImages === 'group-4') {
						colorsTitle.textContent = 'Riviera'
					}
					if (imageBox.dataset.groupImages === 'group-5') {
						colorsTitle.textContent = 'Ronda'
					}
					if (imageBox.dataset.groupImages === 'group-6') {
						colorsTitle.textContent = 'Solid'
					}
					if (imageBox.dataset.groupImages === 'group-7') {
						colorsTitle.textContent = 'Vena'
					}
					if (imageBox.dataset.groupImages === 'group-8') {
						colorsTitle.textContent = 'Icon'
					}
					if (imageBox.dataset.groupImages === 'group-9') {
						colorsTitle.textContent = 'Milton New'
					}
					if (imageBox.dataset.groupImages === 'group-10') {
						colorsTitle.textContent = 'Piano'
					}
					if (imageBox.dataset.groupImages === 'group-11') {
						colorsTitle.textContent = 'Venus Velvet'
					}
					if (imageBox.dataset.groupImages === 'group-12') {
						colorsTitle.textContent = 'Zoya'
					}
					if (imageBox.dataset.groupImages === 'group-13') {
						colorsTitle.textContent = 'Baloo'
					}
					if (imageBox.dataset.groupImages === 'group-14') {
						colorsTitle.textContent = 'Dream Velvet'
					}
					if (imageBox.dataset.groupImages === 'group-15') {
						colorsTitle.textContent = 'Grace'
					}
					if (imageBox.dataset.groupImages === 'group-16') {
						colorsTitle.textContent = 'Maya'
					}
					if (imageBox.dataset.groupImages === 'group-17') {
						colorsTitle.textContent = 'Now Or Never'
					}
					if (imageBox.dataset.groupImages === 'group-18') {
						colorsTitle.textContent = 'Presence'
					}
					if (imageBox.dataset.groupImages === 'group-19') {
						colorsTitle.textContent = 'Tulia'
					}
					if (imageBox.dataset.groupImages === 'group-20') {
						colorsTitle.textContent = 'Vera'
					}
					if (imageBox.dataset.groupImages === 'group-21') {
						colorsTitle.textContent = 'Bloom'
					}
					if (imageBox.dataset.groupImages === 'group-22') {
						colorsTitle.textContent = 'Charles'
					}
					if (imageBox.dataset.groupImages === 'group-23') {
						colorsTitle.textContent = 'Angola'
					}
					if (imageBox.dataset.groupImages === 'group-24') {
						colorsTitle.textContent = 'Rustiq'
					}

					const closeBtns = document.querySelectorAll('.fabrics__popup-close')
					closeBtns.forEach(closeBtn => {
						closeBtn.addEventListener('click', () => {
							popup.classList.remove('active')
							popupOverlay.classList.remove('active')
							colors.classList.remove('active')
						})
					})

					const popupColors = document.querySelectorAll('.fabrics__popup-color')
					popupColors.forEach(popupColor => {
						popupColor.addEventListener('click', () => {
							currentColor.src = popupColor.src
						})
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

musicBtn.addEventListener('click', () => {
	const headerVideo = document.querySelector('.header-video__video')
	headerVideo.muted = !headerVideo.muted
	musicBtn.classList.toggle('active')
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
