const express = require("express");
const router = express.Router();

const {
    createAgent,
    getAgents,
    updateAgent,
    deleteAgent
} = require("../controllers/agentController");

router.post("/", createAgent);
router.get("/", getAgents);
router.put("/:id", updateAgent);
router.delete("/:id", deleteAgent);

module.exports = router;