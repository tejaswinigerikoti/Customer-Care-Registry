import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  getComplaints,
  deleteComplaint,
} from "../services/complaintService";

function Complaints() {
  const [complaints, setComplaints] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchComplaints();
  }, []);

  // Fetch Complaints
  const fetchComplaints = async () => {
    try {
      const data = await getComplaints();

      console.log("Complaints Response:", data);

      setComplaints(data.complaints || []);
    } catch (error) {
      console.error("Complaints Error:", error);
      setComplaints([]);
    } finally {
      setLoading(false);
    }
  };

  // Delete Complaint
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this complaint?"
    );

    if (!confirmDelete) return;

    try {
      const data = await deleteComplaint(id);

      alert(data.message);

      fetchComplaints();
    } catch (error) {
      console.error(error);
      alert("Unable to delete complaint.");
    }
  };

  return (
    <div className="container mt-5">

      {/* Heading */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Complaints</h2>

        <Link
          to="/add-complaint"
          className="btn btn-success"
        >
          + Add Complaint
        </Link>
      </div>

      {loading ? (
        <h5>Loading...</h5>
      ) : (
        <table className="table table-bordered table-hover">
          <thead className="table-dark">
            <tr>
              <th>Customer</th>
              <th>Title</th>
              <th>Priority</th>
              <th>Status</th>
              <th width="180">Actions</th>
            </tr>
          </thead>

          <tbody>
            {complaints.length > 0 ? (
              complaints.map((complaint) => (
                <tr key={complaint._id}>
                  <td>{complaint.customer}</td>
                  <td>{complaint.title}</td>
                  <td>{complaint.priority}</td>
                  <td>{complaint.status}</td>

                  <td>
                    <Link
                      to={`/edit-complaint/${complaint._id}`}
                      className="btn btn-warning btn-sm me-2"
                    >
                      Edit
                    </Link>

                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(complaint._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center">
                  No Complaints Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Complaints;