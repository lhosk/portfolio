import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Paths from "./components/Paths.js";


// Remove default margins, padding, and scrollbar
document.body.style.margin = "0";
document.body.style.padding = "0";
document.body.style.overflow = "hidden";
document.documentElement.style.margin = "0";
document.documentElement.style.padding = "0";
document.documentElement.style.overflow = "hidden";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Paths />
  </BrowserRouter>
);