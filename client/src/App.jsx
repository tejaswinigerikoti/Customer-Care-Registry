import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

// Customer Pages
import Customers from "./pages/Customers";
import AddCustomer from "./pages/AddCustomer";
import EditCustomer from "./pages/EditCustomer";

// Complaint Pages
import Complaints from "./pages/Complaints";
import AddComplaint from "./pages/AddComplaint";
import EditComplaint from "./pages/EditComplaint";

// Agent Pages
import Agents from "./pages/Agents";
import AddAgent from "./pages/AddAgent";
import EditAgent from "./pages/EditAgent";

// Reports Page
import Reports from "./pages/Reports";

// Other Pages
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Authentication */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Customer Management */}
        <Route path="/customers" element={<Customers />} />
        <Route path="/add-customer" element={<AddCustomer />} />
        <Route path="/edit-customer/:id" element={<EditCustomer />} />

        {/* Complaint Management */}
        <Route path="/complaints" element={<Complaints />} />
        <Route path="/add-complaint" element={<AddComplaint />} />
        <Route path="/edit-complaint/:id" element={<EditComplaint />} />

        {/* Agent Management */}
        <Route path="/agents" element={<Agents />} />
        <Route path="/add-agent" element={<AddAgent />} />
        <Route path="/edit-agent/:id" element={<EditAgent />} />

        {/* Reports */}
        <Route path="/reports" element={<Reports />} />

        {/* 404 Page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;