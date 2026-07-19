import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addCustomer } from "../services/customerService";

function AddCustomer() {
  const navigate = useNavigate();

  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
  });

  const handleChange = (e) => {
    setCustomer({
      ...customer,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !customer.name ||
      !customer.email ||
      !customer.mobile ||
      !customer.address
    ) {
      alert("Please fill all fields.");
      return;
    }

    try {
      const data = await addCustomer(customer);

      alert(data.message);

      navigate("/customers");
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Unable to add customer."
      );
    }
  };

  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <h2 className="mb-4 text-center">
          Add Customer
        </h2>

        <form onSubmit={handleSubmit}>

          <div className="mb-3">
            <label>Name</label>

            <input
              type="text"
              name="name"
              className="form-control"
              value={customer.name}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label>Email</label>

            <input
              type="email"
              name="email"
              className="form-control"
              value={customer.email}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label>Mobile</label>

            <input
              type="text"
              name="mobile"
              className="form-control"
              value={customer.mobile}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label>Address</label>

            <textarea
              name="address"
              className="form-control"
              rows="3"
              value={customer.address}
              onChange={handleChange}
            />
          </div>

          <button
            className="btn btn-primary w-100"
            type="submit"
          >
            Save Customer
          </button>

        </form>
      </div>
    </div>
  );
}

export default AddCustomer;