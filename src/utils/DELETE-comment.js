import axios from "axios";

const myNcNewsApi = axios.create({
    baseURL: "https://nc-news-app-0v2z.onrender.com/api/",
});

export const deleteCommentByCommentId = (comment_id) => {
    return myNcNewsApi
    .delete(`/comments/${comment_id}`)
    .then((res) => {
        return res
    });
};