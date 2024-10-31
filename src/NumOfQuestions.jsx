import { useState } from "react";
import "./NumOfQuestions.css"

function NumOfQuestions() {
  const [number, setNumber] = useState(10);

  function handleChange(event) {
    // console.log(event.target.value)
    setNumber(parseInt(event.target.value))
  }
  return (
    <div className="num-of-questions-container">
      <label htmlFor="number-of-questions">Number of Questions</label>
      <input type="number" id="number-of-questions" name="number-of-questions" value={number} min={10} max={20} onChange={handleChange}/>
    </div>
  )
}

export default NumOfQuestions;
