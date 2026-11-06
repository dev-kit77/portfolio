//init module setup
export { setLights, switchLights }

/**
 * Method to set the light/dark state of the site. sets the HTML attribute and then stores the state
 * @param {boolean} setting boolean value representing true for light, false for dark
 */
function setLights(setting) {
	if (setting) {
		//set theme
		document.documentElement.setAttribute('data-bs-theme', 'light')

		//store selection
		localStorage.setItem('lights', setting)

		//update colour classes
		$('.bg-success-subtle').removeClass('bg-success-subtle').addClass('bg-success')
		$('.bg-danger-subtle').removeClass('bg-danger-subtle').addClass('bg-danger')
		$('.bg-warning-subtle').removeClass('bg-warning-subtle').addClass('bg-warning')
		$('.bg-info-subtle').removeClass('bg-info-subtle').addClass('bg-info')
		$('.bg-light').removeClass('bg-light').addClass('bg-dark')
		$('.bg-light-subtle').removeClass('bg-light-subtle').addClass('bg-dark-subtle')
		$('.text-light').removeClass('text-light').addClass('text-dark')
	} else {
		//set theme
		document.documentElement.setAttribute('data-bs-theme', 'dark')

		//store selection
		localStorage.setItem('lights', setting)

		//update colour classes
		$('.bg-success').removeClass('bg-success').addClass('bg-success-subtle')
		$('.bg-danger').removeClass('bg-danger').addClass('bg-danger-subtle')
		$('.bg-warning').removeClass('bg-warning').addClass('bg-warning-subtle')
		$('.bg-info').removeClass('bg-info').addClass('bg-info-subtle')
		$('.bg-light').removeClass('bg-light').addClass('bg-dark')
		$('.bg-dark-subtle').removeClass('bg-dark-subtle').addClass('bg-light-subtle')
		$('.text-dark').removeClass('text-dark').addClass('text-light')
	}
}

/**
 * Method to switch the current light/dark state of the site.
 */
function switchLights() {
	if (document.documentElement.getAttribute('data-bs-theme') == 'dark') {
		setLights(true)
	} else if (document.documentElement.getAttribute('data-bs-theme') == 'light') {
		setLights(false)
	}
}
