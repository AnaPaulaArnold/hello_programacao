import { Routes, Route, Navigate } from "react-router-dom";
import About from "../pages/About";
import App from "../App";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/sobre" element={<About />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;
