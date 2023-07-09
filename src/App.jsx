import Carousel from "./components/Carousel";
import TaskList from "./components/TaskList";
import {slides } from "./data/dataCarousel.json";

function App() {
  return (
    <>
      <h1>React Classes</h1>
      <TaskList/>
      {/* <Carousel data={slides} /> */}   
    </> 
  )
}

export default App
