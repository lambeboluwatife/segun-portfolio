import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import "./App.css";
import About from "./components/About";
import ScrollAwareNavbar from "./components/ScrollAwareNavbar";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Experience from "./components/Experience";

const Home = lazy(() => import("./components/Home"));
const Portfolio = lazy(() => import("./components/Portfolio"));
const Contact = lazy(() => import("./components/Contact"));

const App = () => {
  return (
    <>
      <ScrollAwareNavbar />
      <Suspense fallback="loading....">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <About />
                <Services />
                <Skills />
                <Experience />
              </>
            }
          />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
};

export default App;
