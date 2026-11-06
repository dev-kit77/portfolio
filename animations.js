import { typer, blink, remover } from './javasc/typing.js'
export { headline }

//show a static headline instead of the typing loop when motion is reduced
const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

async function headline(element) {
	if (reduceMotion) {
		element.textContent = 'K:\\> welcome to my site!'
		return
	}

	element.textContent = 'K:\\>'

	await blink(element, 50)

	await typer(element, 'welcome to my site!')

	await blink(element, 250)

	await remover(element, 19)

	headline(element)
}

async function cursor(element) {
	await blink(element, 400)

	cursor(element)
}
