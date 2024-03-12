import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

const SingleArticlePage = () => {

    const param = useParams()
    const [currentArticleId, setCurrentArticleId] = useState(param.article_id)
    console.log(currentArticleId)

    return (
        <h2>single article page coming soon</h2>
    )

}

export default SingleArticlePage