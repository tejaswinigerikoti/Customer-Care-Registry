console.log("******** THIS SERVER.JS IS RUNNING ********");

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

// Import Routes
const authRoutes = require("./routes/authRoutes");
const customerRoutes = require("./routes/customerRoutes");
const complaintRoutes = require("./routes/complaintRoutes");
const agentRoutes = require("./routes/agentRoutes");

dotenv.config();

// Connect MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/customers", customerRoutes);
app.use("/api/complaints", complaintRoutes);
app.use("/api/agents", agentRoutes);

// Test Routes
app.get("/api/customers/test", (req, res) => {
  res.send("CUSTOMER ROUTE WORKING");
});

app.get("/api/agents/test", (req, res) => {
  res.send("AGENT ROUTE WORKING");
});

// Home Route
app.get("/", (req, res) => {
  res.send("Customer Registry API Running...");
});

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});