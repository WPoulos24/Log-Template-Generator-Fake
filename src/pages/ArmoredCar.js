import { useState } from "react";
import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const questions = [
  {
    question: "Who is creating the daily log?",
    answers: [
      "Samantha Lee 123456-89",
      "Michael Taylor 123456-89",
      "David Rodriguez 123456-89",
      "Chloe Campbell 123456-89",
      "Ryan Martin 123456-89",
      "Laura Davis 123456-89",
      "Rob Smith 123456-89",
    ],
  },
  {
    question: "Who is the Count Room Cashier?",
    answers: [
      "Christopher Evans",
      "Joshua Kim",
      "Olivia Hernandez",
      "Benjamin Wright",
    ],
  },
  {
    question: "Who is the Securirty Supervisor/Officer?",
    answers: [
      "Ava Patel",
      "Ethan Nguyen",
      "Grace Thompson",
      "Liam Stewart",
      "Madison Brown",
      "Noah Mitchell",
      "Isabella Ramirez",
      "Daniel Turner",
      "Victoria Phillips",
      "William Carter",
    ],
  },
];

function Questions() {
  const [answer1, setAnswer1] = useState(null);
  const [answer2, setAnswer2] = useState(null);
  const [answer3, setAnswer3] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleAnswer = (index) => {
    if (currentQuestion === 0) {
      setAnswer1(index);
    } else if (currentQuestion === 1) {
      setAnswer2(index);
    } else if (currentQuestion === 2) {
      setAnswer3(index);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  const operator = questions[0].answers[answer1];
  const cashier = questions[1].answers[answer2];
  const security = questions[2].answers[answer3];

  function renderSwitch1(security) {
    let sec;
    switch (security) {
      case "Ava Patel":
        sec = "Security Supervisor Ava Patel";
        break;
      case "Ethan Nguyen":
        sec = "Security Supervisor Ethan Nguyen";
        break;
      case "Grace Thompson":
        sec = "Security Supervisor Grace Thompson";
        break;
      case "Liam Stewart":
        sec = "Security Supervisor Liam Stewart";
        break;
      case "Madison Brown":
        sec = "Security Supervisor Madison Brown";
        break;
      case "Noah Mitchell":
        sec = "Security Supervisor Noah Mitchell";
        break;
      case "Isabella Ramirez":
        sec = "Security Supervisor Isabella Ramirez";
        break;
      case "Daniel Turner":
        sec = "Security Officer Daniel Turner";
        break;
      case "Victoria Phillips":
        sec = "Security Officer Victoria Phillips";
        break;
      case "William Carter":
        sec = "Security Officer William Carter";
        break;
      default:
      case "":
        sec = "";
        break;
    }
    return { sec };
  }

  const ans = renderSwitch1(security);

  return (
    <div id="mainClass">
      <div id="header">
        <h1>Log Template Generator | Armored Car</h1>
        <Link to="/">
          <button id="btns">Home</button>
        </Link>
      </div>
      {currentQuestion < questions.length ? (
        <div id="questions">
          <h2 id="main">{questions[currentQuestion].question}</h2>
          <div id="answers">
            {questions[currentQuestion].answers.map((answer, index) => (
              <div id="buttons">
                <button
                  key={index}
                  id="btns"
                  onClick={() => handleAnswer(index)}
                >
                  {answer}
                </button>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <>
          <div id="main">
            <p>
              {operator}
              <br />
              <br />
              () GardaWorld notified Surveillance that they were on-site.
              Security was notified and {ans.sec} went en route. Initial visual
              assessment of the Money Route was conducted by Surveillance. All
              in order.
              <br />
              () Count Room Cashier {cashier} entered the Money Room and opened
              the Vault.
              <br />
              () {cashier} secured the Vault and exited the Money Room with the
              Deposit for GardaWorld.
              <br />
              () {security} made contact with GardaWorld and initiated the
              escort to the Man Trap.
              <br />
              () {security} arrived outside of the Man Trap with GardaWorld and{" "}
              {cashier} initiated the transfer of funds.
              <br />
              () Transfer of funds completed. {cashier} entered the Money Room
              and opened the Vault.
              <br />
              () {security} initiated the escort back to the Armored Truck.
              <br />
              () {cashier} secured the Vault and exited the Money Room.
              <br />
              () {security} notified Surveillance that the escort was complete.
              All in Order.
              <br />
              () GardaWorld exited the Premises.
            </p>
          </div>
          <button
            id="btns"
            onClick={() => {
              const element = document.getElementById("main");
              const range = document.createRange();
              range.selectNode(element);
              window.getSelection().removeAllRanges();
              window.getSelection().addRange(range);
              document.execCommand("copy");
              window.getSelection().removeAllRanges();
            }}
          >
            Copy
          </button>
        </>
      )}
    </div>
  );
}

export default Questions;
