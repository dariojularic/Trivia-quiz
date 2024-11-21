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

  // ovaj handleClick i handleAnswerClick treba zajedno stavit???

  //
  // function handleClick(event) {
  //   if (event.target.textContent === correctAnswer) {
  //     setNumOfCorrectAnswers((prev) => prev + 1);
  //   }
  // }

  function decodeHtml(html) {
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  }

  function shuffleAnswers(array) {
    return array.sort(() => 0.5 - Math.random());
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
          <h2 className="question">{decodeHtml(question)}</h2>
          {shuffleAnswers(allAnswers).map((answer) => {
            return (
              <p
                key={answer}
                className="answer"
                // zasto ovdje mora ic event kao argument?
                onClick={(event) => {
                  // handleClickAnswer(event.target.textContent === correctAnswer);
                  handleClickAnswer(true);

                  // handleClick(event);
                }}
              >
                {decodeHtml(answer)}
              </p>
            );
          })}
        </div>

        <Button
          value="Next question"
          type="submit"
          handleClick={handleClickAnswer}
        />
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
