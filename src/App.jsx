import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import "./App.css";
import About from "./components/About";
import ScrollAwareNavbar from "./components/ScrollAwareNavbar";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Loader from "./components/Loader";
import Hero from "./components/Hero";

const Home = lazy(() => import("./components/Home"));
const Portfolio = lazy(() => import("./components/Portfolio"));
const Contact = lazy(() => import("./components/Contact"));

const App = () => {
  const portfolioHero = {
    h1: "Portfolio",
    h2: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, eos fugiat a non commodi odio ex nihil dolorum ad voluptatibus?",
  };

  return (
    <>
      <Suspense fallback={<Loader />}>
        <ScrollAwareNavbar />
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
          <Route
            path="/portfolio"
            element={
              <>
                <Hero heroContent={portfolioHero} />
                <Portfolio />
              </>
            }
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Suspense>
    </>
  );
};

export default App;
