import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Ion } from "cesium";

Ion.defaultAccessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIzMjRjZWU3MC0zODM5LTRiZTYtOWIyNi02OGIwNzBiYWUwNzAiLCJpZCI6NjkxNDAsImlhdCI6MTYzMzIxMzMwOH0.5SzYVr3yOJY70CueWRzwwsVoEoGZKqo_bA5Wgpqjvmc";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
