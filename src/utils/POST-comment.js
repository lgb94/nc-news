import axios from "axios";

const myNcNewsApi = axios.create({
    baseURL: "https://nc-news-app-0v2z.onrender.com/api/",
});

export const postCommentOnGivenArticleId = (article_ID, body) => {
    return myNcNewsApi
    .post(`/articles/${article_ID}/comments`, body)
    .then((res) => {
        return res.data
    });
};