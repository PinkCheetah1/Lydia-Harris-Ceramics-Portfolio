import { Link } from "react-router-dom";
import "./NavButton.css";

function NavButton({ to = "/", text = "notext"}) {
    return (
        <Link to={to} className="nav-button"> 
        {text}
        </Link>
    )
}

export default NavButton