const Request = require("../models/Request");

// Create Request
exports.createRequest = async (req, res) => {

    try {

        const request = await Request.create(req.body);

        res.status(201).json(request);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

// Get All Requests
exports.getRequests = async (req, res) => {

    try {

        const requests = await Request.find()
            .populate("customer")
            .populate("assignedAgent");

        res.json(requests);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

// Update Request
exports.updateRequest = async (req, res) => {

    try {

        const request = await Request.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.json(request);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

// Delete Request
exports.deleteRequest = async (req, res) => {

    try {

        await Request.findByIdAndDelete(req.params.id);

        res.json({
            message: "Request Deleted Successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};