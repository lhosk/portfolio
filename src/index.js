import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Paths from "./components/Paths.js";

// REMOVE all default margins/padding
document.body.style.margin = "0";
document.body.style.padding = "0";
document.documentElement.style.margin = "0";
document.documentElement.style.padding = "0";

// PREVENT global scrollbar unless content truly overflows
document.documentElement.style.overflowY = "hidden";
document.body.style.overflowY = "hidden";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter basename="/portfolio">
    <Paths />
  </BrowserRouter>
);
