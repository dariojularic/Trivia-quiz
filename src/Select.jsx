import "./Select.css";
import PropTypes from "prop-types";

function Select(props) {
  const { options, id, name, handleChange } = props;

  return (
    <select name={name} id={id} onChange={handleChange}>
      {options.map((option) => {
        return (
          <option key={option.id} value={option.value}>
            {option.label}
          </option>
        );
      })}
    </select>
  );
}

Select.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  options: PropTypes.array,
  handleChange: PropTypes.func,
};

export default Select;
