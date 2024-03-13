import { useContext, useState, useEffect } from "react"
import LoggedInContext from "../contexts/Logged-In-User-Context"
import { getAllUsers } from "../utils/GET-users"

const UsersPage = () => {
    const { loggedInUser, setLoggedInUser } = useContext(LoggedInContext)

    const [currentUserList, setCurrentUserList] = useState([])
    const [loginAttempt, setLoginAttempt] = useState('')

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
            }
            if (user.username !== loginAttempt){
            }
        })
        setLoginAttempt('')
    }
    
    return (
        <>
        <form onSubmit={handleSubmit}>
        <h1>you need to login</h1>
            <input 
            type="text"
            value={loginAttempt}
            onChange={(event) => {
                setLoginAttempt(event.target.value)
            }}
             />
            <button>login</button>
        </form>
        </>
    )
}

export default UsersPage