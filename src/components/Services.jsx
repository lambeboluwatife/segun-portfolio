import {
  FaBriefcase,
  FaRoad,
  FaSitemap,
  FaThinkPeaks,
  FaProjectDiagram,
  FaObjectGroup,
} from "react-icons/fa";

const Services = () => {
  return (
    <div className="services">
      <h1>Services</h1>
      <div className="grid grid-3">
        <div className="card">
          <FaBriefcase className="icons" />
          <h5>Product Ownership</h5>
          <h6>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni
            soluta impedit laboriosam laborum blanditiis libero sunt tenetur
            eveniet facilis odio.
          </h6>
        </div>
        <div className="card">
          <FaRoad className="icons" />
          <h5>Roadmap Strategy</h5>
          <h6>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni
            soluta impedit laboriosam laborum blanditiis libero sunt tenetur
            eveniet facilis odio.
          </h6>
        </div>
        <div className="card">
          <FaProjectDiagram className="icons" />
          <h5>Project Management</h5>
          <h6>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni
            soluta impedit laboriosam laborum blanditiis libero sunt tenetur
            eveniet facilis odio.
          </h6>
        </div>
        <div className="card">
          <FaSitemap className="icons" />
          <h5>Product Strategy</h5>
          <h6>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni
            soluta impedit laboriosam laborum blanditiis libero sunt tenetur
            eveniet facilis odio.
          </h6>
        </div>
        <div className="card">
          <FaObjectGroup className="icons" />
          <h5>Partnership Management</h5>
          <h6>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni
            soluta impedit laboriosam laborum blanditiis libero sunt tenetur
            eveniet facilis odio.
          </h6>
        </div>
        <div className="card">
          <FaThinkPeaks className="icons" />
          <h5>Product Thinking</h5>
          <h6>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni
            soluta impedit laboriosam laborum blanditiis libero sunt tenetur
            eveniet facilis odio.
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Services;
