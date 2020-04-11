import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Columns from "react-columns";
var data = require("./db.json");

function App() {
  const [results, setResults] = useState([]);
  const [searchBarcode, setSearchBarcode] = useState("");

  useEffect(() => {
    setResults(data);
  }, []);

  const filterBarcode = results.filter((item) => {
    return searchBarcode !== "" ? item.barcode === searchBarcode : item;
  });

  const searchResults = filterBarcode.map((data, i) => {
    return (
      <Card
        key={i}
        bg="light"
        text="dark"
        className="text-center"
        style={{ margin: "10px" }}
      >
        <Card.Img variant="top" src={data.img} />
        <Card.Body>
          <Card.Text>Product name: {data.name}</Card.Text>
          <Card.Text>Price: ${data.price}</Card.Text>
          <Card.Text>Barcode: {data.barcode}</Card.Text>
        </Card.Body>
      </Card>
    );
  });

  return (
    <div>
      <div
        style={{
          backgroundColor: "#ADFF2F",
          height: "90px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2>SMART POS</h2>
      </div>
      <div style={{ backgroundColor: "#7CFC00", height: "5px" }}></div>
      <br />
      <Form>
        <Form.Group controlId="formGroupSearch">
          <Form.Control
            autoFocus
            type="text"
            placeholder="Search barcode"
            onChange={(e) => setSearchBarcode(e.target.value)}
          />
        </Form.Group>
      </Form>
      <br />
      <Columns columns="4">{searchResults}</Columns>
    </div>
  );
}

export default App;
