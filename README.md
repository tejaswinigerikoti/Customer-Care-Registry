# 🚀 Customer Registry System

A **full-stack MERN (MongoDB, Express.js, React.js, Node.js)** application developed to manage customer registrations, complaints, agent assignments, reporting, and dashboard analytics. The system provides secure authentication, efficient complaint handling, and insightful reports for administrators.

---

# 📌 Project Overview

The Customer Registry System enables organizations to efficiently manage customer records and complaints through role-based access for Customers, Agents, and Administrators.

---

# ✨ Key Features

## 👤 User Registration & Authentication

- Secure user registration and login
- JWT-based authentication
- Customer, Admin, and Agent roles
- Protected routes

---

## 👥 Customer Management

- Add Customer
- View Customer
- Update Customer
- Delete Customer
- Customer Profile Management

---

## 📝 Complaint Management

- Raise Complaint
- View Complaint Status
- Edit Complaint
- Delete Complaint
- Track Complaint Progress

---

## 👨‍💼 Agent Management

- Add Agent
- Update Agent
- Delete Agent
- Assign Complaints
- Track Agent Status

---

## 📊 Dashboard

The dashboard provides:

- Total Customers
- Total Complaints
- Total Agents
- Resolved Complaints
- Pending Complaints
- Recent Activities

---

## 📈 Reports & Analytics

- Complaint Statistics
- Customer Statistics
- Agent Statistics
- Interactive Pie Chart
- Interactive Bar Chart

---

## 📄 Export Reports

Generate reports in:

- PDF Format
- Excel Format

---

# 👥 User Roles

## 👤 Customer

- Register Account
- Login Securely
- Update Profile
- Raise Complaints
- Track Complaint Status
- Provide Feedback

---

## 👨‍💼 Agent

- View Assigned Complaints
- Resolve Complaints
- Update Complaint Status
- Communicate with Customers
- Maintain Complaint Records

---

## 👨‍💻 Admin

- Manage Customers
- Manage Agents
- Assign Complaints
- Monitor Complaint Status
- Generate Reports
- View Dashboard Analytics

---

# 🔄 Project Workflow

```
Customer Registration
        │
        ▼
Customer Login
        │
        ▼
Customer Dashboard
        │
        ▼
Raise Complaint
        │
        ▼
Complaint Stored in Database
        │
        ▼
Admin Assigns Agent
        │
        ▼
Agent Resolves Complaint
        │
        ▼
Complaint Closed
        │
        ▼
Customer Feedback
```

---

# 🏗 MVC Architecture

The backend follows the **Model-View-Controller (MVC)** architecture.

### 📂 Model

Responsible for:

- Customer Model
- Complaint Model
- Agent Model
- User Model

---

### 🎨 View

- React.js User Interface
- Dashboard
- Forms
- Reports
- Charts

---

### ⚙ Controller

Handles:

- CRUD Operations
- Authentication
- Complaint Management
- Agent Management
- Report Generation

---

# 💻 Frontend

Developed using:

- React.js
- Bootstrap
- React Router DOM
- Axios
- Chart.js
- jsPDF
- XLSX

### Frontend Structure

```
client/
│
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── App.jsx
│   └── main.jsx
```

---

# ⚙ Backend

Developed using:

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- dotenv
- CORS

### Backend Structure

```
server/
│
├── config/
├── controllers/
├── middleware/
├── models/
├── routes/
├── server.js
└── package.json
```

---

# 🛠 Tech Stack

## Frontend

- React.js
- Bootstrap
- Axios
- React Router DOM
- Chart.js
- jsPDF
- XLSX

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- dotenv

---

# 📦 Project Modules

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

# 🚀 Installation

## Clone Repository

```bash
git clone https://github.com/tejaswinigerikoti/Customer-Care-Registry.git
```

## Install Backend

```bash
cd server
npm install
npm start
```

## Install Frontend

```bash
cd client
npm install
npm run dev
```

---

# 🎯 Project Outcome

This project provides:

- ✅ Secure Customer Management
- ✅ Complaint Tracking System
- ✅ Agent Management
- ✅ Dashboard Analytics
- ✅ Interactive Reports
- ✅ PDF Report Generation
- ✅ Excel Export
- ✅ MERN Stack CRUD Operations

---

# 📚 Technologies Used

| Category | Technologies |
|----------|--------------|
| Frontend | React.js, Bootstrap, Axios, Chart.js |
| Backend | Node.js, Express.js |
| Database | MongoDB, Mongoose |
| Authentication | JWT |
| Reporting | jsPDF, XLSX |

---

# 👨‍💻 Author

**Name:** Tirukuchuru Vinitha

**Project:** Customer Registry System

**Technology:** MERN Stack (MongoDB, Express.js, React.js, Node.js)

---

## ⭐ If you like this project, don't forget to star the repository!