import PropTypes from 'prop-types';
import './GalleryCard.css'

function GalleryCard({ title="[No Title Available]", desc="[No Description Available]", dateTime= "[00/00/0000]", imgLink="", altText="[No Alt Text Available]" }){
    return( 
        <div className="gallery-card">
            <img className="gallery-card-image" src={imgLink} alt={altText}></img>
            <h2 className="gallery-card-title">{title.toUpperCase()}</h2>
            <hr></hr>
            <p className="gallery-card-desc">{desc}</p>
        </div>
    )
}

GalleryCard.propTypes = {
    title: PropTypes.string,
    desc: PropTypes.string,
    dateTime: PropTypes.string,
    imgLink: PropTypes.string,
    altText: PropTypes.string,
}

// This code is borked. 
// GalleryCard.defaultProps = {
//     title: "[No Title Available]",
//     desc: "[No Description Available]",
//     dateTime: "[00/00/0000]",
//     imgLink: "",
//     altText: "[No Alt Text Available]"
// }

export default GalleryCard