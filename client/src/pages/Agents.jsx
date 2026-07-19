import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAgents, deleteAgent } from "../services/agentService";

function Agents() {
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    fetchAgents();
  }, []);

  const fetchAgents = async () => {
    try {
      const data = await getAgents();
      setAgents(data.agents || []);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this agent?"
    );

    if (!confirmDelete) return;

    try {
      const data = await deleteAgent(id);

      alert(data.message);

      fetchAgents();
    } catch (error) {
      console.error(error);
      alert("Unable to delete agent.");
    }
  };

  return (
    <div className="container mt-5">

      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Agents</h2>

        <Link
          to="/add-agent"
          className="btn btn-success"
        >
          + Add Agent
        </Link>
      </div>

      <table className="table table-bordered table-hover">

        <thead className="table-dark">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Department</th>
            <th>Status</th>
            <th width="170">Actions</th>
          </tr>
        </thead>

        <tbody>

          {agents.length === 0 ? (
            <tr>
              <td
                colSpan="6"
                className="text-center"
              >
                No Agents Found
              </td>
            </tr>
          ) : (
            agents.map((agent) => (
              <tr key={agent._id}>
                <td>{agent.name}</td>
                <td>{agent.email}</td>
                <td>{agent.mobile}</td>
                <td>{agent.department}</td>
                <td>{agent.status}</td>

                <td>

                  <Link
                    to={`/edit-agent/${agent._id}`}
                    className="btn btn-warning btn-sm me-2"
                  >
                    Edit
                  </Link>

                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(agent._id)}
                  >
                    Delete
                  </button>

                </td>
              </tr>
            ))
          )}

        </tbody>

      </table>

    </div>
  );
}

export default Agents;