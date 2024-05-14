import React, { useEffect,useState } from "react";
import {getPosts} from "../services/postServices";
import SinglePost from "./SinglePost";

export interface Post{
    id:number,
    title:string,
    body:string,
    userId:number
}

const PostComponent:React.FC=()=>{
    const [posts,setPosts]=useState<Post[]>([])
useEffect(() => {
  async function fetchPosts() {
    const results = await getPosts()
    console.log(results);
    setPosts(results);
    
  }
  fetchPosts();
    
  
},[]);


    return(
        <div>
            {
                posts.map((post)=>(
                  <SinglePost data={post}/> 
                ))
            }

        </div>
    )
}

export default PostComponent;