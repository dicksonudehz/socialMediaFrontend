import "./post.css";
import { MoreVert } from "@mui/icons-material";
import { Users } from "../../dummyData.js";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Post({ post }) {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState([])

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };
   const PF = process.env.REACT_APP_PUBLIC_FOLDER

   useEffect(() => {
    const fetchUser  = async () => {
      const res = await axios.get ("post.userId")
      setUser(res.data)

    }
    fetchUser()
  }, [])

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src={Users.filter((u) => u.id === post.id)[0].profilePicture}
              alt=""
              className="postProfileImg"
            />
            <span className="postUserName">
              {Users.filter((u) => u.id === post.id)[0].username}
            </span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img src={ post.photo} className="postImage" alt="post picture" />
        </div>
        <div className="postButton">
          <div className="postButtomLeft">
            <img src="/assets/like.png" alt="" className="likeIcon" onClick={likeHandler} />
            <img src="/assets/heart.png" alt="" className="likeIcon"onClick={likeHandler}  />
            <span className="postLikeCounter" >
              {like} people likes it
            </span>
          </div>
          <div className="postButtomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
