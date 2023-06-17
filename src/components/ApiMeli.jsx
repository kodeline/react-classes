// Clase 9 de React

import axios from "axios"
import { useState, useEffect } from "react"

function ApiMeli() {

	const [data, setData] = useState([])

	useEffect(()=> {
		axios.get("https://api.mercadolibre.com/sites/MLA/search?q=xbox#json")
			.then(res => setData(res.data))
	}, [])

const products = data.results;

console.log(products)

	return (
		<>
			<h2>Mercado Libre</h2>
			<ul> {/*Encadenamiento Opcional */}
				{products?.map(items => 
					<li key={items.id}> 
						<img src={items.thumbnail} />
						<br/> {items.title} 
						<p>Condicion: {items.condition}</p>	
					</li>
				)}
			</ul>
		</>
		
	)
}

export default ApiMeli