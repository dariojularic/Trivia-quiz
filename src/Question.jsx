import "./Question.css";
import Button from "./Button";
import PropTypes from "prop-types";
import { useState } from "react";

function Question(props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const { questions } = props;
  const allQuestions = questions.results;
  const allAnswers = questions.results[activeIndex].incorrect_answers.concat(
    questions.results[activeIndex].correct_answer
  );

  return (
    <div className="question-box">
      <div className="number-of-answers">
        <p>
          Correct answers:{activeIndex} /{questions.results.length}
        </p>
      </div>

      <div className="question-container">
        <h2 className="question">{allQuestions[activeIndex].question}</h2>
        {allAnswers.map((answer, index) => {
          return (
            <>
              {console.log("answer index", index)}
              <p key={index} className="answer">
                {answer}
              </p>
            </>
          );
        })}
      </div>

      <Button value="Next question" type="submit" />
    </div>
  );
}

Question.propTypes = {
  questions: PropTypes.object,
  length: PropTypes.func,
};

export default Question;
