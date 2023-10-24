import React, { useState, Fragment } from "react";
import ReactDOM from "react-dom/client";
//import data from './models/headphones.json';

import GadgetList from "./components/GadgetList";
const mainStyle = { fontFamily: "Arial" };

const App = () => {
  const headphones = [
    { title: "Headphones 1", price: 368.99, id: 1 },
    { title: "Headphones 2", price: 38.39, id: 2 },
    { title: "Headphones 3", price: 548.99, id: 3 },
    { title: "Headphones 4", price: 58.99, id: 4 },
    { title: "Headphones 5", price: 358.99, id: 5 },
  ];
  const [headphonesList] = useState(headphones);

  return (
    <section style={mainStyle}>
      <h1 style={{ color: "purple" }}>Electronics Store</h1>
      <GadgetList items={headphonesList} />
    </section>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
