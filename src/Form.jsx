import "./Form.css";
import { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import Label from "./Label";
import Select from "./Select";
import Question from "./Question";
import Loading from "./Loading";
import GameOver from "./GameOver";
import { baseUrl, categoryOptions, difficultyOptions } from "./constants";

function Form() {
  const [numOfQuestions, setNumOfQuestions] = useState(10);
  const [category, setCategory] = useState("21");
  const [difficulty, setDifficulty] = useState("easy");
  const [quizQuestions, setQuizQuestions] = useState(null);
  const [questionsReady, setQuestionsReady] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  // const [gameOver, setGameOver] = useState(false); // izbrisat state
  const [numOfCorrectAnswers, setNumOfCorrectAnswers] = useState(0);
  const currentQuestion = quizQuestions?.results[activeIndex] || null;
  // console.log(currentQuestion)
  const isGameOver = activeIndex + 1 === numOfQuestions;

  function handlePlayAgain() {
    setQuestionsReady(null);
    setActiveIndex(0);
    setNumOfCorrectAnswers(0);
  }

  function handleClickAnswer(isCorrectAnswer) {
    // if (activeIndex + 1 === numOfQuestions) {
    //   setGameOver(true);
    // } else {
    //   setActiveIndex((prev) => prev + 1);
    // }

    if (isCorrectAnswer) setNumOfCorrectAnswers((prev) => prev + 1);
    setActiveIndex((prev) => prev + 1);
  }

  function handleNumOfQuestionsChange(event) {
    setNumOfQuestions(parseInt(event.target.value));
  }

  function handleCategoryChange(event) {
    setCategory(event.target.value);
  }

  function handleDifficultyChange(event) {
    setDifficulty(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetchData()
      .then((data) => {
        setQuizQuestions(data);
        setQuestionsReady(true);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  async function fetchData() {
    try {
      setQuestionsReady(false);
      const response = await fetch(
        `${baseUrl}amount=${numOfQuestions}&category=${category}&difficulty=${difficulty}&type=multiple`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error", error);
    }
  }

  if (questionsReady === false) return <Loading />;

  return (
    <>
      {isGameOver && (
        <GameOver
          numOfQuestions={numOfQuestions}
          numOfCorrectAnswers={numOfCorrectAnswers}
          handlePlayAgain={handlePlayAgain}
        />
      )}

      {!questionsReady ? (
        <div className="gameSetup">
          <h2>Quiz setup</h2>

          <form
            onSubmit={handleSubmit}
            method="get"
            action={
              baseUrl +
              `amount=${numOfQuestions}&category=${category}&difficulty=${difficulty}&type=multiple`
            }
          >
            <div className="num-of-questions-container">
              <Label
                forSelect="number-of-questions"
                labelValue="Number Of Questions"
              />
              <Input
                type="number"
                id="number-of-questions"
                name="number-of-questions"
                value={numOfQuestions}
                handleChange={handleNumOfQuestionsChange}
              />
            </div>

            <div className="category-container">
              <Label forSelect="category" labelValue="Category" />
              <Select
                options={categoryOptions}
                id="category"
                name="category"
                handleChange={handleCategoryChange}
              />
            </div>

            <div className="difficulty-container">
              <Label forSelect="difficulty" labelValue="Difficulty" />
              <Select
                options={difficultyOptions}
                id="difficulty"
                name="difficulty"
                handleChange={handleDifficultyChange}
              />
            </div>

            <Button
              value="Start playing!"
              type="submit"
              handleClick={handleSubmit}
            />
          </form>
        </div>
      ) : (
        <div>
          <Question
            correctAnswer={currentQuestion.correct_answer}
            incorrectAnswers={currentQuestion.incorrect_answers}
            question={currentQuestion.question}
            setActiveIndex={setActiveIndex}
            activeIndex={activeIndex}
            numOfQuestions={numOfQuestions}
            handleClickAnswer={handleClickAnswer}
            numOfCorrectAnswers={numOfCorrectAnswers}
            setNumOfCorrectAnswers={setNumOfCorrectAnswers}
          />
        </div>
      )}
    </>
  );
}

export default Form;
