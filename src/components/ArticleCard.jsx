import { Link } from "react-router-dom"

const ArticleCard = (props) => {
    const article = props.article
    return (
        <>
        <div className="article-card-wrapper">
            <Link to={`/articles/${article.article_id}`} className="article-card-link">
            <div className="article-card-image-and-title">
                <img className="article-card-image" src={article.article_img_url} alt={"a thumbnail image representing the article titled" + ` ${article.title}`} />
                <h2 className="article-card-title">{article.title}</h2>
            </div >
            </Link>
            <div className="article-card-information">
                <p className="article-card-subheading">topic: {article.topic}</p>
                <p className="article-card-subheading">author: {article.author}</p>
                <p className="article-card-votes-comments-counts">votes: {article.votes} comments: {article.comment_count}</p>
            </div>    
        </div>
        </>
    )
}

export default ArticleCard