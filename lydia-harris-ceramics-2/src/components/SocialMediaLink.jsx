import "./SocialMediaLink.css";

function SocialMediaLink({ 
    iconLink="", 
    altText="[No Alt Text Available", 
    text="[No Social Media Name Available]", 
    socialLink=""}) {
    return(
        <div className="social-link">
            <a href={socialLink}>   
                <img className="social-link-icon" src={iconLink} alt={altText}></img>
                <h3 className="social-link-text">{text}</h3>
            </a>
        </div>
        )
    }

export default SocialMediaLink