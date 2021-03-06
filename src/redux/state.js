const ADD_POST = "ADD-POST";
const SEND_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const CLEAR_TEXTAREA = "CLEAR-TEXTAREA";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

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
        { id: 6, name: "Nataly" },
      ],
      messages: [
        { id: 1, message: "Hi" },
        { id: 2, message: "Hi how i you PopovCode" },
        { id: 3, message: "Yo" },
        { id: 4, message: "Yo" },
        { id: 5, message: "Yo" },
        { id: 6, message: "PopovCode test message" },
      ],
      newMessageBody: "New Message Text from state",
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
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscruber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscruber(this._state);
    } else if (action.type === CLEAR_TEXTAREA) {
      this._state.profilePage.newPostText = "";
      this._callSubscruber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
      this._state.dialogsPage.newMessageBody = action.newText;
      this._callSubscruber(this._state);
    } else if (action.type === SEND_MESSAGE) {
      this._state.dialogsPage.messages.push({
        id: 5,
        message: this._state.dialogsPage.newMessageBody,
      });
      this._state.dialogsPage.newMessageBody = "";
      this._callSubscruber(this._state);
    }
  },
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newText: body,
});
export const clearTextareaCreator = () => ({ type: CLEAR_TEXTAREA });

export default store;
window.store = store;
