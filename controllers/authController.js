const Customer = require("../models/Customer");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Register Customer
exports.register = async (req, res) => {
  try {
    const { name, email, phone, address, password } = req.body;

    const existingUser = await Customer.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "Customer already exists"
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const customer = await Customer.create({
      name,
      email,
      phone,
      address,
      password: hashedPassword
    });

    res.status(201).json({
      success: true,
      customer
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// Login Customer
exports.login = async (req, res) => {

  try {

    const { email, password } = req.body;

    const customer = await Customer.findOne({ email });

    if (!customer) {
      return res.status(404).json({
        message: "Customer not found"
      });
    }

    const match = await bcrypt.compare(password, customer.password);

    if (!match) {
      return res.status(401).json({
        message: "Invalid Password"
      });
    }

    const token = jwt.sign(
      { id: customer._id },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({
      success: true,
      token,
      customer
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};