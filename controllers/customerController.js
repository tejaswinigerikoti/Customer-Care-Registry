exports.createCustomer = async (req, res) => {
    try {
        const customer = new Customer(req.body);

        const savedCustomer = await customer.save();

        res.status(201).json(savedCustomer);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};
const Customer = require("../models/Customer");

// Get All Customers

exports.getCustomers = async (req, res) => {

    try {

        const customers = await Customer.find();

        res.json(customers);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

// Get Customer By ID

exports.getCustomer = async (req, res) => {

    try {

        const customer = await Customer.findById(req.params.id);

        res.json(customer);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

// Update Customer

exports.updateCustomer = async (req, res) => {

    try {

        const customer = await Customer.findByIdAndUpdate(

            req.params.id,

            req.body,

            { new: true }

        );

        res.json(customer);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

// Delete Customer

exports.deleteCustomer = async (req, res) => {

    try {

        await Customer.findByIdAndDelete(req.params.id);

        res.json({
            message: "Customer Deleted Successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};