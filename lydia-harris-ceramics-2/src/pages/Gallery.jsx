import Header from "../Components/Header.jsx";
import Footer from "../Components/Footer.jsx";
import GalleryCard from "../Components/GalleryCard.jsx";

function Gallery() {
    return(
        <>
        <Header></Header>
        <hr></hr>
        <GalleryCard title="Beautiful Pottery" desc="Something beautiful that Lydia made" imgLink="https://www.rockgardenpottery.com/wp-content/uploads/2019/04/Pottery-And-Ceramics-1024x683.jpg" altText="Some beautiful Pottery"/>
        <GalleryCard/>
        <hr></hr>
        <Footer></Footer>
        </>
    )
}

export default Gallery