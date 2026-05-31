import { Link, Routes, Route, useNavigate } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Venues from "./pages/Venues";
import Events from "./pages/Events";
import AdminDashboard from "./pages/AdminDashboard";
import EventDetails from "./pages/EventDetails";
import Booking from "./pages/Booking";
import Payment from "./pages/Payment";

function getStoredUser() {
  const storedUser = localStorage.getItem("eventhive_user");

  if (!storedUser) {
    return null;
  }

  try {
    return JSON.parse(storedUser);
  } catch {
    localStorage.removeItem("eventhive_user");
    return null;
  }
}

function App() {
  const navigate = useNavigate();

  const user = getStoredUser();
  const token = localStorage.getItem("eventhive_token");

  const handleLogout = () => {
    localStorage.removeItem("eventhive_token");
    localStorage.removeItem("eventhive_user");
    navigate("/");
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-[#f8f9ff] text-slate-900">
      <nav className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
          <Link to="/" className="text-2xl font-extrabold text-purple-700">
            EventHive
          </Link>

          <div className="hidden md:flex items-center gap-8 text-sm font-semibold">
          <Link to="/" className="text-slate-600 hover:text-purple-700">
            Home
          </Link>

          <Link to="/venues" className="text-slate-600 hover:text-purple-700">
            Venues
          </Link>

          <Link to="/events" className="text-slate-600 hover:text-purple-700">
            Events
          </Link>

          <a href="/#about" className="text-slate-600 hover:text-purple-700">
            About
          </a>

          <a href="/#contact" className="text-slate-600 hover:text-purple-700">
            Contact
          </a>

          {user?.role === "admin" && (
            <Link to="/admin" className="text-slate-600 hover:text-purple-700">
              Admin
            </Link>
          )}
        </div>

          <div className="flex items-center gap-3">
            {token ? (
              <>
                <span className="hidden sm:block text-sm text-slate-600">
                  Hi,{" "}
                  <span className="font-bold text-purple-700">
                    {user?.fullName}
                  </span>
                </span>

                <button
                  onClick={handleLogout}
                  className="px-4 py-2 rounded-xl bg-red-600 text-white text-sm font-semibold hover:bg-red-700"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-sm font-semibold text-slate-600 hover:text-purple-700"
                >
                  Login
                </Link>

                <Link
                  to="/register"
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-700 to-indigo-500 text-white text-sm font-semibold shadow-md hover:opacity-90"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/venues" element={<Venues />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:id" element={<EventDetails />} />
        <Route path="/booking/:id" element={<Booking />} />
        <Route path="/payment/:id" element={<Payment />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
