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


## User Flow

### User Registration
* User launches the customer registry app.
* User selects the option to register as a new customer.
* User enters their personal details such as name, email, phone number, and password. User submits the registration form.
* The app validates the entered information and creates a new customer account. The app displays a confirmation message and prompts the user to log in.

### User Login
* User launches the customer registry app.
* User selects the option to log in.
* User enters their login credentials (email and password).
* The app verifies the credentials and grants access to the customer dashboard.

### Customer Dashboard
* Upon successful login, the customer is presented with a personalized dashboard. The dashboard displays relevant information, such as the user's profile, recent activities, and any notifications.
* The customer can navigate to different sections of the app, such as their profile, complaint management, or communication channels.

### Raise a Complaint
* From the customer dashboard, the user selects the option to raise a complaint. The app presents a form or interface where the user can enter details about the complaint, including the nature of the issue and any relevant attachments.
* The user submits the complaint.
* The app validates the complaint and assigns it a unique complaint ID. The app displays a confirmation message and provides the complaint ID for reference.

### Admin Assignment
* In the admin dashboard, the assigned administrator receives a notification about the newly raised complaint.
* The admin reviews the complaint details and assigns it to an appropriate agent for resolution.
* The app notifies the assigned agent about the new complaint assignment.

### Agent Resolution
* The assigned agent accesses the app and views the details of the assigned complaint. The agent may initiate a chat or communication with the customer to gather additional information or clarify the issue.
* The agent works towards resolving the complaint, taking necessary actions, and updating the complaint status within the app.
* The agent communicates with the customer, providing updates and seeking feedback or confirmation of resolution.
* Once the complaint is resolved, the agent updates the status accordingly.

### Customer Interaction
* The customer receives notifications or messages from the assigned agent regarding their complaint.
* The customer can access the app to view updates, respond to messages, or provide feedback on the resolution.
* The customer may engage in a chat conversation with the agent to discuss the complaint or seek further assistance.

### Closure and Feedback
* Once the complaint is marked as resolved by the agent, the customer is notified. The customer can review the resolution and provide feedback or ratings for the support received.
* The app may prompt the customer to fill out a satisfaction survey or provide comments on their experience.
* The app records the feedback and updates the complaint status as closed.


## MVC Pattern

The Customer Registry backend application follows the Model-View-Controller (MVC) architectural pattern, a software design approach that separates an application into three interconnected layers.

### Model
The Model represents the data and business logic of the application. It handles data storage, retrieval, and modification. In this application, models are defined for entities like Customer, Admin, Agent, and Complaint, which map to their respective database tables or collections.

### View
The View is responsible for rendering the user interface and presenting data to the user. In the context of a backend application or API, the view often refers to the JSON responses returned to the client, which are then used by the frontend to display information.

### Controller
The Controller acts as an intermediary between the Model and the View. It receives user requests from the routing layer, processes them using business logic, interacts with the Model to update or fetch data, and determines the appropriate View or response to send back to the user.
