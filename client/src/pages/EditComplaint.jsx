import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  getComplaintById,
  updateComplaint,
} from "../services/complaintService";

function EditComplaint() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  const [formData, setFormData] = useState({
    customer: "",
    title: "",
    description: "",
    priority: "Low",
    status: "Pending",
  });

  useEffect(() => {
    fetchComplaint();
  }, []);

  const fetchComplaint = async () => {
    try {
      const data = await getComplaintById(id);

      setFormData({
        customer: data.complaint.customer,
        title: data.complaint.title,
        description: data.complaint.description,
        priority: data.complaint.priority,
        status: data.complaint.status,
      });

      setLoading(false);
    } catch (error) {
      console.error(error);
      alert("Unable to load complaint.");
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await updateComplaint(id, formData);

      alert(data.message);

      navigate("/complaints");
    } catch (error) {
      console.error(error);
      alert("Unable to update complaint.");
    }
  };

  if (loading) {
    return (
      <div className="container mt-5">
        <h3>Loading...</h3>
      </div>
    );
  }

  return (
    <div className="container mt-5">

      <h2 className="mb-4">Edit Complaint</h2>

      <form onSubmit={handleSubmit}>

        <div className="mb-3">
          <label className="form-label">Customer Name</label>

          <input
            type="text"
            name="customer"
            className="form-control"
            value={formData.customer}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Complaint Title</label>

          <input
            type="text"
            name="title"
            className="form-control"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>

          <textarea
            name="description"
            className="form-control"
            rows="4"
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div className="mb-3">
          <label className="form-label">Priority</label>

          <select
            name="priority"
            className="form-select"
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
            name="status"
            className="form-select"
            value={formData.status}
            onChange={handleChange}
          >
            <option>Pending</option>
            <option>In Progress</option>
            <option>Resolved</option>
          </select>
        </div>

        <button
          type="submit"
          className="btn btn-warning"
        >
          Update Complaint
        </button>

      </form>

    </div>
  );
}

export default EditComplaint;