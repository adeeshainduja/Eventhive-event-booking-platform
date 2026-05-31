import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { registerUser } from "../services/authService";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setIsError(false);
    setLoading(true);

    try {
      const data = await registerUser(formData);

      localStorage.setItem("eventhive_token", data.token);
      localStorage.setItem("eventhive_user", JSON.stringify(data.user));

      setMessage("Registration successful!");
      setIsError(false);

      setTimeout(() => {
        navigate("/");
        window.location.reload();
      }, 700);
    } catch (error) {
      setMessage(
        error.response?.data?.message || "Registration failed. Try again."
      );
      setIsError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#f8f9ff] flex items-center justify-center px-6 py-16">
      <div className="absolute top-20 right-10 w-80 h-80 bg-purple-200 rounded-full blur-3xl opacity-40" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-cyan-200 rounded-full blur-3xl opacity-40" />

      <div className="relative w-full max-w-lg">
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8">
          <div className="text-center mb-8">
            <Link to="/" className="text-4xl font-extrabold text-purple-700">
              EventHive
            </Link>

            <h2 className="text-2xl font-extrabold text-slate-950 mt-6">
              Create Your Account
            </h2>

            <p className="text-slate-500 mt-2">
              Join EventHive and start discovering events.
            </p>
          </div>

          {message && (
            <div
              className={`mb-5 rounded-xl px-4 py-3 text-sm font-semibold border ${
                isError
                  ? "bg-red-50 text-red-700 border-red-200"
                  : "bg-green-50 text-green-700 border-green-200"
              }`}
            >
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-bold text-slate-600 mb-2">
                Full Name
              </label>

              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Adeesha Induja"
                className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-600 mb-2">
                Email
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="adeesha@example.com"
                className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-600 mb-2">
                Phone Number
              </label>

              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="0771234567"
                className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-600 mb-2">
                Password
              </label>

              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Create password"
                className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-700 to-indigo-500 text-white font-bold shadow-md hover:opacity-95 disabled:opacity-60"
            >
              {loading ? "Creating account..." : "Create Account"}
            </button>
          </form>

          <p className="text-sm text-slate-500 mt-6 text-center">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-purple-700 font-bold hover:underline"
            >
              Login
            </Link>
          </p>
        </div>

        <p className="text-center text-xs text-slate-400 mt-6">
          You can later access EventHive as a customer, organizer, venue owner,
          or admin based on your assigned role.
        </p>
      </div>
    </main>
  );
}

export default Register;