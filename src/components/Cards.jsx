//Clase 8 de React

function Cards(props) {
  return (
    <div className="card">
      <h2>{props.cosito} {props.titulo}</h2>
      <div>{props.children}</div>
    </div>
  )
}

export default Cards
