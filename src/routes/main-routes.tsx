import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserDashboard } from "../pages/user-dashboard";

export const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserDashboard />} />
      </Routes>
    </BrowserRouter>
  );
};
