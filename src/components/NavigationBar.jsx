import { Link } from "react-router-dom"

const NavigationBar = () => {
    return (
        <ul className="navigation-bar">
            <Link to="/" className="navigation-item">
                <li>HOME</li>
            </Link>
            <Link to="/articles/all" className="navigation-item">
                <li>ALL ARTICLES</li>
            </Link>
        </ul>
    );
}

export default NavigationBar