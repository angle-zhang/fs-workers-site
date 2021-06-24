import {Link} from "react-router-dom";
import "./Header.css";

function Header () { 
    return ( 
        <header className="main-nav">
            <Link to="/">Website name</Link>
            <ul className="site-nav">
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/methods">Methods</Link>
                </li>
                <li>
                    <Link to="/characteristics">Worker Characteristics</Link>
                </li>
            </ul>
        </header> 
    )
}

export default Header;