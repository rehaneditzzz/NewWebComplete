import { Routes, Route } from "react-router-dom";
import SignupForm from "../Auth/SignupForm";
import LoginForm from "../Auth/LoginForm";
import Vision from "../Pages/About/Vision";
import President from "../Pages/About/President";
import Secretary from "../Pages/About/Secretary";
import Principle from "../Pages/About/Principle";
import CampusLife from "../Pages/Campus/CampusLife";
import EventPage from "../Pages/Campus/EventPage";
import ApplyForm from "../Pages/Admission/ApplyForm";
import MainCarousal from "../Pages/Academic/CarousalPage";
import MapComponent from "../Components/Common/MapComponent ";
import NotFound from "../Pages/NotFoundPage/NotFound";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/signup" element={<SignupForm />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/about/vision" element={<Vision />} />
      <Route path="/about/president" element={<President />} />
      <Route path="/about/secretary" element={<Secretary />} />
      <Route path="/about/principle" element={<Principle />} />
      <Route path="/campus" element={<CampusLife />} />
      <Route path="/campus/events" element={<EventPage />} />
      <Route path="/apply/now" element={<ApplyForm />} />
      <Route path="/academic/graduation" element={<MainCarousal />} />
      <Route path="/contact/address" element={<MapComponent />} />
      <Route path="*" element={<NotFound />} />
      {/* <Route path="/programe" element={} /> */}
    </Routes>
  );
};

export default AppRoutes;
