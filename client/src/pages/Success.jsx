import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Success() {
  const orderId = "PR" + Math.floor(100000 + Math.random() * 900000);

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Navbar */}
      <div className="bg-red-600 text-white">
        <Navbar />
      </div>

      {/* Success Section */}
      <section className="px-6 py-16">

        <div className="max-w-3xl mx-auto">

          {/* Main Success Card */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 text-center">

            {/* Success Icon */}
            <div className="w-24 h-24 mx-auto rounded-full bg-green-100 flex items-center justify-center text-6xl mb-6">
              🎉
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
              Order Confirmed!
            </h1>

            <p className="text-gray-500 text-lg mt-4">
              Thank you for ordering from PizzaRush 🍕
            </p>

            {/* Order ID */}
            <div className="bg-gray-100 rounded-xl p-5 mt-8">

              <p className="text-gray-500 text-sm">
                Your Order ID
              </p>

              <p className="text-2xl font-bold text-red-600 mt-1">
                #{orderId}
              </p>

            </div>

            {/* Status */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-5 mt-6">

              <div className="text-4xl mb-2">
                👨‍🍳
              </div>

              <h2 className="text-xl font-bold text-green-700">
                Your pizza is being prepared!
              </h2>

              <p className="text-green-600 mt-2">
                Estimated delivery: <strong>30–40 minutes</strong>
              </p>

            </div>

            {/* Payment */}
            <div className="grid md:grid-cols-2 gap-4 mt-6">

              <div className="bg-orange-50 rounded-xl p-4">
                <p className="text-gray-500 text-sm">
                  Payment Status
                </p>

                <p className="font-bold text-gray-800 mt-1">
                  Confirmed ✓
                </p>
              </div>

              <div className="bg-orange-50 rounded-xl p-4">
                <p className="text-gray-500 text-sm">
                  Delivery Status
                </p>

                <p className="font-bold text-gray-800 mt-1">
                  Preparing 🍕
                </p>
              </div>

            </div>

            {/* Buttons */}
            <div className="mt-8 space-y-4">

              <Link
                to="/menu"
                className="block w-full bg-red-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-red-700 transition"
              >
                Order More Pizza 🍕
              </Link>

              <Link
                to="/"
                className="block w-full border-2 border-red-600 text-red-600 py-4 rounded-xl font-bold text-lg hover:bg-red-50 transition"
              >
                ← Back to Home
              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-8">

        <h2 className="text-2xl font-bold">
          🍕 PizzaRush
        </h2>

        <p className="text-gray-400 mt-2">
          Delicious pizza delivered to your doorstep.
        </p>

        <p className="text-gray-500 text-sm mt-4">
          © 2026 PizzaRush. All rights reserved.
        </p>

      </footer>

    </div>
  );
}

export default Success;