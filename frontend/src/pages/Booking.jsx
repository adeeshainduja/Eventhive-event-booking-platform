import { useState } from "react";
import { Link, useParams } from "react-router-dom";

const event = {
  id: 1,
  title: "Tech Innovation Summit 2026",
  category: "Technology",
  date: "2026-06-15",
  time: "09:30 AM",
  venue: "Colombo Grand Hall",
  location: "Colombo, Sri Lanka",
  ticketPrice: 2500,
  availableTickets: 300,
  image:
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80",
};

function Booking() {
  const { id } = useParams();

  const [ticketQuantity, setTicketQuantity] = useState(1);

  const serviceFee = 300;
  const subtotal = event.ticketPrice * ticketQuantity;
  const totalAmount = subtotal + serviceFee;

  const increaseTickets = () => {
    if (ticketQuantity < event.availableTickets) {
      setTicketQuantity(ticketQuantity + 1);
    }
  };

  const decreaseTickets = () => {
    if (ticketQuantity > 1) {
      setTicketQuantity(ticketQuantity - 1);
    }
  };

  return (
    <main className="min-h-screen bg-[#f8f9ff] px-6 lg:px-12 py-16">
      <div className="max-w-7xl mx-auto">
        <Link
          to={`/events/${id}`}
          className="inline-flex items-center text-purple-700 font-bold mb-8"
        >
          ← Back to Event Details
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-72 object-cover"
            />

            <div className="p-8">
              <div className="flex flex-wrap gap-3 mb-4">
                <span className="px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-bold">
                  {event.category}
                </span>

                <span className="px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-bold">
                  {event.availableTickets} Tickets Available
                </span>
              </div>

              <h1 className="text-4xl font-extrabold text-slate-950">
                {event.title}
              </h1>

              <p className="text-slate-500 mt-3">
                Complete your booking by selecting the number of tickets you
                want to reserve.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mt-8">
                <div className="bg-slate-50 rounded-2xl p-5">
                  <p className="text-sm text-slate-400 font-bold">Date</p>
                  <p className="font-extrabold text-slate-800">
                    {event.date}
                  </p>
                </div>

                <div className="bg-slate-50 rounded-2xl p-5">
                  <p className="text-sm text-slate-400 font-bold">Time</p>
                  <p className="font-extrabold text-slate-800">
                    {event.time}
                  </p>
                </div>

                <div className="bg-slate-50 rounded-2xl p-5">
                  <p className="text-sm text-slate-400 font-bold">Venue</p>
                  <p className="font-extrabold text-slate-800">
                    {event.venue}
                  </p>
                </div>

                <div className="bg-slate-50 rounded-2xl p-5">
                  <p className="text-sm text-slate-400 font-bold">Location</p>
                  <p className="font-extrabold text-slate-800">
                    {event.location}
                  </p>
                </div>
              </div>

              <div className="mt-8 bg-purple-50 rounded-3xl p-6 border border-purple-100">
                <h2 className="text-2xl font-extrabold text-slate-950 mb-4">
                  Select Tickets
                </h2>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-slate-800">Standard Ticket</p>
                    <p className="text-slate-500 text-sm">
                      LKR {event.ticketPrice.toLocaleString()} per ticket
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <button
                      onClick={decreaseTickets}
                      className="w-10 h-10 rounded-xl bg-white border border-slate-300 text-xl font-bold hover:bg-slate-100"
                    >
                      -
                    </button>

                    <span className="text-xl font-extrabold text-slate-950 w-8 text-center">
                      {ticketQuantity}
                    </span>

                    <button
                      onClick={increaseTickets}
                      className="w-10 h-10 rounded-xl bg-purple-700 text-white text-xl font-bold hover:bg-purple-800"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-white border border-slate-200 rounded-3xl p-6">
                <h2 className="text-2xl font-extrabold text-slate-950 mb-4">
                  Attendee Information
                </h2>

                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    className="px-4 py-3 rounded-xl border border-slate-300 outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Full name"
                  />

                  <input
                    className="px-4 py-3 rounded-xl border border-slate-300 outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Email address"
                  />

                  <input
                    className="md:col-span-2 px-4 py-3 rounded-xl border border-slate-300 outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Phone number"
                  />
                </div>
              </div>
            </div>
          </div>

          <aside className="bg-white rounded-3xl border border-slate-200 shadow-xl p-7 h-fit sticky top-24">
            <h2 className="text-2xl font-extrabold text-slate-950 mb-6">
              Booking Summary
            </h2>

            <div className="space-y-4">
              <div className="flex justify-between text-slate-600">
                <span>Event</span>
                <span className="font-bold text-slate-800 text-right">
                  {event.title}
                </span>
              </div>

              <div className="flex justify-between text-slate-600">
                <span>Ticket Price</span>
                <span className="font-bold text-slate-800">
                  LKR {event.ticketPrice.toLocaleString()}
                </span>
              </div>

              <div className="flex justify-between text-slate-600">
                <span>Quantity</span>
                <span className="font-bold text-slate-800">
                  {ticketQuantity}
                </span>
              </div>

              <div className="flex justify-between text-slate-600">
                <span>Subtotal</span>
                <span className="font-bold text-slate-800">
                  LKR {subtotal.toLocaleString()}
                </span>
              </div>

              <div className="flex justify-between text-slate-600">
                <span>Service Fee</span>
                <span className="font-bold text-slate-800">
                  LKR {serviceFee.toLocaleString()}
                </span>
              </div>

              <div className="border-t border-slate-200 pt-5 flex justify-between">
                <span className="text-lg font-extrabold text-slate-950">
                  Total
                </span>
                <span className="text-2xl font-extrabold text-purple-700">
                  LKR {totalAmount.toLocaleString()}
                </span>
              </div>
            </div>

            <Link
              to={`/payment/${id}`}
              className="block text-center w-full mt-7 py-4 rounded-2xl bg-gradient-to-r from-purple-700 to-indigo-500 text-white font-extrabold shadow-md hover:opacity-95"
            >
              Continue to Payment
            </Link>

            <p className="text-xs text-slate-400 text-center mt-4">
              Your booking will be confirmed after successful payment.
            </p>
          </aside>
        </div>
      </div>
    </main>
  );
}

export default Booking;