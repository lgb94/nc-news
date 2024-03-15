import { useParams, useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { getArticleById } from "../utils/GET-articles"
import ArticleCommentsSection from "./Article-comments"
import { dateFormatter } from "../utils/date-format-func"
import ArticleVotes from "./Article-votes"

const SingleArticlePage = () => {

    const param = useParams()
    const navigate = useNavigate()
    const [currentArticleId, setCurrentArticleId] = useState(param.article_id)
    const [currentArticle, setCurrentArticle] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    const [articleVotes, setArticleVotes] = useState(0)

    useEffect(() => {
        setIsLoading(true)
        setIsError(false)
        getArticleById(currentArticleId)
        .then((res) => {
            if(res.article.topic === param.topic){
            return setCurrentArticle(res.article)
            }
            else setIsError(true)
        })
        .then((res) => {
            return setIsLoading(false)
        }).catch((err) =>
            setIsError(true)
        )
    }, [currentArticleId])
    
    
    if(isError){
        return (
            <>
            <h2>that article doesnt exist, how did you get here?</h2>
            <Link to={`/articles/`}>
            <button>back to all articles</button>
            </Link>
            </>
        )
    }
    
    if (isLoading){
        return (
            <h2>page loading...</h2>
        )
    }
    

    return (
        <>
            <button onClick={((event) => navigate(-1))}>back</button>
        <div className="single-article-page">
            <h1>{currentArticle.title}</h1>
            <ArticleVotes articleVotes={articleVotes} setArticleVotes={setArticleVotes} currentArticle={currentArticle}/>
            <p>author: {currentArticle.author}</p>
            <p>topic: {currentArticle.topic}</p>
            <img className="single-article-image" src={currentArticle.article_img_url} alt={"image to match the article" + ` ${currentArticle.title}`} />
            <p>{currentArticle.body}</p>
        <div className="single-article-comments">
            <ArticleCommentsSection currentArticleId={currentArticleId}/>
        </div>
            <p>article posted: {dateFormatter(currentArticle.created_at)}</p>
        </div>
        
        </>
    )

}

export default SingleArticlePage