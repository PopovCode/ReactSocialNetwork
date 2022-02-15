import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {
  updateNewPostTextActionCreator,
  addPostActionCreator,
  clearTextareaActionCreator,
} from "../../../redux/state";

const MyPosts = (props) => {
  let postElements = props.posts.map((p) => (
    <Post id={p.id} message={p.message} likes={p.likesCount} />
  ));

  let newPostElement = React.createRef();

  const addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(updateNewPostTextActionCreator(text));
  };

  let clearTextarea = () => {
    props.dispatch(clearTextareaActionCreator());
  };

  return (
    <div className={s.postBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            ref={newPostElement}
            onChange={onPostChange}
            value={props.newPostText}
          />
        </div>
        <div>
          <button onClick={addPost}>Добавить</button>
          <button onClick={clearTextarea}>Очистить</button>
        </div>
      </div>
      <div className={s.posts}>{postElements}</div>
    </div>
  );
};

export default MyPosts;
