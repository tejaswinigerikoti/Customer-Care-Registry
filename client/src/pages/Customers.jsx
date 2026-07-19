import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  getCustomers,
  deleteCustomer,
} from "../services/customerService";

function Customers() {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCustomers();
  }, []);

  // Fetch Customers
  const fetchCustomers = async () => {
    try {
      const data = await getCustomers();

      console.log("Customers Response:", data);

      setCustomers(data.customers || []);
    } catch (error) {
      console.error("Customers Error:", error);
      setCustomers([]);
    } finally {
      setLoading(false);
    }
  };

  // Delete Customer
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this customer?"
    );

    if (!confirmDelete) return;

    try {
      const data = await deleteCustomer(id);

      alert(data.message);

      // Refresh customer list
      fetchCustomers();
    } catch (error) {
      console.error(error);
      alert("Unable to delete customer.");
    }
  };

  return (
    <div className="container mt-5">

      {/* Heading */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Customers</h2>

        <Link
          to="/add-customer"
          className="btn btn-success"
        >
          + Add Customer
        </Link>
      </div>

      {loading ? (
        <h5>Loading...</h5>
      ) : (
        <table className="table table-bordered table-hover">
          <thead className="table-dark">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Address</th>
              <th width="180">Actions</th>
            </tr>
          </thead>

          <tbody>
            {customers.length > 0 ? (
              customers.map((customer) => (
                <tr key={customer._id}>
                  <td>{customer.name}</td>
                  <td>{customer.email}</td>
                  <td>{customer.mobile}</td>
                  <td>{customer.address}</td>

                  <td>
                    <Link
                      to={`/edit-customer/${customer._id}`}
                      className="btn btn-warning btn-sm me-2"
                    >
                      Edit
                    </Link>

                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(customer._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center">
                  No Customers Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Customers;