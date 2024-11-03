import { useState } from "react"
import "./Select.css"
import PropTypes from "prop-types"


function Select(props) {
  const {options, id, name} = props

  const [selectedValue, setSelectedValue] = useState()

  function handleChange(event) {
    setSelectedValue(event.target.value)
  }

  return (
    <select name={name} id={id} >
      {options.map(option => {
        return <option key={option.id} value={option.value}>{option.label}</option>
      })}
    </select>
  )
}

Select.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  options: PropTypes.array
}

export default Select;
