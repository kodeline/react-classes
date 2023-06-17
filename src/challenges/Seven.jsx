// Desafio de la clase 7

import axios from "axios"
import { useState, useEffect } from "react"

function Seven() {

	const [data, setData] = useState()
	const [error, setError] = useState(null)

	useEffect(() => {
		axios("https://jsonplaceholder.typicode.com/posts")
			.then(res => setData(res.data))
			.catch(err => setError(err))

	}, [])

	if (error) return "Error...."
	
	return (
		<>	
			<h2>Desafio 7</h2>
			<ul>
				{!data ? 
					"Cargando..." 
					: 
					data.map(items => <li key={items.id}> 
					{items.title} <br/> {items.body} </li>)
				}
			</ul>
		</>

	)
}

export default Seven