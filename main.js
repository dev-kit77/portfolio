//import modules
import { setLights } from './javasc/darkToggle.js'
import { headline, cursor } from './animations.js'

//point of entry
$(function () {
	//load and inject header
	$('#header').load('header.html', function () {
		//load and inject footer
		$('#footer').load('footer.html', function () {
			//call main
			main()
		})
	})
})

//main js stem following page load
function main() {
	//get stored light/dark state
	let lights = localStorage.getItem('lights')

	//parce state
	if (lights === 'false') {
		setLights(false)
	} else if (lights === 'true') {
		setLights(true)
	}
	//default fallbacks
	else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
		setLights(false)
	} else {
		setLights(true)
	}

	//call animation functions
	headline(document.getElementById('headline'))
}
