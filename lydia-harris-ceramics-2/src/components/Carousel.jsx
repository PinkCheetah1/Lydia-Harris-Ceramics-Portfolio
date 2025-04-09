import "./Carousel.css";
import NavButton from "./NavButton";

function Carousel() {
    return(
        // TODO: Make working Carousel
        // TODO: Add text/button on top of Carousel
        <section>
            <div className="carousel">
                <img className="carousel-image" src="https://www.rockgardenpottery.com/wp-content/uploads/2019/04/Pottery-And-Ceramics-1024x683.jpg" 
                alt="Just some random pottery">                
            </img>
            <NavButton to="/Gallery" text="View Gallery" className="carousel-button"></NavButton>
            </div>
        </section>
    )
}

export default Carousel