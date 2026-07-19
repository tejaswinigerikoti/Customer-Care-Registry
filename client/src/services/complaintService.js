import axios from "axios";

const API = "http://localhost:5000/api/complaints";

// Get All Complaints
export const getComplaints = async () => {
  const res = await axios.get(API);
  return res.data;
};

// Get Single Complaint
export const getComplaintById = async (id) => {
  const res = await axios.get(`${API}/${id}`);
  return res.data;
};

// Add Complaint
export const addComplaint = async (complaint) => {
  const res = await axios.post(API, complaint);
  return res.data;
};

// Update Complaint
export const updateComplaint = async (id, complaint) => {
  const res = await axios.put(`${API}/${id}`, complaint);
  return res.data;
};

// Delete Complaint
export const deleteComplaint = async (id) => {
  const res = await axios.delete(`${API}/${id}`);
  return res.data;
};