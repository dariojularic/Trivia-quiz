import "./Question.css";
import Button from "./Button";
import PropTypes from "prop-types";
import { useState } from "react";

function Question(props) {
  const [numOfCorrectAnswers, setNumOfCorrectAnswers] = useState(0)
  const {
    correctAnswer,
    incorrectAnswers,
    question,
    activeIndex,
    setActiveIndex,
  } = props;
  const allAnswers = incorrectAnswers.concat(correctAnswer);
  function handleClick(event) {
    setActiveIndex((prev) => prev + 1);
    if (event.target.textContent === correctAnswer) {
      // console.log("correct");
      setNumOfCorrectAnswers(prev => prev + 1)
    }

    
  }

  return (
    <div className="question-box">
      <div className="number-of-answers">
        <p>
          Correct answers: {numOfCorrectAnswers} /{activeIndex}
        </p>
      </div>

      <div className="question-container">
        <h2 className="question">{question}</h2>
        {allAnswers.map((answer) => {
          return (
            <p key={answer} className="answer" onClick={handleClick}>
              {answer}
            </p>
          );
        })}
      </div>

      <Button value="Next question" type="submit" />
    </div>
  );
}

Question.propTypes = {
  correctAnswer: PropTypes.string,
  incorrectAnswers: PropTypes.array,
  numOfQuestions: PropTypes.number,
  question: PropTypes.string,
  activeIndex: PropTypes.number,
  setActiveIndex: PropTypes.func,
  numOfCorrectAnswers: PropTypes.number,
};

export default Question;
