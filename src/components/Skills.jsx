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
        <h3>All Skills I Have In My Field Of Work.</h3>
        <h6>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
          quia nobis minima necessitatibus magnam porro reprehenderit molestiae
          atque obcaecati aperiam, debitis praesentium deleniti ea. Tempora
          saepe sed reiciendis mollitia ullam? Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Tempore mollitia nobis inventore
          distinctio vel iste aspernatur magnam totam corporis esse. Facere
          quaerat atque dolores nostrum perferendis debitis reiciendis ipsa
          corrupti.
        </h6>
      </div>
      <div className="grid">
        <div className="skill">
          <div className="hard-skills">
            <h3>Hard Skills</h3>
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
