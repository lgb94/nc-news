import { Link } from "react-router-dom";
import { useContext } from "react";
import LoggedInContext from "../contexts/Logged-In-User-Context";

const Header = () => {
    const { loggedInUser, setLoggedInUser } = useContext(LoggedInContext)

    if (loggedInUser.username === "guest"){
        return (
            <div className="Header">
                <h1 className="header-title">NC NEWS APP</h1>
                <div className="header-login-box">
                <p>User: {loggedInUser.username} </p>
                <Link to="/login">
                    <button className="login-button">login</button>
                </Link>
                </div>
            </div>
        )    
    }

    return (
        <div className="Header">
            <h1 className="header-title">NC NEWS APP</h1>
            <div className="header-login-box">
            <p>you are logged in as {loggedInUser.username}</p>
            <button className="login-button" onClick={((event) => {
                setLoggedInUser({
                    username : "guest",
                    name : "guest",
                    avatar_url: "https://images.macrumors.com/t/XjzsIpBxeGphVqiWDqCzjDgY4Ck=/800x0/article-new/2019/04/guest-user-250x250.jpg?lossy"
                })
            })}>logout</button>
            </div>
        </div>
    )
}

export default Header