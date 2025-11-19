import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import Paths from "./components/Paths.js";

document.body.style.margin = "0";
document.documentElement.style.margin = "0";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <HashRouter>
    <Paths />
  </HashRouter>
);
