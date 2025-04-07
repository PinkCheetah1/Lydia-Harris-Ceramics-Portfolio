import GalleryCard from "./GalleryCard"
import SocialMediaLink from "./SocialMediaLink"
import "./AboutSection.css";

function AboutSection() {
    return(
        // TODO space for Artist Statement
        // TODO Contact Me section
        // TODO Card with Lydia photo
        <section>
            <GalleryCard 
                        title="Lydia Harris"
                        imgLink="...\assets\Lydia Harris Profile Picture.jpg"
                        altText="Picture of Lydia Harris"
                        desc="A Ceramics student at Brigham Young University-Idaho"/> 
            <section>
                <h3>Artist's Statement</h3>
                <p>
                    Artist statement text
                </p>
                <div>
                    <ul>
                        <li>
                            <SocialMediaLink />
                        </li>
                        <li>
                            <SocialMediaLink />
                        </li>
                        <li>    
                            <SocialMediaLink />
                        </li>
                    </ul>
                </div>
            </section>
        </section>
    )
}

export default AboutSection