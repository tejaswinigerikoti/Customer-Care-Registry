import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  getAgentById,
  updateAgent,
} from "../services/agentService";

function EditAgent() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    department: "",
    status: "Active",
  });

  useEffect(() => {
    fetchAgent();
  }, []);

  const fetchAgent = async () => {
    try {
      const data = await getAgentById(id);

      setFormData({
        name: data.agent.name,
        email: data.agent.email,
        mobile: data.agent.mobile,
        department: data.agent.department,
        status: data.agent.status,
      });

      setLoading(false);
    } catch (error) {
      console.error(error);
      alert("Unable to load agent.");
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
      const data = await updateAgent(id, formData);

      alert(data.message);

      navigate("/agents");
    } catch (error) {
      console.error(error);
      alert("Unable to update agent.");
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

      <h2 className="mb-4">Edit Agent</h2>

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
          className="btn btn-warning"
        >
          Update Agent
        </button>

      </form>

    </div>
  );
}

export default EditAgent;