import { Link, useParams } from "react-router-dom";
import { DEFAULT_EVENT_IMAGE, events } from "../data/events";

function EventDetails() {
  const { id } = useParams();
  const event = events.find((item) => item.id === Number(id));

  if (!event) {
    return (
      <main className="min-h-screen bg-[#f8f9ff] px-6 lg:px-12 py-20">
        <div className="max-w-3xl mx-auto bg-white rounded-3xl border border-slate-200 shadow-xl p-10 text-center">
          <h1 className="text-4xl font-extrabold text-slate-950">
            Event not found
          </h1>
          <p className="text-slate-500 mt-3">
            The event you are looking for may have been removed or does not
            exist.
          </p>
          <Link
            to="/events"
            className="inline-flex mt-7 px-6 py-3 rounded-xl bg-purple-700 text-white font-bold hover:bg-purple-800"
          >
            Back to Events
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f8f9ff]">
      <section className="relative overflow-hidden px-6 lg:px-12 py-16">
        <div className="absolute -top-28 left-0 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-50" />
        <div className="absolute top-52 right-0 w-80 h-80 bg-cyan-200 rounded-full blur-3xl opacity-50" />

        <div className="relative max-w-7xl mx-auto">
          <Link
            to="/events"
            className="inline-flex items-center text-purple-700 font-bold mb-8"
          >
            Back to Events
          </Link>

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
              <img
                src={event.image || DEFAULT_EVENT_IMAGE}
                alt={event.title}
                className="w-full h-[430px] object-cover"
                onError={(imageEvent) => {
                  imageEvent.currentTarget.onerror = null;
                  imageEvent.currentTarget.src = DEFAULT_EVENT_IMAGE;
                }}
              />
            </div>

            <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-8">
              <div className="flex flex-wrap gap-3 mb-5">
                <span className="px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-bold">
                  {event.category}
                </span>

                <span className="px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-bold">
                  {event.status}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-950 leading-tight">
                {event.title}
              </h1>

              <p className="mt-5 text-slate-600 leading-relaxed">
                {event.details}
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-slate-50 rounded-2xl p-4">
                  <p className="text-sm text-slate-400 font-bold">Date</p>
                  <p className="font-extrabold text-slate-800">
                    {event.date}
                  </p>
                </div>

                <div className="bg-slate-50 rounded-2xl p-4">
                  <p className="text-sm text-slate-400 font-bold">Time</p>
                  <p className="font-extrabold text-slate-800">
                    {event.time}
                  </p>
                </div>

                <div className="bg-slate-50 rounded-2xl p-4">
                  <p className="text-sm text-slate-400 font-bold">Venue</p>
                  <p className="font-extrabold text-slate-800">
                    {event.venue}
                  </p>
                </div>

                <div className="bg-slate-50 rounded-2xl p-4">
                  <p className="text-sm text-slate-400 font-bold">Location</p>
                  <p className="font-extrabold text-slate-800">
                    {event.location}
                  </p>
                </div>
              </div>

              <div className="mt-8 flex items-center justify-between bg-purple-50 rounded-2xl p-5">
                <div>
                  <p className="text-sm text-slate-500 font-bold">
                    Ticket Price
                  </p>
                  <p className="text-3xl font-extrabold text-purple-700">
                    {event.ticketPrice}
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-sm text-slate-500 font-bold">
                    Available Tickets
                  </p>
                  <p className="text-2xl font-extrabold text-slate-950">
                    {event.availableTickets}
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  to={`/booking/${event.id}`}
                  className="flex-1 text-center py-4 rounded-2xl bg-gradient-to-r from-purple-700 to-indigo-500 text-white font-extrabold shadow-md hover:opacity-95"
                >
                  Book Tickets
                </Link>

                <button className="flex-1 py-4 rounded-2xl bg-white border border-slate-300 text-purple-700 font-extrabold hover:bg-purple-50">
                  Add to Wishlist
                </button>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-7 mt-10">
            <div className="lg:col-span-2 bg-white rounded-3xl border border-slate-200 shadow-sm p-8">
              <h2 className="text-2xl font-extrabold text-slate-950 mb-4">
                About This Event
              </h2>

              <p className="text-slate-600 leading-relaxed">
                {event.description}
              </p>

              <div className="grid md:grid-cols-3 gap-4 mt-8">
                <div className="bg-slate-50 rounded-2xl p-4">
                  <p className="text-sm text-slate-400 font-bold">Organizer</p>
                  <p className="font-bold text-slate-800">
                    {event.organizer}
                  </p>
                </div>

                <div className="bg-slate-50 rounded-2xl p-4">
                  <p className="text-sm text-slate-400 font-bold">
                    Total Tickets
                  </p>
                  <p className="font-bold text-slate-800">
                    {event.totalTickets}
                  </p>
                </div>

                <div className="bg-slate-50 rounded-2xl p-4">
                  <p className="text-sm text-slate-400 font-bold">Event ID</p>
                  <p className="font-bold text-slate-800">#{event.id}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8">
              <h2 className="text-2xl font-extrabold text-slate-950 mb-4">
                Why Attend?
              </h2>

              <ul className="space-y-4 text-slate-600">
                <li>Learn from experienced organizers and speakers</li>
                <li>Meet people with similar interests</li>
                <li>Build your professional network</li>
                <li>Explore practical ideas and new opportunities</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default EventDetails;
