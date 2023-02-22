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
  {
    question: "Who is the Sportsbook Supervisor?",
    answers: ["Mason Sanchez", "Hannah Reed", "Jacob Ross"],
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
  const teller = questions[2].answers[answer3];
  const boss = questions[3].answers[answer4];

  return (
    <div id="mainClass">
      <div id="header">
        <h1>Log Template Generator | Closing</h1>
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
              () Count Room Cashier {cashier} enters the Money Room and opened
              the Vault.
              <br />
              () {cashier} opened the Money Room Window to Collect End of Shift
              Bag from Sportsbook Teller {teller}.
              <br />
              () {cashier} closes and secures the Money Room Window.
              <br />
              () Sportsbook Supervisor {boss} enters the Money Room.
              <br />
              () {cashier} closed the Vault.
              <br />
              () {cashier} and {boss} exited the Money Room.
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
