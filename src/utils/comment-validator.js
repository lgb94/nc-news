export const commentValidator = (comment) => {
    if(comment.length > 1){
        return true
    }
    else return false
}