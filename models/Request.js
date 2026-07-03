const mongoose = require("mongoose");

const requestSchema = new mongoose.Schema(
{
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Customer"
    },

    requestType: {
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

module.exports = mongoose.model("Request", requestSchema);