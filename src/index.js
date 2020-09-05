import React, { useState } from "react";
import { render } from "react-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const CompoundInterest = () => {
  const [principal, setPrincipal] = useState();
  const [years, setYears] = useState();
  const [interest, setInterest] = useState();
  const [result, setResult] = useState();

  const calculate = () => {
    // A=p(1+(r/n))^(nt)
    const result = principal * Math.pow(1 + interest, years);
    setResult(result.toFixed(2));
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "40vh",
        }}
      >
        <form>
          <TextField
            label="What is the principal?"
            variant="outlined"
            type="number"
            onChange={(e) => setPrincipal(e.target.value)}
          />
          <TextField
            label="How many years?"
            variant="outlined"
            type="number"
            onChange={(e) => setYears(e.target.value)}
          />
          <TextField
            label="Annual Interest rate?"
            variant="outlined"
            type="number"
            onChange={(e) => setInterest(e.target.value / 100)}
          />
          <br />
          <br />
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              calculate();
            }}
          >
            Calculate
          </Button>
          <br />
          <br />
          <div style={{ fontSize: "30px" }}>${result}</div>
        </form>
      </div>
    </>
  );
};

render(<CompoundInterest />, document.querySelector("#root"));
