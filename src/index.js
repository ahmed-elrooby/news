import React from "react";
import ReactDOM from "react-dom/client";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Home from "./Components/Home/Home";
import Erorr from "./Components/Error/Error";
import Business from "./Components/Business/Business.jsx";
import Entertainment from "./Components/Entertainment/Entertainment.jsx";
import Health from "./Components/Health/Health.jsx";
import Science from "./Components/Science/Science.jsx";
import Sports from "./Components/Sports/Sports.jsx";
import Technology from "./Components/Technology/Technology.jsx";
import Login from "./Components/Login/Login.jsx";
import Register from "./Components/Register/Register.jsx";
let route = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      { path: "/home", element: <Home /> },
      { path: "/business", element: <Business /> },
      { path: "/entertainment", element: <Entertainment /> },
      { path: "/health", element: <Health /> },
      { path: "/science", element: <Science /> },
      { path: "/sports", element: <Sports /> },
      { path: "/technology", element: <Technology /> },
      { path: "/register", element: <Register /> },
      { path: "/login", element: <Login /> },
      { path: "", element: <Home /> },
      { path: "*", element: <Erorr /> },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RouterProvider router={route}>
    <App />
  </RouterProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
