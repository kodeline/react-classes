// Clase 7 de React 
import { useState, useEffect } from "react";

function Fetch() {

  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('https://randomuser.me/api')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => setError(error))
      .finally(() => {
        setLoading(false)
      })
  },[])

  if(loading) return "Cargando..."
  if(error) return "Error!!..."

  return(
    <>
      <h2>Usando Fetch</h2>
      <h3>{data.results[0].name.first} {data.results[0].name.last}</h3> 
      <img 
        src={data.results[0].picture.large} 
        width={300}/> 
    </>
    

  )
}

export default Fetch






















/*
function Fetch () {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://randomuser.me/api')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return 'Loading...';
  if (error) return 'Error!';

  return (
    <>
      <h2>
        {data.results[0].name.first} {data.results[0].name.last}
      </h2>
      <img
        src={data.results[0].picture.large}
        width="250"
        alt="Usuario aleatorio"
      />  
    </>
  );
};


export default Fetch

*/