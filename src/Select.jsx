import "./Select.css"

function Select(props) {
  props.map(option => {
    return (
      <option key={id} value={option}></option>
    )
  })
}
