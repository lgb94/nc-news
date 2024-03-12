import { Link } from "react-router-dom";
import { useContext } from "react";
import LoggedInContext from "../contexts/Logged-In-User-Context";

const Header = () => {
    const { loggedInUser, setLoggedInUser } = useContext(LoggedInContext)

    return (
        <div className="Header">
            <h1>NC NEWS APP</h1>
            <p>you are logged in as {loggedInUser.username}</p>
        </div>
    )
}

export default Header