import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./routes/Home.jsx";
import Web from "./routes/Web.jsx";
import CLI from "./routes/CLI.jsx";
import More from "./routes/More.jsx";

import "../src/styles/common.css";
import { Header } from "./components/Header.jsx";
import { MobileHeader } from "./components/Header.jsx";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/web" element={<Web />} />
        <Route path="/cli" element={<CLI />} />
        <Route path="/more" element={<More />} />
      </Routes>
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <MobileHeader />
      <Header />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
