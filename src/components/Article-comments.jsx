import { useState, useEffect } from "react"

import CommentCard from "./CommentCard"
import PostCommentField from "./CommentPost"
import { getCommentsbyId } from "../utils/GET-comments"

const ArticleCommentsSection = (props) => {

    const currentArticleId = props.currentArticleId
    // const currentArticleComments = props.currentArticleComments
    // const setCurrentArticleComments = props.setCurrentArticleComments

    const [currentComments, setCurrentComments] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        setIsError(false)
        getCommentsbyId(currentArticleId)
        .then((res) => {
            setCurrentComments(res.comments)
        }).then((res) => {
            setIsLoading(false)
        })
    }, [])

    if(isLoading){
        return (
            <h1>loading comments...</h1>
        )
    }

    if(isError){
        return (
            <h1>error loading comments, please reload page</h1>
        )
    }

    
    return (
        <>
        <h2 className="comment-section-heading">Comments - {currentComments.length + ' comments'}</h2>
        <PostCommentField currentArticleId={currentArticleId} currentComments={currentComments} setCurrentComments={setCurrentComments}/>
        <ul className="comment-section-comments">
            {currentComments.map((comment) => {
                return (
                    <div key={comment.comment_id}className="comment-card">
                        <CommentCard comment={comment} />
                    </div>
                    )
                })
            }
        </ul>
        </>
    )
}

export default ArticleCommentsSection