import Header from "../Components/Header.jsx";
import Footer from "../Components/Footer.jsx";
import GalleryCard from "../Components/GalleryCard.jsx";
import GalleryItems from "../data/GalleryItems.js";;
import './Gallery.css'

function Gallery() {
    return(
        <>
        <Header></Header>
        <hr></hr>
        <h1 className="gallery-title">Gallery</h1>
        <section className="card-list">
            {GalleryItems.map((item, index) => (
                <GalleryCard 
                    title={item.title}
                    imgLink={item.image}
                    altText={item.alt}  
                    desc={item.description}
                />
            ))}
        </section>
        <hr></hr>
        <Footer></Footer>
        </>
    )
}

export default Gallery