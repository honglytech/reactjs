import React, { useState } from "react";
import { render } from "react-dom";
import TextareaAutosize from "react-textarea-autosize";

const EncodeBase64 = () => {
  const [selectetdFile, setSelectedFile] = useState([]);
  const [fileBase64String, setFileBase64String] = useState("");

  const onFileChange = (e) => {
    setSelectedFile(e.target.files);
    console.log(e.target.files[0]);
    console.log(e.target.files[0].name);
    console.log(e.target.files[0].size);
    console.log(e.target.files[0].type);
  };

  const encodeFileBase64 = (file) => {
    var reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onload = () => {
        var Base64 = reader.result;
        console.log(Base64);
        setFileBase64String(Base64);
      };
      reader.onerror = (error) => {
        console.log("error: ", error);
      };
    }
  };

  // encodeFileBase64(selectetdFile[0]);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "green",
          height: "60px",
          width: "100%",
          color: "#FFF",
          fontSize: "30px",
        }}
      >
        Files/Image Base64 Encoding
      </div>
      <br />
      <input type="file" id="input" onChange={onFileChange} />
      <TextareaAutosize
        maxRows={20}
        value={fileBase64String}
        onChange={encodeFileBase64(selectetdFile[0])}
      />
    </div>
  );
};

render(<EncodeBase64 />, document.querySelector("#root"));
