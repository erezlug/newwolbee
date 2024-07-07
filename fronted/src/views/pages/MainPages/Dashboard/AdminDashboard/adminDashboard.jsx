<<<<<<< HEAD
import React, { useEffect, useState } from "react";
=======
import React, {  useEffect,useState } from "react";
>>>>>>> a7de5759a9bef78c06b46c0602cbfd7a231c1538
import axios from "axios";
import Charts from "./charts";
import Reports from "./Reports";
import Statistics from "./statistics";
import InvoiceTable from "./invoiceTable";
import PaymentTable from "./paymentTable";
import ClientTable from "./clientTable";
import RecentTable from "./recentTable";
import Breadcrumbs from "../../../../../components/Breadcrumbs";
import { base_url } from "../../../../../base_urls";

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
<<<<<<< HEAD
    axios
      .get(base_url + "http://localhost:3000")
=======
    axios.get(base_url + "http://localhost:3000")
>>>>>>> a7de5759a9bef78c06b46c0602cbfd7a231c1538
      .then((res) => setUsers(res.data))
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);
<<<<<<< HEAD
=======
  
>>>>>>> a7de5759a9bef78c06b46c0602cbfd7a231c1538

  return (
    <div className="main-wrapper">
      <div className="page-wrapper">
        <div className="content container-fluid">
          {/* Page Header */}
<<<<<<< HEAD
          <Breadcrumbs maintitle="Wallet!" title="Dashboard"/>
=======
          <Breadcrumbs maintitle="Welcome Manager!" title="Dashboard" />
>>>>>>> a7de5759a9bef78c06b46c0602cbfd7a231c1538
          {/* /Page Header */}
          <div className="row">
            {Array.isArray(users) && users.length > 0 ? (
              users.map((item, index) => (
                <div
                  className="col-md-6 col-sm-6 col-lg-6 col-xl-3"
                  key={index}
                >
                  <div className="card dash-widget">
                    <div className="card-body">
                      <span className={`dash-widget-icon ${item.icon}`} />
                      <div className="dash-widget-info">
                        <h3>{item.number}</h3>
                        <span>{item.label}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p></p>
            )}
          </div>
<<<<<<< HEAD
          <Statistics />
          <Charts />
=======
          {/* /Charts */}
          <Charts />
          {/* /Charts */}
          {/* <Reports /> */}
          <Statistics />
          {/* <div className="row">
            <InvoiceTable />
            <PaymentTable />
          </div>

          <div className="row">
            <ClientTable />
            <RecentTable />
          </div> */}
>>>>>>> a7de5759a9bef78c06b46c0602cbfd7a231c1538
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
