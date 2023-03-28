// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const TEST_MODE = true;

export default async function handler(req, res) {
	const { body, method } = req;

	if(method == "POST") {
		if(TEST_MODE) {
			const data = {
				"urlImage": body.url,
				"title": "The Weeknd - Blinding Lights (Official Music Video)",
				"spotyUrl": "https://open.spotify.com/track/0VjIjW4GlUZAMYd2vXMi3b?si=2b8e1b8f8f3a4b0f",
				"description": "https://i.ytimg.com/vi/QH2-TGUlwu4/maxresdefault.jpg",
			}

			res.status(200).json(data)
		} else {
			const response = await fetch(process.env.API_URL, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(body),
			})
			const data = await response.json();
	
			res.status(200).json(data)
		}
	}

  res.status(200).json({ name: 'John Doe' })
}
