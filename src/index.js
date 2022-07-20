import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "../node_modules/react-bootstrap/dist/react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import reducer, { initialState } from "./contextstore/Reducer";
import { StateProvider } from "./contextstore/StateProvider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <StateProvider initialState={initialState} reducer={reducer}>

    {/* <App /> */}

    <App />

    {/* </StateProvider>  */}
  </React.StrictMode>
);
