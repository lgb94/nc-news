import axios from "axios";

const myNcNewsApi = axios.create({
    baseURL: "https://nc-news-app-0v2z.onrender.com/api/",
});

export const getAllArticles = () => {
    return myNcNewsApi
    .get("/articles")
    .then((res) => {
        return res.data
    });
};