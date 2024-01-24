import { Routes, Route } from "react-router-dom";
import { useState, lazy, Suspense } from "react";

import "./App.css";
import NavBar from "./components/NavBar";
import About from "./components/About";
import ScrollAwareNavbar from "./components/ScrollAwareNavbar";

const Home = lazy(() => import("./components/Home"));
const Portfolio = lazy(() => import("./components/Portfolio"));
const Contact = lazy(() => import("./components/Contact"));

const App = () => {
  return (
    <>
      <ScrollAwareNavbar />
      {/* <NavBar /> */}
      <Suspense fallback="loading....">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <About />
              </>
            }
          />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
