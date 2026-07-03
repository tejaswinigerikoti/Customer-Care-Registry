const mongoose = require("mongoose");

const complaintSchema = new mongoose.Schema(
{
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Customer"
    },

    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    status: {
        type: String,
        default: "Open"
    },

    assignedAgent: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Agent"
    }

},
{
    timestamps: true
});

module.exports = mongoose.model("Complaint", complaintSchema);