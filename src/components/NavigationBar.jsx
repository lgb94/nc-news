import { useContext } from "react";
import { Link } from "react-router-dom"
import TopicsContext from "../contexts/topics-context"
import capitalizer from "../utils/First-letter-capitalised";

const NavigationBar = () => {

    const {topics, setTopics} = useContext(TopicsContext)

    return (
        <ul className="navigation-bar">
            <Link to="/" className="navigation-item">
                <li>Home</li>
            </Link>
            <Link to="/articles/" className="navigation-item">
                <li>All Articles</li>
            </Link>
            {topics.map((topic) => {
                return (<Link to={`/articles/${topic.slug}`} key={topic.slug} className="navigation-item">
                            <li>{capitalizer(topic.slug)}</li>
                        </Link>
                )
            })}
        </ul>
    );
}

export default NavigationBar