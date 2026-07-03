const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema(
{
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Customer"
    },

    rating: {
        type: Number,
        required: true
    },

    comments: {
        type: String,
        required: true
    }

},
{
    timestamps: true
});

module.exports = mongoose.model("Feedback", feedbackSchema);