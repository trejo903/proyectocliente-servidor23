import { createContext,useState } from "react"
import clienteAxios from "../config/axios.js";
import {blog} from '../data/blog.js'
const BlogContext = createContext();
const BlogProvider = ({children})=>{
    const [blog, setblog ] = useState([]);
    const [blognuevo, setblognuevo] = useState({})
    const obtenerDatos = async()=>{
        try {
          const {data} = await clienteAxios("/api/blog")
        setblog(data.data)
        setblognuevo(data.data[0])
        } catch (error) {
          console.log(error)
        }
      }
    obtenerDatos();
    return(
    
        <BlogContext.Provider
        value={{
            blog,
            blognuevo
        }}
        >{children}</BlogContext.Provider>
    )


}

export{
    BlogProvider
}

export default BlogContext