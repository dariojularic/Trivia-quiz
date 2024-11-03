import "./Form.css";
import { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import Label from "./Label";
import Select from "./Select";
import Question from "./Question";
import Loading from "./Loading";

function Form() {
  const [numOfQuestions, setNumOfQuestions] = useState(10);
  const [category, setCategory] = useState("22");
  const [difficulty, setDifficulty] = useState("easy");
  const [quizQuestions, setQuizQuestions] = useState(null);
  const [questionsReady, setQuestionsReady] = useState(null);
  const baseUrl = `https://opentdb.com/api.php?amount=${numOfQuestions}&category=${category}&difficulty=${difficulty}`;

  // state za loading
  // state za pitanja

  // kako funkcionira event kao argument?
  // zasto promjena statea kasni i kako rijesit taj problem? useEffect??

  const difficultyOptions = [
    { id: 1, value: "easy", label: "Easy" },
    { id: 2, value: "medium", label: "Medium" },
    { id: 3, value: "hard", label: "Hard" },
  ];
  const categoryOptions = [
    { id: 1, value: "21", label: "Sports" },
    { id: 2, value: "20", label: "Mithology" },
    { id: 3, value: "22", label: "Geography" },
    { id: 4, value: "25", label: "Art" },
  ];

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
        // console.log("data", data);
        // console.log("quizQuestions", quizQuestions);
      })
      // .then((data) => setQuizQuestions(data))
      .catch((error) => {
        console.error(error);
      });
  }

  async function fetchData() {
    try {
      setQuestionsReady(false);
      const response = await fetch(baseUrl);
      // console.log(response)
      const data = await response.json();
      // console.log(data)
      console.log(questionsReady);
      // setQuestionsReady(true)
      return data;
    } catch (error) {
      console.error("Error", error);
    }
  }

  if (questionsReady === false) return <Loading />;

  // ako je promise ispunjen, prikazi prvo pitanje pitanje
  return (
    <>
      {!questionsReady ? (
        <div className="gameSetup">
          <h2>Quiz setup</h2>

          <form
            onSubmit={handleSubmit}
            method="get"
            action={`https://opentdb.com/api.php?amount=${numOfQuestions}&category=${category}&difficulty=${difficulty}`}
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
                handleChange={handleDifficultyChange}
              />
            </div>

            <div className="difficulty-container">
              <Label forSelect="difficulty" labelValue="Difficulty" />
              <Select
                options={difficultyOptions}
                id="difficulty"
                name="difficulty"
                handleChange={handleCategoryChange}
              />
            </div>

            <Button value="Start playing!" type="submit" />
          </form>
        </div>
      ) : (
        <div>
          <Question questions={quizQuestions} />
        </div>
      )}
    </>
  );
}

export default Form;
