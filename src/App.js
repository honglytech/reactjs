import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

function App() {
  const [summary, setSummary] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    axios
      .post(
        `http://localhost:8080/rest/api/2/issue/`,
        {
          fields: {
            project: {
              key: "JOL",
            },
            summary: summary,
            description: description,
            issuetype: {
              name: "Story",
            },
            customfield_10100: "JOL-4",
          },
        },
        {
          headers: {
            Authorization: "Basic aG9uZ2x5dGVjaDpqaXJhb25sb2NhbHB3",
          },
          // auth: {
          //   username: "honglytech",
          //   password: "jiraonlocalpw",
          // },
        }
      )
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
  };

  return (
    <div>
      <div
        style={{
          backgroundColor: "#0052CC",
          height: "90px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2 style={{ color: "white" }}>Jira REST API</h2>
      </div>
      <div style={{ backgroundColor: "#7CFC00", height: "5px" }}></div>
      <br />
      <Form>
        <Form.Group controlId="formGroupJira">
          <Form.Label>Jira summary</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            placeholder="Enter summary"
            onChange={(e) => setSummary(e.target.value)}
          />
          <br />
          <Form.Label>Jira description</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            placeholder="Enter description"
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
      <br />
    </div>
  );
}

export default App;
