// Clase 6 de React 
import { useState, useEffect } from "react";

function Hooks() {
  
  const [contador, setContador] = useState(0)
  const [color, setColor] = useState('verde')
 
  useEffect(() => {
    document.title = `Contador: ${contador}`;
  })
  
  return (
    <>
     <h3>Usando Hooks </h3>
     <h4><span className={color}> Cantidad:</span> {contador}</h4>
     <button onClick={() => setContador(contador +1)}>Contador</button>
     <button onClick={() => setColor(color === 'verde' ? 'amarillo' : 'verde')}>Color</button>
    </>
  )
}

export default Hooks