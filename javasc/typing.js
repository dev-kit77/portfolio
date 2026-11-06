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
		element.textContent += char

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
	for (let i = 0; i < noToRemove; i++) {
		//remove last char
		element.textContent = element.textContent.slice(0, -1)

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
			element.textContent += '_'
		} else {
			//remove char
			element.textContent = element.textContent.replace('_', '')
		}

		//wait 100ms
		await delay(100)
	}

	//check if char remains after loop
	if (element.textContent.charAt(element.textContent.length - 1)) {
		//remove fake cursor
		element.textContent = element.textContent.replace('_', '')
	}
}
