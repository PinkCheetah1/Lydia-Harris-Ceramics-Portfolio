import SocialMediaLink from "./SocialMediaLink"
import "./Footer.css";

function Footer(){
    return(
        // TODO back to top button
        // TODO Basic contact info
        <footer className="footer-socials">
            <ul>
                <li>
                    <SocialMediaLink iconLink="https://1000logos.net/wp-content/uploads/2017/06/Twitter-symbol.jpg"/>
                </li>
                <li>
                    <SocialMediaLink />
                </li>
                <li>    
                    <SocialMediaLink />
                </li>
            </ul>
        </footer>
    )
}

export default Footer