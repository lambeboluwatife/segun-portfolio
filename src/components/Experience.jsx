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
            <h4>Reachout</h4>
            <h2>Product Manager</h2>
            <h6>September 2023 – Till Date</h6>
            <h6>Lagos, NIgeria</h6>
          </div>
        </div>
        <div className="work ">
          <FaLaptop className="work-icon2" />
          <div className="work-info">
            <h4>Opera Software</h4>
            <h2>Product Tester & Quality Assurance</h2>
            <h6>January 2019 – Till Date</h6>
            <h6>Lagos, NIgeria</h6>
          </div>
        </div>
        <div className="work ">
          <FaLaptop className="work-icon" />
          <div className="work-info">
            <h4>Hirewave</h4>
            <h2>Lead Product Manager</h2>
            <h6>June 2023 – Till Date</h6>
            <h6>Lagos, NIgeria</h6>
          </div>
        </div>
        <div className="work ">
          <FaLaptop className="work-icon2" />
          <div className="work-info">
            <h4>Giveaway App</h4>
            <h2>Product Marketing Manager</h2>
            <h6>June 2022 – September 2022</h6>
            <h6>Lagos, NIgeria</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
