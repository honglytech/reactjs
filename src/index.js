import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import axios from "axios";

const ReactFBPageRandomQuote = () => {
  const postRandomQuote = () => {
    axios
      .post("https://graph.facebook.com/1515470308497082/photos?", {
        url: "https://source.unsplash.com/featured/?quote",
        access_token:
          "EAACO0hp8nVYBAOEl1d3ZAoHx6Dt6cSIpMlJBGPO3TsuW7mpFZANCkZBVkjeBMIZAcgSNysNnymyRyp4phWUUqARwsHUEVbjokMfojZCe8bqApv5uLijZCftI9IUzZBRWRtXgqjqng5ELZBfYy2Tnh3zeECAmdSvCVKEaY97Pgi9ZB903YxhmWXq7DaklgAXWsnWT08aGd65iZBRgZDZD"
      })
      .then(
        res => {
          const result = res.data;
          console.log(result);
          alert("Success!");
        },
        error => {
          console.log(error);
        }
      );
  };

  return (
    <div>
      React Facebook Post Page Status - Random Photo
      <br />
      <button onClick={() => postRandomQuote()}>Post Photo</button>
    </div>
  );
};

render(<ReactFBPageRandomQuote />, document.querySelector("#root"));
