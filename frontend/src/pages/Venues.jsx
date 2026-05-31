const venues = [
  {
    id: 1,
    name: "Colombo Grand Hall",
    location: "Colombo, Sri Lanka",
    capacity: 500,
    pricePerDay: "LKR 150,000",
    rating: 4.9,
    status: "Approved",
    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=900&q=80",
    description:
      "A premium event hall suitable for weddings, conferences, exhibitions, and corporate events.",
  },
  {
    id: 2,
    name: "Ocean View Conference Center",
    location: "Galle Face, Colombo",
    capacity: 250,
    pricePerDay: "LKR 95,000",
    rating: 4.8,
    status: "Approved",
    image:
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=900&q=80",
    description:
      "A modern conference center with ocean views, ideal for business meetings and seminars.",
  },
  {
    id: 3,
    name: "Lotus Event Arena",
    location: "Battaramulla, Sri Lanka",
    capacity: 2000,
    pricePerDay: "LKR 300,000",
    rating: 5.0,
    status: "Approved",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=900&q=80",
    description:
      "A large-scale event arena designed for concerts, expos, cultural shows, and major events.",
  },
  {
    id: 4,
    name: "Royal Banquet Hall",
    location: "Kandy, Sri Lanka",
    capacity: 400,
    pricePerDay: "LKR 120,000",
    rating: 4.7,
    status: "Approved",
    image:
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=900&q=80",
    description:
      "Elegant banquet hall with luxury interior design for weddings and formal celebrations.",
  },
];

function Venues() {
  return (
    <main className="bg-[#f8f9ff] min-h-screen">
      <section className="relative overflow-hidden px-6 lg:px-12 py-20">
        <div className="absolute -top-32 right-0 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-50" />
        <div className="absolute top-40 -left-24 w-80 h-80 bg-cyan-200 rounded-full blur-3xl opacity-50" />

        <div className="relative max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <p className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-bold mb-5">
              Verified Venues
            </p>

            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-950 leading-tight">
              Find the Perfect Venue for Your Next Event
            </h1>

            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Browse approved venues for conferences, weddings, concerts,
              meetups, and corporate events. Choose the right space based on
              capacity, location, and price.
            </p>
          </div>

          <div className="mt-10 bg-white rounded-3xl shadow-xl border border-slate-200 p-5 grid md:grid-cols-4 gap-4">
            <input
              className="px-4 py-3 rounded-xl border border-slate-300 outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Search venue name"
            />

            <input
              className="px-4 py-3 rounded-xl border border-slate-300 outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Location"
            />

            <select className="px-4 py-3 rounded-xl border border-slate-300 outline-none focus:ring-2 focus:ring-purple-500">
              <option>Capacity</option>
              <option>0 - 250</option>
              <option>250 - 500</option>
              <option>500+</option>
            </select>

            <button className="py-3 rounded-xl bg-gradient-to-r from-purple-700 to-indigo-500 text-white font-bold shadow-md hover:opacity-90">
              Search Venue
            </button>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-24">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl font-extrabold text-slate-950">
              Popular Venues
            </h2>
            <p className="text-slate-500 mt-2">
              Approved venue spaces available for event organizers.
            </p>
          </div>

          <button className="hidden md:block px-5 py-3 rounded-xl bg-white border border-slate-200 text-purple-700 font-bold shadow-sm hover:bg-purple-50">
            List Your Venue
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {venues.map((venue) => (
            <div
              key={venue.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition"
            >
              <div className="relative">
                <img
                  src={venue.image}
                  alt={venue.name}
                  className="h-56 w-full object-cover"
                />

                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold">
                  {venue.status}
                </div>

                <div className="absolute top-4 right-4 px-3 py-1 rounded-xl bg-white/90 backdrop-blur-md text-sm font-bold">
                  ⭐ {venue.rating}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-extrabold text-slate-950">
                  {venue.name}
                </h3>

                <p className="text-slate-500 text-sm mt-2">
                  {venue.description}
                </p>

                <div className="grid grid-cols-2 gap-3 mt-5 text-sm">
                  <div className="bg-slate-50 rounded-2xl p-3">
                    <p className="text-slate-400 font-semibold">Location</p>
                    <p className="font-bold text-slate-700">{venue.location}</p>
                  </div>

                  <div className="bg-slate-50 rounded-2xl p-3">
                    <p className="text-slate-400 font-semibold">Capacity</p>
                    <p className="font-bold text-slate-700">
                      {venue.capacity} people
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-6">
                  <div>
                    <p className="text-slate-400 text-sm font-semibold">
                      Price per day
                    </p>
                    <p className="text-purple-700 font-extrabold">
                      {venue.pricePerDay}
                    </p>
                  </div>

                  <button className="px-5 py-3 rounded-xl bg-purple-700 text-white font-bold hover:bg-purple-800">
                    View Venue
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Venues;