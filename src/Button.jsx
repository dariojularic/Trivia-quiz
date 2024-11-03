import "./Button.css";
import PropTypes from "prop-types";

function Button(props) {
  const {value, type} = props
  return <button type={type}>{value}</button>;
}

Button.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string
}

export default Button;
