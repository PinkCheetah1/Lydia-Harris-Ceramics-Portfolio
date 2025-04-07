import { Link } from 'react-router-dom';
import "./Header.css";

function Header(){

    return(
        <header className='site-header'>
            {/* TODO: Make letters pretty */}
            <div className='header-logo'><h1>Lydia Harris Ceramics</h1></div>
            <nav className='nav-links'>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/Gallery">Gallery</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header