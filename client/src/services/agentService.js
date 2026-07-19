import axios from "axios";

const API = "http://localhost:5000/api/agents";

// Get All Agents
export const getAgents = async () => {
  const res = await axios.get(API);
  return res.data;
};

// Get Single Agent
export const getAgentById = async (id) => {
  const res = await axios.get(`${API}/${id}`);
  return res.data;
};

// Add Agent
export const addAgent = async (agent) => {
  const res = await axios.post(API, agent);
  return res.data;
};

// Update Agent
export const updateAgent = async (id, agent) => {
  const res = await axios.put(`${API}/${id}`, agent);
  return res.data;
};

// Delete Agent
export const deleteAgent = async (id) => {
  const res = await axios.delete(`${API}/${id}`);
  return res.data;
};