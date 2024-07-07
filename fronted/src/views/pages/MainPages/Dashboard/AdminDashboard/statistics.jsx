import React from "react";
import { Link } from "react-router-dom";
import { User } from "../../../../../Routes/ImagePath";

const Statistics = () => {
  return (
    <div>
<<<<<<< HEAD
            <div className="row">
                  <div className="col-md-6 text-center">
          <div className="card flex-fill">
            <div className="card-body">
              <h4 className="card-title">Budget Breakdown</h4>
=======
      <div className="row">
        <div className="col-md-12 col-lg-12 col-xl-4 d-flex">
          <div className="card flex-fill dash-statistics">
            <div className="card-body">
              <h5 className="card-title">Statistics</h5>
              <div className="stats-list">
                <div className="stats-info">
                  <p>
                    Today Leave{" "}
                    <strong>
                      4 <small>/ 65</small>
                    </strong>
                  </p>
                  <div className="progress">
                    <div
                      className="progress-bar bg-primary"
                      role="progressbar"
                      style={{ width: "31%" }}
                      aria-valuenow={31}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
                <div className="stats-info">
                  <p>
                    Pending Invoice{" "}
                    <strong>
                      15 <small>/ 92</small>
                    </strong>
                  </p>
                  <div className="progress">
                    <div
                      className="progress-bar bg-warning"
                      role="progressbar"
                      style={{ width: "31%" }}
                      aria-valuenow={31}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
                <div className="stats-info">
                  <p>
                    Completed Projects{" "}
                    <strong>
                      85 <small>/ 112</small>
                    </strong>
                  </p>
                  <div className="progress">
                    <div
                      className="progress-bar bg-success"
                      role="progressbar"
                      style={{ width: "62%" }}
                      aria-valuenow={62}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
                <div className="stats-info">
                  <p>
                    Open Tickets{" "}
                    <strong>
                      190 <small>/ 212</small>
                    </strong>
                  </p>
                  <div className="progress">
                    <div
                      className="progress-bar bg-danger"
                      role="progressbar"
                      style={{ width: "62%" }}
                      aria-valuenow={62}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
                <div className="stats-info">
                  <p>
                    Closed Tickets{" "}
                    <strong>
                      22 <small>/ 212</small>
                    </strong>
                  </p>
                  <div className="progress">
                    <div
                      className="progress-bar bg-info"
                      role="progressbar"
                      style={{ width: "22%" }}
                      aria-valuenow={22}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12 col-lg-6 col-xl-4 d-flex">
          <div className="card flex-fill">
            <div className="card-body">
              <h4 className="card-title">Task Statistics</h4>
>>>>>>> a7de5759a9bef78c06b46c0602cbfd7a231c1538
              <div className="statistics">
                <div className="row">
                  <div className="col-md-6 col-6 text-center">
                    <div className="stats-box mb-4">
<<<<<<< HEAD
                      <p>Total Budget</p>
                      <h3>2500$</h3>
=======
                      <p>Total Tasks</p>
                      <h3>385</h3>
>>>>>>> a7de5759a9bef78c06b46c0602cbfd7a231c1538
                    </div>
                  </div>
                  <div className="col-md-6 col-6 text-center">
                    <div className="stats-box mb-4">
<<<<<<< HEAD
                      <p>Used Budget</p>
                      <h3>870$</h3>
=======
                      <p>Overdue Tasks</p>
                      <h3>19</h3>
>>>>>>> a7de5759a9bef78c06b46c0602cbfd7a231c1538
                    </div>
                  </div>
                </div>
              </div>
              <div className="progress mb-4">
                <div
                  className="progress-bar bg-purple"
                  role="progressbar"
                  style={{ width: "30%" }}
                  aria-valuenow={30}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  30%
                </div>
                <div
                  className="progress-bar bg-warning"
                  role="progressbar"
                  style={{ width: "22%" }}
                  aria-valuenow={18}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  22%
                </div>
                <div
                  className="progress-bar bg-success"
                  role="progressbar"
                  style={{ width: "24%" }}
                  aria-valuenow={12}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  24%
                </div>
                <div
                  className="progress-bar bg-danger"
                  role="progressbar"
                  style={{ width: "26%" }}
                  aria-valuenow={14}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  21%
                </div>
                <div
                  className="progress-bar bg-info"
                  role="progressbar"
                  style={{ width: "10%" }}
                  aria-valuenow={14}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  10%
                </div>
              </div>
              <div>
                <p>
                  <i className="far fa-dot-circle text-purple me-2" />
<<<<<<< HEAD
                  Company Events and Outings <span className="float-end">260$</span>
                </p>
                <p>
                  <i className="far fa-dot-circle text-warning me-2" />
                  Birthday Presents <span className="float-end">170$</span>
                </p>
                <p>
                  <i className="far fa-dot-circle text-success me-2" />
                  Team Building Activities <span className="float-end">180$</span>
                </p>
                <p>
                  <i className="far fa-dot-circle text-danger me-2" />
                  Personal Development <span className="float-end">170$</span>
                </p>
                <p className="mb-0">
                  <i className="far fa-dot-circle text-info me-2" />
                  Employee of the Month Program <span className="float-end">90$</span>
=======
                  Completed Tasks <span className="float-end">166</span>
                </p>
                <p>
                  <i className="far fa-dot-circle text-warning me-2" />
                  Inprogress Tasks <span className="float-end">115</span>
                </p>
                <p>
                  <i className="far fa-dot-circle text-success me-2" />
                  On Hold Tasks <span className="float-end">31</span>
                </p>
                <p>
                  <i className="far fa-dot-circle text-danger me-2" />
                  Pending Tasks <span className="float-end">47</span>
                </p>
                <p className="mb-0">
                  <i className="far fa-dot-circle text-info me-2" />
                  Review Tasks <span className="float-end">5</span>
>>>>>>> a7de5759a9bef78c06b46c0602cbfd7a231c1538
                </p>
              </div>
            </div>
          </div>
        </div>
<<<<<<< HEAD
        <div className="col-md-6 text-center">
          <div className="card flex-fill dash-statistics">
            <div className="card-body">
              <h5 className="card-title">Employee Budget Allocation</h5>
              <div className="stats-list">
                <div className="stats-info">
                  <p>
                    Nicole{" "}
                    <strong>
                      80$ <small>/ 500$</small>
                    </strong>
                  </p>
                  <div className="progress">
                    <div
                      className="progress-bar bg-primary"
                      role="progressbar"
                      style={{ width: "16%" }}
                      aria-valuenow={16}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
                <div className="stats-info">
                  <p>
                    Ben{" "}
                    <strong>
                      142$ <small>/ 350$</small>
                    </strong>
                  </p>
                  <div className="progress">
                    <div
                      className="progress-bar bg-warning"
                      role="progressbar"
                      style={{ width: "40%" }}
                      aria-valuenow={40}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
                <div className="stats-info">
                  <p>
                    Brian{" "}
                    <strong>
                      185$ <small>/ 300$</small>
                    </strong>
                  </p>
                  <div className="progress">
                    <div
                      className="progress-bar bg-success"
                      role="progressbar"
                      style={{ width: "61%" }}
                      aria-valuenow={61}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
                <div className="stats-info">
                  <p>
                    Issac{" "}
                    <strong>
                      190$ <small>/ 700$</small>
                    </strong>
                  </p>
                  <div className="progress">
                    <div
                      className="progress-bar bg-danger"
                      role="progressbar"
                      style={{ width: "27%" }}
                      aria-valuenow={27}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
                <div className="stats-info">
                  <p>
                    Lior{" "}
                    <strong>
                      322$ <small>/ 400$</small>
                    </strong>
                  </p>
                  <div className="progress">
                    <div
                      className="progress-bar bg-info"
                      role="progressbar"
                      style={{ width: "80%" }}
                      aria-valuenow={80}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
              </div>
=======
        <div className="col-md-12 col-lg-6 col-xl-4 d-flex">
          <div className="card flex-fill">
            <div className="card-body">
              <h4 className="card-title">
                Today Absent{" "}
                <span className="badge bg-inverse-danger ms-2">5</span>
              </h4>
              <div className="leave-info-box">
                <div className="media d-flex align-items-center">
                  <Link to="/profile" className="avatar">
                    <img alt="" src={User} />
                  </Link>
                  <div className="media-body">
                    <div className="text-sm my-0">Martin Lewis</div>
                  </div>
                </div>
                <div className="row align-items-center mt-3">
                  <div className="col-6">
                    <h6 className="mb-0">4 Sep 2023</h6>
                    <span className="text-sm text-muted">Leave Date</span>
                  </div>
                  <div className="col-6 text-end">
                    <span className="badge bg-inverse-danger">Pending</span>
                  </div>
                </div>
              </div>
              <div className="leave-info-box">
                <div className="media d-flex align-items-center">
                  <Link to="/profile" className="avatar">
                    <img alt="" src={User} />
                  </Link>
                  <div className="media-body">
                    <div className="text-sm my-0">Martin Lewis</div>
                  </div>
                </div>
                <div className="row align-items-center mt-3">
                  <div className="col-6">
                    <h6 className="mb-0">4 Sep 2023</h6>
                    <span className="text-sm text-muted">Leave Date</span>
                  </div>
                  <div className="col-6 text-end">
                    <span className="badge bg-inverse-success">Approved</span>
                  </div>
                </div>
              </div>
              <div className="load-more text-center">
                <Link className="text-dark" to="#">
                  Load More
                </Link>
              </div>
>>>>>>> a7de5759a9bef78c06b46c0602cbfd7a231c1538
            </div>
          </div>
        </div>
      </div>
<<<<<<< HEAD

=======
>>>>>>> a7de5759a9bef78c06b46c0602cbfd7a231c1538
    </div>
  );
};

export default Statistics;
