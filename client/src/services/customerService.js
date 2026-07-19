import axios from "axios";

const API = "http://localhost:5000/api/customers";

export const getCustomers = async () => {
  const res = await axios.get(API);
  return res.data;
};

export const addCustomer = async (customer) => {
  const res = await axios.post(API, customer);
  return res.data;
};

export const updateCustomer = async (id, customer) => {
  const res = await axios.put(`${API}/${id}`, customer);
  return res.data;
};

export const deleteCustomer = async (id) => {
  const res = await axios.delete(`${API}/${id}`);
  return res.data;
};