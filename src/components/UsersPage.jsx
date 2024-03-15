import { useContext, useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import LoggedInContext from "../contexts/Logged-In-User-Context"
import { getAllUsers } from "../utils/GET-users"

const UsersPage = () => {
    const { loggedInUser, setLoggedInUser } = useContext(LoggedInContext)

    const [currentUserList, setCurrentUserList] = useState([])
    const [loginAttempt, setLoginAttempt] = useState('')
    const [loggedIn, setLoggedin]= useState(false)
    const navigate = useNavigate()

    useEffect(()=>{
        getAllUsers().then((res) => {
            return res.users
        })
        .then((res) => {
            setCurrentUserList(res)
        })
    },[])

    const handleSubmit = (event) => {
        event.preventDefault()
        currentUserList.forEach((user) => {
            if (user.username === loginAttempt){
                setLoggedInUser(user)
                setLoggedin(true)
            }
        })
        setLoginAttempt('')
    }
    
    return (
        <>
        {loggedIn ? 
        <>
        <h1>Hello {loggedInUser.username}!</h1>
        <button onClick={((event) => navigate(-1))}>back to previous page</button>
        </> 
        :
        <> 
        <h1>You need to login</h1>
        <form onSubmit={handleSubmit}>
           <input 
            type="text"
            value={loginAttempt}
            onChange={(event) => {
                setLoginAttempt(event.target.value)
            }}
             />
            <button>login</button>
        </form>
        </>}
    </>
    )
}

export default UsersPage