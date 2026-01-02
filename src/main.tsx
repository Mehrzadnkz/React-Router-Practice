import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./routes";

addEventListener("DOMContentLoaded", () => {
  // Toggle_Theme call kept if needed (import if using)
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
