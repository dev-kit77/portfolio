//import modules
import { setLights, switchLights, syncToggleUI } from './javasc/darkToggle.js'
import { headline } from './animations.js'

//point of entry
applyTheme()

//wire up the theme toggle buttons now that they are part of the page
document.querySelectorAll('#btnLightsHeader, #btnLightsFooter').forEach((button) => {
	button.addEventListener('click', switchLights)
})

//refresh the toggle buttons to match the current theme
syncToggleUI(document.documentElement.getAttribute('data-bs-theme'))

//call animation functions
const headlineElement = document.getElementById('headline')
if (headlineElement) {
	headline(headlineElement)
}

//apply the stored light/dark state, falling back to the system preference
function applyTheme() {
	//get stored light/dark state; storage can throw when it is blocked
	let lights = null
	try {
		lights = localStorage.getItem('lights')
	} catch {}

	//parse state (supports both the boolean and theme-name formats)
	if (lights === 'false' || lights === 'dark') {
		setLights(false, { persist: false })
	} else if (lights === 'true' || lights === 'light') {
		setLights(true, { persist: false })
	}
	//default fallbacks, without overwriting the stored preference
	else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
		setLights(false, { persist: false })
	} else {
		setLights(true, { persist: false })
	}
}
