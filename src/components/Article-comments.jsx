import { useState, useEffect } from "react"
import CommentCard from "./CommentCard"

const ArticleCommentsSection = (props) => {

    const currentArticleComments = props.currentArticleComments
    const setCurrentArticleComments = props.setCurrentArticleComments

    const [currentComments, setCurrentComments] = useState(currentArticleComments)
    
    return (
        <>
        <h2 className="comment-section-heading">Comments - {currentComments.length + ' comments'}</h2>
        <ul className="comment-section-comments">
            {currentComments.map((comment) => {
                return (
                    <div key={comment.comment_id}className="comment-card">
                        <CommentCard comment={comment}/>
                    </div>
                    )
                })
            }
        </ul>
        </>
    )
}

export default ArticleCommentsSection