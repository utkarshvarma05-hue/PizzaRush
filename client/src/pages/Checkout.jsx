import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function Checkout() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [payment, setPayment] = useState("Cash on Delivery");

  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const deliveryCharge = 0;
  const finalTotal = totalPrice + deliveryCharge;

  const handleOrder = (e) => {
    e.preventDefault();

    if (cart.length === 0) {
      alert("Your cart is empty! Please add a pizza first 🍕");
      navigate("/menu");
      return;
    }

    alert("Order placed successfully! 🍕");

    localStorage.removeItem("cart");

    window.dispatchEvent(new Event("cartUpdated"));

    navigate("/success");
  };

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Navbar */}
      <div className="bg-red-600 text-white">
        <Navbar />
      </div>

      {/* Header */}
      <div className="bg-red-600 text-white py-10 text-center">
        <h1 className="text-4xl font-bold">
          Checkout 🛒
        </h1>

        <p className="mt-2 text-red-100">
          Complete your order and enjoy your pizza 🍕
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-10">

        <form onSubmit={handleOrder}>

          <div className="grid lg:grid-cols-3 gap-8">

            {/* LEFT SIDE */}
            <div className="lg:col-span-2 space-y-8">

              {/* Delivery Details */}
              <div className="bg-white rounded-2xl shadow-lg p-8">

                <h2 className="text-2xl font-bold mb-6">
                  Delivery Details 📍
                </h2>

                {/* Name */}
                <label className="block font-semibold mb-2">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full border border-gray-300 rounded-lg p-3 mb-5 focus:outline-none focus:border-red-600"
                />

                {/* Phone */}
                <label className="block font-semibold mb-2">
                  Phone Number
                </label>

                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="w-full border border-gray-300 rounded-lg p-3 mb-5 focus:outline-none focus:border-red-600"
                />

                {/* Address */}
                <label className="block font-semibold mb-2">
                  Delivery Address
                </label>

                <textarea
                  placeholder="Enter your complete delivery address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                  rows="4"
                  className="w-full border border-gray-300 rounded-lg p-3 mb-5 focus:outline-none focus:border-red-600"
                />

                {/* Payment */}
                <label className="block font-semibold mb-2">
                  Payment Method
                </label>

                <select
                  value={payment}
                  onChange={(e) => setPayment(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-red-600"
                >
                  <option>Cash on Delivery</option>
                  <option>UPI</option>
                  <option>Credit / Debit Card</option>
                </select>

              </div>


              {/* Order Items */}
              <div className="bg-white rounded-2xl shadow-lg p-8">

                <h2 className="text-2xl font-bold mb-6">
                  Your Order 🍕
                </h2>

                {cart.length === 0 ? (

                  <div className="text-center py-8">

                    <div className="text-6xl mb-4">
                      🍕
                    </div>

                    <p className="text-gray-500 mb-5">
                      Your cart is empty.
                    </p>

                    <Link
                      to="/menu"
                      className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg font-bold"
                    >
                      Browse Menu
                    </Link>

                  </div>

                ) : (

                  <div className="space-y-5">

                    {cart.map((item) => (

                      <div
                        key={item.id}
                        className="flex items-center gap-4 border-b pb-5"
                      >

                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-20 h-20 object-cover rounded-xl"
                        />

                        <div className="flex-1">

                          <h3 className="font-bold text-lg">
                            {item.name}
                          </h3>

                          <p className="text-gray-500">
                            ₹{item.price} × {item.quantity}
                          </p>

                        </div>

                        <p className="font-bold text-lg text-red-600">
                          ₹{item.price * item.quantity}
                        </p>

                      </div>

                    ))}

                  </div>

                )}

              </div>

            </div>


            {/* RIGHT SIDE - SUMMARY */}
            <div className="bg-white rounded-2xl shadow-lg p-6 h-fit lg:sticky lg:top-6">

              <h2 className="text-2xl font-bold mb-6">
                Order Summary
              </h2>

              <div className="flex justify-between text-gray-600 mb-4">
                <span>Subtotal</span>

                <span>
                  ₹{totalPrice}
                </span>
              </div>

              <div className="flex justify-between text-gray-600 mb-4">
                <span>Delivery</span>

                <span className="text-green-600 font-semibold">
                  FREE
                </span>
              </div>

              <hr className="my-5" />

              <div className="flex justify-between text-xl font-bold">

                <span>
                  Total
                </span>

                <span className="text-red-600">
                  ₹{finalTotal}
                </span>

              </div>

              <button
                type="submit"
                className="w-full bg-red-600 text-white py-4 rounded-xl font-bold text-lg mt-7 hover:bg-red-700 transition"
              >
                Place Order 🍕
              </button>

              <Link
                to="/cart"
                className="block text-center text-red-600 font-semibold mt-4"
              >
                ← Back to Cart
              </Link>

            </div>

          </div>

        </form>

      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-8 mt-10">

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

export default Checkout;