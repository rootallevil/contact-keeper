import React, { Fragment } from "react";
import spinner from "./spinner.gif";

const Spinner = () => (
  <Fragment>
    <img src={spinner} alt="Loading..." style={spinnerStyle} />
  </Fragment>
);

const spinnerStyle = {
  width: "30%",
  margin: "10vh 35%",
};

export default Spinner;
