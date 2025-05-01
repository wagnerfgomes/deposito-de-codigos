import { useParams } from "react-router-dom"

import posts from 'Data/dados';
import Erro404 from "./Erro404";

const Post = () =>{
    const parametro = useParams()

    const post = posts.find((nome) => nome === parametro.id)

    if (!post){
        return <Erro404/>
    }

    return <h1> Post {parametro.id}</h1>
}
export default Post