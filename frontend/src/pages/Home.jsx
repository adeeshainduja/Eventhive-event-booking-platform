import { Link } from "react-router-dom";

const featuredEvents = [
  {
    title: "Tech Innovation Summit 2026",
    category: "Technology",
    date: "Oct 12, 2026",
    location: "Colombo, Sri Lanka",
    price: "LKR 2,500",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Music Night Colombo",
    category: "Music",
    date: "Nov 05, 2026",
    location: "Colombo Beachfront",
    price: "LKR 1,500",
    image:
      "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Startup Networking Meetup",
    category: "Networking",
    date: "Dec 15, 2026",
    location: "Innovation Hub",
    price: "Free",
    image:
      "https://images.unsplash.com/photo-1515169067865-5387ec356754?auto=format&fit=crop&w=900&q=80",
  },
];

const venues = [
  {
    name: "Colombo Grand Hall",
    capacity: "500+ Capacity",
    price: "From LKR 150,000 / Day",
    rating: "4.9",
    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Ocean View Conference Center",
    capacity: "200+ Capacity",
    price: "From LKR 95,000 / Day",
    rating: "4.8",
    image:
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Lotus Event Arena",
    capacity: "2000+ Capacity",
    price: "From LKR 300,000 / Day",
    rating: "5.0",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=900&q=80",
  },
];

