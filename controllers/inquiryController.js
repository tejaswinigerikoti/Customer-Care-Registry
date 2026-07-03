const Inquiry = require("../models/Inquiry");

// Create Inquiry

exports.createInquiry = async (req, res) => {

    try {

        const inquiry = await Inquiry.create(req.body);

        res.status(201).json(inquiry);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

// Get All Inquiries

exports.getInquiries = async (req, res) => {

    try {

        const inquiries = await Inquiry.find()
            .populate("customer")
            .populate("assignedAgent");

        res.json(inquiries);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

// Update Inquiry

exports.updateInquiry = async (req, res) => {

    try {

        const inquiry = await Inquiry.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.json(inquiry);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

// Delete Inquiry

exports.deleteInquiry = async (req, res) => {

    try {

        await Inquiry.findByIdAndDelete(req.params.id);

        res.json({
            message: "Inquiry Deleted Successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};