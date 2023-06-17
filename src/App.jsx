import Carousel from "./components/Carousel"
import {slides } from "./data/dataCarousel.json"

function App() {
  return (
    <>
      <h1>React Classes</h1>
      <Carousel data={slides} />   
    </> 
  )
}

export default App
