import {Link} from "react-router-dom";
import "./Header.css";

function Header () { 
    return ( 
        <header className="main-nav">
            <Link to="/">Workers in the US Food System</Link>
            <ul className="site-nav">
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/methods">Methods</Link>
                </li>
                <li>
                    <Link to="/characteristics">Occupation Characteristics</Link>
                </li>
                <li>
                    <Link to="/occupations">Occupations</Link>
                </li>
            </ul>
        </header> 
    )
}

export default Header;