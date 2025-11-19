import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Paths from "./components/Paths.js";

document.body.style.background = "black";
document.documentElement.style.background = "black";
document.body.style.margin = "0";
document.documentElement.style.margin = "0";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter basename="/portfolio">
    <Paths />
  </BrowserRouter>
);
