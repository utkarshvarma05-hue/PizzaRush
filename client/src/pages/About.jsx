import { Link } from "react-router-dom";
function About() {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* Hero Section */}
      <section className="bg-red-600 text-white py-20">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <div className="text-7xl mb-5">
            🍕
          </div>

          <h1 className="text-5xl font-bold mb-5">
            About PizzaRush
          </h1>

          <p className="text-xl max-w-3xl mx-auto">
            Delicious pizzas, fresh ingredients and fast delivery —
            that's what PizzaRush is all about!
          </p>

        </div>

      </section>
            {/* About Content */}

      <section className="py-16 px-6">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* Left Side */}

          <div>

            <h2 className="text-4xl font-bold mb-6">
              We Love Pizza ❤️
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-5">
              PizzaRush was created with one simple goal —
              to bring delicious, fresh and affordable pizzas
              straight to your doorstep.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed">
              From classic favourites to exciting new flavours,
              every pizza is prepared with quality ingredients
              and lots of love.
            </p>

          </div>


          {/* Right Side */}

          <div className="bg-white rounded-2xl shadow-xl p-10 text-center">

            <div className="text-8xl mb-6">
              🍕
            </div>

            <h3 className="text-3xl font-bold text-red-600 mb-3">
              Fresh. Fast. Delicious.
            </h3>

            <p className="text-gray-500">
              Your happiness is our favourite topping!
            </p>

          </div>

        </div>

      </section>
            {/* Our Mission */}

      <section className="bg-white py-16 px-6">

        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-4xl font-bold mb-6">
            Our Mission 🎯
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            Our mission is to make great pizza accessible to everyone.
            We focus on quality ingredients, delicious flavours,
            quick service and a smooth online ordering experience.
          </p>

        </div>

      </section>
            {/* Why Choose Us */}

      <section className="py-16 px-6">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl font-bold text-center mb-12">
            Why Choose PizzaRush? ⭐
          </h2>


          <div className="grid md:grid-cols-3 gap-8">


            {/* Card 1 */}

            <div className="bg-white p-8 rounded-2xl shadow text-center">

              <div className="text-5xl mb-4">
                🥬
              </div>

              <h3 className="text-2xl font-bold mb-3">
                Fresh Ingredients
              </h3>

              <p className="text-gray-500">
                We use quality ingredients to create delicious
                pizzas you'll love.
              </p>

            </div>


            {/* Card 2 */}

            <div className="bg-white p-8 rounded-2xl shadow text-center">

              <div className="text-5xl mb-4">
                ⚡
              </div>

              <h3 className="text-2xl font-bold mb-3">
                Fast Delivery
              </h3>

              <p className="text-gray-500">
                We make sure your favourite pizza reaches you
                hot and fresh.
              </p>

            </div>


            {/* Card 3 */}

            <div className="bg-white p-8 rounded-2xl shadow text-center">

              <div className="text-5xl mb-4">
                ❤️
              </div>

              <h3 className="text-2xl font-bold mb-3">
                Made With Love
              </h3>

              <p className="text-gray-500">
                Every pizza is prepared with passion and care.
              </p>

            </div>


          </div>

        </div>

      </section>
            {/* Stats Section */}

      <section className="bg-red-600 text-white py-14 px-6">

        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">


          {/* Stat 1 */}

          <div>

            <div className="text-4xl mb-2">
              🍕
            </div>

            <h3 className="text-4xl font-bold">
              50+
            </h3>

            <p className="mt-2">
              Pizza Varieties
            </p>

          </div>


          {/* Stat 2 */}

          <div>

            <div className="text-4xl mb-2">
              ❤️
            </div>

            <h3 className="text-4xl font-bold">
              10K+
            </h3>

            <p className="mt-2">
              Happy Customers
            </p>

          </div>


          {/* Stat 3 */}

          <div>

            <div className="text-4xl mb-2">
              ⚡
            </div>

            <h3 className="text-4xl font-bold">
              30 Min
            </h3>

            <p className="mt-2">
              Fast Delivery
            </p>

          </div>


          {/* Stat 4 */}

          <div>

            <div className="text-4xl mb-2">
              ⭐
            </div>

            <h3 className="text-4xl font-bold">
              4.8
            </h3>

            <p className="mt-2">
              Customer Rating
            </p>

          </div>


        </div>

      </section>
            {/* Final CTA */}

      <section className="py-16 px-6 text-center">

        <h2 className="text-4xl font-bold mb-5">
          Ready for a Delicious Pizza? 🍕
        </h2>

        <p className="text-gray-600 text-lg mb-8">
          Explore our menu and order your favourite pizza today!
        </p>

        <Link
          to="/menu"
          className="inline-block bg-red-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-red-700 transition"
        >
          Explore Menu 🍕
        </Link>

      </section>

    </div>
  );
}

export default About;