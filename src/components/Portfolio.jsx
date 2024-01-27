import { FaAppStore, FaChrome, FaGooglePlay } from "react-icons/fa";
import { portfolios } from "../data/portfolio";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <div className="container">
        {portfolios.map((portfolio) => (
          <div className="cards" key={portfolio.index}>
            <div className="card">
              <img src={portfolio.image} alt={portfolio.product} />

              <h1>{portfolio.product}</h1>
              <h2>{portfolio.description}</h2>
              <div className="links">
                <a href={portfolio.website}>
                  <FaChrome className="icon" />
                </a>
                {portfolio.playstore && (
                  <a href={portfolio.playstore}>
                    <FaGooglePlay className="icon" />
                  </a>
                )}
                {portfolio.applestore && (
                  <a href={portfolio.applestore}>
                    <FaAppStore className="icon" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
