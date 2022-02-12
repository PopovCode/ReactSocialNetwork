import { rerenderEntireTree } from "../render";

let state = {
  profilePage: {
    posts: [
      { id: 1, message: "Hello, how are you?", likesCount: 15 },
      { id: 2, message: "My ferst post!", likesCount: 50 },
      { id: 3, message: "Hello my Coder", likesCount: 777 },
    ],
    newPostText: "PopovCode, data from state",
  },

  dialogsPage: {
    dialogs: [
      { id: 1, name: "Anton" },
      { id: 2, name: "Miha" },
      { id: 3, name: "Solomaha" },
      { id: 4, name: "Kate" },
      { id: 5, name: "Igor" },
    ],
    messages: [
      { id: 1, message: "Hi" },
      { id: 2, message: "Hi how i you PopovCode" },
      { id: 3, message: "Yo" },
      { id: 4, message: "Yo" },
      { id: 5, message: "Yo" },
      { id: 6, message: "PopovCode test message" },
    ],
  },
};

export let addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0,
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = "";
  rerenderEntireTree(state);
};

export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

export default state;
