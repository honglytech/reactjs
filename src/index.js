import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import axios from "axios";

const CurrencyConverter = () => {
  const [uSDAUD, setUSDAUD] = useState("");
  const [first, setFirst] = useState("AUD");
  const [second, setSecond] = useState("USD");
  const [rate, setRate] = useState([]);

  // useEffect(() => {
  //   axios({
  //     method: "GET",
  //     url:
  //       "https://free.currconv.com/api/v7/convert?q=USD_AUD&compact=ultra&apiKey=5a49beefa5e7696bc287",
  //   })
  //     .then((response) => {
  //       console.log(response.data);
  //       setUSDAUD(response.data.USD_AUD);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  const getRate = (first, second) => {
    axios({
      method: "GET",
      url: `https://free.currconv.com/api/v7/convert?q=${first}_${second}&compact=ultra&apiKey=5a49beefa5e7696bc287`,
    })
      .then((response) => {
        console.log(response.data);

        setRate(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "70px",
          width: "100%",
          backgroundColor: "#cdff63",
          fontSize: "30px",
          color: "blue",
        }}
      >
        Currency Converter PRO
      </div>
      <div
        style={{ height: "5px", width: "100%", backgroundColor: "#9ffe36" }}
      ></div>
      <br />
      <div style={{ marginLeft: "33%" }}>
        <div
          style={{
            height: "150px",
            width: "400px",
            backgroundColor: "#94e5ff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "25px",
          }}
        >
          1 {first} = {rate[`${first}_${second}`]} {second}
        </div>
        <br />
        <input
          type="text"
          value={first}
          onChange={(e) => setFirst(e.target.value)}
        />
        <input
          type="text"
          value={second}
          onChange={(e) => setSecond(e.target.value)}
        />
        <button
          onClick={() => {
            getRate(first, second);
          }}
        >
          Convert
        </button>
      </div>
    </>
  );
};

render(<CurrencyConverter />, document.querySelector("#root"));
