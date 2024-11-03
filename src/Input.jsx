import "./Input.css";
import PropTypes from "prop-types";

function Input(props) {
  const { type, id, name, value, handleChange } = props;
  return (
    <input
      type={type}
      min={10}
      max={20}
      value={value}
      onChange={handleChange}
      id={id}
      name={name}
    />
  );
}

Input.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.number,
  handleChange: PropTypes.func,
};

export default Input;
