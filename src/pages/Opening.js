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
    question: "Who is the Sportsbook Manager/Supervisor?",
    answers: ["Ava Martin", "Mason Sanchez", "Hannah Reed", "Jacob Ross"],
  },
  {
    question: "Who is the Sportsbook Teller?",
    answers: [
      "Sarah Foster",
      "Alexander Parker",
      "Natalie Scott",
      "Caleb Morris",
      "Elizabeth Rivera",
      "Matthew Cooper",
    ],
  },
];

function Questions() {
  const [answer1, setAnswer1] = useState(null);
  const [answer2, setAnswer2] = useState(null);
  const [answer3, setAnswer3] = useState(null);
  const [answer4, setAnswer4] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleAnswer = (index) => {
    if (currentQuestion === 0) {
      setAnswer1(index);
    } else if (currentQuestion === 1) {
      setAnswer2(index);
    } else if (currentQuestion === 2) {
      setAnswer3(index);
    } else if (currentQuestion === 3) {
      setAnswer4(index);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  const operator = questions[0].answers[answer1];
  const cashier = questions[1].answers[answer2];
  const management = questions[2].answers[answer3];
  const teller = questions[3].answers[answer4];

  function renderSwitch(management) {
    let boss;
    switch (management) {
      case "Ava Martin":
        boss = "Manager Ava Martin";
        break;
      case "Mason Sanchez":
        boss = "Supervisor Mason Sanchez";
        break;
      case "Hannah Reed":
        boss = "Supervisor Hannah Reed";
        break;
      case "Jacob Ross":
        boss = "Supervisor Jacob Ross";
        break;
      default:
      case "":
        boss = "";
    }
    return { boss };
  }

  const ans = renderSwitch(management);

  return (
    <div id="mainClass">
      <div id="header">
        <h1>Log Template Generator | Opening</h1>
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
              () Count Room Cashier {cashier} and Sportsbook {ans.boss} enters
              the Money Room.
              <br />
              () {management} exited money room to start BV drop.
              <br />
              () {cashier} opened the vault.
              <br />
              () {management} entered the money room with BV drop.
              <br />
              () {management} exited the money room.
              <br />
              () {cashier} opened money room window to do the BV count with{" "}
              {management}.
              <br />
              () {cashier} closed and secured the money room window.
              <br />
              () {cashier} passed courier bag through window to {management}.
              <br />
              () {cashier} closed and secured the money room window.
              <br />
              () {cashier} opened the money room window to pass money bag to
              Sportsbook Teller {teller}.
              <br />
              () {cashier} closed and secured the money room window.
              <br />
              () {cashier} clsoed the vault.
              <br />
              () {cashier} exited the Money Room.
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
