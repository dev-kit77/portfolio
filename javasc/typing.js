//module exports
export { typer, blink, remover, delay }

//define delay function
let delay = (n) => new Promise((r) => setTimeout(r, n))

/**
 * Method to mimic characters being typed into the elemement provided.
 *
 * @param {HTMLElement} element the element to edit
 * @param {String} txt the string to be typed to the elements inner html
 */
async function typer(element, txt) {
	//loop for every char in the string
	for (let char of txt) {
		//append char
		element.innerHTML += char

		//wait 100ms
		await delay(100)
	}
}

/**
 * Method to remove a number of characters from an element
 *
 * @param {HTMLElement} element
 * @param {Number} noToRemove
 */
async function remover(element, noToRemove) {
	//loop for each char to remove
	for (let i = 0; i <= noToRemove; i++) {
		//remove last char
		element.innerHTML = element.innerHTML.slice(0, -1)

		//wait 100ms
		await delay(100)
	}
}

/**
 * Method to show a fake blinking cursor at the end of the element provided.
 *
 * @param {HTMLElement} element The HTML element to modify
 * @param {Time} time the length of the blinks
 */
async function blink(element, time) {
	//loop until time depeleted
	for (let i = 0; i < time; i++) {
		//check even/odd time
		if (i % 2 === 0) {
			//add char
			element.innerHTML += '_'
		} else {
			//remove char
			element.innerHTML = element.innerHTML.replace('_', '')
		}

		//wait 100ms
		await delay(100)
	}

	//check if char remains after loop
	if (element.innerHTML.charAt(element.innerHTML.length - 1)) {
		//remove fake cursor
		element.innerHTML = element.innerHTML.replace('_', '')
	}
}
