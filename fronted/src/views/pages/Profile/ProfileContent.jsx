import { Table } from "antd";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { TiPin } from "react-icons/ti";
<<<<<<< HEAD
import { useParams } from "react-router-dom";

export const ProjectDetails = () => {
  const { employeeId } = useParams();
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [importanceLevels, setImportanceLevels] = useState({
    management: 'High',
    turnover: 'Medium',
    workLifeBalance: 'Low',
    managerialAttention: 'High',
    professionalism: 'Low'
  });
  useEffect(() => {
    const employeesArrJson = localStorage.getItem('employeesArr');
    const currentManagerEmployeesArr = JSON.parse(employeesArrJson);
    const employee = currentManagerEmployeesArr.find(emp => emp.id === (employeeId));
    setSelectedEmployee(employee);
  }, [employeeId]);

  if (!selectedEmployee) {
    return <div>No employees have been added yet...</div>;
  }

  const circleContainerStyle = {
    width: '120px',
    margin: '10px',
    position: 'relative',
    transition: 'transform 0.3s ease',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '50%',
    overflow: 'hidden',
  };

  const circleTextStyle = {
    fontSize: '12px',
    color: '#333',
    textAlign: 'center',
    fontWeight: 'bold',
    height:'20px',
    marginTop:'30px'
    
=======

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
    width: '160px',
    margin: '20px',
    position: 'relative',
    transition: 'transform 0.3s ease',
  };

  const circleTextStyle = {
    fontSize: '12px', // Smaller text size
    color: '#333',
    marginBottom: '10px',
>>>>>>> a7de5759a9bef78c06b46c0602cbfd7a231c1538
  };

  const wrapperStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
<<<<<<< HEAD
    gap: '20px',
=======
    gap: '40px',
>>>>>>> a7de5759a9bef78c06b46c0602cbfd7a231c1538
  };

  const experienceData = [
    {
      id: 1,
      name: "Compensation",
      time: "21/08/2023",
    },
    {
      id: 2,
      name: "Development plan",
      time: "10/01/2024",
    },
    {
      id: 3,
      name: "Personal interview",
      time: "17/04/2024",
    },
<<<<<<< HEAD
  ];

=======
    // Add more experience info data as needed
  ];

  
  
>>>>>>> a7de5759a9bef78c06b46c0602cbfd7a231c1538
  const titleStyle = {
    textAlign: 'center',
    marginTop: '0',
  };
<<<<<<< HEAD

=======
  
>>>>>>> a7de5759a9bef78c06b46c0602cbfd7a231c1538
  const paragraphStyle = {
    position: 'relative',
    paddingLeft: '35px',
    marginBottom: '10px',
<<<<<<< HEAD
    fontSize: '16px',
  };

  const iconStyle = {
    position: 'absolute',
    left: '25px',
    // top: '10px',
    // transform: 'translateY(-50%)',
    color: '#FF902F',
  };

=======
    fontSize: '18px', // הגדלת הכתב
  };
  
  const iconStyle = {
    position: 'absolute',
    left: '0',
    top: '50%',
    transform: 'translateY(-70%)',
    color: '#FF902F', // צבע שחור לאייקון
   

  };
  
