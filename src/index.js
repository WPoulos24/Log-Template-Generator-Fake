import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import GiveCash from "./pages/GiveCash";
import MoneyBag from "./pages/MoneyBag";
import Transaction from "./pages/Transaction";
import SignIn from "./pages/SignIn";
import SignOut from "./pages/SignOut";
import FiveHundred from "./pages/FiveHundred";
import BvCartCount from "./pages/BvCartCount";
import BvDropEscort from "./pages/BvDropEscort";
import Opening from "./pages/Opening";
import Closing from "./pages/Closing";
import Closing2 from "./pages/Closing2";
import ArmoredCar from "./pages/ArmoredCar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "GiveCash",
    element: <GiveCash />,
  },
  {
    path: "MoneyBag",
    element: <MoneyBag />,
  },
  {
    path: "Transaction",
    element: <Transaction />,
  },
  {
    path: "SignIn",
    element: <SignIn />,
  },
  {
    path: "SignOut",
    element: <SignOut />,
  },
  {
    path: "FiveHundred",
    element: <FiveHundred />,
  },
  {
    path: "BvCartCount",
    element: <BvCartCount />,
  },
  {
    path: "BvDropEscort",
    element: <BvDropEscort />,
  },
  {
    path: "Opening",
    element: <Opening />,
  },
  {
    path: "Closing",
    element: <Closing />,
  },
  {
    path: "Closing2",
    element: <Closing2 />,
  },
  {
    path: "ArmoredCar",
    element: <ArmoredCar />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
