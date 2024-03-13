import { dateFormatter } from "../utils/date-format-func"
import { useContext, useState } from "react"
import LoggedInContext from "../contexts/Logged-In-User-Context"
import { deleteCommentByCommentId } from "../utils/DELETE-comment"

const CommentCard = (props) => {
    const comment = props.comment
    const { loggedInUser, setLoggedInUser } = useContext(LoggedInContext)
    const [deleteable, setDeletable] = useState(false)
    const [commentDeleted, setCommentDeleted] = useState(false)
    const [deleteError, setDeleteError] = useState(false)

    return (
        <>
            <div className="comment-information" 
                 key={comment.comment_id} 
                 onMouseEnter={(event) => {
                    if(loggedInUser.username === comment.author && comment.created_at !== 'Just now'){
                        setDeletable(true)
                        }
                    }
                }
                 onMouseLeave={(event) => {
                    if(loggedInUser.username === comment.author && comment.created_at !== 'Just now'){
                        setDeletable(false)
                        }
                    }
                }
                 >
                {commentDeleted ? 
                    <p>this comment was deleted</p> 
                    : 
                    <>  
                        <h3>{comment.author} - {dateFormatter(comment.created_at)}</h3>
                        <p>{comment.body}</p>
                        <p>votes: {comment.votes} (vote functionality coming soon)</p>
                        {deleteable ? 
                            <div className="delete-comment-option">
                                <p>delete this comment?</p>
                                <button onClick={((event) => {
                                    console.log('you clicked delete - this is where you put the request :)')
                                    setDeleteError(false)
                                    deleteCommentByCommentId(comment.comment_id)
                                    .then((res) => {
                                        setCommentDeleted(true)
                                    })
                                    .catch((err) => {
                                        setDeleteError(true)
                                    })
                                })}>delete
                                </button>
                                {deleteError ? <p>error deleting comment, please try again</p> : null}
                            </div>
                            :
                            null
                        }
                    </>
                }
            </div>
        </>
    )

}

export default CommentCard