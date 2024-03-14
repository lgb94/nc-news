import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getAllArticles } from "../utils/GET-articles"
import ArticleCard from "./ArticleCard"


const AllArticles = () => {
    const param = useParams()
    const [articles, setArticles] = useState([])
    const [isLoading, setIsloading] = useState(true)

    useEffect(() => {
        setIsloading(true)
        getAllArticles(param)
            .then((data) => {
                setArticles(data.articles)
            })
            .then(() => {
                setIsloading(false)
            })
    }, [param])

    if (isLoading){
        return (
            <h2>page loading</h2>
        )
    }
    
    return (
        <>
        {param.topic ? <h1>articles about {param.topic}</h1> : <h1>ALL ARTICLES</h1>}
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