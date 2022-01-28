import React from "react";
import classes from './Post.module.css'

const Post = () => {
  return (
    <div className={classes.item}>
      <img src="https://avatars.mds.yandex.net/get-kino-vod-films-gallery/28788/47e2fd514411e18b76af786d7417062d/100x64_3" alt="ava autor"/>
      <span>Post item 1</span>
      <div>
        Like
      </div>
    </div>
  )
}

export default Post;
