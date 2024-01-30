import { useLocation } from "react-router";

const Footer = () => {
  const location = useLocation();
  const hideHeaderForPaths = ["/contact"];

  if (hideHeaderForPaths.includes(location.pathname)) {
    return <></>;
  }
  return (
    <footer>
      <h1>Segun Sobodu</h1>
      <h4>A product manager with a result-oriented mindset.</h4>
      <div className="footer-links">
        <a href="/">Home</a>
        <a href="/portfolio">Portfolio</a>
        <a href="/contact">Contact</a>
      </div>
    </footer>
  );
};

export default Footer;
