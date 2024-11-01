import { useState } from "react";
import "./Difficulty.css"

function Difficulty() {
  const [difficulty, setDifficulty] = useState("easy");

  function handleChange(event) {
    setDifficulty(event.target.value)
  }

  return(
    <div className="difficulty-container">
      <label htmlFor="difficulty">Difficulty</label>
      <select name="difficulty" id="difficulty" onChange={handleChange}>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
    </div>
  )
}

export default Difficulty;
