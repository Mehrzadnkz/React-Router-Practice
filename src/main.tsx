import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // اضافه کردن BrowserRouter
import "./index.css";
import Main_Content from "./routers/main-content";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter> {/* قرار دادن BrowserRouter */}
      <Main_Content />
    </BrowserRouter>
  </React.StrictMode>
);
