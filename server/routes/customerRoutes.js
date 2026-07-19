const express = require("express");
const router = express.Router();

console.log("✅ customerRoutes loaded");

const {
  addCustomer,
  getCustomers,
  updateCustomer,
  deleteCustomer,
} = require("../controllers/customerController");

// Test Route
router.get("/test", (req, res) => {
  res.json({
    success: true,
    message: "Customer Routes Working Successfully",
  });
});

// Get All Customers
router.get("/", getCustomers);

// Add Customer
router.post("/", addCustomer);

// Update Customer
router.put("/:id", updateCustomer);

// Delete Customer
router.delete("/:id", deleteCustomer);

module.exports = router;