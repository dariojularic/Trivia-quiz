import { useState } from "react"
import "./Select.css"

function Select(props) {
  const [selectedValue, setSelectedValue] = useState()

  function handleChange(event) {
    setSelectedValue(event.target.value)
  }

  return (
    <select name="" id="">
      {}
    </select>
  )
}
