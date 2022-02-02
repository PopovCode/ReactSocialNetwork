import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
  let posts = [
    {id:1, message: 'Hello, how are you?', likesCount:15},
    {id:2, message: 'My ferst post!', likesCount:50},
  ]

 let postElements = posts.map(p => <Post message={p.message} likes={p.likesCount}/>)

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
        { postElements }
      </div>
    </div>
  )
}

export default MyPosts;
