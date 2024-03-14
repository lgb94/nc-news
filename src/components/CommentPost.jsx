import { useContext, useState } from "react"
import LoggedInContext from "../contexts/Logged-In-User-Context"
import { postCommentOnGivenArticleId } from "../utils/POST-comment"
import { commentValidator } from "../utils/comment-validator"
import { deleteCommentByCommentId } from "../utils/DELETE-comment"

const PostCommentField = (props) => {
    
    const currentArticleId = props.currentArticleId
    const currentComments = props.currentComments
    const setCurrentComments = props.setCurrentComments

    const { loggedInUser, setLoggedInUser } = useContext(LoggedInContext)
    const [newCommentAttempt, setNewCommentAttempt] = useState('')
    const [commentPosted, setCommentPosted] = useState(false)
    const [isLoading, setIsLoading] =useState(false)
    const [isCommentInvalid, setIsCommentInvalid] = useState(false)
    const [postError, setPostError] = useState(false)
    const [lastPostedComment, setLastPostedComment] = useState({})
    const [commentUndone, setCommentUndone] = useState(false)
    
    const handleSubmit = (event) => {
        event.preventDefault()
        setPostError(false)
        setIsLoading(true)
        if (commentValidator(newCommentAttempt)){
            setIsCommentInvalid(false)
            const optimisticComment = {
                article_id: currentArticleId,
                comment_id: 9999999999999999999,
                author : loggedInUser.username,
                created_at: 'Just now',
                body : newCommentAttempt,
                votes : 0
            }
            const body = {
                username : loggedInUser.username,
                body : newCommentAttempt
            }
            postCommentOnGivenArticleId(currentArticleId, body)
                .then((res) => {
                    setLastPostedComment(res.comment)
                    setCurrentComments([optimisticComment, ...currentComments])
                    setIsLoading(false)
                    setCommentPosted(true)
                    setNewCommentAttempt('')
                })
                .catch((err) => {
                    setIsLoading(false)
                    setPostError(true)
                })

        }
        else if (!commentValidator(newCommentAttempt)){
            setIsCommentInvalid(true)
            setIsLoading(false)
            setNewCommentAttempt('')
        }
        
    }

    if(loggedInUser.username === 'guest'){
        return (
            <h3 className="post-comment-login-reminder">You must be logged in to leave a comment ;)</h3>
        )
    }

    if(postError){
        return(
            <h3 className="post-comment-error-message">error posting comment, reload and retry</h3>
        )
    }

    return (
        <div className="post-comment-field-wrapper">
            <form onSubmit={handleSubmit} className="post-comment-form">
                <h3>leave a comment</h3>
                <input 
                    type="text"
                    className="post-comment-input-field"
                    value={newCommentAttempt}
                    onChange={(event) => {
						setNewCommentAttempt(event.target.value);
					}} />
                <button 
                    className="post-comment-submit-button"
                    >send it
                </button>
                {isLoading ? <p>an army of tiny chimps is processing your comment...</p> : null}
                {isCommentInvalid ? <p className="post-comment-invalid-text">your comment broke the rules, try again...</p> : null}
            </form>
                {commentPosted ? 
                    <div className="post-comment-follow-up-message">
                        <p className="post-comment-success-text">comment posted successfully!</p>
                        <button onClick={((event) => {
                            deleteCommentByCommentId(lastPostedComment.comment_id)
                            .then((res) => {
                                setCommentUndone(true)
                                setCommentPosted(false)
                                })
                            }
                        )}
                        >undo?</button>    
                    </div>
                : null}
                {commentUndone ? 
                    <div className="post-comment-follow-up-message">
                        <p>comment post undone - refresh to see change.</p>
                    </div> 
                : null}
        </div>
    )
}

export default PostCommentField