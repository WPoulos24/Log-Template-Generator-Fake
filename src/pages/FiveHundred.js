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
    question: "Who is the Sportsbook Supervisor?",
    answers: ["Mason Sanchez", "Hannah Reed", "Jacob Ross"],
  },
  {
    question: "What type of account?",
    answers: ["MyBets", "BetSports", "PlayNow"],
  },
];

// Assigning Variables //

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
  const supervisor = questions[1].answers[answer2];
  const company = questions[2].answers[answer3];

  // End of Assigning Variables ///

  // Show Questions //

  return (
    <div id="mainClass">
      <div id="header">
        <h1>Log Template Generator | $500+ Withdrawals</h1>
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
        // End of Show Questions //

        // Show Result //

        <>
          <div id="main">
            <p>
              {operator}
              <br />
              <br />
              () Sportsbook Supervisor {supervisor} notified Surveillance that a
              patron was withdrawing $() from their {company} account.
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
            Copy Log
          </button>
          <hr id="line" />
          <div id="incident">Incident:</div>
          <div id="main">
            <p id="yo">
              {operator}
              <br />
              <br />
              () Sportsbook Supervisor {supervisor} nnotified Surveillance that
              a patron was withdrawing $() from their {company} account.
              <br />
              () Sportsbook Supervisor {supervisor} e-mailed Surveillance a copy
              of the patron's driver's ID.
              <br />
              <br />
              Patron Info:
              <br />
              NAME:
              <br />
              DOB:
              <br />
              ADDRESS:
            </p>
          </div>
          <button
            id="btns"
            onClick={() => {
              const element = document.getElementById("yo");
              const range = document.createRange();
              range.selectNode(element);
              window.getSelection().removeAllRanges();
              window.getSelection().addRange(range);
              document.execCommand("copy");
              window.getSelection().removeAllRanges();
            }}
          >
            Copy Incident Log
          </button>
        </>
      )}
    </div>
  );

  // End of Show Result //
}

export default Questions;
