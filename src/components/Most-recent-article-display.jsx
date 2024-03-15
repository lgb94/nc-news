import { Link } from "react-router-dom"
import { dateFormatter } from "../utils/date-format-func"

const MostRecentArticleDisplay = (props) => {

    const articles = props.articles

    const mostRecentArticle = articles[0]

    return (
        <>
        <p>Heres the most recent article!</p>
        <div className="most-recent-article-wrapper">
        <Link to={`/articles/${mostRecentArticle.topic}/${mostRecentArticle.article_id}`} className="most-recent-article-card-link">
            <div className="most-recent-article-card-image-and-title">
                <img className="most-recent-article-card-image" src={mostRecentArticle.article_img_url} alt={"a thumbnail image representing the article titled" + ` ${mostRecentArticle.title}`} />
                <h2 className="most-recent-article-card-title">{mostRecentArticle.title}</h2>
            </div >
            </Link>
            <div className="most-recent-article-card-information">
                <p className="most-recent-article-card-subheading">topic: {mostRecentArticle.topic}</p>
                <p className="most-recent-article-card-subheading">author: {mostRecentArticle.author}</p>
                <p className="most-recent-article-card-votes-comments-counts">votes: {mostRecentArticle.votes} comments: {mostRecentArticle.comment_count} created at: {dateFormatter(mostRecentArticle.created_at)}</p>
            </div>    
        </div>
        </>
    )
}

export default MostRecentArticleDisplay