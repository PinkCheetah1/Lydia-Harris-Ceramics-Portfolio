import SocialMediaLink from "./SocialMediaLink"
import "./Footer.css";

function Footer(){
    return(
        // TODO back to top button
        // TODO Basic contact info
        <footer>
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
        </footer>
    )
}

export default Footer