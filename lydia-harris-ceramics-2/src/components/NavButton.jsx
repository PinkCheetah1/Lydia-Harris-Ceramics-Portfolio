import { Link } from "react-router-dom";
import "./NavButton.css";

function NavButton({ to = "/", text = "notext", className="nav-button"}) {
    return (
        <Link to={to} className={`nav-button ${className}`}>
      {text}
    </Link>
    )
}

export default NavButton