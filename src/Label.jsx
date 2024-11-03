import "./Label.css"
import PropTypes from "prop-types"

function Label(props) {
  const {forSelect, labelValue} = props

  return (
    <label htmlFor={forSelect}>{labelValue}</label>
  )
}

Label.propTypes = {
  forSelect: PropTypes.string,
  labelValue: PropTypes.string
}

export default Label;
