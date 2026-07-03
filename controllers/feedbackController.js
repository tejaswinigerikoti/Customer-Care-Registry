const Feedback = require("../models/Feedback");

// Add Feedback
exports.createFeedback = async (req, res) => {

    try {

        const feedback = await Feedback.create(req.body);

        res.status(201).json(feedback);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

// Get All Feedback
exports.getFeedbacks = async (req, res) => {

    try {

        const feedbacks = await Feedback.find()
            .populate("customer");

        res.json(feedbacks);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

// Update Feedback
exports.updateFeedback = async (req, res) => {

    try {

        const feedback = await Feedback.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.json(feedback);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

// Delete Feedback
exports.deleteFeedback = async (req, res) => {

    try {

        await Feedback.findByIdAndDelete(req.params.id);

        res.json({
            message: "Feedback Deleted Successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};