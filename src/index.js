import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { PostContextProvider } from "./context/Providers";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <PostContextProvider>
      <App />
    </PostContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
