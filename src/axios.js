import React, { useState, useEffect } from "react";
import axios from "axios";

const Axios = () => {
  const [users, setUsers] = useState([]);
  const [dogs, setDogs] = useState([]);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // axios.get(`/users`).then(res => {
    //   const users = res.data;
    //   setUsers(users);
    // });

    axios
      .all([
        axios.get(`/users`),
        axios.get(`/api/breeds/image/random`),
        axios.get(`http://localhost:5000/api/courses`)
      ])
      .then(
        axios.spread((user, dog, course) => {
          const users = user.data;
          setUsers(users);

          const dogs = dog.data;
          setDogs(dogs);

          const courses = course.data;
          setCourses(courses);
        })
      );
  }, []);

  return (
    <div>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.username}, {user.name},{" "}
          </li>
        ))}
        {dogs.message} <br />
        {<img src={dogs.message} alt={dogs.message} />}
        {courses.map(course => (
          <li key={course._id}>
            {course.course}, {course.tag},{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Axios;
