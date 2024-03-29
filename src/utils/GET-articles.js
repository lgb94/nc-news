import axios from "axios";

const myNcNewsApi = axios.create({
    baseURL: "https://nc-news-app-0v2z.onrender.com/api/",
});

export const getAllArticles = (object) => {
    return myNcNewsApi
    .get("articles", {
        params: 
            object
        ,
    })
    .then((res) => {
        return res.data
    });
};

export const getArticleById = (article_ID) => {
    return myNcNewsApi
    .get(`/articles/${article_ID}`)
    .then((res) => {
        return res.data
    });
};