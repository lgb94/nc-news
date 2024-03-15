import { useEffect, useState, useContext } from "react"
import { getAllArticles } from "../utils/GET-articles"

import LoadingSpinner from "./loading-spinner"
import TopicsContext from "../contexts/topics-context"
import RandomArticleDisplay from "./Random-article-display"
import MostRecentArticleDisplay from "./Most-recent-article-display"

const HomePage = () => {

    const [articles, setArticles] = useState([])
    const {topics, setTopics} = useContext(TopicsContext)
    const [isLoading, setIsloading] = useState(true)
    const [genericError, setGenericError] = useState(false)

    useEffect(() => {
        setIsloading(true)
        getAllArticles()
        .then((data) => {
            setArticles(data.articles)
            return data.articles
        }).then((articles) => {
            setIsloading(false)
        }).catch((err) => {
            setGenericError(true)
        })
    }, [])

    if (isLoading){
        return (
            <>
            <LoadingSpinner />
            </>
        )
    }

    if (genericError){
        return (
            <h2>"An error occurred, what did you do? Give it a refresh.</h2>
        )
    }


    return (
        <div className="Homepage">
        <h1>Welcome home darling</h1>
        <RandomArticleDisplay articles={articles}/>
        <MostRecentArticleDisplay articles={articles}/>
        </div>
    )
}

export default HomePage