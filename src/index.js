import React from "react";
import ReactDOM from "react-dom";

const { format } = require('date-fns')

const App = () => {
  return <div>{format(new Date(), "YYYY-MM-DD [at] HH:mm")}</div>
};

ReactDOM.render(<App />, document.getElementById("app"));