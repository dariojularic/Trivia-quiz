import "./Form.css";
import { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import Label from "./Label";
import Select from "./Select";

function Form() {
  const [numOfQuestions, setNumOfQuestions] = useState(10);
  const [category, setCategory] = useState("22");
  const [difficulty, setDifficulty] = useState("easy");
  // const baseUrl
  // state za loading
  // state za pitanja

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
    fetchData(numOfQuestions, category, difficulty)
      .then((data) => console.log(data))
      .catch((error) => {
        console.error(error);
      });
  }

  async function fetchData(questions, categ, diff) {
    try {
      const response = await fetch(
        `https://opentdb.com/api.php?amount=${questions}&category=${categ}&difficulty=${diff}`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error", error);
    }
  }

  // ako je promise ispunjen, prikazi prvo pitanje pitanje
  // napravit select componentu
  // label componentu
  // input komponentu
  // button komponenta
  // napravit funkciju fetchData(url)
  return (
    <div className="game">
      <h2>Quiz setup</h2>

      <form
        onSubmit={handleSubmit}
        method="get"
        action={`https://opentdb.com/api.php?amount=${numOfQuestions}&category=${category}&difficulty=${difficulty}`}
      >
        <div className="num-of-questions-container">
          <label htmlFor="number-of-questions">Number Of Questions</label>
          <input
            id="number-of-questions"
            name="number-of-questions"
            type="number"
            value={numOfQuestions}
            min={10}
            max={20}
            onChange={handleNumOfQuestionsChange}
          />
        </div>

        <div className="category-container">
          {/* <label htmlFor="category">Category</label>
          <select
            value={category}
            name="category"
            id="category"
            onChange={handleCategoryChange}
          >
            <option value="21">Sports</option>
            <option value="20">Mithology</option>
            <option value="22">Geography</option>
            <option value="25">Art</option>
          </select> */}
          <Label forSelect="difficulty" labelValue="Difficulty"/>
          <Select options={difficultyOptions} id="difficulty" name="difficulty" />
        </div>

        <div className="difficulty-container">
          <Label forSelect="category" labelValue="Category" />
          <Select options={categoryOptions} id="category" name="category" />
        </div>

        <button type="submit">Start playing!</button>
      </form>
    </div>
  );
}

export default Form;
