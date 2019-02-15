import React from "react";
import { render } from "react-dom";
import Carousel from "./Carousel.js";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './index.css';

//here we are defining the App component, which we pass the Carousel component into from Carousel.js
const App = () => (
  <div>
    <Carousel />
  </div>
);

render(<App />, document.getElementById("root"));