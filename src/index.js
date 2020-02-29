import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import axios from "axios";

const ReactFBPageRandomQuote = () => {
  const [quote, setQuote] = useState("");

  // useEffect(() => {
  //   axios.get("https://quotes.rest/qod?language=en").then(res => {
  //     const result = res.data;
  //     console.log(result);
  //     setQuote(result.contents.quotes[0].quote);
  //   });
  // });

  useEffect(() => {
    axios.get("https://api.quotable.io/random").then(res => {
      const result = res.data;
      console.log(result.content);
      setQuote(result.content);
    });
  }, []);

  const postRandomQuote = () => {
    axios
      .post("https://graph.facebook.com/1515470308497082/feed?", {
        message: quote,
        access_token:
          "EAAIzQ3pdeDsBACpoudBhcQoDWXgi3pYrqjZAf3ZCfq49fSOpzQvTZC39G2Or9DbcU152eA2ZBlc83fOeot2ZC6mZBYav7y1cxGLekJOUeXZBOsI51yiYPqHDysyfF5k6zx5ftTiuA4FJGFSMfPG7U9vTXhLSnNblKL2ndS6yuZBCNAZDZD"
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
      React Facebook Post Page Status - Random Quote
      <br />
      <br />
      {quote}
      <br />
      <button onClick={() => postRandomQuote()}>Post Status</button>
    </div>
  );
};

render(<ReactFBPageRandomQuote />, document.querySelector("#root"));
