// Clase 8 de React 

function Listas () {

  const equipos = [
    {id: 1, equipo:'Racing'},
    {id: 2, equipo:'San Lorenzo'},
    {id: 3, equipo:'Banfield'}
 ]
  const soloEquipos = equipos.map(items => <li key={items.id}>{items.equipo}</li>);

  return(
    <>
       <h2>Listas de Equipos</h2>
    <ul>
      {soloEquipos}
    </ul>
    </>
  )
}

export default Listas