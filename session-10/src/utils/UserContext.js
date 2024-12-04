import { createContext } from "react"
const UserContext=createContext({
    user:{
        name:"Abhinash",
        email:"abhi123@gmail.com"
    }
})
export default UserContext;