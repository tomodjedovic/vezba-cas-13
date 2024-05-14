import React from "react"
import { Post } from "./PostComponent";

interface PostProps{
    data: Post
}


const SinglePost:React.FC<PostProps>=({data})=>{
    console.log("jghnfjghjg",data)
    return(
        <div>
           <h3>title : {data.title}</h3>
           <p>{data.body}</p>
        </div>
    )
};
export default SinglePost;