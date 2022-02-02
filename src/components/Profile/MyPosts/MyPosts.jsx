import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
  let postData = [
    {id:1, message: 'Hello, how are you?', likesCount:15},
    {id:2, message: 'My ferst post!', likesCount:50},

  ]
  return (
    <div className={s.postBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea/>
        </div>
        <div>
          <button>Add</button>
          <button>Remove</button>
        </div>
      </div>
      <div className={s.posts}>
        <Post message={postData[0].message} likes={postData[0].likesCount}/>
        <Post message={postData[1].message} likes={postData[1].likesCount}/>
      </div>
    </div>
  )
}

export default MyPosts;
