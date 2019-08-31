import React, { useState, useEffect } from "react";
import axios from "axios";

const Axios = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/photos`).then(res => {
      const photos = res.data;
      setPhotos(photos);
    });
  }, []);

  return (
    <div>
      <ul>
        {photos.map(photo => (
          <li key={photo.id}>
            {photo.title}, {photo.url},{" "}
            <img src={photo.url} alt={photo.title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Axios;
