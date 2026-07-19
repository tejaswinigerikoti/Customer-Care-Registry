import { useEffect, useState } from "react";

import { getCustomers } from "../services/customerService";
import { getComplaints } from "../services/complaintService";
import { getAgents } from "../services/agentService";

import ComplaintPieChart from "../components/ComplaintPieChart";
import AgentBarChart from "../components/AgentBarChart";

import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

function Reports() {
  const [customers, setCustomers] = useState([]);
  const [complaints, setComplaints] = useState([]);
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const customerData = await getCustomers();
      const complaintData = await getComplaints();
      const agentData = await getAgents();

      setCustomers(customerData.customers || []);
      setComplaints(complaintData.complaints || []);
      setAgents(agentData.agents || []);
    } catch (error) {
      console.error("Error loading reports:", error);
    }
  };

  const resolved = complaints.filter(
    (c) => c.status === "Resolved"
  ).length;

  const pending = complaints.filter(
    (c) => c.status === "Pending"
  ).length;

  const activeAgents = agents.filter(
    (a) => a.status === "Active"
  ).length;

  const inactiveAgents = agents.filter(
    (a) => a.status === "Inactive"
  ).length;

  // Download PDF Report
  const downloadPDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("Customer Registry Report", 14, 20);

    autoTable(doc, {
      startY: 30,
      head: [["Report", "Count"]],
      body: [
        ["Total Customers", customers.length],
        ["Total Complaints", complaints.length],
        ["Resolved Complaints", resolved],
        ["Pending Complaints", pending],
        ["Total Agents", agents.length],
        ["Active Agents", activeAgents],
        ["Inactive Agents", inactiveAgents],
      ],
    });

    doc.save("Customer_Registry_Report.pdf");
  };

  return (
    <div className="container mt-4">

      <h2 className="text-center mb-4">
        Reports Dashboard
      </h2>

      <div className="text-end mb-4">
        <button
          className="btn btn-success"
          onClick={downloadPDF}
        >
          Download PDF
        </button>
      </div>

      {/* Summary Cards */}

      <div className="row">

        <div className="col-md-4 mb-3">
          <div className="card shadow text-center">
            <div className="card-body">
              <h5>Total Customers</h5>
              <h2 className="text-primary">
                {customers.length}
              </h2>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="card shadow text-center">
            <div className="card-body">
              <h5>Total Complaints</h5>
              <h2 className="text-danger">
                {complaints.length}
              </h2>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="card shadow text-center">
            <div className="card-body">
              <h5>Total Agents</h5>
              <h2 className="text-success">
                {agents.length}
              </h2>
            </div>
          </div>
        </div>

      </div>

      {/* Status Cards */}

      <div className="row">

        <div className="col-md-3 mb-3">
          <div className="card border-success shadow text-center">
            <div className="card-body">
              <h5>Resolved</h5>
              <h2 className="text-success">
                {resolved}
              </h2>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-3">
          <div className="card border-danger shadow text-center">
            <div className="card-body">
              <h5>Pending</h5>
              <h2 className="text-danger">
                {pending}
              </h2>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-3">
          <div className="card border-primary shadow text-center">
            <div className="card-body">
              <h5>Active Agents</h5>
              <h2 className="text-primary">
                {activeAgents}
              </h2>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-3">
          <div className="card border-secondary shadow text-center">
            <div className="card-body">
              <h5>Inactive Agents</h5>
              <h2 className="text-secondary">
                {inactiveAgents}
              </h2>
            </div>
          </div>
        </div>

      </div>

      {/* Charts */}

      <div className="row mt-4">

        <div className="col-lg-6 mb-4">
          <ComplaintPieChart
            resolved={resolved}
            pending={pending}
          />
        </div>

        <div className="col-lg-6 mb-4">
          <AgentBarChart
            active={activeAgents}
            inactive={inactiveAgents}
          />
        </div>

      </div>

    </div>
  );
}

export default Reports;