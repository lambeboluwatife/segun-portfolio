import Resume from "../assets/Segun Sobodu PM CV.pdf";

const About = () => {
  return (
    <div className="about">
      <h1>ABOUT ME</h1>
      <div className="grid">
        <div className="about-image">
          <div className="box"></div>
          <img src="/Segun1.jpg" alt="profile image" />
        </div>
        <div className="about-bio">
          <h2>Hi There! I'm Sobodu Samuel Segun</h2>
          <h3>Product Manager</h3>
          <h6>
            I am a seasoned professional with a Master's in Marketing
            Communication, and I have cultivated a rich and diverse background
            in the realm of product management. My educational foundation,
            including an undergraduate degree in Mass Communication with a focus
            on Public Relations and Advertising from Covenant University, laid
            the groundwork for my journey into the dynamic field of product
            management.
          </h6>

          <div className="about-contact">
            <a href="mailto:Sobodus@gmail.com">
              <h6>Sobodus@gmail.com</h6>
            </a>
            <a href="+2348087793137">
              <h6>+234 808 779 3137</h6>
            </a>
          </div>

          <div className="download-cv">
            <a href={Resume} rel="noreferrer" target="_blank">
              Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
