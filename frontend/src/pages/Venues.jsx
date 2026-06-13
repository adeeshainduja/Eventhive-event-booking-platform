import { useState } from "react";
import { Link } from "react-router-dom";
import { DEFAULT_VENUE_IMAGE, venues } from "../data/venues";

function Venues() {
  const [venueSearch, setVenueSearch] = useState("");
  const [locationText, setLocationText] = useState("");
  const [capacityRange, setCapacityRange] = useState("");

  const filteredVenues = venues.filter((venue) => {
    const nameMatches = venue.name
      .toLowerCase()
      .includes(venueSearch.trim().toLowerCase());
    const locationMatches = venue.location
      .toLowerCase()
      .includes(locationText.trim().toLowerCase());
    const capacityMatches =
      capacityRange === "" ||
      (capacityRange === "0-250" && venue.capacity <= 250) ||
      (capacityRange === "250-500" &&
        venue.capacity > 250 &&
        venue.capacity <= 500) ||
      (capacityRange === "500+" && venue.capacity > 500);

    return nameMatches && locationMatches && capacityMatches;
  });

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
              value={venueSearch}
              onChange={(event) => setVenueSearch(event.target.value)}
              className="px-4 py-3 rounded-xl border border-slate-300 outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Search venue name"
            />

            <input
              value={locationText}
              onChange={(event) => setLocationText(event.target.value)}
              className="px-4 py-3 rounded-xl border border-slate-300 outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Location"
            />

            <select
              value={capacityRange}
              onChange={(event) => setCapacityRange(event.target.value)}
              className="px-4 py-3 rounded-xl border border-slate-300 outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="">Capacity</option>
              <option value="0-250">0 - 250</option>
              <option value="250-500">250 - 500</option>
              <option value="500+">500+</option>
            </select>

            <button
              type="button"
              className="py-3 rounded-xl bg-gradient-to-r from-purple-700 to-indigo-500 text-white font-bold shadow-md hover:opacity-90"
            >
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

        {filteredVenues.length === 0 ? (
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-10 text-center">
            <h3 className="text-2xl font-extrabold text-slate-950">
              No venues found.
            </h3>
            <p className="text-slate-500 mt-2">
              Try another venue name, location, or capacity range.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 items-stretch auto-rows-fr">
            {filteredVenues.map((venue) => (
              <div
                key={venue.id}
                className="h-full flex flex-col bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition"
              >
                <div className="relative shrink-0">
                  <img
                    src={venue.image || DEFAULT_VENUE_IMAGE}
                    alt={venue.name}
                    className="h-56 w-full object-cover"
                    onError={(event) => {
                      event.currentTarget.onerror = null;
                      event.currentTarget.src = DEFAULT_VENUE_IMAGE;
                    }}
                  />

                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold">
                    {venue.status}
                  </div>

                  <div className="absolute top-4 right-4 px-3 py-1 rounded-xl bg-white/90 backdrop-blur-md text-sm font-bold">
                    Rating {venue.rating}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-extrabold text-slate-950">
                    {venue.name}
                  </h3>

                  <p className="text-slate-500 text-sm mt-2">
                    {venue.description}
                  </p>

                  <div className="grid grid-cols-2 gap-3 mt-5 text-sm">
                    <div className="bg-slate-50 rounded-2xl p-3">
                      <p className="text-slate-400 font-semibold">Location</p>
                      <p className="font-bold text-slate-700">
                        {venue.location}
                      </p>
                    </div>

                    <div className="bg-slate-50 rounded-2xl p-3">
                      <p className="text-slate-400 font-semibold">Capacity</p>
                      <p className="font-bold text-slate-700">
                        {venue.capacity} people
                      </p>
                    </div>
                  </div>

                  <div className="mt-auto flex items-center justify-between gap-4 pt-6">
                    <div>
                      <p className="text-slate-400 text-sm font-semibold">
                        Price per day
                      </p>
                      <p className="text-purple-700 font-extrabold">
                        {venue.pricePerDay}
                      </p>
                    </div>

                    <Link
                      to={`/venues/${venue.id}`}
                      className="shrink-0 px-5 py-3 rounded-xl bg-purple-700 text-white font-bold hover:bg-purple-800"
                    >
                      View Venue
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

export default Venues;
