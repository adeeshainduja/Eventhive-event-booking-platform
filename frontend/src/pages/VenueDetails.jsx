import { Link, useParams } from "react-router-dom";
import { DEFAULT_VENUE_IMAGE, venues } from "../data/venues";

function VenueDetails() {
  const { id } = useParams();
  const venue = venues.find((item) => item.id === Number(id));

  if (!venue) {
    return (
      <main className="min-h-screen bg-[#f8f9ff] px-6 lg:px-12 py-20">
        <div className="max-w-3xl mx-auto bg-white rounded-3xl border border-slate-200 shadow-xl p-10 text-center">
          <h1 className="text-4xl font-extrabold text-slate-950">
            Venue not found
          </h1>
          <p className="text-slate-500 mt-3">
            The venue you are looking for may have been removed or does not
            exist.
          </p>
          <Link
            to="/venues"
            className="inline-flex mt-7 px-6 py-3 rounded-xl bg-purple-700 text-white font-bold hover:bg-purple-800"
          >
            Back to Venues
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f8f9ff]">
      <section className="relative overflow-hidden px-6 lg:px-12 py-16">
        <div className="absolute -top-28 right-0 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-20 -left-24 w-80 h-80 bg-cyan-200 rounded-full blur-3xl opacity-50" />

        <div className="relative max-w-7xl mx-auto">
          <Link
            to="/venues"
            className="inline-flex items-center text-purple-700 font-bold mb-8"
          >
            Back to Venues
          </Link>

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
              <img
                src={venue.image || DEFAULT_VENUE_IMAGE}
                alt={venue.name}
                className="w-full h-[430px] object-cover"
                onError={(event) => {
                  event.currentTarget.onerror = null;
                  event.currentTarget.src = DEFAULT_VENUE_IMAGE;
                }}
              />
            </div>

            <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-8">
              <div className="flex flex-wrap gap-3 mb-5">
                <span className="px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-bold">
                  {venue.status}
                </span>
                <span className="px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-bold">
                  Rating {venue.rating}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-950 leading-tight">
                {venue.name}
              </h1>

              <p className="mt-5 text-slate-600 leading-relaxed">
                {venue.description}
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-slate-50 rounded-2xl p-4">
                  <p className="text-sm text-slate-400 font-bold">Location</p>
                  <p className="font-extrabold text-slate-800">
                    {venue.location}
                  </p>
                </div>

                <div className="bg-slate-50 rounded-2xl p-4">
                  <p className="text-sm text-slate-400 font-bold">Capacity</p>
                  <p className="font-extrabold text-slate-800">
                    {venue.capacity} people
                  </p>
                </div>

                <div className="bg-slate-50 rounded-2xl p-4">
                  <p className="text-sm text-slate-400 font-bold">
                    Price Per Day
                  </p>
                  <p className="font-extrabold text-slate-800">
                    {venue.pricePerDay}
                  </p>
                </div>

                <div className="bg-slate-50 rounded-2xl p-4">
                  <p className="text-sm text-slate-400 font-bold">Rating</p>
                  <p className="font-extrabold text-slate-800">
                    {venue.rating} / 5
                  </p>
                </div>
              </div>

              <Link
                to="/events"
                className="block text-center mt-8 py-4 rounded-2xl bg-gradient-to-r from-purple-700 to-indigo-500 text-white font-extrabold shadow-md hover:opacity-95"
              >
                Create Event Here
              </Link>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-7 mt-10">
            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8">
              <h2 className="text-2xl font-extrabold text-slate-950 mb-4">
                Suitable For
              </h2>
              <div className="flex flex-wrap gap-3">
                {venue.suitableFor.map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-bold"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2 bg-white rounded-3xl border border-slate-200 shadow-sm p-8">
              <h2 className="text-2xl font-extrabold text-slate-950 mb-4">
                Available Facilities
              </h2>
              <div className="grid md:grid-cols-2 gap-3">
                {venue.facilities.map((facility) => (
                  <div
                    key={facility}
                    className="rounded-2xl bg-slate-50 px-4 py-3 text-slate-700 font-semibold"
                  >
                    {facility}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 bg-white rounded-3xl border border-slate-200 shadow-sm p-8">
            <h2 className="text-2xl font-extrabold text-slate-950">
              Request Booking
            </h2>
            <p className="text-slate-600 mt-3">
              This venue is ready for weddings, conferences, concerts, and
              meetings. Submit an event request to reserve the space for your
              preferred date.
            </p>
            <button className="mt-6 px-6 py-3 rounded-xl bg-purple-700 text-white font-bold hover:bg-purple-800">
              Request Booking
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default VenueDetails;
