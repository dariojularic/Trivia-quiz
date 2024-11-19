import "./Button.css";
import PropTypes from "prop-types";

function Button(props) {
  const {value, type, handleClick} = props
  return <button type={type} onClick={handleClick}>{value}</button>;
}

Button.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  handleClick: PropTypes.func
}

export default Button;
