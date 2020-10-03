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

  const decodeFileBase64 = (base64String) => {
    // From Bytestream to Percent-encoding to Original string
    return decodeURIComponent(
      atob(base64String)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );
  };

  const decodeBase64 = decodeFileBase64(
    fileBase64String.substring(fileBase64String.indexOf(",") + 1)
  );

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
        style={{ width: "500px" }}
        maxRows={20}
        value={fileBase64String}
        onChange={encodeFileBase64(selectetdFile[0])}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#D50201",
          height: "60px",
          width: "100%",
          color: "#FFF",
          fontSize: "30px",
        }}
      >
        Files/Image Base64 Decoding
      </div>
      <br />
      <TextareaAutosize
        style={{ width: "500px" }}
        maxRows={20}
        value={fileBase64String}
      />{" "}
      <TextareaAutosize
        style={{ width: "500px" }}
        maxRows={20}
        value={decodeBase64}
        onChange={decodeBase64}
      />
    </div>
  );
};

render(<EncodeBase64 />, document.querySelector("#root"));
