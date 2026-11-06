//import modules
import { setLights, syncToggleUI } from './javasc/darkToggle.js'
import { headline } from './animations.js'

//point of entry
$(function () {
	//apply the stored/system theme immediately, before the fragments load
	applyTheme()

	//load and inject header
	$('#header').load('header.html', function () {
		//load and inject footer
		$('#footer').load('footer.html', function () {
			//refresh the toggle buttons now that they exist
			syncToggleUI(document.documentElement.getAttribute('data-bs-theme'))

			//call animation functions
			headline(document.getElementById('headline'))
		})
	})
})

//apply the stored light/dark state, falling back to the system preference
function applyTheme() {
	//get stored light/dark state
	let lights = localStorage.getItem('lights')

	//parse state (supports both the boolean and theme-name formats)
	if (lights === 'false' || lights === 'dark') {
		setLights(false)
	} else if (lights === 'true' || lights === 'light') {
		setLights(true)
	}
	//default fallbacks
	else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
		setLights(false)
	} else {
		setLights(true)
	}
}
