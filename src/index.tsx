import React from "react";
import ReactDOM from "react-dom";
import {BarChart} from "./examples/BarChart";
import {LineTooltip} from "./examples/withTooltip/LineTooltip";

ReactDOM.render(
  // tslint:disable-next-line: jsx-wrap-multiline
  <>
    <BarChart />
    <LineTooltip />
  </>,
  document.getElementById("root"),
);
