import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  const increaseQuantity = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    window.dispatchEvent(new Event("cartUpdated"));
  };

  const decreaseQuantity = (id) => {
    const updatedCart = cart
      .map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0);

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    window.dispatchEvent(new Event("cartUpdated"));
  };

  const removeItem = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    window.dispatchEvent(new Event("cartUpdated"));
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Navbar */}
      <div className="bg-red-600 text-white">
        <Navbar />
      </div>

      {/* Header */}
      <div className="bg-red-600 text-white py-8">

        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">

          <div>
            <h1 className="text-4xl font-bold">
              Your Cart 🛒
            </h1>

            <p className="mt-2 text-red-100">
              Your delicious pizzas are waiting!
            </p>
          </div>

          <Link
            to="/menu"
            className="bg-white text-red-600 px-5 py-2 rounded-lg font-bold hover:bg-gray-100"
          >
            ← Continue Shopping
          </Link>

        </div>

      </div>

      {/* Cart */}
      <div className="max-w-6xl mx-auto px-6 py-10">

        {cart.length === 0 ? (

          /* Empty Cart */
          <div className="bg-white rounded-2xl shadow-md p-10 text-center">

            <div className="text-7xl mb-6">
              🍕
            </div>

            <h2 className="text-3xl font-bold text-gray-800 mb-3">
              Your cart is empty
            </h2>

            <p className="text-gray-500 mb-8">
              Looks like you haven't added any pizza yet.
            </p>

            <Link
              to="/menu"
              className="inline-block bg-red-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700"
            >
              Browse Menu
            </Link>

          </div>

        ) : (

          /* Cart Items */
          <div className="grid lg:grid-cols-3 gap-8">

            {/* Items */}
            <div className="lg:col-span-2 space-y-5">

              {cart.map((item) => (

                <div
                  key={item.id}
                  className="bg-white rounded-2xl shadow-md p-5 flex items-center gap-5"
                >

                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-28 h-28 object-cover rounded-xl"
                  />

                  <div className="flex-1">

                    <h2 className="text-xl font-bold text-gray-800">
                      {item.name}
                    </h2>

                    <p className="text-red-600 font-bold mt-1">
                      ₹{item.price}
                    </p>

                    {/* Quantity */}
                    <div className="flex items-center gap-3 mt-4">

                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="w-8 h-8 bg-gray-200 rounded-full font-bold hover:bg-gray-300"
                      >
                        −
                      </button>

                      <span className="font-bold text-lg">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() => increaseQuantity(item.id)}
                        className="w-8 h-8 bg-red-600 text-white rounded-full font-bold hover:bg-red-700"
                      >
                        +
                      </button>

                    </div>

                  </div>

                  {/* Price & Remove */}
                  <div className="text-right">

                    <p className="text-xl font-bold text-gray-800">
                      ₹{item.price * item.quantity}
                    </p>

                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-500 text-sm font-semibold mt-3 hover:text-red-700"
                    >
                      Remove
                    </button>

                  </div>

                </div>

              ))}

            </div>

            {/* Order Summary */}
            <div className="bg-white rounded-2xl shadow-md p-6 h-fit">

              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Order Summary
              </h2>

              <div className="flex justify-between text-gray-600 mb-3">
                <span>Subtotal</span>

                <span>
                  ₹{totalPrice}
                </span>
              </div>

              <div className="flex justify-between text-gray-600 mb-5">
                <span>Delivery</span>

                <span className="text-green-600 font-semibold">
                  FREE
                </span>
              </div>

              <div className="border-t pt-5 flex justify-between text-xl font-bold">

                <span>
                  Total
                </span>

                <span className="text-red-600">
                  ₹{totalPrice}
                </span>

              </div>

              <Link
                to="/checkout"
                className="block text-center bg-red-600 text-white py-3 rounded-lg font-bold mt-6 hover:bg-red-700"
              >
                Proceed to Checkout
              </Link>

            </div>

          </div>

        )}

      </div>

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

export default Cart;