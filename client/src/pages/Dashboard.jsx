import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getCustomers } from "../services/customerService";
import { getComplaints } from "../services/complaintService";
import { getAgents } from "../services/agentService";

function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  const [customerCount, setCustomerCount] = useState(0);
  const [complaintCount, setComplaintCount] = useState(0);
  const [agentCount, setAgentCount] = useState(0);
  const [resolvedCount, setResolvedCount] = useState(0);
  const [recentComplaint, setRecentComplaint] = useState(null);

  useEffect(() => {
    fetchCustomers();
    fetchComplaints();
    fetchAgents();
  }, []);

  // Fetch Customers
  const fetchCustomers = async () => {
    try {
      const data = await getCustomers();
      setCustomerCount(data.customers?.length || 0);
    } catch (error) {
      console.error(error);
      setCustomerCount(0);
    }
  };

  // Fetch Complaints
  const fetchComplaints = async () => {
    try {
      const data = await getComplaints();

      const complaints = data.complaints || [];

      setComplaintCount(complaints.length);

      const resolved = complaints.filter(
        (item) => item.status === "Resolved"
      );

      setResolvedCount(resolved.length);

      if (complaints.length > 0) {
        setRecentComplaint(complaints[complaints.length - 1]);
      } else {
        setRecentComplaint(null);
      }
    } catch (error) {
      console.error(error);
      setComplaintCount(0);
      setResolvedCount(0);
      setRecentComplaint(null);
    }
  };

  // Fetch Agents
  const fetchAgents = async () => {
    try {
      const data = await getAgents();
      setAgentCount(data.agents?.length || 0);
    } catch (error) {
      console.error(error);
      setAgentCount(0);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-3">
        Welcome {user?.firstName || "Customer"} 👋
      </h2>

      <p className="text-muted">
        Customer Registry Dashboard
      </p>

      <div className="row mt-4">

        {/* Customers */}
        <div className="col-md-3 mb-4">
          <div className="card shadow border-0">
            <div className="card-body text-center">
              <i className="bi bi-people-fill fs-1 text-primary"></i>

              <h5 className="mt-3">Customers</h5>

              <h2>{customerCount}</h2>

              <Link
                to="/customers"
                className="btn btn-primary btn-sm mt-2"
              >
                View
              </Link>
            </div>
          </div>
        </div>

        {/* Complaints */}
        <div className="col-md-3 mb-4">
          <div className="card shadow border-0">
            <div className="card-body text-center">
              <i className="bi bi-exclamation-circle-fill fs-1 text-danger"></i>

              <h5 className="mt-3">Complaints</h5>

              <h2>{complaintCount}</h2>

              <Link
                to="/complaints"
                className="btn btn-danger btn-sm mt-2"
              >
                View
              </Link>
            </div>
          </div>
        </div>

        {/* Agents */}
        <div className="col-md-3 mb-4">
          <div className="card shadow border-0">
            <div className="card-body text-center">
              <i className="bi bi-person-badge-fill fs-1 text-success"></i>

              <h5 className="mt-3">Agents</h5>

              <h2>{agentCount}</h2>

              <Link
                to="/agents"
                className="btn btn-success btn-sm mt-2"
              >
                View
              </Link>
            </div>
          </div>
        </div>

        {/* Resolved */}
        <div className="col-md-3 mb-4">
          <div className="card shadow border-0">
            <div className="card-body text-center">
              <i className="bi bi-check-circle-fill fs-1 text-warning"></i>

              <h5 className="mt-3">Resolved</h5>

              <h2>{resolvedCount}</h2>

              <Link
                to="/reports"
                className="btn btn-warning btn-sm mt-2"
              >
                Reports
              </Link>
            </div>
          </div>
        </div>

      </div>

      {/* Recent Activity */}
      <div className="card shadow mt-4">

        <div className="card-header bg-primary text-white">
          Recent Activity
        </div>

        <div className="card-body">
          <ul className="list-group">

            <li className="list-group-item">
              {recentComplaint
                ? `${recentComplaint.title} - ${recentComplaint.status}`
                : "No recent complaints."}
            </li>

            <li className="list-group-item">
              {customerCount > 0
                ? `${customerCount} customer(s) registered.`
                : "No customers registered."}
            </li>

            <li className="list-group-item">
              {complaintCount > 0
                ? `${complaintCount} complaint(s) recorded.`
                : "No complaints recorded."}
            </li>

            <li className="list-group-item">
              {agentCount > 0
                ? `${agentCount} agent(s) available.`
                : "No agents available."}
            </li>

          </ul>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;