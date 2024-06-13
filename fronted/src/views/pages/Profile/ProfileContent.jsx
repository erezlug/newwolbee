import { Table } from "antd";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export const ProjectDetails = () => {
  // State to store the importance levels
  const [importanceLevels, setImportanceLevels] = useState({
    management: 'High Importance',
    turnover: 'Medium Importance',
    workLifeBalance: 'Low Importance',
    managerialAttention: 'High Importance',
    professionalism: 'Low Importance'
  });

  // Styles for the progress circles
  const circleContainerStyle = {
    width: '150px',
    margin: '20px',
    position: 'relative',
    transition: 'transform 0.3s ease',
  };

  const circleTextStyle = {
    fontSize: '12px', // Smaller text size
    color: '#333',
    marginBottom: '10px',
  };

  const wrapperStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '40px',
  };

  const experienceData = [
    {
      id: 1,
      name: "january 2nd, 04:35 AM",
      time: "Jan 2023 - Present (5 years 2 months)",
    },
    {
      id: 2,
      name: "Web Designer at Ron-tech",
      time: "Jan 2023 - Present (5 years 2 months)",
    },
    {
      id: 3,
      name: "Web Designer at Dalt Technology",
      time: "2023 2023 - Present (5 years 2 months)",
    },
    // Add more experience info data as needed
  ];

  const getColor = (importance) => {
    switch (importance) {
      case 'High Importance':
        return '#FF0000'; // Red
      case 'Medium Importance':
        return '#FFA500'; // Orange
      case 'Low Importance':
        return '#008000'; // Green
      default:
        return '#000000'; // Black
    }
  };

  const containerStyle = {
    display: 'flex',
    // justifyContent: 'space-between',
    gap:'50px'
  };

  const boxStyle = {
    backgroundColor: 'lightgrey',
    width: '350px',
    height: '400px',
    padding: '20px',
    marginBottom: '20px',
  };

  return (
    <div className="tab-content">
      {/* Projects Tab */}

      {/* /Assets Tab */}
      <div className="fade" id="emp_assets" style={{}}>
      <div style={containerStyle}>
      <div style={boxStyle}>
        <h3>Wolbee’s Top insights</h3>
        <p>פסקה ראשונה.</p>
        <p>פסקה שנייה.</p>
        <p>פסקה שלישית.</p>
      </div>
      <div style={boxStyle}>
        <h3>Latest insights</h3>
        <p>פסקה ראשונה.</p>
        <p>פסקה שנייה.</p>
        <p>פסקה שלישית.</p>
      </div>
    
    <div className="col-md-6 d-flex" style={{width:'450px'}}>
              <div className="card profile-box flex-fill">
                <div className="card-body">
                  <h3 className="card-title">
                    Lestest Activity{""}
                    <Link
                      to="#"
                      className="edit-icon"
                      data-bs-toggle="modal"
                      data-bs-target="#experience_info"
                    >
                      <i className="fa fa-pencil" />
                    </Link>
                  </h3>
                  <div className="experience-box">
                    <ul className="experience-list">
                      {experienceData.map((item) => (
                        <li key={item.id}>
                          <div className="experience-user">
                            <div className="before-circle" />
                          </div>
                          <div className="experience-content">
                            <div className="timeline-content">
                              <Link to="/" className="name">
                                {item.name}
                              </Link>
                              <span className="time">{item.time}</span>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
</div>
        <div style={wrapperStyle}>
          <div style={circleContainerStyle}>
            <h4 style={circleTextStyle}>Management</h4>
            <CircularProgressbar
              value={100}
              text={importanceLevels.management}
              styles={buildStyles({
                textSize:'10px',
                textColor: 'black',
                pathColor: getColor(importanceLevels.management),
                trailColor: '#d6d6d6',
              })}
            />
          </div>
          <div style={circleContainerStyle}>
            <h4 style={circleTextStyle}>Turnover</h4>
            <CircularProgressbar
              value={100}
              text={importanceLevels.turnover}
              styles={buildStyles({
                textSize:'10px',
                textColor: 'black',
                pathColor: getColor(importanceLevels.turnover),
                trailColor: '#d6d6d6',
              })}
            />
          </div>
          <div style={circleContainerStyle}>
            <h4 style={circleTextStyle}>Work-Life Balance</h4>
            <CircularProgressbar
              value={100}
              text={importanceLevels.workLifeBalance}
              styles={buildStyles({
                textSize:'10px',
                textColor: 'black',
                pathColor: getColor(importanceLevels.workLifeBalance),
                trailColor: '#d6d6d6',
              })}
            />
          </div>
          <div style={circleContainerStyle}>
            <h4 style={circleTextStyle}>Managerial Attention</h4>
            <CircularProgressbar
              value={100}
              text={importanceLevels.managerialAttention}
              styles={buildStyles({
                textSize:'10px',
                textColor: 'black',
                pathColor: getColor(importanceLevels.managerialAttention),
                trailColor: '#d6d6d6',
              })}
            />
          </div>
          <div style={circleContainerStyle}>
            <h4 style={circleTextStyle}>Professionalism</h4>
            <CircularProgressbar
              value={100}
              text={importanceLevels.professionalism}
              styles={buildStyles({
                textSize:'10px',
                textColor: 'black',
                pathColor: getColor(importanceLevels.professionalism),
                trailColor: '#d6d6d6',
              })}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const ListItem = ({ title, text }) => (
  <li>
    <div className="title">{title}</div>
    <div className="text">{text}</div>
  </li>
);

export default ProjectDetails;
