import './App.css'
import { useState, useContext, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import LoggedInContext from './contexts/Logged-In-User-Context'
import TopicsContext from './contexts/topics-context'
import { getAllTopics } from './utils/GET-topics'
import Header from './components/Header'
import NavigationBar from './components/NavigationBar'
import AllArticles from './components/ArticleList'
import SingleArticlePage from './components/SingleArticlePage'
import UsersPage from './components/UsersPage'
import ErrorPage from './components/Error-page'
import HomePage from './components/Homepage'

function App() {

const [loggedInUser, setLoggedInUser] = useState({
  username : "guest",
  name : "guest",
  avatar_url: "https://images.macrumors.com/t/XjzsIpBxeGphVqiWDqCzjDgY4Ck=/800x0/article-new/2019/04/guest-user-250x250.jpg?lossy"
})
const [topics, setTopics] = useState([])

useEffect(() => {
  getAllTopics()
  .then((res) => {
    setTopics(res.topics)
  })
}, [])

  return (
    <div className="app">
    <LoggedInContext.Provider value={{loggedInUser: loggedInUser, setLoggedInUser: setLoggedInUser}}>
      <TopicsContext.Provider value={{topics: topics, setTopics: setTopics}}>
      <Header />
      <NavigationBar />
      <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/articles/" element={<AllArticles />}/>
        <Route path="/articles/:topic" element={<AllArticles />}/>
        <Route path="/articles/:topic/:article_id" element={<SingleArticlePage />}/>
        <Route path="/login" element={<UsersPage />}/>
      </Routes>
      </TopicsContext.Provider>
      </LoggedInContext.Provider>
    </div>
  )
}

export default App
