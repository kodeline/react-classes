// Clase 7 de React 
import { useState, useEffect } from "react";
import axios from "axios";

function Axios() {

  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    axios('https://randomuser.me/api')
      .then(response => setData(response.data))
      .catch(error => setError(error))
      .finally(() => {
        setLoading(false)
      })
  },[])

  if(loading) return "Cargando..."
  if(error) return "Error!!..."

  return(
    <>
      <h2>Usando Axios</h2>
      <h3>{data.results[0].name.first} {data.results[0].name.last}</h3> 
      <img 
        src={data.results[0].picture.large} 
        width={300}/> 
    </>  
  )
}

export default Axios