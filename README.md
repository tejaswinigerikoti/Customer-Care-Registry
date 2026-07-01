## System Features & Implementation Details

### 1. User Registration & Account Management
Allows customers, admins, and agents to securely register and manage their accounts.
*   **How it works:** 
    *   **Customers:** Data is captured via a signup form and saved directly into the `CUSTOMER` table. A unique `customer_id` is auto-generated, and the `registration_date` is stamped.
    *   **Agents:** Created and assigned by an administrator, generating a record in the `AGENT` table mapped to the managing `admin_id`.

### 2. Customer Profile & Information Management
Provides a comprehensive interface for customers to edit details, and for agents/admins to review records.
*   **How it works:** Fired via backend `UPDATE` or `SELECT` queries on the `CUSTOMER` table based on the logged-in session's identification key.

### 3. Support & Ticket Lifecycles (Complaints, Inquiries, Requests)
The core engine allowing users to file and track interactions, and routing them to available agents.
*   **How it works:** Submissions populate the `COMPLAINT`, `INQUIRY`, or `REQUEST` tables. Each row references a `customer_id` (originator) and an `agent_id` (processor) to maintain ownership.

### 4. Communication History Tracking
Maintains a chronological record of all customer touchpoints to ensure a seamless service experience.
*   **How it works:** Aggregates and fetches tracking historical records across the transactional tables (`COMPLAINT`, `INQUIRY`, and `REQUEST`) utilizing a unified relational query matching the customer's unique ID.

### 5. Staff Dashboards & Workload Distribution
Custom interfaces built around roles for tracking daily ticket queues, operational statuses, and priority escalations.
*   **How it works:** Dashboards dynamically query active ticket states (e.g., `status != 'Resolved'`) filtering by the logged-in `agent_id` or aggregated for an `admin_id`.

### 6. Feedback & Quality Performance Reviews
Allows customers to rate their experiences and leave comments once their tickets reach a final resolution state.
*   **How it works:** Upon ticket closure, an entry is created inside the `FEEDBACK` table linking back to the handling `agent_id` to evaluate staff service metrics.
*


## Roles and Responsibilities

### Customer
* Register and create an account in the customer registry app.
* Update and manage their profile information.
* Raise complaints or issues regarding products, services, or any other matters. View the status of their complaints and communicate with the assigned agent for updates and resolution.
* Provide feedback and ratings for the support received.

### Admin
* Manage the overall functioning of the customer registry app.
* Monitor and review customer complaints and issues raised.
* Assign complaints to the appropriate agents for resolution.
* Track the progress of complaints and ensure timely resolution.
* Have access to customer profiles and information for administrative purposes. Generate reports and analytics on customer complaints, resolution time, and agent performance.
* Handle escalated complaints or issues that require special attention. Communicate with customers if necessary for clarification or additional information.

### Agent
* Receive assigned complaints from the admin.
* Communicate with customers to understand the issues and gather relevant details. Provide support and assistance to customers in resolving their complaints. Update the status and progress of complaints in the system.
* Communicate with customers through chat or other channels to provide updates and resolution.
* Escalate complex or unresolved complaints to higher levels if necessary. Maintain proper documentation of interactions and actions taken to resolve complaints. Collaborate with other agents or departments if required for complaint resolution. Provide feedback and suggestions to the admin for improving customer service.
*
