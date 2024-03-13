import { dateFormatter } from "../utils/date-format-func"
import { useContext, useState } from "react"
import LoggedInContext from "../contexts/Logged-In-User-Context"

const CommentCard = (props) => {
    const comment = props.comment
    const { loggedInUser, setLoggedInUser } = useContext(LoggedInContext)
    const [deleteable, setDeletable] = useState(false)
    const [commentDeleted, setCommentDeleted] = useState(false)

    return (
        <>
            <div className="comment-information" 
                 key={comment.comment_id} 
                 onMouseEnter={(event) => {
                    if(loggedInUser.username === comment.author){
                        console.log(`this is your comment yes? ${comment.author}?`)
                        setDeletable(true)
                        }
                    }
                }
                 onMouseLeave={(event) => {
                    if(loggedInUser.username === comment.author){
                        console.log(`guess not...`)
                        setDeletable(false)
                        }
                    }
                }
                 >
                {commentDeleted ? 
                    <p>this comment was deleted (but not really as the request isnt set up)</p> 
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
                                    setCommentDeleted(true)
                                })}>delete
                                </button>
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