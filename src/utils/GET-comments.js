import axios from "axios";

const myNcNewsApi = axios.create({
    baseURL: "https://nc-news-app-0v2z.onrender.com/api/",
});

export const getCommentsbyId = (article_ID) => {
    return myNcNewsApi
    .get(`/articles/${article_ID}/comments`)
    .then((res) => {
        return res.data
    });
};
