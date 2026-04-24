import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import JobBoard from "./pages/JobBoard";
import ForVeterans from "./pages/ForVeterans";
import ForEmployers from "./pages/ForEmployers";
import About from "./pages/About";
import Donate from "./pages/Donate";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminHome from "./pages/admin/AdminHome";
import {
  AdminDashboardPage,
  AdminDonationsPage,
  AdminDonorsPage,
  AdminMapPinsPage,
  AdminJobListingsPage,
  AdminTestimonialsPage,
  AdminSuccessStoriesPage,
  AdminPagesContentPage,
  AdminUsersPage,
  AdminSettingsPage,
} from "./pages/admin/AdminPages";

export default function App() {
  const location = useLocation();
  const hideNavbar = location.pathname.startsWith("/admin");

  return (
    <div className="min-h-screen bg-sand-0 text-ink-body flex flex-col">
      {!hideNavbar && <Navbar />}

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/job-board" element={<JobBoard />} />
          <Route path="/for-veterans" element={<ForVeterans />} />
          <Route path="/for-employers" element={<ForEmployers />} />
          <Route path="/about" element={<About />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminHome />}>
            <Route index element={<AdminDashboardPage />} />
            <Route path="donations" element={<AdminDonationsPage />} />
            <Route path="donors" element={<AdminDonorsPage />} />
            <Route path="map-pins" element={<AdminMapPinsPage />} />
            <Route path="job-listings" element={<AdminJobListingsPage />} />
            <Route path="testimonials" element={<AdminTestimonialsPage />} />
            <Route
              path="success-stories"
              element={<AdminSuccessStoriesPage />}
            />
            <Route path="pages-content" element={<AdminPagesContentPage />} />
            <Route path="admin-users" element={<AdminUsersPage />} />
            <Route path="settings" element={<AdminSettingsPage />} />
          </Route>
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
