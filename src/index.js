import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import axios from "axios";

const Example = () => {
  const [image, setImage] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.generated.photos/api/v1/faces?version=3&gender=female&age=young-adult&ethnicity=asian",
        {
          headers: {
            Authorization: `API-Key 6JiyTxpVXEFZkGYGjRYCXw`,
          },
        }
      )
      .then((res) => {
        console.log(res.data.faces[0].urls[4][512]);
        setImage(res.data.faces[0].urls[4][512]);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItmes: "center",
      }}
    >
      <img src={image} />
    </div>
  );
};

render(<Example />, document.querySelector("#root"));
