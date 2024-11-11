import PropTypes from "prop-types";
import "./GameOver.css";

function GameOver(props) {
  const { numOfCorrectAnswers, numOfQuestions } = props;

  return (
    <div className="game-over-container">
      {console.log("agagagagaaga")}
      <h3 className="game-over-header">Game Over</h3>
      <p>
        You answered {numOfCorrectAnswers} / {numOfQuestions} or{" "}
        {(numOfCorrectAnswers / numOfQuestions) * 100}%{" "}
      </p>
    </div>
  );
}

GameOver.propTypes = {
  numOfCorrectAnswers: PropTypes.number,
  numOfQuestions: PropTypes.number,
};

export default GameOver;
