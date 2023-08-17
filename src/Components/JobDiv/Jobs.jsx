/* eslint-disable react/prop-types */
import "./Jobs.css";
import { BiTimeFive } from "react-icons/bi";

const Jobs = ({ filteredData }) => {
  return (
    <div className="jobsContainer">
      {filteredData.map(
        ({ id, image, title, time, location, desc, company }) => {
          return (
            <div key={id} className="card">
              <span className="cardHeader">
                <h1 className="cardTitle">{title}</h1>
                <span className="CardDate">
                  <BiTimeFive />
                  {time}
                </span>
              </span>
              <h6 className="cardLocaton">{location}</h6>
              <p className="cardDesc">{desc}</p>

              <div className="company">
                <img src={image} alt="CompanyLogo" className="companyLogo" />
                <span className="companyName">{company}</span>
              </div>
              <button className="cardButton">Apply Now</button>
            </div>
          );
        }
      )}
    </div>
  );
};

export default Jobs;
