import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import Paths from "./components/Paths.js";

// KEEP your scroll + margin removals
document.body.style.margin = "0";
document.body.style.padding = "0";
document.documentElement.style.margin = "0";
document.documentElement.style.padding = "0";

document.documentElement.style.overflowY = "hidden";
document.body.style.overflowY = "hidden";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <HashRouter>
    <Paths />
  </HashRouter>
);
