const Agent = require("../models/Agent");

// Create Agent
exports.createAgent = async (req, res) => {

    try {

        const agent = await Agent.create(req.body);

        res.status(201).json(agent);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

// Get All Agents
exports.getAgents = async (req, res) => {

    try {

        const agents = await Agent.find();

        res.json(agents);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

// Update Agent
exports.updateAgent = async (req, res) => {

    try {

        const agent = await Agent.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.json(agent);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

// Delete Agent
exports.deleteAgent = async (req, res) => {

    try {

        await Agent.findByIdAndDelete(req.params.id);

        res.json({
            message: "Agent Deleted Successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};