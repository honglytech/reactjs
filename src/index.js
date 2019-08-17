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
      ],
      courses: [],
      course: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmitCourse = this.handleSubmitCourse.bind(this);
  }

  handleSubmit(event) {
    alert("Your favorite flavor is: " + this.state.value);
    event.preventDefault();
  }

  handleSubmitCourse(event) {
    alert("Your selected value is: " + this.state.course);
    event.preventDefault();
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleChangeCourse = event => {
    this.setState({ course: event.target.value });
  };

  getUnique(arr, comp) {
    const unique = arr
      //store the comparison values in array
      .map(e => e[comp])

      // store the keys of the unique objects
      .map((e, i, final) => final.indexOf(e) === i && i)

      // eliminate the dead keys & store unique objects
      .filter(e => arr[e])

      .map(e => arr[e]);

    return unique;
  }

  componentDidMount() {
    const courses = require("./courses.json");
    this.setState({ courses: courses });
  }

  render() {
    const countries = require("./countries.json");
    const uniqueCountry = this.getUnique(countries.world, "country");

    const uniqueCouse = this.getUnique(this.state.courses, "tag");

    const courses = this.state.courses;
    const course = this.state.course;

    const filterDropdown = courses.filter(function(result) {
      return result.tag === course;
    });

    return (
      <div>
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
          <br />
          <br />
          <label>
            Looping through Json File
            <select>
              {uniqueCountry.map(item => (
                <option key={item.id} value={item.country}>
                  {item.country}
                </option>
              ))}
              {console.log(this.state.countries)}
            </select>
          </label>
        </form>

        <form onSubmit={this.handleSubmitCourse}>
          <br />
          <br />
          <label>
            Looping through Courses tag from Json File
            <select
              value={this.state.course}
              onChange={this.handleChangeCourse}
            >
              {uniqueCouse.map(course => (
                <option key={course.id} value={course.tag}>
                  {course.tag}
                </option>
              ))}
            </select>
          </label>
          <input type="submit" value="Submit" />
          <div>
            {filterDropdown.map(course => (
              <div key={course.id} style={{ margin: "10px" }}>
                {course.course}
                <br />
              </div>
            ))}
          </div>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
