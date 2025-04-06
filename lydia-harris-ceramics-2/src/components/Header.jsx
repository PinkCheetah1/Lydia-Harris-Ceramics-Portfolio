import { Link } from 'react-router-dom';

function Header(){

    return(
        <header>
            <nav>
                {/* TODO: Make letters pretty */}
                <h1>Lydia Harris Ceramics</h1>
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