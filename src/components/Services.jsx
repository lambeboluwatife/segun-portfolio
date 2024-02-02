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
          <h5 className="service-title">Product Ownership</h5>
        </div>
        <div className="card">
          <FaRoad className="icons" />
          <h5 className="service-title">Roadmap Strategy</h5>
        </div>
        <div className="card">
          <FaProjectDiagram className="icons" />
          <h5 className="service-title">Project Management</h5>
        </div>
        <div className="card">
          <FaSitemap className="icons" />
          <h5 className="service-title">Product Strategy</h5>
        </div>
        <div className="card">
          <FaObjectGroup className="icons" />
          <h5 className="service-title">Partnership Management</h5>
        </div>
        <div className="card">
          <FaThinkPeaks className="icons" />
          <h5 className="service-title">Product Thinking</h5>
        </div>
      </div>
    </div>
  );
};

export default Services;
