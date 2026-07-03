const mongoose = require("mongoose");

const inquirySchema = new mongoose.Schema(
{
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Customer"
    },

    subject: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    status: {
        type: String,
        default: "Pending"
    },

    assignedAgent: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Agent"
    }

},
{
    timestamps: true
});

module.exports = mongoose.model("Inquiry", inquirySchema);