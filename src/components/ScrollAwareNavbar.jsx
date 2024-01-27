// ScrollAwareNavbar.js
import { useState, useEffect } from "react";
import NavBar from "./NavBar";

const ScrollAwareNavbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [navbarColor, setNavbarColor] = useState("transparent");

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);

    if (position > 600) {
      setNavbarColor("#000");
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
