
function SocialMediaLink({ 
    iconLink="", 
    altText="[No Alt Text Available", 
    text="[No Social Media Name Available]", 
    socialLink=""}) {
    return(
        <>
            <a href={socialLink}>
                <img className="icon" src={iconLink} alt={altText}></img>
                <h3>{text}</h3>
            </a>
        </>
        )
    }

export default SocialMediaLink