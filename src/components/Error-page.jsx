import { Link } from "react-router-dom"
import errorImage from "../../assets/kermit-falling-down-stairs.png"

const ErrorPage = () => {
    return (
        <>
        <div className="error-page-message-wrapper">        
        <h1>This page doesn't exist!</h1>
        <p>Our team of specially trained earthworms will consider getting on it and creating it for you. In the mean time, stop inventing pages and check out what we have that actually exists.</p>
        <Link to="/articles">
            <button>all articles</button>
        </Link>
        </div>
        <img className="error-image" src={errorImage} alt="a poorly generated image of a wonky kermit the frog falling down an impossible set of stairs" />
        </>

    )
}

export default ErrorPage