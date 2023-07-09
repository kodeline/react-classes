import { useState } from "react";

function TaskList () {
  const [ tasks, setTasks ] = useState("");
  const [ newTask, setNewTask ] = useState([]);

  const handleInput = (event) => {
    setTasks(event.target.value);
  }

  const handleNewTask = () => {
    setNewTask([...newTask, tasks]); 
  }
  
  return(
    <>
      <h2>Lista de Tareas</h2><br/>
      <input type="text" onChange={ handleInput } />
      <button type="submit" onClick={ handleNewTask }>Agregar</button>
      <ul>
        {newTask.map((element, index) => <li key={index}>{element}</li> )}
      </ul>
    </>
  )
}

export default TaskList