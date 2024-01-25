import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

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
          <a href="#">
            <FaFacebook className="icons" />
          </a>
          <a href="#">
            {" "}
            <FaTwitter className="icons" />
          </a>
          <a href="#">
            <FaLinkedin className="icons" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
