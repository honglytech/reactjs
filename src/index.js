import React, { useState } from "react";
import { render } from "react-dom";
import FacebookLogin from "react-facebook-login";

const ReactFacebookLogin = () => {
  const [accessToken, setAccessToken] = useState("");

  const componentClicked = data => {
    console.log("data", data);
  };

  const responseFacebook = response => {
    // console.log(response.accessToken);
    setAccessToken(response.accessToken);
  };

  return (
    <div>
      React Facebook Login
      <br />
      User Short-Lived Access Token:
      <br />
      {accessToken}
      <br />
      <FacebookLogin
        appId="1614986128648687"
        autoLoad={true}
        fields="name,email,picture"
        onClick={componentClicked}
        callback={responseFacebook}
      />
    </div>
  );
};

render(<ReactFacebookLogin />, document.querySelector("#root"));
