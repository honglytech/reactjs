import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import React from "react";
import { render } from "react-dom";
import Bowser from "bowser";

const browser = Bowser.getParser(window.navigator.userAgent);

const ReactIE = () => {
  return (
    <div>
      How to run React App in IE9 or IE11
      <br />
      {"You are using " +
        browser.parsedResult.browser.name +
        " v" +
        browser.parsedResult.browser.version +
        " on " +
        browser.parsedResult.os.name}
    </div>
  );
};

render(<ReactIE />, document.querySelector("#root"));
