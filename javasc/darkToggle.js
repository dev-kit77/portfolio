//init module setup
export { setLights, switchLights, syncToggleUI }

/**
 * Method to set the light/dark state of the site. sets the HTML attribute and then stores the state
 * @param {boolean} setting boolean value representing true for light, false for dark
 * @param {{ persist?: boolean }} [options] persist controls whether the choice is written to storage
 */
function setLights(setting, { persist = true } = {}) {
	const theme = setting ? 'light' : 'dark'

	//set theme
	document.documentElement.setAttribute('data-bs-theme', theme)

	//store selection, ignoring failures (e.g. storage blocked in private browsing)
	if (persist) {
		try {
			localStorage.setItem('lights', setting)
		} catch {}
	}

	//update toggle buttons to match
	syncToggleUI(theme)
}

/**
 * Method to switch the current light/dark state of the site.
 */
function switchLights() {
	//without an explicit theme Bootstrap renders light, so treat that as the default
	const current = document.documentElement.getAttribute('data-bs-theme') ?? 'light'

	setLights(current === 'dark')
}

/**
 * Updates the icon and accessibility state of every theme toggle button.
 * @param {'light'|'dark'} theme
 */
function syncToggleUI(theme) {
	const isDark = theme === 'dark'

	document.querySelectorAll('#btnLightsHeader, #btnLightsFooter').forEach((button) => {
		const icon = button.querySelector('i')

		//show the action the button will perform
		icon?.classList.toggle('bi-moon-stars-fill', !isDark)
		icon?.classList.toggle('bi-sun-fill', isDark)

		button.setAttribute('aria-label', isDark ? 'Switch to light theme' : 'Switch to dark theme')
		button.setAttribute('aria-pressed', String(isDark))
	})
}
