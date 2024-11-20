import "./Question.css";
import Button from "./Button";
import PropTypes from "prop-types";

function Question(props) {
  const {
    correctAnswer,
    incorrectAnswers,
    question,
    activeIndex,
    handleClickAnswer,
    numOfCorrectAnswers,
    setNumOfCorrectAnswers,
  } = props;
  const allAnswers = incorrectAnswers.concat(correctAnswer);

  function handleClick(event) {
    if (correctAnswer && event.target.textContent === correctAnswer) {
      setNumOfCorrectAnswers((prev) => prev + 1);
    }
  }

  return (
    <>
      <div className="portal"></div>
      <div className="question-box">
        <div className="number-of-answers">
          <p>
            Correct answers: {numOfCorrectAnswers} / {activeIndex}
          </p>
        </div>

        <div className="question-container">
          <h2 className="question">{question}</h2>
          {allAnswers.map((answer) => {
            return (
              <p
                key={answer}
                className="answer"
                // zasto ovdje mora ic event kao argument?
                onClick={(event) => {
                  handleClick(event);
                  handleClickAnswer(event);
                }}
              >
                {answer}
              </p>
            );
          })}
        </div>

        <Button value="Next question" type="submit" handleClick={handleClickAnswer}/>
      </div>
    </>
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
  setNumOfCorrectAnswers: PropTypes.func,
  handleClickAnswer: PropTypes.func,
};

export default Question;
