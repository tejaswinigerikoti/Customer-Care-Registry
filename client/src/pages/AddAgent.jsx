import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addAgent } from "../services/agentService";

function AddAgent() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    department: "",
    status: "Active",
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
      const data = await addAgent(formData);

      alert(data.message);

      navigate("/agents");
    } catch (error) {
      console.error(error);
      alert("Unable to add agent.");
    }
  };

  return (
    <div className="container mt-5">

      <h2 className="mb-4">Add Agent</h2>

      <form onSubmit={handleSubmit}>

        <div className="mb-3">
          <label className="form-label">Agent Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Mobile</label>
          <input
            type="text"
            name="mobile"
            className="form-control"
            value={formData.mobile}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Department</label>
          <input
            type="text"
            name="department"
            className="form-control"
            value={formData.department}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label className="form-label">Status</label>

          <select
            name="status"
            className="form-select"
            value={formData.status}
            onChange={handleChange}
          >
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </div>

        <button
          type="submit"
          className="btn btn-success"
        >
          Add Agent
        </button>

      </form>

    </div>
  );
}

export default AddAgent;