import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Paths from "./components/Paths.js";

// Remove default margins, padding, and scrollbar
document.body.style.margin = "0";
document.body.style.padding = "0";
document.documentElement.style.margin = "0";
document.documentElement.style.padding = "0";

// IMPORTANT:
// Do NOT hide overflow globally — it breaks page scrolling.
// Remove the overflow:hidden lines completely.
// Your individual pages already manage scroll.

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter basename="/portfolio">
    <Paths />
  </BrowserRouter>
);
