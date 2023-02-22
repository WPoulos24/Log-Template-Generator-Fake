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
];

function Questions() {
  const [answer1, setAnswer1] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleAnswer = (index) => {
    if (currentQuestion === 0) {
      setAnswer1(index);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  const operator = questions[0].answers[answer1];

  return (
    <div id="mainClass">
      <div id="header">
        <h1>Log Template Generator | Sign In</h1>
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
              Start of Shift
              <br />
              All Cameras Working
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
