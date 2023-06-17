import { useState } from "react";
import "./Carousel.css"
import { MdKeyboardArrowLeft, MdKeyboardArrowRight} from "react-icons/md";

function Carousel({data}) {

	const [slide, setSlide] = useState(0);
	{/* Controlador para el siguiente Slide */}
  const nextSlide = () => {
    setSlide(slide === data.length -1 ? 0 : slide + 1);
  };
	{/* Controlador para el anterior Slide */}
  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

	return (
		<div className="carousel">
			{/* Boton Izquierdo */}
			<MdKeyboardArrowLeft 
				onClick={prevSlide} 
				className="arrow arrow-left" 
			/>
			{/* Imagen del Carousel */}
			{data.map((items, id) => 
				<img 
					key={id} 
					src={items.src} 
					alt={items.alt} 
					className={slide === id ? "slide" : "slide slide-hidden"} 
				/>)
			}
			{/* Boton Derecho */}
			<MdKeyboardArrowRight 
				onClick={nextSlide} 
				className="arrow arrow-right" 
			/>
			{/* Indicadores */}
			<span className="indicators">
				{data.map((_, id) => 
					<button 
						key={id} 
						onClick={null} 
						className={ slide === id ? "indicator" : "indicator indicator-inactive"}
					></button>)
				}
			</span>	
		</div>	
	)
}

export default Carousel
