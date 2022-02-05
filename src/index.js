import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

let posts = [
  { id: 1, message: "Hello, how are you?", likesCount: 15 },
  { id: 2, message: "My ferst post!", likesCount: 50 },
  { id: 3, message: "Hello my Coder", likesCount: 777 },
];

let dialogs = [
  { id: 1, name: "Anton" },
  { id: 2, name: "Miha" },
  { id: 3, name: "Solomaha" },
  { id: 4, name: "Kate" },
  { id: 5, name: "Igor" },
];

let messages = [
  { id: 1, message: "Hi" },
  { id: 2, message: "Hi how i you PopovCode" },
  { id: 3, message: "Yo" },
  { id: 4, message: "Yo" },
  { id: 5, message: "Yo" },
  { id: 6, message: "PopovCode test message" },
];

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
