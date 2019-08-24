import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

//class App extends React.Component {
const App = () => {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     value: "coconut",
  //     countries: [
  //       { id: "1", country: "Cambodia" },
  //       { id: "2", country: "Australia" },
  //       { id: "3", country: "US" }
  //     ],
  //     courses: [],
  //     course: ""
  //   };
  const [value, setValue] = useState("coconut");
  const [countries] = useState([
    { id: "1", country: "Cambodia" },
    { id: "2", country: "Australia" },
    { id: "3", country: "US" }
  ]);
  const [courses, setCourses] = useState([]);
  const [course, setCourse] = useState("");

  // this.handleSubmit = this.handleSubmit.bind(this);
  // this.handleSubmitCourse = this.handleSubmitCourse.bind(this);
  // }

  // handleSubmit(event) {
  //   alert("Your favorite flavor is: " + this.state.value);
  //   event.preventDefault();
  // }

  const handleSubmit = event => {
    alert("Your favorite flavor is: " + value);
    event.preventDefault();
  };

  // handleSubmitCourse(event) {
  //   alert("Your selected value is: " + this.state.course);
  //   event.preventDefault();
  // }

  const handleSubmitCourse = event => {
    alert("Your selected value is: " + course);
    event.preventDefault();
  };

  // handleChange = event => {
  //   this.setState({ value: event.target.value });
  // };

  const handleChange = event => {
    setValue(event.target.value);
  };

  // handleChangeCourse = event => {
  //   this.setState({ course: event.target.value });
  // };

  const handleChangeCourse = event => {
    setCourse(event.target.value);
  };

  const getUnique = (arr, comp) => {
    const unique = arr
      //store the comparison values in array
      .map(e => e[comp])

      // store the keys of the unique objects
      .map((e, i, final) => final.indexOf(e) === i && i)

      // eliminate the dead keys & store unique objects
      .filter(e => arr[e])

      .map(e => arr[e]);

    return unique;
  };

  // componentDidMount() {
  //   const courses = require("./courses.json");
  //   this.setState({ courses: courses });
  // }

  useEffect(() => {
    const courses = require("./courses.json");
    setCourses(courses);
  }, []);

  //render() {
  //const countries = require("./countries.json");
  const countriesJson = require("./countries.json");

  //const uniqueCountry = this.getUnique(countries.world, "country");
  const uniqueCountry = getUnique(countriesJson.world, "country");

  //const uniqueCouse = this.getUnique(this.state.courses, "tag");
  const uniqueCouse = getUnique(courses, "tag");

  //const courses = this.state.courses;
  //const course = this.state.course;

  const filterDropdown = courses.filter(function(result) {
    return result.tag === course;
  });

  return (
    <div>
      {/* <form onSubmit={this.handleSubmit}> */}
      <form onSubmit={handleSubmit}>
        <label>
          Pick your favorite flavor:
          {/* </label><select value={this.state.value} onChange={this.handleChange}> */}
          <select value={value} onChange={handleChange}>
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
            {/* {this.state.countries.map(item => (
              <option key={item.id} value={item.country}>
                {item.country}
              </option>
            ))} */}
            {countries.map(item => (
              <option key={item.id} value={item.country}>
                {item.country}
              </option>
            ))}
            {console.log(countries)}
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
          </select>
        </label>
      </form>

      <form onSubmit={handleSubmitCourse}>
        <br />
        <br />
        <label>
          Looping through Courses tag from Json File
          {/* <select value={this.state.course} onChange={this.handleChangeCourse}> */}
          <select value={course} onChange={handleChangeCourse}>
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
  // }
};

ReactDOM.render(<App />, document.querySelector("#root"));
