import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Paths from "./components/Paths.js";

// // RESET ONLY margin/padding
// document.body.style.margin = "0";
// document.documentElement.style.margin = "0";
// document.body.style.padding = "0";
// document.documentElement.style.padding = "0";

// ❌ do NOT set overflow hidden anymore
// document.body.style.overflow = "hidden";
// document.documentElement.style.overflow = "hidden";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter basename="/portfolio">
    <Paths />
  </BrowserRouter>
);
