import { useState, useEffect } from "react"
import { getAllArticles } from "../utils/GET-articles"
import ArticleCard from "./ArticleCard"

const AllArticles = () => {
    const [articles, setArticles] = useState([])
    const [isLoading, setIsloading] = useState(true)

    useEffect(() => {
        setIsloading(true)
        getAllArticles()
            .then((data) => {
                setArticles(data.articles)
            })
            .then(() => {
                setIsloading(false)
            })
    }, [])

    if (isLoading){
        return (
            <h2>page loading</h2>
        )
    }
    
    return (
        <>
        <h2>all articles</h2>
        <ul className="all-articles-page">
        {articles.map((article) => {
            return (
                 <div key={article.article_id}>
                    <ArticleCard article={article}/>
                    </div>
                    )})}
                    
        </ul>
        </>
    )
}

export default AllArticles;