import { typer, blink, remover } from './javasc/typing.js'
export { headline, cursor }

async function headline(element) {
	element.innerText = 'K:\\>'

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
