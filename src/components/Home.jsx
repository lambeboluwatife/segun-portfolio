import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <h1>
          Hello, I'm <br /> <span>Sobodu Samuel Segun</span>
        </h1>
        <h2>
          I am a product manager with a result-oriented mindset with over 4+
          years of experience in product marketing. <br /> Expertise in driving
          successful product launches, creating compelling messaging, and <br />
          collaborating cross-functionally in Fintech and Web3 organizations
        </h2>
        <div className="socials">
          <a href="https://twitter.com/sirpekun?lang=ar">
            {" "}
            <FaTwitter className="icons" />
          </a>
          <a href="https://www.linkedin.com/in/segun-sobodu-05a21b32?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
            <FaLinkedin className="icons" />
          </a>
          <a href="https://www.instagram.com/sir_pekun?utm_source=qr">
            <FaInstagram className="icons" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
