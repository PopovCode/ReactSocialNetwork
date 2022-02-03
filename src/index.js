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

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
