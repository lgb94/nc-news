import { dateFormatter } from "../utils/date-format-func"

const CommentCard = (props) => {
    const comment = props.comment
    return (
        <>
            <div className="comment-information" key={comment.comment_id}>
                <h3>{comment.author} - {dateFormatter(comment.created_at)}</h3>
                <p>{comment.body}</p>
                <p>votes: {comment.votes} (vote functionality coming soon)</p>
            </div>
        </>
    )

}

export default CommentCard