import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addComplaint } from "../services/complaintService";

function AddComplaint() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    customer: "",
    title: "",
    description: "",
    priority: "Low",
    status: "Pending",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addComplaint(formData);

      alert("Complaint Added Successfully");

      navigate("/complaints");
    } catch (error) {
      console.error(error);
      alert("Failed to add complaint");
    }
  };

  return (
    <div className="container mt-5">

      <h2 className="mb-4">Add Complaint</h2>

      <form onSubmit={handleSubmit}>

        <div className="mb-3">
          <label className="form-label">Customer Name</label>

          <input
            type="text"
            className="form-control"
            name="customer"
            value={formData.customer}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Complaint Title</label>

          <input
            type="text"
            className="form-control"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>

          <textarea
            className="form-control"
            rows="4"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div className="mb-3">
          <label className="form-label">Priority</label>

          <select
            className="form-select"
            name="priority"
            value={formData.priority}
            onChange={handleChange}
          >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="form-label">Status</label>

          <select
            className="form-select"
            name="status"
            value={formData.status}
            onChange={handleChange}
          >
            <option>Pending</option>
            <option>In Progress</option>
            <option>Resolved</option>
          </select>
        </div>

        <button className="btn btn-success">
          Add Complaint
        </button>

      </form>

    </div>
  );
}

export default AddComplaint;