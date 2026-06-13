import { useState } from "react";
import { Link } from "react-router-dom";
import { DEFAULT_EVENT_IMAGE, events } from "../data/events";

const categoryOptions = [...new Set(events.map((event) => event.category))];

function Events() {
  const [searchText, setSearchText] = useState("");
  const [locationText, setLocationText] = useState("");
  const [category, setCategory] = useState("");

  const filteredEvents = events.filter((event) => {
    const titleMatches = event.title
      .toLowerCase()
      .includes(searchText.trim().toLowerCase());
    const locationMatches = `${event.venue} ${event.location}`
      .toLowerCase()
      .includes(locationText.trim().toLowerCase());
    const categoryMatches = category ? event.category === category : true;

    return titleMatches && locationMatches && categoryMatches;
  });

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
              value={searchText}
              onChange={(event) => setSearchText(event.target.value)}
              className="md:col-span-2 px-4 py-3 rounded-xl border border-slate-300 outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Search event name"
            />

            <input
              value={locationText}
              onChange={(event) => setLocationText(event.target.value)}
              className="px-4 py-3 rounded-xl border border-slate-300 outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Location or venue"
            />

            <select
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              className="px-4 py-3 rounded-xl border border-slate-300 outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="">All Categories</option>
              {categoryOptions.map((eventCategory) => (
                <option key={eventCategory} value={eventCategory}>
                  {eventCategory}
                </option>
              ))}
            </select>

            <button
              type="button"
              className="py-3 rounded-xl bg-gradient-to-r from-purple-700 to-indigo-500 text-white font-bold shadow-md hover:opacity-90"
            >
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

        {filteredEvents.length === 0 ? (
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-10 text-center">
            <h3 className="text-2xl font-extrabold text-slate-950">
              No events found.
            </h3>
            <p className="text-slate-500 mt-2">
              Try another event name, venue, location, or category.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 items-stretch auto-rows-fr">
            {filteredEvents.map((event) => (
              <div key={event.id} className="h-full flex flex-col">
                <article className="h-full flex flex-col bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition">
                  <div className="relative shrink-0">
                    <img
                      src={event.image || DEFAULT_EVENT_IMAGE}
                      alt={event.title}
                      className="h-56 w-full object-cover"
                      onError={(imageEvent) => {
                        imageEvent.currentTarget.onerror = null;
                        imageEvent.currentTarget.src = DEFAULT_EVENT_IMAGE;
                      }}
                    />

                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-bold">
                      {event.category}
                    </div>

                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold">
                      {event.status}
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex flex-col flex-1">
                      <h3 className="text-xl font-extrabold text-slate-950">
                        {event.title}
                      </h3>

                      <p className="text-slate-500 text-sm mt-2 leading-relaxed">
                        {event.description}
                      </p>

                      <div className="grid grid-cols-2 gap-3 mt-5 text-sm">
                        <div className="bg-slate-50 rounded-2xl p-3">
                          <p className="text-slate-400 font-semibold">Date</p>
                          <p className="font-bold text-slate-700">
                            {event.date}
                          </p>
                        </div>

                        <div className="bg-slate-50 rounded-2xl p-3">
                          <p className="text-slate-400 font-semibold">Time</p>
                          <p className="font-bold text-slate-700">
                            {event.time}
                          </p>
                        </div>

                        <div className="bg-slate-50 rounded-2xl p-3">
                          <p className="text-slate-400 font-semibold">Venue</p>
                          <p className="font-bold text-slate-700">
                            {event.venue}
                          </p>
                        </div>

                        <div className="bg-slate-50 rounded-2xl p-3">
                          <p className="text-slate-400 font-semibold">
                            Tickets
                          </p>
                          <p className="font-bold text-slate-700">
                            {event.availableTickets} left
                          </p>
                        </div>
                      </div>

                      <div className="mt-auto">
                        <div className="flex items-center justify-between gap-4 pt-6">
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
                            className="shrink-0 px-5 py-3 rounded-xl bg-purple-700 text-white font-bold hover:bg-purple-800"
                          >
                            View Details
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

export default Events;
