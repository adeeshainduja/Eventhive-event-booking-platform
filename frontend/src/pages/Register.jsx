import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { registerUser } from "../services/authService";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    try {
      const data = await registerUser(formData);

      localStorage.setItem("eventhive_token", data.token);
      localStorage.setItem("eventhive_user", JSON.stringify(data.user));

      setMessage("Registration successful!");

      setTimeout(() => {
        navigate("/");
      }, 800);
    } catch (error) {
      setMessage(
        error.response?.data?.message || "Registration failed. Try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-white/10 border border-white/10 rounded-2xl p-8">
        <h2 className="text-3xl font-bold mb-2">Create Account</h2>
        <p className="text-slate-300 mb-6">
          Join EventHive and start booking events.
        </p>

        {message && (
          <div className="mb-4 rounded-lg bg-purple-950 border border-purple-500 px-4 py-3 text-sm">
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm mb-2">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Adeesha Induja"
              className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-white/10 outline-none focus:border-purple-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="adeesha@example.com"
              className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-white/10 outline-none focus:border-purple-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-2">Phone</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="0771234567"
              className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-white/10 outline-none focus:border-purple-500"
            />
          </div>

          <div>
            <label className="block text-sm mb-2">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter password"
              className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-white/10 outline-none focus:border-purple-500"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-purple-600 py-3 rounded-lg font-semibold hover:bg-purple-700 disabled:opacity-60"
          >
            {loading ? "Creating account..." : "Register"}
          </button>
        </form>

        <p className="text-sm text-slate-300 mt-6 text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-purple-400 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;