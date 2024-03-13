import axios from "axios";

const myNcNewsApi = axios.create({
    baseURL: "https://nc-news-app-0v2z.onrender.com/api/",
});

export const patchArticleById = (article_ID, body) => {
    return myNcNewsApi
    .patch(`/articles/${article_ID}`, body)
    .then((res) => {
        return res.data
    });
};