>>>>>>> a7de5759a9bef78c06b46c0602cbfd7a231c1538
  const pinIconSize = 24;

  const getColor = (importance) => {
    switch (importance) {
<<<<<<< HEAD
      case 'High':
        return '#FF0000';
      case 'Medium':
        return '#FFA500';
      case 'Low':
        return '#008000';
      default:
        return '#000000';
=======
      case 'High Importance':
        return '#FF0000'; // Red
      case 'Medium Importance':
        return '#FFA500'; // Orange
      case 'Low Importance':
        return '#008000'; // Green
      default:
        return '#000000'; // Black
>>>>>>> a7de5759a9bef78c06b46c0602cbfd7a231c1538
    }
  };

  const containerStyle = {
    display: 'flex',
<<<<<<< HEAD
    gap: '15px'
  };

  const boxStyle = {
    backgroundColor: '#DCDCDC' ,
    width: '380px',
    height: '400px',
    padding: '20px',
    marginBottom: '20px',
    border: 'solid black 0.3px',
    borderRadius:'10px'
  };


  return (
    <div className="tab-content">
      <div className="pro-overview tab-pane fade show active" id="emp_assets">
        <div style={containerStyle}>
          <div style={boxStyle}>
            <h3 style={titleStyle}>Wolbee’s Top insights</h3>
        <hr />
           <div style={{marginLeft: '15px'}}>
           {selectedEmployee.TopInsights.map((insight, index) => {
                  let parsedInsight;
                  try {
                    parsedInsight = JSON.parse(insight);
                  } catch (error) {
                    console.error("Failed to parse TopInsights JSON:", error);
                    parsedInsight = {}; // או כל ברירת מחדל
                  }
                  return Object.values(parsedInsight).map((info, i) => (
                    <div key={`${index}-${i}`}>
                     <br />
                     <TiPin style={iconStyle} size={pinIconSize}></TiPin> {info}</div>
                  ));
                })}
           </div>
           
          </div>
          <div style={boxStyle}>
            <h3 style={titleStyle}>Latest insights</h3>
<hr />
            <div style={{marginLeft: '15px'}}>
           {selectedEmployee.LatestInfo.map((insight, index) => {
                  let parsedInsigh;
                  try {
                    parsedInsigh = JSON.parse(insight);
                  } catch (error) {
                    console.error("Failed to parse TopInsights JSON:", error);
                    parsedInsigh = {}; // או כל ברירת מחדל
                  }
                  return Object.values(parsedInsigh).map((info, i) => (
                    <div key={`${index}-${i}`}>
                     <br />
                     <TiPin style={{ position: 'absolute', left: '390px' ,color: '#FF902F'}} size={pinIconSize}></TiPin> {info}</div>
                  ));
                })}
           </div>

            <div style={{marginLeft: '15px'}}>
        
           </div>
          </div>
    
          <div className="col-md-6 d-flex" style={{ width: '450px' }}>
            <div className="card profile-box flex-fill">
              <div className="card-body">
              <h3 style={titleStyle}>Lastest Activity</h3>
<hr />

    <div className="experience-box">
    <div style={{marginLeft: '15px'}}>
           {selectedEmployee.LastestActivity.map((insight, index) => {
                  let parsedInsigh;
                  try {
                    parsedInsigh = JSON.parse(insight);
                  } catch (error) {
                    console.error("Failed to parse TopInsights JSON:", error);
                    parsedInsigh = {}; // או כל ברירת מחדל
                  }
                  return Object.values(parsedInsigh).map((info, i) => (
                    <div key={`${index}-${i}`} >
                    <br ></br>
                     <span className="arrow">▼</span>
                      {info}</div>
                  ));
                })}
           </div>
 </div>

 {/* <ul className="experience-list">
    {selectedEmployee.LastestActivity.map((item, index) => (
      <li key={index}>
        <div className="experience-user">
          <div className="before-circle" />
        </div>
        <div className="experience-content">
          <div className="timeline-content">
            <Link to="/" className="name">
              {item.date}
            </Link>
            <span className="time">{item.Activity}</span>
          </div>
        </div>
      </li>
    ))}
  </ul> */}

              </div>
            </div>
          </div>
        </div>
=======
    // justifyContent: 'space-between',
    gap:'15px'
  };

  const boxStyle = {
    backgroundColor: 'lightgrey',
    width: '380px',
    height: '300px',
    padding: '20px',
    marginBottom: '20px',
    border: 'solid black 0.3px'
  };

  return (
    <div className="tab-content">
      {/* Projects Tab */}

      {/* /Assets Tab */}
      <div className="fade" id="emp_assets" style={{}}>
      <div style={containerStyle}>
      <div style={boxStyle}>
            <h3 style={titleStyle}>Wolbee’s Top insights</h3>
            <br />
            <p style={paragraphStyle}>
              <span style={iconStyle}><TiPin size={pinIconSize} /></span>
              Motivated by appreciation and responsibility
            </p>
            <p style={paragraphStyle}>
              <span style={iconStyle}><TiPin size={pinIconSize} /></span>
              High risk of turnover
            </p>
            <p style={paragraphStyle}>
              <span style={iconStyle}><TiPin size={pinIconSize} /></span>
              Possesses the potential and ambition to advance to a managerial career
            </p>
          </div>
          <div style={boxStyle}>
            <h3 style={titleStyle}>Latest insights</h3>
            <br />
            <p style={paragraphStyle}>
              <span style={iconStyle}><TiPin size={pinIconSize} /></span>
              loves to bake and cook
            </p>
            <p style={paragraphStyle}>
              <span style={iconStyle}><TiPin size={pinIconSize} /></span>
              His favorite restaurant is Minna tomei
            </p>
            <p style={paragraphStyle}>
              <span style={iconStyle}><TiPin size={pinIconSize} /></span>
              Will never miss a game of liverpool
            </p>
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
>>>>>>> a7de5759a9bef78c06b46c0602cbfd7a231c1538
        <div style={wrapperStyle}>
          <div style={circleContainerStyle}>
            <h4 style={circleTextStyle}>Management</h4>
            <CircularProgressbar
              value={100}
              text={importanceLevels.management}
              styles={buildStyles({
<<<<<<< HEAD
                textSize: '10px',
                textColor: 'black',
                pathColor: getColor(importanceLevels.management),
                trailColor: '#d6d6d6',
                pathTransitionDuration: 0.5,
                trailTransitionDuration: 0.5,
                pathTransition: 'stroke-dashoffset 0.5s ease 0s',
=======
                textSize:'10px',
                textColor: 'black',
                pathColor: getColor(importanceLevels.management),
                trailColor: '#d6d6d6',
>>>>>>> a7de5759a9bef78c06b46c0602cbfd7a231c1538
              })}
            />
          </div>
          <div style={circleContainerStyle}>
            <h4 style={circleTextStyle}>Turnover</h4>
            <CircularProgressbar
              value={100}
              text={importanceLevels.turnover}
              styles={buildStyles({
<<<<<<< HEAD
                textSize: '10px',
                textColor: 'black',
                pathColor: getColor(importanceLevels.turnover),
                trailColor: '#d6d6d6',
                pathTransitionDuration: 0.5,
                trailTransitionDuration: 0.5,
                pathTransition: 'stroke-dashoffset 0.5s ease 0s',
=======
                textSize:'10px',
                textColor: 'black',
                pathColor: getColor(importanceLevels.turnover),
                trailColor: '#d6d6d6',
>>>>>>> a7de5759a9bef78c06b46c0602cbfd7a231c1538
              })}
            />
          </div>
          <div style={circleContainerStyle}>
<<<<<<< HEAD
            <h4 style={circleTextStyle}>Work-Life</h4>
=======
            <h4 style={circleTextStyle}>Work-Life Balance</h4>
>>>>>>> a7de5759a9bef78c06b46c0602cbfd7a231c1538
            <CircularProgressbar
              value={100}
              text={importanceLevels.workLifeBalance}
              styles={buildStyles({
<<<<<<< HEAD
                textSize: '10px',
                textColor: 'black',
                pathColor: getColor(importanceLevels.workLifeBalance),
                trailColor: '#d6d6d6',
                pathTransitionDuration: 0.5,
                trailTransitionDuration: 0.5,
                pathTransition: 'stroke-dashoffset 0.5s ease 0s',
=======
                textSize:'10px',
                textColor: 'black',
                pathColor: getColor(importanceLevels.workLifeBalance),
                trailColor: '#d6d6d6',
>>>>>>> a7de5759a9bef78c06b46c0602cbfd7a231c1538
              })}
            />
          </div>
          <div style={circleContainerStyle}>
<<<<<<< HEAD
            <h4 style={circleTextStyle}>Managerial</h4>
=======
            <h4 style={circleTextStyle}>Managerial Attention</h4>
>>>>>>> a7de5759a9bef78c06b46c0602cbfd7a231c1538
            <CircularProgressbar
              value={100}
              text={importanceLevels.managerialAttention}
              styles={buildStyles({
<<<<<<< HEAD
                textSize: '10px',
                textColor: 'black',
                pathColor: getColor(importanceLevels.managerialAttention),
                trailColor: '#d6d6d6',
                pathTransitionDuration: 0.5,
                trailTransitionDuration: 0.5,
                pathTransition: 'stroke-dashoffset 0.5s ease 0s',
=======
                textSize:'10px',
                textColor: 'black',
                pathColor: getColor(importanceLevels.managerialAttention),
                trailColor: '#d6d6d6',
>>>>>>> a7de5759a9bef78c06b46c0602cbfd7a231c1538
              })}
            />
          </div>
          <div style={circleContainerStyle}>
<<<<<<< HEAD
            <h4 style={circleTextStyle}>Professional</h4>
=======
            <h4 style={circleTextStyle}>Professionalism</h4>
>>>>>>> a7de5759a9bef78c06b46c0602cbfd7a231c1538
            <CircularProgressbar
              value={100}
              text={importanceLevels.professionalism}
              styles={buildStyles({
<<<<<<< HEAD
                textSize: '10px',
                textColor: 'black',
                pathColor: getColor(importanceLevels.professionalism),
                trailColor: '#d6d6d6',
                pathTransitionDuration: 0.5,
                trailTransitionDuration: 0.5,
                pathTransition: 'stroke-dashoffset 0.5s ease 0s',
=======
                textSize:'10px',
                textColor: 'black',
                pathColor: getColor(importanceLevels.professionalism),
                trailColor: '#d6d6d6',
>>>>>>> a7de5759a9bef78c06b46c0602cbfd7a231c1538
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
