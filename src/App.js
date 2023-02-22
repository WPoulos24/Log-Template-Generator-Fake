import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div id="mainClass">
      <div id="header">
        <h1>Log Template Generator</h1>
      </div>
      <div id="main">
        <h2>What type of log do you need?</h2>
        <div>
          <Link to="../GiveCash">
            <button id="btns">Give Cash</button>
          </Link>
          <Link to="../MoneyBag">
            <button id="btns">Money Bag</button>
          </Link>
          <Link to="../Transaction">
            <button id="btns">Withdrawal/Deposit</button>
          </Link>
          <Link to="../FiveHundred">
            <button id="btns">$500+ Withdrawals</button>
          </Link>
          <Link to="../Opening">
            <button id="btns">Opening</button>
          </Link>
          <Link to="../BvCartCount">
            <button id="btns">BV Cart Count</button>
          </Link>
          <Link to="../BvDropEscort">
            <button id="btns">BV Drop Escort</button>
          </Link>
          <Link to="../Closing">
            <button id="btns">Closing</button>
          </Link>
          <Link to="../Closing2">
            <button id="btns">Closing 2</button>
          </Link>
          <Link to="../SignIn">
            <button id="btns">Sign In</button>
          </Link>
          <Link to="../SignOut">
            <button id="btns">Sign Out</button>
          </Link>
          <Link to="../ArmoredCar">
            <button id="btns">Armored Car</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default App;
