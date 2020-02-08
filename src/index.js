import React, { useState } from "react";
import { render } from "react-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";

const ReactCopyClipboard = () => {
  const [value, setValue] = useState("");
  const [copied, setCopied] = useState(false);

  return (
    <div>
      <input
        value={value}
        onChange={({ target: { value } }) => {
          setValue(value);
          setCopied(false);
        }}
      />
      <br />
      <br />
      <CopyToClipboard text={value} onCopy={() => setCopied(true)}>
        <span>Copy to clipboard with span</span>
      </CopyToClipboard>
      <br />
      <br />
      <CopyToClipboard text={value} onCopy={() => setCopied(true)}>
        <button>Copy to clipboard with button</button>
      </CopyToClipboard>
      <br />
      <br />
      {copied ? <span style={{ color: "red" }}>Copied.</span> : null}
      <br />
      <br />
      <textarea />
    </div>
  );
};

render(<ReactCopyClipboard />, document.querySelector("#root"));
