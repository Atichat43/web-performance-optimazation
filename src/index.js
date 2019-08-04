import React from "react";
import ReactDOM from "react-dom";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

const { format } = require('date-fns')

const date = format(new Date(), "YYYY-MM-DD [at] HH:mm")
const data = [{name: date, uv: 400, pv: 2400, amt: 2400}]

const renderLineChart = (
  <LineChart width={600} height={300} data={data}>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" />
    <XAxis dataKey="name" />
    <YAxis />
  </LineChart>
);

const App = () => {
  return <div>{renderLineChart}</div>
};

ReactDOM.render(<App />, document.getElementById("app"));