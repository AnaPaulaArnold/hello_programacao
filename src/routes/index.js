import { Routes, Route } from "react-router-dom";
import About from "../pages/About";
import App from "../App";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/sobre" element={<About />} />
      <Route path="/*" element={<App />} />
    </Routes>
  );
};

export default AppRoutes;
