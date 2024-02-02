import {
  FaFigma,
  FaGoogleDrive,
  FaGooglePlus,
  FaGooglePlusG,
  FaJira,
  FaSlack,
  FaTrello,
} from "react-icons/fa";

const Skills = () => {
  return (
    <div className="skills">
      <h1>My Skills</h1>
      <div className="skills-info">
        <h6>
          My career as a Product Manager has equipped me with a well-rounded
          skill set essential for success in the role. I excel in
          cross-functional leadership, demonstrated through effective
          collaboration with diverse teams. Problem-solving is a key strength,
          enabling me to analyze challenges and devise strategic solutions. My
          expertise extends to Go-to-Market strategy development, ensuring
          successful product launches. Effective communication is a priority,
          facilitating clear articulation of product vision and fostering
          collaboration. I am committed to a user-centric approach, backed by
          thorough market research, and possess strong decision-making
          abilities. These skills collectively position me as a valuable
          contributor to product success.
        </h6>
      </div>
      <div className="grid">
        <div className="skill">
          <div className="hard-skills">
            <h3>Tools</h3>
            <div className="grid grid-3">
              <div className="card">
                <FaSlack className="icons" />
                <h5>Slack</h5>
              </div>
              <div className="card">
                <FaFigma className="icons" />
                <h5>Figma</h5>
              </div>
              <div className="card">
                <FaTrello className="icons" />
                <h5>Trello</h5>
              </div>
              <div className="card">
                <FaGoogleDrive className="icons" />
                <h5>Google Sheets</h5>
              </div>
              <div className="card">
                <FaGooglePlusG className="icons" />
                <h5>Google Docs</h5>
              </div>
              <div className="card">
                <FaJira className="icons" />
                <h5>Jira</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="skill">
          <div className="soft-skills">
            <h3>Soft Skills</h3>
            <div className="grid">
              <div className="card">
                <h5>Problem Solving</h5>
              </div>
              <div className="card">
                <h5>Communication</h5>
              </div>
              <div className="card">
                <h5>Versatility</h5>
              </div>
              <div className="card">
                <h5>Leadership</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
