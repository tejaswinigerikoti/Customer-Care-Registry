const Complaint = require("../models/Complaint");

// Create Complaint
exports.createComplaint = async (req, res) => {
    try {
        const complaint = await Complaint.create(req.body);

        res.status(201).json({
            success: true,
            complaint
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

// Get All Complaints
exports.getComplaints = async (req, res) => {
    try {

        const complaints = await Complaint.find()
            .populate("customer")
            .populate("assignedAgent");

        res.json(complaints);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

// Get Complaint By ID
exports.getComplaint = async (req, res) => {
    try {

        const complaint = await Complaint.findById(req.params.id);

        res.json(complaint);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

// Update Complaint
exports.updateComplaint = async (req, res) => {
    try {

        const complaint = await Complaint.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.json(complaint);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

// Delete Complaint
exports.deleteComplaint = async (req, res) => {
    try {

        await Complaint.findByIdAndDelete(req.params.id);

        res.json({
            success: true,
            message: "Complaint Deleted Successfully"
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};