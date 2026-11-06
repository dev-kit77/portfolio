const root = new URL('./', import.meta.url)
const port = Number(Bun.env.PORT ?? 3000)

const server = Bun.serve({
	port,
	async fetch(request) {
		const { pathname } = new URL(request.url)

		let requested: string
		try {
			requested = decodeURIComponent(pathname)
		} catch {
			return new Response('Bad request', { status: 400 })
		}

		// Resolve the request against the project root, then keep it inside.
		const fileUrl = new URL('.' + (requested === '/' ? '/index.html' : requested), root)
		if (!fileUrl.pathname.startsWith(root.pathname)) {
			return new Response('Forbidden', { status: 403 })
		}

		const file = Bun.file(fileUrl)
		if (!(await file.exists())) {
			return new Response('Not found', { status: 404 })
		}

		return new Response(file)
	},
})

console.log(`Serving ${import.meta.dir} at http://localhost:${server.port}`)
