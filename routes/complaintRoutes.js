const express = require("express");
const router = express.Router();

const {
    createComplaint,
    getComplaints,
    getComplaint,
    updateComplaint,
    deleteComplaint
} = require("../controllers/complaintController");

router.post("/", createComplaint);
router.get("/", getComplaints);
router.get("/:id", getComplaint);
router.put("/:id", updateComplaint);
router.delete("/:id", deleteComplaint);

module.exports = router;