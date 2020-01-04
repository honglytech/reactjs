import { Chart } from "react-google-charts";
import * as React from "react";
import { render } from "react-dom";

const GoogleCharts = () => {
  return (
    <Chart
      width={"500px"}
      height={"300px"}
      chartType="GeoChart"
      data={[
        ["Country", "Popularity"],
        ["Germany", 200],
        ["United States", 300],
        ["Brazil", 400],
        ["Canada", 500],
        ["France", 600],
        ["RU", 700],
        ["Cambodia", 800],
        ["Australia", 100]
      ]}
      // Note: you will need to get a mapsApiKey for your project.
      // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
      mapsApiKey="YOUR_KEY_HERE"
      rootProps={{ "data-testid": "1" }}
    />
  );
};

render(<GoogleCharts />, document.querySelector("#root"));
