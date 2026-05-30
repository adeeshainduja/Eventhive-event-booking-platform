import { Link, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Venues from "./pages/Venues";
import Events from "./pages/Events";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <nav className="flex items-center justify-between px-10 py-6 border-b border-white/10">
        <Link to="/" className="text-2xl font-bold text-purple-400">
          EventHive
        </Link>

        <div className="flex gap-6 text-sm items-center">
          <Link to="/" className="hover:text-purple-400">
            Home
          </Link>

          <Link to="/venues" className="hover:text-purple-400">
            Venues
          </Link>

          <Link to="/events" className="hover:text-purple-400">
            Events
          </Link>

          <Link to="/admin" className="hover:text-purple-400">
            Admin
          </Link>

          <Link to="/login" className="hover:text-purple-400">
            Login
          </Link>

          <Link
            to="/register"
            className="bg-purple-600 px-4 py-2 rounded-lg hover:bg-purple-700"
          >
            Register
          </Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/venues" element={<Venues />} />
        <Route path="/events" element={<Events />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;