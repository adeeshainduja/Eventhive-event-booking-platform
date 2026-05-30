import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <section className="px-10 py-24 text-center">
        <p className="text-purple-400 font-semibold mb-4">
          Modern Event Booking Platform
        </p>

        <h2 className="text-5xl font-bold mb-6">
          Discover, Book, and Manage Events Easily
        </h2>

        <p className="max-w-2xl mx-auto text-slate-300 mb-10">
          EventHive helps users find events, book tickets, manage venues,
          and handle approvals using a secure role-based system.
        </p>

        <div className="flex justify-center gap-4">
          <Link
            to="/events"
            className="bg-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-700"
          >
            Explore Events
          </Link>

          <Link
            to="/venues"
            className="border border-purple-500 px-6 py-3 rounded-lg font-semibold hover:bg-purple-950"
          >
            View Venues
          </Link>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-10 pb-20">
        <div className="bg-white/10 p-6 rounded-2xl border border-white/10">
          <h3 className="text-xl font-semibold mb-2">Venue Management</h3>
          <p className="text-slate-300">
            Venue owners can add venues and wait for admin approval.
          </p>
        </div>

        <div className="bg-white/10 p-6 rounded-2xl border border-white/10">
          <h3 className="text-xl font-semibold mb-2">Event Booking</h3>
          <p className="text-slate-300">
            Users can book tickets for approved events securely.
          </p>
        </div>

        <div className="bg-white/10 p-6 rounded-2xl border border-white/10">
          <h3 className="text-xl font-semibold mb-2">Admin Dashboard</h3>
          <p className="text-slate-300">
            Admins can approve venues, approve events, and view stats.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;