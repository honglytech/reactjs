import React, { useState } from "react";
import ReactDOM from "react-dom";

export default function App() {
  
  const [value, setValue] = useState();

  function handleSubmit(event) {
    event.preventDefault();
    alert("Your favorite flavor is: " + value);
  }

  function handleChange(event){
    setValue(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Pick your favorite flavor:
        <select value={value} onChange={handleChange}>
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select>
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
  
}

ReactDOM.render(<App />, document.querySelector("#root"));
