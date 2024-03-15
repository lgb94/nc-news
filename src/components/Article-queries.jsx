import { useSearchParams } from "react-router-dom"

const ArticleQueries = (props) => {

    const setSortingQueries = props.setSortingQueries

    const [searchParams, setSearchParams] = useSearchParams()

    let newSortingQueries = {}

    const handleQueries = (event) => {
        const newParams = new URLSearchParams(searchParams)
        for (const key in newSortingQueries){
            newParams.set(key, newSortingQueries[key])
        }
        setSearchParams(newParams)
        setSortingQueries(newSortingQueries)
    }

    return (
        <div className="articles-query-box-wrapper">
            <select 
                name="sort-by" 
                id="sort-by"
                onChange={((event) => {
                    newSortingQueries.sort_by=event.target.value
                })}>
                    <option value="">select sorting option</option>
                    <option value="created_at">date created</option>
                    <option value="title">title</option>
                    <option value="votes">votes</option>
                    <option value="comment_count">comments</option>
                </select>
                <select 
                name="sort-desc/asc" 
                id="sort-desc/asc"
                onChange={((event) => {
                    newSortingQueries.order=event.target.value
                })}>
                    <option value="">select asc/desc</option>
                    <option value="desc">descending</option>
                    <option value="asc">ascending</option>
                </select>
                <button onClick={((event) => handleQueries())}>send it</button>
        </div>
    )
}

export default ArticleQueries