import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {

    state = { value: "coconut" }; // constructor super is depericated

  


//using arrow function to auto bind 
  handleSubmit=(event)=> {
    alert("Your favorite flavor is: " + this.state.value);
    event.preventDefault();
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      
      <React.Fragment>
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite flavor:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
            </React.Fragment>

    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
