const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="grid">
          <div className="bio">
            <div className="container">
              <h1>
                <span>Hello,</span> I'm Sobodu Samuel Segun
              </h1>
              <h2>
                I am a product manager with a result-oriented mindset with over
                4+ years of experience in product marketing. Expertise in
                driving successful product launches, creating compelling
                messaging, and collaborating cross-functionally in Fintech and
                Web3 organizations
              </h2>

              <a href="/about">
                <button>About Me</button>
              </a>
            </div>
          </div>
          <div className="bio-image">
            <div className="image-box">
              <div className="square"></div>
              <img src="Segun1.jpg" alt="Segun's Picture" />
              <div className="square2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
