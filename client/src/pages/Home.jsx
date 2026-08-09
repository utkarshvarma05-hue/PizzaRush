import Navbar from "../components/Navbar";

function Home() {
  return (
    <div>

      {/* Navbar */}
      <div className="bg-red-600 text-white">
        <Navbar />
      </div>

      {/* Hero */}
      <section className="bg-orange-50 text-center px-8 py-20">

        <div className="text-7xl mb-5">
          <pizza className="png"></pizza>
        </div>

        <h1 className="text-5xl font-bold text-gray-800">
          Delicious Pizza,
          <span className="text-red-600"> Delivered Fast!</span>
        </h1>

        <p className="mt-4 text-gray-600 text-lg">
          Fresh ingredients. Amazing taste. Fast delivery.
        </p>

        <a
          href="/menu"
          className="inline-block mt-8 bg-red-600 text-white px-8 py-3 rounded-lg font-bold"
        >
          Order Now 🍕
        </a>

      </section>

      {/* Popular Pizzas */}
      <section className="bg-gray-100 py-16 px-8">

        <h2 className="text-3xl font-bold text-center text-red-600">
          Popular Pizzas 🍕
        </h2>

        <p className="text-center text-gray-500 mt-2">
          Our customers' favourite pizzas
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-10">

          {/* Margherita */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

            <img
              src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80"
              alt="Margherita Pizza"
              className="w-full h-56 object-cover"
            />

            <div className="p-6 text-center">

              <h3 className="text-xl font-bold">
                Margherita Pizza
              </h3>

              <p className="text-gray-500 mt-2">
                Classic cheesy goodness
              </p>

              <p className="text-red-600 font-bold text-2xl mt-3">
                ₹199
              </p>

              <a
                href="/menu"
                className="inline-block mt-4 bg-red-600 text-white px-6 py-2 rounded-lg font-bold"
              >
                Order Now
              </a>

            </div>
          </div>

          {/* Farmhouse */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

            <img
              src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80"
              alt="Farmhouse Pizza"
              className="w-full h-56 object-cover"
            />

            <div className="p-6 text-center">

              <h3 className="text-xl font-bold">
                Farmhouse Pizza
              </h3>

              <p className="text-gray-500 mt-2">
                Loaded with fresh vegetables
              </p>

              <p className="text-red-600 font-bold text-2xl mt-3">
                ₹249
              </p>

              <a
                href="/menu"
                className="inline-block mt-4 bg-red-600 text-white px-6 py-2 rounded-lg font-bold"
              >
                Order Now
              </a>

            </div>
          </div>

          {/* Cheese Burst */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

            <img
              src="https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=800&q=80"
              alt="Cheese Burst Pizza"
              className="w-full h-56 object-cover"
            />

            <div className="p-6 text-center">

              <h3 className="text-xl font-bold">
                Cheese Burst Pizza
              </h3>

              <p className="text-gray-500 mt-2">
                Extra cheesy and delicious
              </p>

              <p className="text-red-600 font-bold text-2xl mt-3">
                ₹299
              </p>

              <a
                href="/menu"
                className="inline-block mt-4 bg-red-600 text-white px-6 py-2 rounded-lg font-bold"
              >
                Order Now
              </a>

            </div>
          </div>

        </div>

      </section>

      {/* Special Offers */}
      <section className="bg-red-600 text-white py-16 px-8 text-center">

        <h2 className="text-4xl font-bold">
          Today's Special Offers 🎉
        </h2>

        <p className="mt-3">
          Grab these amazing deals today!
        </p>

        <div className="max-w-3xl mx-auto bg-white text-gray-800 rounded-2xl p-10 mt-8">

          <h3 className="text-4xl font-bold text-red-600">
            Get 20% OFF
          </h3>

          <p className="mt-3">
            On your first PizzaRush order!
          </p>

          <a
            href="/menu"
            className="inline-block mt-6 bg-red-600 text-white px-8 py-3 rounded-lg font-bold"
          >
            Order Now
          </a>

        </div>

      </section>

      {/* Why Choose */}
      <section className="bg-orange-50 py-16 px-8">

        <h2 className="text-3xl font-bold text-center text-red-600">
          Why Choose PizzaRush?
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-10">

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <div className="text-5xl">🍕</div>

            <h3 className="text-xl font-bold mt-4">
              Fresh Ingredients
            </h3>

            <p className="text-gray-500 mt-2">
              Fresh and quality ingredients in every pizza.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <div className="text-5xl">⚡</div>

            <h3 className="text-xl font-bold mt-4">
              Fast Delivery
            </h3>

            <p className="text-gray-500 mt-2">
              Get your favourite pizza delivered quickly.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <div className="text-5xl">❤️</div>

            <h3 className="text-xl font-bold mt-4">
              Great Taste
            </h3>

            <p className="text-gray-500 mt-2">
              Delicious pizzas made with love.
            </p>
          </div>

        </div>

      </section>

      {/* Reviews */}
      <section className="py-16 px-8 text-center">

        <h2 className="text-3xl font-bold text-red-600">
          What Our Customers Say ❤️
        </h2>

        <div className="max-w-3xl mx-auto mt-8 bg-orange-50 p-8 rounded-xl shadow">

          <p className="text-lg text-gray-600">
            "Amazing pizza and super fast delivery!"
          </p>

          <p className="font-bold mt-4">
            ⭐⭐⭐⭐⭐ — Happy Customer
          </p>

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

export default Home;