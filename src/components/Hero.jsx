const Hero = ({ heroContent }) => {
  return (
    <div className="hero">
      <div className="container">
        <h1>{heroContent.h1}</h1>
      </div>
    </div>
  );
};

export default Hero;
