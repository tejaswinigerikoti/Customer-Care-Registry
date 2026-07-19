import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getCustomers, updateCustomer } from "../services/customerService";

function EditCustomer() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
  });

  useEffect(() => {
    fetchCustomer();
  }, []);

  const fetchCustomer = async () => {
    try {
      const data = await getCustomers();

      const selectedCustomer = data.customers.find(
        (c) => c._id === id
      );

      if (selectedCustomer) {
        setCustomer(selectedCustomer);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setCustomer({
      ...customer,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateCustomer(id, customer);

      alert("Customer Updated Successfully");

      navigate("/customers");
    } catch (error) {
      console.log(error);
      alert("Unable to update customer");
    }
  };

  return (
    <div className="container mt-5">

      <h2 className="mb-4">Edit Customer</h2>

      <form onSubmit={handleSubmit}>

        <div className="mb-3">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={customer.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={customer.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>Mobile</label>
          <input
            type="text"
            className="form-control"
            name="mobile"
            value={customer.mobile}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>Address</label>
          <textarea
            className="form-control"
            name="address"
            value={customer.address}
            onChange={handleChange}
            required
          />
        </div>

        <button
          type="submit"
          className="btn btn-warning"
        >
          Update Customer
        </button>

      </form>

    </div>
  );
}

export default EditCustomer;