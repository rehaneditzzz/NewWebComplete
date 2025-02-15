/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const userRole = localStorage.getItem("userRole"); // Get user role

  if (userRole !== "admin") {
    return <Navigate to="/" replace />; // Redirect non-admin users to the homepage
  }

  return children; // Allow access if user is an admin
};

export default AdminRoute;
