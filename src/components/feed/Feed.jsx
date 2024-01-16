import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import {Posts} from "../../dummyData.js"
import { useEffect, useState } from "react";
import axios from "axios";



export default function Feed() {
const [posts, setPost] = useState([])

useEffect(() => {
  const fetchPost  = async () => {
    const res = await axios.get ("post/timeline/64e173f5f03e05eba2a3c395")
    setPost(res.data)
  }
  fetchPost()
}, [])
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share/>
        {
          Posts.map((p) =>(
            <Post key ={p.id} post ={p}/>
          ))
        }
      </div>
    </div>
  );
}
