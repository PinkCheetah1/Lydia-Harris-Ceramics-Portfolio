import Header from "../Components/Header.jsx"
import Footer from "../Components/Footer.jsx"
import Carousel from "../Components/Carousel.jsx"
import GalleryCard from "../Components/GalleryCard.jsx"
import AboutSection from "../Components/AboutSection.jsx"


function Home() {
    return(
        <>
        <Header></Header>
        <hr></hr>
        <Carousel></Carousel>
        <hr></hr>
        <AboutSection />
        <hr></hr>
        <Footer></Footer>
        </>
    )
}

export default Home