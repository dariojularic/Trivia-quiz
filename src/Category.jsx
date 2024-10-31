import { useState } from "react";
import "./Category.css"

function Category() {
  const [category, setCategory] = useState();

  function handleChange(event) {
    setCategory(parseInt(event.target.value))
    console.log(parseInt(category))
  }

  return (
    <div className="category-container">
      <label htmlFor="category">Category</label>
      <select name="category" id="category" onChange={handleChange}>
        <option value="21">Sports</option>
        <option value="22">Geography</option>
        <option value="20">Mithology</option>
        <option value="25">Art</option>
      </select>
    </div>
  )
}

export default Category;
