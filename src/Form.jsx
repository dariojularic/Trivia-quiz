import "./Form.css"
import { useState } from "react"

function Form() {
  const [numOfQuestions, setNumOfQuestions] = useState(0)
  const [category, setCategory] = useState()
  const [difficulty, setDifficulty] = useState()

  function handleNumOfQuestionsChange(event) {
    setNumOfQuestions(parseInt(event.target.value))
  }

  function handleCategoryChange(event) {
    setCategory(event.target.value)
  }

  function handleDifficultyChange(event) {
    setDifficulty(event.target.value)
  }

  return (
    <div className="game">
      <h2>Quiz setup</h2>
      
      <form method="get" action={`https://opentdb.com/api.php?amount=${numOfQuestions}&category=${category}&difficulty=${difficulty}`}>
        <div className="num-of-questions-container">
          <label htmlFor="number-of-questions">Number Of Questions</label>
          <input id="number-of-questions" name="number-of-questions" type="number" value={10} min={10} max={20} onChange={handleNumOfQuestionsChange}/>
        </div>

        <div className="category-container">
          <label htmlFor="category">Category</label>
          <select name="category" id="category" onChange={handleCategoryChange}>
            <option value="21">Sports</option>
            <option value="20">Mithology</option>
            <option value="22">Geography</option>
            <option value="25">Art</option>
          </select>
        </div>

        <div className="difficulty-container">
          <label htmlFor="difficulty">Difficulty</label>
          <select name="difficulty" id="difficulty" onChange={handleDifficultyChange}>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>

        <button>Start playing!</button>
      </form>
    </div>
  )
}

export default Form;
