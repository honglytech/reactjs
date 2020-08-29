import React, { useState } from "react";
import { render } from "react-dom";
import axios from "axios";

const WeatherApp = () => {
  const [temperature, setTemperature] = useState("");
  const [desc, setDesc] = useState("");
  const [city, setCity] = useState("Melbourne");
  const [country, setCountry] = useState("AU");

  const getWeatherData = (city, country) => {
    axios({
      method: "GET",
      url: `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=180941f68139fba12f166dc35d9b688b`,
    })
      .then((response) => {
        console.log(response.data.main.temp);
        // Kelvin to Fahrenheit
        // setTemperature((response.data.main.temp - 273.15) * 1.8 + 32);

        // Kelvin to Celsius
        setTemperature(response.data.main.temp - 273.15);
        // console.log(response.data);
        setDesc(response.data.weather[0].main);
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
          backgroundColor: "#226ba3",
          fontSize: "30px",
          color: "#fff",
        }}
      >
        Weather APP
      </div>
      {/* <div
        style={{ height: "5px", width: "100%", backgroundColor: "blue" }}
      ></div> */}
      <br />
      <div style={{ marginLeft: "33%" }}>
        <div
          style={{
            height: "150px",
            width: "450px",
            backgroundColor: "#94e5ff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "25px",
          }}
        >
          {new Date().toLocaleString()}
          <br />
          {city} Weather
          <br />
          {/* {Math.round(temperature * 100) / 100} ℉ */}
          {Math.round(temperature * 100) / 100} ℃ - {desc}
        </div>
        <br />
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <input
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <button
          onClick={() => {
            getWeatherData(city, country);
          }}
        >
          GET
        </button>
      </div>
    </>
  );
};

render(<WeatherApp />, document.querySelector("#root"));
