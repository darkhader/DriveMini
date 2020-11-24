import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "../src/react-keyed-file-browser.css"
import reportWebVitals from "./reportWebVitals";
//import FileBrowser, {Icons} from 'react-keyed-file-browser';
import PopShit from './pop-shit'
import PopShit2 from './pop-shit-2'
ReactDOM.render(
  <React.StrictMode>
    <PopShit2/>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
