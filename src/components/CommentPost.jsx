import { useContext, useState } from "react"
import LoggedInContext from "../contexts/Logged-In-User-Context"
import { postCommentOnGivenArticleId } from "../utils/POST-comment"
import { commentValidator } from "../utils/comment-validator"

const PostCommentField = (props) => {
    
    const currentArticleId = props.currentArticleId
    const currentComments = props.currentComments
    const setCurrentComments = props.setCurrentComments

    const { loggedInUser, setLoggedInUser } = useContext(LoggedInContext)
    const [newCommentAttempt, setNewCommentAttempt] = useState('')
    const [commentPosted, setCommentPosted] = useState(false)
    const [isCommentInvalid, setIsCommentInvalid] = useState(false)
    const [postError, setPostError] = useState(false)
    
    const handleSubmit = (event) => {
        event.preventDefault()
        if (commentValidator(newCommentAttempt)){
            setIsCommentInvalid(false)
            const optimisticComment = {
                article_id: currentArticleId,
                comment_id: 999,
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
                    setCurrentComments([optimisticComment, ...currentComments])
                    setCommentPosted(true)
                    setNewCommentAttempt('')
                })
                .catch((err) => {
                    setPostError(true)
                })

        }
        else if (!commentValidator(newCommentAttempt)){
            setIsCommentInvalid(true)
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
                {commentPosted ? <p className="post-comment-success-text">comment posted successfully! Go again if you want!</p> : null}
                {isCommentInvalid ? <p className="post-comment-invalid-text">your comment broke the rules, try again...</p> : null}
            </form>
        </div>
    )
}

export default PostCommentField