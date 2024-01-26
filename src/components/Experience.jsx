import React from "react";
import { FaLaptop } from "react-icons/fa";

const Experience = () => {
  return (
    <div className="experience">
      <h1>Experience</h1>
      <h6>
        Hi there! I'm a seasoned web developer with a passion for creating
        stunning digital experiences. With years of hands-on experience, I've
        honed my skills in HTML, CSS, and JavaScript to craft captivating and
        interactive websites.
      </h6>
      <div className="works">
        <div className="work ">
          <FaLaptop className="work-icon" />
          <div className="work-info">
            <h4>REACHOUT</h4>
            <h2>PRODUCT MANAGER</h2>
            <h6>September 2023 – Till Date</h6>
            <h6>Lagos, NIgeria</h6>
          </div>
        </div>
        <div className="work ">
          <FaLaptop className="work-icon2" />
          <div className="work-info">
            <h4>OPERA SOFTWARE</h4>
            <h2>PRODUCT TESTER & QUALITY ASSURANCE</h2>
            <h6>January 2019 – Till Date</h6>
            <h6>Lagos, NIgeria</h6>
          </div>
        </div>
        <div className="work ">
          <FaLaptop className="work-icon" />
          <div className="work-info">
            <h4>HIREWAVE</h4>
            <h2>LEAD PRODUCT MANAGER</h2>
            <h6>June 2023 – Till Date</h6>
            <h6>Lagos, NIgeria</h6>
          </div>
        </div>
        <div className="work ">
          <FaLaptop className="work-icon2" />
          <div className="work-info">
            <h4>GIVEAWAY APP</h4>
            <h2>PRODUCT MARKETING MANAGER</h2>
            <h6>June 2022 – September 2022</h6>
            <h6>Lagos, NIgeria</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
