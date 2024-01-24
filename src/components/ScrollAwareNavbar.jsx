// ScrollAwareNavbar.js
import { useState, useEffect } from "react";
import NavBar from "./NavBar";

const ScrollAwareNavbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [navbarColor, setNavbarColor] = useState("transparent");

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);

    // Change the background color at a specific scroll position (e.g., 100px)
    if (position > 600) {
      setNavbarColor("#000"); // Change to your desired background color
    } else {
      setNavbarColor("transparent");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return <NavBar backgroundColor={navbarColor} />;
};

export default ScrollAwareNavbar;
