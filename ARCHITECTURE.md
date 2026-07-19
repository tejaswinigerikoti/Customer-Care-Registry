# Technical Architecture - Customer Care Registry

This document outlines the system architecture for our MERN stack application.

## 1. Client Layer (Frontend)
- **Technology:** React.js
- **Role:** Handles the User Interface (UI). It contains the registration forms for Customers, Admins, and Agents.
- **Data Flow:** Sends user registration data to the backend via HTTP POST requests.

## 2. Server Layer (Backend)
- **Technology:** Node.js with Express.js
- **Role:** Implements business logic and API routes.
- **Logic Rules:**
  - **For Customers:** Receives registration inputs, automatically generates a unique `customer_id`, adds a `registration_date` timestamp, and forwards it to the database.
  - **For Agents:** Maps the agent to their respective administrator using the `admin_id`.

## 3. Data Layer (Database)
- **Technology:** MongoDB (using Mongoose ODM)
- **Role:** Stores all persistent application records.
- **Collections:**
  - `CUSTOMER`: Stores user details, generated IDs, and registration timestamps.
  - `AGENT`: Stores agent details and administrative relationships.
