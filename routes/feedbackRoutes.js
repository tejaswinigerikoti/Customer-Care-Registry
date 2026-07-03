const express = require("express");
const router = express.Router();

const {
    createFeedback,
    getFeedbacks,
    updateFeedback,
    deleteFeedback
} = require("../controllers/feedbackController");

router.post("/", createFeedback);
router.get("/", getFeedbacks);
router.put("/:id", updateFeedback);
router.delete("/:id", deleteFeedback);

module.exports = router;