import { useContext, useEffect, useState } from "react"
import LoggedInContext from "../contexts/Logged-In-User-Context"
import { patchArticleById } from "../utils/PATCH-article-votes"

const ArticleVotes = (props) => {
   
    const articleVotes = props.articleVotes
    const setArticleVotes = props.setArticleVotes
    const currentArticle = props.currentArticle
    
    const { loggedInUser, setLoggedInUser } = useContext(LoggedInContext)
    const [hasVoted, setHasVoted] = useState(false)
    const [increment, setIncrement] = useState(0)
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        setArticleVotes(currentArticle.votes)
    }, [])

    const handleLike = (event) => {
        event.preventDefault()
        const body = {
            inc_votes : 1,
        }
        setIncrement(1)
        patchArticleById(currentArticle.article_id, body)
        .then((res) => {
            setArticleVotes(currentArticle.votes)
        })
        .then((res) => {
            setHasVoted(true)
        })
        .catch((err) => {
            setIsError(true)
        })
    }

    const handleDislike = (event) => {
        event.preventDefault()
        const body = {
            inc_votes : -1,
        }
        setIncrement(-1)
        patchArticleById(currentArticle.article_id, body)
        .then((res) => {
            setArticleVotes(currentArticle.votes)
        })
        .then((res) => {
            setHasVoted(true)
        })
        .catch((err) => {
            setIsError(true)
        })
    }

    if(hasVoted){
        return(
            <div className="article-votes-card">
            <h2>Votes: {articleVotes + increment}</h2>
            <p>you voted!</p>
        </div>
        )
    }

    if(isError){
        return(
            <div className="article-votes-card">
            <h2>Votes: {articleVotes}</h2>
            <p>Unknown error occurred - refresh and try again</p>
        </div>
        )
    }
    
    if (loggedInUser.username === "guest"){
        return(
            <div className="article-votes-card">
            <h2>Votes: {articleVotes}</h2>
            <p>you must be logged in to vote</p>
        </div>
        )
    }
    
    return(
        <div className="article-votes-card">
            <h2>Votes: {articleVotes}</h2>
            <button onClick={handleLike}>like</button>
            <button onClick={handleDislike}>dislike</button>
        </div>
    )
}

export default ArticleVotes