function Home() {
  return (
    <>
      <main>
        <section className="relative overflow-hidden px-6 lg:px-12 pt-20 pb-28">
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-300 rounded-full blur-3xl opacity-40" />
          <div className="absolute top-40 right-0 w-96 h-96 bg-cyan-200 rounded-full blur-3xl opacity-50" />

          <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 font-semibold text-sm mb-6">
                <span className="material-symbols-outlined text-base">bolt</span>
                Modern Event Booking Platform
              </p>

              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-slate-950">
                Discover, Book, and Manage Events Effortlessly
              </h1>

              <p className="mt-6 text-lg text-slate-600 max-w-xl leading-relaxed">
                EventHive helps users explore events, book tickets, manage
                venues, and handle event approvals through a secure role-based
                platform.
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                <Link
                  to="/events"
                  className="px-7 py-4 rounded-2xl bg-gradient-to-r from-purple-700 to-indigo-500 text-white font-bold shadow-lg hover:opacity-95"
                >
                  Explore Events
                </Link>

                <Link
                  to="/venues"
                  className="px-7 py-4 rounded-2xl bg-white text-purple-700 border border-purple-200 font-bold shadow-sm hover:bg-purple-50"
                >
                  List Your Venue
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl bg-white border border-slate-200 shadow-2xl p-5">
                <div className="rounded-2xl bg-gradient-to-br from-purple-50 to-cyan-50 p-6">
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <p className="text-sm text-slate-500">Dashboard Preview</p>
                      <h3 className="text-xl font-bold text-slate-900">
                        EventHive Analytics
                      </h3>
                    </div>
                    <div className="w-12 h-12 rounded-2xl bg-purple-700 text-white flex items-center justify-center">
                      <span className="material-symbols-outlined">event</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-5">
                    <div className="bg-white rounded-2xl p-4 shadow-sm">
                      <p className="text-sm text-slate-500">Bookings</p>
                      <p className="text-3xl font-extrabold text-purple-700">
                        1,240
                      </p>
                    </div>
                    <div className="bg-white rounded-2xl p-4 shadow-sm">
                      <p className="text-sm text-slate-500">Revenue</p>
                      <p className="text-3xl font-extrabold text-cyan-700">
                        2.4M
                      </p>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-4 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                      <p className="font-bold">Upcoming Events</p>
                      <span className="text-sm text-purple-700 font-semibold">
                        View all
                      </span>
                    </div>

                    {["Tech Summit", "Music Night", "Startup Meetup"].map(
                      (item) => (
                        <div
                          key={item}
                          className="flex items-center justify-between py-3 border-t border-slate-100"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center">
                              <span className="material-symbols-outlined text-lg">
                                confirmation_number
                              </span>
                            </div>
                            <span className="font-semibold text-slate-700">
                              {item}
                            </span>
                          </div>
                          <span className="text-xs px-3 py-1 rounded-full bg-green-100 text-green-700 font-bold">
                            Approved
                          </span>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-8 -left-6 bg-white/80 backdrop-blur-md border border-white shadow-xl rounded-2xl p-5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-cyan-100 text-cyan-700 flex items-center justify-center">
                  <span className="material-symbols-outlined">
                    confirmation_number
                  </span>
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-semibold">
                    Live Bookings
                  </p>
                  <p className="text-2xl font-extrabold text-purple-700">
                    +1,240
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative z-10 max-w-6xl mx-auto px-6 -mt-14">
          <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-5 grid md:grid-cols-5 gap-4 items-end">
            <div>
              <label className="block text-sm font-bold text-slate-600 mb-2">
                Event Name
              </label>
              <input
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-purple-500 outline-none"
                placeholder="Search events..."
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-600 mb-2">
                Location
              </label>
              <input
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-purple-500 outline-none"
                placeholder="Anywhere"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-600 mb-2">
                Category
              </label>
              <select className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-purple-500 outline-none">
                <option>All Categories</option>
                <option>Technology</option>
                <option>Music</option>
                <option>Business</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-600 mb-2">
                Date
              </label>
              <input
                type="date"
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-purple-500 outline-none"
              />
            </div>

            <button className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-700 to-indigo-500 text-white font-bold shadow-md">
              Search
            </button>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-extrabold text-slate-950">
                Featured Events
              </h2>
              <p className="text-slate-500 mt-2">
                Handpicked premium experiences near you.
              </p>
            </div>
            <Link to="/events" className="text-purple-700 font-bold">
              See All Events →
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-7">
            {featuredEvents.map((event) => (
              <div
                key={event.title}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="h-52 w-full object-cover"
                />

                <div className="p-5">
                  <div className="flex justify-between items-center mb-4">
                    <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-bold">
                      {event.category}
                    </span>
                    <span className="text-purple-700 font-extrabold">
                      {event.price}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-950 mb-3">
                    {event.title}
                  </h3>

                  <div className="space-y-2 text-sm text-slate-500 mb-5">
                    <p>📅 {event.date}</p>
                    <p>📍 {event.location}</p>
                  </div>

                  <button className="w-full py-3 rounded-xl border border-purple-700 text-purple-700 font-bold hover:bg-purple-700 hover:text-white transition">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <h2 className="text-3xl font-extrabold text-slate-950">
              Popular Venues
            </h2>
            <p className="text-slate-500 mt-2 mb-10">
              The most sought-after spaces for your next big event.
            </p>

            <div className="grid md:grid-cols-3 gap-7">
              {venues.map((venue) => (
                <div
                  key={venue.name}
                  className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-md"
                >
                  <div className="relative">
                    <img
                      src={venue.image}
                      alt={venue.name}
                      className="h-56 w-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-xl text-sm font-bold">
                      ⭐ {venue.rating}
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="text-xl font-bold text-slate-950 mb-3">
                      {venue.name}
                    </h3>
                    <div className="space-y-2 text-sm text-slate-500">
                      <p>👥 {venue.capacity}</p>
                      <p>💳 {venue.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
          <h2 className="text-3xl font-extrabold text-center mb-14">
            How EventHive Works
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              ["explore", "Discover Events", "Find events tailored to your interests."],
              ["local_activity", "Book Tickets", "Secure your spot in seconds."],
              ["verified_user", "Attend & Review", "Enjoy events and share your experience."],
            ].map(([icon, title, text]) => (
              <div key={title} className="text-center">
                <div className="w-20 h-20 rounded-full bg-purple-100 text-purple-700 mx-auto flex items-center justify-center mb-5">
                  <span className="material-symbols-outlined text-4xl">
                    {icon}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-slate-500">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="bg-purple-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-5xl font-extrabold">500+</p>
              <p className="mt-2 opacity-80 font-semibold">Events Hosted</p>
            </div>
            <div>
              <p className="text-5xl font-extrabold">100+</p>
              <p className="mt-2 opacity-80 font-semibold">Verified Venues</p>
            </div>
            <div>
              <p className="text-5xl font-extrabold">10K+</p>
              <p className="mt-2 opacity-80 font-semibold">Tickets Booked</p>
            </div>
            <div>
              <p className="text-5xl font-extrabold">4.8</p>
              <p className="mt-2 opacity-80 font-semibold">Average Rating</p>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-14 grid md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-2xl font-extrabold text-purple-700">
              EventHive
            </h3>
            <p className="text-slate-500 mt-4">
              Empowering event organizers and venue owners with premium
              management tools.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-slate-500">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>FAQ</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-slate-500">
              <li>Event Listing</li>
              <li>Venue Booking</li>
              <li>Ticketing</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact Us</h4>
            <p className="text-slate-500">support@eventhive.io</p>
            <p className="text-slate-500">+94 77 123 4567</p>
          </div>
        </div>

        <div className="text-center text-sm text-slate-500 py-5 border-t border-slate-200">
          © 2026 EventHive. All rights reserved.
        </div>
      </footer>
    </>
  );
}

export default Home;