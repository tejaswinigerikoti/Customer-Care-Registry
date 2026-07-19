const express = require("express");
const router = express.Router();

const {
  addAgent,
  getAgents,
  getAgentById,
  updateAgent,
  deleteAgent,
} = require("../controllers/agentController");

// Create Agent
router.post("/", addAgent);

// Get All Agents
router.get("/", getAgents);

// Get Agent By ID
router.get("/:id", getAgentById);

// Update Agent
router.put("/:id", updateAgent);

// Delete Agent
router.delete("/:id", deleteAgent);

module.exports = router;