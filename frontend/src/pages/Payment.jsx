import { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const booking = {
  id: 1,
  eventTitle: "Tech Innovation Summit 2026",
  eventDate: "2026-06-15",
  eventTime: "09:30 AM",
  venue: "Colombo Grand Hall",
  ticketQuantity: 2,
  ticketPrice: 2500,
  serviceFee: 300,
};

function Payment() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] = useState("card");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const subtotal = booking.ticketPrice * booking.ticketQuantity;
  const totalAmount = subtotal + booking.serviceFee;

  const handlePayment = (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    setTimeout(() => {
      setLoading(false);
      setMessage("Payment successful! Your booking is confirmed.");

      setTimeout(() => {
        navigate("/booking-success");
      }, 1000);
    }, 1000);
  };

  return (
    <main className="min-h-screen bg-[#f8f9ff] px-6 lg:px-12 py-16">
      <div className="max-w-7xl mx-auto">
        <Link
          to={`/booking/${id}`}
          className="inline-flex items-center text-purple-700 font-bold mb-8"
        >
          ← Back to Booking
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          <section className="lg:col-span-2 bg-white rounded-3xl border border-slate-200 shadow-xl p-8">
            <div className="mb-8">
              <p className="inline-flex px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-bold mb-5">
                Secure Payment
              </p>

              <h1 className="text-4xl font-extrabold text-slate-950">
                Complete Your Payment
              </h1>

              <p className="text-slate-500 mt-3">
                Choose your preferred payment method and confirm your ticket
                booking.
              </p>
            </div>

            {message && (
              <div className="mb-6 rounded-2xl bg-green-50 border border-green-200 text-green-700 px-5 py-4 font-semibold">
                {message}
              </div>
            )}

            <form onSubmit={handlePayment} className="space-y-7">
              <div>
                <h2 className="text-2xl font-extrabold text-slate-950 mb-4">
                  Payment Method
                </h2>

                <div className="grid md:grid-cols-3 gap-4">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("card")}
                    className={`rounded-2xl border p-5 text-left transition ${
                      paymentMethod === "card"
                        ? "border-purple-600 bg-purple-50"
                        : "border-slate-200 bg-white hover:bg-slate-50"
                    }`}
                  >
                    <div className="text-3xl mb-3">💳</div>
                    <p className="font-extrabold text-slate-900">Card</p>
                    <p className="text-sm text-slate-500">Visa / MasterCard</p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod("bank")}
                    className={`rounded-2xl border p-5 text-left transition ${
                      paymentMethod === "bank"
                        ? "border-purple-600 bg-purple-50"
                        : "border-slate-200 bg-white hover:bg-slate-50"
                    }`}
                  >
                    <div className="text-3xl mb-3">🏦</div>
                    <p className="font-extrabold text-slate-900">Bank</p>
                    <p className="text-sm text-slate-500">Bank transfer</p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod("cash")}
                    className={`rounded-2xl border p-5 text-left transition ${
                      paymentMethod === "cash"
                        ? "border-purple-600 bg-purple-50"
                        : "border-slate-200 bg-white hover:bg-slate-50"
                    }`}
                  >
                    <div className="text-3xl mb-3">💵</div>
                    <p className="font-extrabold text-slate-900">Cash</p>
                    <p className="text-sm text-slate-500">Pay at venue</p>
                  </button>
                </div>
              </div>

              {paymentMethod === "card" && (
                <div className="bg-slate-50 rounded-3xl p-6 border border-slate-200">
                  <h2 className="text-2xl font-extrabold text-slate-950 mb-5">
                    Card Details
                  </h2>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-bold text-slate-600 mb-2">
                        Cardholder Name
                      </label>
                      <input
                        type="text"
                        placeholder="Adeesha Induja"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-slate-600 mb-2">
                        Card Number
                      </label>
                      <input
                        type="text"
                        placeholder="1234 5678 9012 3456"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-bold text-slate-600 mb-2">
                          Expiry Date
                        </label>
                        <input
                          type="text"
                          placeholder="MM/YY"
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 outline-none focus:ring-2 focus:ring-purple-500"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-slate-600 mb-2">
                          CVV
                        </label>
                        <input
                          type="password"
                          placeholder="123"
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 outline-none focus:ring-2 focus:ring-purple-500"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {paymentMethod === "bank" && (
                <div className="bg-blue-50 rounded-3xl p-6 border border-blue-100">
                  <h2 className="text-2xl font-extrabold text-slate-950 mb-3">
                    Bank Transfer Instructions
                  </h2>
                  <p className="text-slate-600">
                    Transfer the total amount to EventHive Bank Account and use
                    your booking ID as the payment reference.
                  </p>

                  <div className="grid md:grid-cols-2 gap-4 mt-5">
                    <div className="bg-white rounded-2xl p-4">
                      <p className="text-sm text-slate-400 font-bold">
                        Account Name
                      </p>
                      <p className="font-bold text-slate-800">
                        EventHive Pvt Ltd
                      </p>
                    </div>

                    <div className="bg-white rounded-2xl p-4">
                      <p className="text-sm text-slate-400 font-bold">
                        Reference
                      </p>
                      <p className="font-bold text-slate-800">
                        BOOKING-{booking.id}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {paymentMethod === "cash" && (
                <div className="bg-yellow-50 rounded-3xl p-6 border border-yellow-100">
                  <h2 className="text-2xl font-extrabold text-slate-950 mb-3">
                    Cash Payment
                  </h2>
                  <p className="text-slate-600">
                    You can pay at the venue counter before entering the event.
                    Your booking will be marked as pending until payment is
                    verified.
                  </p>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-purple-700 to-indigo-500 text-white font-extrabold shadow-md hover:opacity-95 disabled:opacity-60"
              >
                {loading
                  ? "Processing Payment..."
                  : `Pay LKR ${totalAmount.toLocaleString()}`}
              </button>
            </form>
          </section>

          <aside className="bg-white rounded-3xl border border-slate-200 shadow-xl p-7 h-fit sticky top-24">
            <h2 className="text-2xl font-extrabold text-slate-950 mb-6">
              Order Summary
            </h2>

            <div className="bg-purple-50 rounded-2xl p-5 mb-6">
              <p className="text-sm text-purple-700 font-bold mb-1">Event</p>
              <h3 className="font-extrabold text-slate-950">
                {booking.eventTitle}
              </h3>
              <p className="text-sm text-slate-500 mt-2">
                {booking.eventDate} • {booking.eventTime}
              </p>
              <p className="text-sm text-slate-500">{booking.venue}</p>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between text-slate-600">
                <span>Ticket Price</span>
                <span className="font-bold text-slate-800">
                  LKR {booking.ticketPrice.toLocaleString()}
                </span>
              </div>

              <div className="flex justify-between text-slate-600">
                <span>Quantity</span>
                <span className="font-bold text-slate-800">
                  {booking.ticketQuantity}
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
                  LKR {booking.serviceFee.toLocaleString()}
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

            <div className="mt-6 rounded-2xl bg-green-50 border border-green-200 p-4">
              <p className="text-green-700 font-bold text-sm">
                🔒 Secure payment protected
              </p>
              <p className="text-green-700/80 text-xs mt-1">
                This is a demo payment UI for the EventHive project.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

export default Payment;
