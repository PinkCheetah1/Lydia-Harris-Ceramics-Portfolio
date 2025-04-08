import Header from "../Components/Header.jsx"
import Footer from "../Components/Footer.jsx"
import Carousel from "../Components/Carousel.jsx"
import GalleryCard from "../Components/GalleryCard.jsx"
import AboutSection from "../Components/AboutSection.jsx"
import "./Home.css"


function Home() {
    return(
        <div>
        <Header />
        <Carousel />
        <AboutSection />
        <Footer />
        </div>
    )
}

export default Home