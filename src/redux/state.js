let store = {
  _state: {
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
  },
  _callSubscruber() {
    console.log("State changed");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscruber = observer;
  },

  dispatch(action) {
    if (action.type === "ADD-POST") {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscruber(this._state);
    } else if (action.type === "UPDATE-NEW-POST-TEXT") {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscruber(this._state);
    } else if (action.type === "CLEAR-TEXTAREA") {
      this._state.profilePage.newPostText = "";
      this._callSubscruber(this._state);
    }
  },
};

export default store;
window.store = store;
