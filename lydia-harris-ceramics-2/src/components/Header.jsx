import { Link } from 'react-router-dom';
import "./Header.css";
import NavButton from './NavButton.jsx';

function Header(){

    return(
        <header className='header'>
            {/* TODO: Make letters pretty */}
            <div className='header-logo'><h1>Lydia Harris Ceramics</h1></div>
            <nav className='nav-links'>
                <ul>
                    <li>
                        <NavButton to="/" text='Home'></NavButton>
                    </li>
                    <li>
                        <NavButton to='/Gallery' text='Gallery'></NavButton>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header