import "./SocialMediaLink.css";

function SocialMediaLink({ 
    iconLink="", 
    altText="[No Alt Text Available", 
    text="[No Social Media Name Available]", 
    socialLink=""}) {
    return(
        <div className="social-link-box">
            <a href={socialLink} className="social-link">   
                <img className="social-link-icon" src={iconLink} alt={altText}></img>
                <p className="social-link-text">{text}</p>
            </a>
        </div>
        )
    }

export default SocialMediaLink