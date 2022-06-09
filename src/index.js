import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './assets/css/app.css';
import LayoutMain from "./layouts/main";
import Home from "./pages/home";
import About from "./pages/about";
import Work from "./pages/work";
import Contact from "./pages/contact";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <LayoutMain>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p className="text-center text-light">There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </LayoutMain>
    </BrowserRouter>
    ,
  </React.StrictMode>
);
reportWebVitals();
