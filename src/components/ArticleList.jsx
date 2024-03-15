import { useState, useEffect, useContext } from "react"
import { useParams, useSearchParams } from "react-router-dom"
import { getAllArticles } from "../utils/GET-articles"
import { getAllTopics } from "../utils/GET-topics"
import TopicsContext from "../contexts/topics-context"
import ArticleCard from "./ArticleCard"
import ArticleQueries from "./Article-queries"
import capitalizer from "../utils/First-letter-capitalised"


const AllArticles = () => {
    const param = useParams()
    const [searchParams, setSearchParams] = useSearchParams()
    const [articles, setArticles] = useState([])
    const {topics, setTopics} = useContext(TopicsContext)
    const [isLoading, setIsloading] = useState(true)
    const [sortingQueries, setSortingQueries] = useState({})
    const [invalidParamError, setInvalidParamError] = useState(false)
    const [genericError, setGenericError] = useState(false)

    const sortByQuery = searchParams.get('sort_by')
    const orderQuery = searchParams.get('order')

    useEffect(() => {
        setIsloading(true)
        let validParam = false
        if(param.topic){
            topics.forEach((topicObject) => {
                if(topicObject.slug === param.topic){
                    validParam = true
                    setInvalidParamError(false)
                }
            })
        }
        if (param.topic && !validParam){
            setIsloading(false)
            setInvalidParamError(true)
        }
        let newQueryObject = {}
        if (param.topic && validParam){
            newQueryObject.topic = param.topic
        }
        if (sortByQuery){
            newQueryObject.sort_by = sortByQuery
        }
        if (orderQuery){
            newQueryObject.order = orderQuery
        }
        getAllArticles(newQueryObject)
        .then((data) => {
            setArticles(data.articles)
            return data.articles
        }).then((articles) => {
            setIsloading(false)
        }).catch((err) => {
            setGenericError(true)
        })
    }, [param, sortingQueries])

    if (isLoading){
        return (
            <h2>page loading</h2>
        )
    }
    if (invalidParamError){
        return (
            <h2>"{capitalizer(param.topic)}" isn't a topic, what were you thinking?</h2>
        )
    }
    if (genericError){
        return (
            <h2>"An error occurred, what did you do? Give it a refresh.</h2>
        )
    }
    return (
        <>
        {param.topic ? <h1>{capitalizer(param.topic)} Articles</h1> : <h1>All Articles</h1>}
        <ul className="all-articles-page">
        <ArticleQueries setSortingQueries={setSortingQueries}/>
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