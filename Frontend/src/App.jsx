import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppRoutes from "./Routes/AppRoutes";
import Header from "./Components/Layout/Header";
import Footer from "./Components/Layout/Footer";
import Hero from "./Components/Layout/Hero";
import MainCarousal from "./Pages/Academic/CarousalPage";
import CampusLife from "./Pages/Campus/CampusLife";
import MapComponent from "./Components/Common/MapComponent ";
import TestimonialSlider from "./Components/Common/TestimonialSlider";
import UpcomingEventSlider from "./Components/Common/UpcomingEventSlider";
import OurEventSlider from "./Components/Common/OurEventSlider";
import Dashboard from "./Dashboard/Routes/Dashboard";
import AdminRoute from "./AdminRoute";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Public Routes */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <MainCarousal />
              <CampusLife />
              <UpcomingEventSlider />
              <OurEventSlider />
              <TestimonialSlider />
              <MapComponent />
            </>
          }
        />
        {/* General Routes */}
        <Route path="/*" element={<AppRoutes />} />

        {/* Protected Admin Route */}
        <Route
          path="/dashboard/*"
          element={
            <AdminRoute>
              <Dashboard />
            </AdminRoute>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
