import React from "react";
import { render } from "react-dom";
import Bowser from "bowser";

const DetectBrowsers = () => {
  var isChrome =
    !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);

  var isFirefox = typeof InstallTrigger !== "undefined";

  var isIE = false || !!document.documentMode;

  // this is no longer working
  // var isEdge = !isIE && !!window.StyleMedia;

  const browser = Bowser.getParser(window.navigator.userAgent);

  return (
    <div>
      {/* {isChrome
        ? "Yes, it is Chrome!"
        : isFirefox
        ? "Firefox!"
        : isIE
        ? "IE"
        : "I don't know!"} */}

      {"You are using " +
        browser.parsedResult.browser.name +
        " v" +
        browser.parsedResult.browser.version +
        " on " +
        browser.parsedResult.os.name}
    </div>
  );
};

render(<DetectBrowsers />, document.querySelector("#root"));
