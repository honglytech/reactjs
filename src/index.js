import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "coconut",
      countries: [
        { id: "1", country: "Cambodia" },
        { id: "2", country: "Australia" },
        { id: "3", country: "US" }
      ]
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    alert("Your favorite flavor is: " + this.state.value);
    event.preventDefault();
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
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
        <br />
        <br />
        <label>
          Looping through Array
          <select>
            {this.state.countries.map(item => (
              <option key={item.id} value={item.country}>
                {item.country}
              </option>
            ))}
            {console.log(this.state.countries)}
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
