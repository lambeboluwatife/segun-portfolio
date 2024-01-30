import { experiences } from "../data/portfolio";

const Experience = () => {
  return (
    <div className="experience">
      <h1>Experience</h1>
      <div className="works">
        {experiences.map((experience) => (
          <div className="work ">
            <img
              src={experience.logo}
              alt={`${experience.organisation}'s logo`}
              className="work-icon"
            />
            <div className="work-info">
              <h4>{experience.organisation}</h4>
              <h2>{experience.position}</h2>
              <h6>{experience.duration}</h6>
              <h6>{experience.location}</h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
