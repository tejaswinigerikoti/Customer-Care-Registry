const Admin = require("../models/Admin");

// Create Admin
exports.createAdmin = async (req, res) => {

    try {

        const admin = await Admin.create(req.body);

        res.status(201).json(admin);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

// Get All Admins
exports.getAdmins = async (req, res) => {

    try {

        const admins = await Admin.find();

        res.json(admins);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

// Update Admin
exports.updateAdmin = async (req, res) => {

    try {

        const admin = await Admin.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.json(admin);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

// Delete Admin
exports.deleteAdmin = async (req, res) => {

    try {

        await Admin.findByIdAndDelete(req.params.id);

        res.json({
            message: "Admin Deleted Successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};