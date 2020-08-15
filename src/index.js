import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import axios from "axios";

const Example = () => {
  const [regMarPer, setRegMarPer] = useState("");
  const [exchange, setExchange] = useState("");
  const [shortName, setShortName] = useState("");
  const [longName, setLongName] = useState("");
  const [symbol, setSymbol] = useState("");
  const [regMarOpen, setRegMarOpen] = useState("");
  const [regMarHigh, setRegMarHigh] = useState("");
  const [regMarLow, setRegMarLow] = useState("");
  const [regMarPrice, setRegMarPrice] = useState("");
  const [regMarVol, setRegMarVol] = useState("");

  useEffect(() => {
    axios({
      method: "GET",
      url:
        "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-statistics",
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
        "x-rapidapi-key": "b7e55f2aacmsh5bd0d302b3991f2p1adc6cjsn5594b6ec9ead",
        useQueryString: true,
      },
      params: {
        region: "AU",
        symbol: "APT.AX",
      },
    })
      .then((response) => {
        // console.log(response.data.price);
        setExchange(response.data.price.exchange);
        setRegMarPer(response.data.price.regularMarketChangePercent.fmt);
        setShortName(response.data.price.shortName);
        setLongName(response.data.price.longName);
        setSymbol(response.data.price.symbol);
        setRegMarOpen(response.data.price.regularMarketOpen.fmt);
        setRegMarHigh(response.data.price.regularMarketDayHigh.fmt);
        setRegMarLow(response.data.price.regularMarketDayLow.fmt);
        setRegMarPrice(response.data.price.regularMarketPrice.fmt);
        setRegMarVol(response.data.price.regularMarketVolume.fmt);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const bgColor = regMarPer.includes("-") ? "red" : "#7CFC00";

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          backgroundColor: bgColor,
          width: "300px",
          height: "350px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "25px",
        }}
      >
        {exchange}
        <br />
        {symbol}
        <br />
        {shortName}
        <br />
        {longName}
        <br />
        <br />
        Last Price: ${regMarPrice}
        <br />
        Today's Change: {regMarPer}
        <br />
        Open: ${regMarOpen}
        <br />
        High: ${regMarHigh}
        <br />
        Low: ${regMarLow}
        <br />
        Volume: ${regMarVol}
      </div>
    </div>
  );
};

render(<Example />, document.querySelector("#root"));
