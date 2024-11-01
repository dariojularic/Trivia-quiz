import "./Form.css"
import { useState } from "react"

function Form() {
  const [numOfQuestions, setNumOfQuestions] = useState(10);
  const [category, setCategory] = useState("22");
  const [difficulty, setDifficulty] = useState("easy");

  function handleNumOfQuestionsChange(event) {
    setNumOfQuestions(parseInt(event.target.value))
  }

  function handleCategoryChange(event) {
    setCategory(event.target.value)
  }

  function handleDifficultyChange(event) {
    setDifficulty(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    fetchData(numOfQuestions, category, difficulty)
      .then(data => console.log(data))
      .catch(error => {
        console.error(error)
      })
  }

  async function fetchData(questions, categ, diff) {
    try {
      const response = await fetch(`https://opentdb.com/api.php?amount=${questions}&category=${categ}&difficulty=${diff}`);
      const data = await response.json();
      return data
    } catch (error) {
      console.error("Error", error)
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

      <form onSubmit={handleSubmit} method="get" action={`https://opentdb.com/api.php?amount=${numOfQuestions}&category=${category}&difficulty=${difficulty}`}>
        <div className="num-of-questions-container">
          <label htmlFor="number-of-questions">Number Of Questions</label>
          <input id="number-of-questions" name="number-of-questions" type="number" value={numOfQuestions} min={10} max={20} onChange={handleNumOfQuestionsChange}/>
        </div>

        <div className="category-container">
          <label htmlFor="category">Category</label>
          <select value={category} name="category" id="category" onChange={handleCategoryChange}>
            <option value="21">Sports</option>
            <option value="20">Mithology</option>
            <option value="22">Geography</option>
            <option value="25">Art</option>
          </select>
        </div>

        <div className="difficulty-container">
          <label htmlFor="difficulty">Difficulty</label>
          <select value={difficulty} name="difficulty" id="difficulty" onChange={handleDifficultyChange}>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>

        <button type="submit">Start playing!</button>
      </form>
    </div>
  )
}

export default Form;
