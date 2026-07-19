# Customer Registry System

A full-stack MERN (MongoDB, Express.js, React.js, Node.js) application for customer registration, complaint management, agent management, reporting, and dashboard analytics.

---

# System Features & Implementation Details

## 1. User Registration & Account Management
Allows customers, admins, and agents to securely register and manage their accounts.

### How it works
- Customers register through a signup form.
- Customer details are stored securely in MongoDB.
- A unique customer ID is generated.
- Registration date is automatically recorded.
- Agents are created and managed by the administrator.

---

## 2. Customer Profile Management

Customers can:

- Update profile information
- View personal details
- Manage account information

Administrators can:

- View customer records
- Edit customer information
- Maintain customer database

---

## 3. Complaint Management

Customers can:

- Raise complaints
- Track complaint status
- View complaint history

Agents can:

- Receive assigned complaints
- Update complaint status
- Resolve customer issues

---

## 4. Communication History

The system stores customer interactions including:

- Complaints
- Requests
- Inquiries

This allows complete tracking of customer communication.

---

## 5. Dashboard

Dashboard displays:

- Total Customers
- Total Complaints
- Total Agents
- Resolved Complaints
- Pending Complaints
- Recent Activity

---

## 6. Reports

The Reports module provides:

- Customer Statistics
- Complaint Statistics
- Agent Statistics
- Active vs Inactive Agents
- Resolved vs Pending Complaints

---

## 7. Charts

Interactive charts include:

- Complaint Status Pie Chart
- Agent Status Bar Chart

---

## 8. PDF Export

Generate downloadable PDF reports containing:

- Customer Summary
- Complaint Summary
- Agent Summary
- Statistics

---

## 9. Excel Export

Export report data into Excel format for analysis.

---

# Roles and Responsibilities

## Customer

- Register an account
- Login securely
- Update profile
- Raise complaints
- Track complaint status
- Provide feedback

---

## Admin

- Manage customers
- Manage agents
- Monitor complaints
- Generate reports
- View dashboard analytics

---

## Agent

- View assigned complaints
- Update complaint status
- Resolve customer issues
- Maintain customer communication

---

# User Flow

## Registration

Customer → Register → Database → Login

---

## Login

Customer/Admin/Agent → Login → Dashboard

---

## Customer Dashboard

Customer can:

- View profile
- Raise complaint
- Check complaint status

---

## Complaint Flow

Customer

↓

Raise Complaint

↓

Complaint Stored in Database

↓

Agent Assigned

↓

Agent Resolves Complaint

↓

Complaint Closed

↓

Customer Feedback

---

# MVC Architecture

The backend follows the MVC (Model-View-Controller) architecture.

## Model

Defines MongoDB collections using Mongoose.

Examples:

- Customer
- Complaint
- Agent
- User

---

## View

React frontend renders the user interface.

---

## Controller

Handles business logic including:

- CRUD operations
- Authentication
- Complaint handling
- Agent management

---

# Backend Development

Technologies used:

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- CORS
- dotenv

Project folders:

```
server/
│
├── config
├── controllers
├── middleware
├── models
├── routes
├── server.js
└── package.json
```

---

# Frontend Development

Technologies used:

- React.js
- React Router
- Axios
- Bootstrap
- Chart.js
- jsPDF
- xlsx

Project folders:

```
client/
│
├── src
│   ├── components
│   ├── pages
│   ├── services
│   ├── assets
│   └── App.jsx
```

---

# Technologies Used

## Frontend

- React.js
- Bootstrap
- Axios
- React Router
- Chart.js
- jsPDF
- xlsx

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- dotenv

---

# Project Modules

- Authentication
- Dashboard
- Customer Management
- Complaint Management
- Agent Management
- Reports
- Charts
- PDF Export
- Excel Export

---

# Project Outcome

The Customer Registry System provides:

- Secure customer management
- Complaint handling
- Agent management
- Dashboard analytics
- Report generation
- Interactive charts
- PDF and Excel exports

This project demonstrates a complete MERN Stack application using modern web development practices.