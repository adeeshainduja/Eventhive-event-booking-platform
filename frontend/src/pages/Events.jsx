import { Link } from "react-router-dom";

const events = [
  {
    id: 1,
    title: "Tech Innovation Summit 2026",
    category: "Technology",
    date: "2026-06-15",
    time: "09:30 AM",
    location: "Colombo Grand Hall",
    price: "LKR 2,500",
    availableTickets: 300,
    status: "Approved",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=900&q=80",
    description:
      "A technology event for students, developers, entrepreneurs, and startups to explore innovation and future trends.",
  },
  {
    id: 2,
    title: "Music Night Colombo",
    category: "Music",
    date: "2026-07-20",
    time: "07:00 PM",
    location: "Ocean View Conference Center",
    price: "LKR 1,500",
    availableTickets: 180,
    status: "Approved",
    image:
      "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=900&q=80",
    description:
      "A live music night featuring local artists, bands, and entertainment experiences near Colombo.",
  },
  {
    id: 3,
    title: "Startup Networking Meetup",
    category: "Business",
    date: "2026-08-10",
    time: "04:00 PM",
    location: "Lotus Event Arena",
    price: "Free",
    availableTickets: 120,
    status: "Approved",
    image:
      "https://images.unsplash.com/photo-1515169067865-5387ec356754?auto=format&fit=crop&w=900&q=80",
    description:
      "A networking meetup for startup founders, students, investors, designers, and software engineers.",
  },
  {
    id: 4,
    title: "Creative Design Workshop",
    category: "Design",
    date: "2026-09-05",
    time: "10:00 AM",
    location: "Royal Banquet Hall",
    price: "LKR 3,000",
    availableTickets: 75,
    status: "Approved",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80",
    description:
      "A practical design workshop covering UI/UX, branding, creative thinking, and portfolio improvement.",
  },
];

function Events() {
  return (
    <main className="bg-[#f8f9ff] min-h-screen">
      <section className="relative overflow-hidden px-6 lg:px-12 py-20">
        <div className="absolute -top-32 -left-20 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-50" />
        <div className="absolute top-44 right-0 w-80 h-80 bg-cyan-200 rounded-full blur-3xl opacity-50" />

        <div className="relative max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <p className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-bold mb-5">
              Explore Events
            </p>

            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-950 leading-tight">
              Discover Events That Match Your Interests
            </h1>

            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Explore approved events, check ticket availability, view event
              details, and book tickets through EventHive.
            </p>
          </div>

          <div className="mt-10 bg-white rounded-3xl shadow-xl border border-slate-200 p-5 grid md:grid-cols-5 gap-4">
            <input
              className="md:col-span-2 px-4 py-3 rounded-xl border border-slate-300 outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Search event name"
            />

            <input
              className="px-4 py-3 rounded-xl border border-slate-300 outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Location"
            />

            <select className="px-4 py-3 rounded-xl border border-slate-300 outline-none focus:ring-2 focus:ring-purple-500">
              <option>All Categories</option>
              <option>Technology</option>
              <option>Music</option>
              <option>Business</option>
              <option>Design</option>
            </select>

            <button className="py-3 rounded-xl bg-gradient-to-r from-purple-700 to-indigo-500 text-white font-bold shadow-md hover:opacity-90">
              Search
            </button>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-24">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl font-extrabold text-slate-950">
              Featured Events
            </h2>
            <p className="text-slate-500 mt-2">
              Browse upcoming approved events available for booking.
            </p>
          </div>

          <button className="hidden md:block px-5 py-3 rounded-xl bg-white border border-slate-200 text-purple-700 font-bold shadow-sm hover:bg-purple-50">
            Create Event
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition"
            >
              <div className="relative">
                <img
                  src={event.image}
                  alt={event.title}
                  className="h-56 w-full object-cover"
                />

                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-bold">
                  {event.category}
                </div>

                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold">
                  {event.status}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-extrabold text-slate-950">
                  {event.title}
                </h3>

                <p className="text-slate-500 text-sm mt-2 leading-relaxed">
                  {event.description}
                </p>

                <div className="grid grid-cols-2 gap-3 mt-5 text-sm">
                  <div className="bg-slate-50 rounded-2xl p-3">
                    <p className="text-slate-400 font-semibold">Date</p>
                    <p className="font-bold text-slate-700">{event.date}</p>
                  </div>

                  <div className="bg-slate-50 rounded-2xl p-3">
                    <p className="text-slate-400 font-semibold">Time</p>
                    <p className="font-bold text-slate-700">{event.time}</p>
                  </div>

                  <div className="bg-slate-50 rounded-2xl p-3">
                    <p className="text-slate-400 font-semibold">Venue</p>
                    <p className="font-bold text-slate-700">
                      {event.location}
                    </p>
                  </div>

                  <div className="bg-slate-50 rounded-2xl p-3">
                    <p className="text-slate-400 font-semibold">Tickets</p>
                    <p className="font-bold text-slate-700">
                      {event.availableTickets} left
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-6">
                  <div>
                    <p className="text-slate-400 text-sm font-semibold">
                      Ticket Price
                    </p>
                    <p className="text-purple-700 font-extrabold">
                      {event.price}
                    </p>
                  </div>

                  <Link
                    to={`/events/${event.id}`}
                    className="px-5 py-3 rounded-xl bg-purple-700 text-white font-bold hover:bg-purple-800"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Events;
