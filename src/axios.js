import React, { useState, useEffect } from "react";
import axios from "axios";

const Axios = () => {
  const [users, setUsers] = useState([]);
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    // axios.get(`/users`).then(res => {
    //   const users = res.data;
    //   setUsers(users);
    // });

    axios
      .all([axios.get(`/users`), axios.get(`/api/breeds/image/random`)])
      .then(
        axios.spread((user, dog) => {
          const users = user.data;
          setUsers(users);

          const dogs = dog.data;
          setDogs(dogs);
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
      </ul>
    </div>
  );
};

export default Axios;
