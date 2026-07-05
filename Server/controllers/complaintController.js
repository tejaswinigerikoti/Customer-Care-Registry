const Complaint = require('../models/Complaint');

// @desc    Create a new complaint
// @route   POST /api/complaints
exports.createComplaint = async (req, res) => {
    try {
        const { user, title, description } = req.body;

        const newComplaint = new Complaint({
            user,
            title,
            description
        });

        const savedComplaint = await newComplaint.save();
        res.status(201).json({ message: 'Complaint filed successfully', complaint: savedComplaint });
    } catch (error) {
        console.error('Create Complaint Error:', error);
        res.status(500).json({ message: 'Server error while filing complaint' });
    }
};

// @desc    Get all complaints
// @route   GET /api/complaints
exports.getAllComplaints = async (req, res) => {
    try {
        const complaints = await Complaint.find().populate('user', 'username email');
        res.status(200).json(complaints);
    } catch (error) {
        console.error('Get Complaints Error:', error);
        res.status(500).json({ message: 'Server error retrieving complaints' });
    }
};