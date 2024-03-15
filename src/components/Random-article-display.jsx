import { Link } from "react-router-dom"
import { dateFormatter } from "../utils/date-format-func"

const RandomArticleDisplay = (props) => {

    const articles = props.articles

    const randomArticle = articles[Math.floor(Math.random()*(articles.length))]

    return (
        <>
        <p>There are currently {articles.length} articles on this website! Heres a random one:</p>
        <div className="random-article-wrapper">
        <Link to={`/articles/${randomArticle.topic}/${randomArticle.article_id}`} className="random-article-card-link">
            <div className="random-article-card-image-and-title">
                <img className="random-article-card-image" src={randomArticle.article_img_url} alt={"a thumbnail image representing the article titled" + ` ${randomArticle.title}`} />
                <h2 className="random-article-card-title">{randomArticle.title}</h2>
            </div >
            </Link>
            <div className="random-article-card-information">
                <p className="random-article-card-subheading">topic: {randomArticle.topic}</p>
                <p className="random-article-card-subheading">author: {randomArticle.author}</p>
                <p className="random-article-card-votes-comments-counts">votes: {randomArticle.votes} comments: {randomArticle.comment_count} created at: {dateFormatter(randomArticle.created_at)}</p>
            </div>    
        </div>
        </>
    )
}

export default RandomArticleDisplay