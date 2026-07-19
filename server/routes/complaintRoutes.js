const express = require("express");
const router = express.Router();

const {
  addComplaint,
  getComplaints,
  getComplaintById,
  updateComplaint,
  deleteComplaint,
} = require("../controllers/complaintController");

// Create Complaint
router.post("/", addComplaint);

// Get All Complaints
router.get("/", getComplaints);

// Get Single Complaint
router.get("/:id", getComplaintById);

// Update Complaint
router.put("/:id", updateComplaint);

// Delete Complaint
router.delete("/:id", deleteComplaint);

module.exports = router;