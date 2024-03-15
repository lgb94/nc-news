import { Link } from "react-router-dom"

const NavigationBar = () => {
    return (
        <ul className="navigation-bar">
            <Link to="/" className="navigation-item">
                <li>HOME</li>
            </Link>
            <Link to="/articles/" className="navigation-item">
                <li>ALL ARTICLES</li>
            </Link>
            <Link to="/articles/cooking" className="navigation-item">
                <li>COOKING ARTICLES</li>
            </Link>
            <Link to="/articles/coding" className="navigation-item">
                <li>CODING ARTICLES</li>
            </Link>
            <Link to="/articles/football" className="navigation-item">
                <li>FOOTBALL ARTICLES</li>
            </Link>
        </ul>
    );
}

export default NavigationBar