import { useState } from "react"
import "./Select.css"

function Select(props) {
  console.log("props", props)
  const {id, difficulty, difficultyOptions, setDifficulty} = props


  // console.log(difficulty)
  // console.log(difficultyOptions)
  // console.log(setDifficulty)
  const [selectedValue, setSelectedValue] = useState()

  function handleChange(event) {
    setSelectedValue(event.target.value)
  }

  return (
    <select defaultValue={difficulty} name="difficulty" id="difficulty" onChange={setDifficulty()}>
      {difficultyOptions.map(option => {
        return <option key={id} value={option.value}>{option.label}</option>
      })}
    </select>
  )
}

export default Select;
