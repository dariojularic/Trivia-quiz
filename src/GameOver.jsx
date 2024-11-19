import PropTypes from "prop-types";
import "./GameOver.css";
import ReactDom from "react-dom";
import Button from "./Button"

function GameOver(props) {
  const { numOfCorrectAnswers, numOfQuestions, handlePlayAgain } = props;

  return ReactDom.createPortal(
    <>
      <div className="overlay"></div>
      <div className="game-over-container">
        <h3 className="game-over-header">Game Over</h3>
        <p>
          You answered {numOfCorrectAnswers} / {numOfQuestions} or{" "}
          {((numOfCorrectAnswers / numOfQuestions) * 100).toFixed(2)}%{" "} correctly!
        </p>
        <Button value="Play again!" type="submit" handleClick={handlePlayAgain}/>
      </div>
    </>,
    document.getElementById("portal")
  );
}

GameOver.propTypes = {
  numOfCorrectAnswers: PropTypes.number,
  numOfQuestions: PropTypes.number,
};

export default GameOver;
