function Features() {
  return (
    <section className="py-20 bg-white">

      <h2 className="text-4xl font-bold text-center">
        Why Choose PizzaRush?
      </h2>

      <p className="text-center text-gray-500 mt-3">
        Fresh Pizza • Fast Delivery • Best Experience
      </p>

      <div className="max-w-7xl mx-auto mt-16 grid grid-cols-3 gap-8 px-6">

        {/* Card 1 */}
        <div className="bg-gray-100 rounded-2xl p-8 text-center shadow hover:shadow-xl transition">

          <div className="text-6xl">
            🚚
          </div>

          <h3 className="text-2xl font-bold mt-5">
            Fast Delivery
          </h3>

          <p className="text-gray-500 mt-3">
            Get your favorite pizza delivered within 30 minutes.
          </p>

        </div>

        {/* Card 2 */}
        <div className="bg-gray-100 rounded-2xl p-8 text-center shadow hover:shadow-xl transition">

          <div className="text-6xl">
            🔥
          </div>

          <h3 className="text-2xl font-bold mt-5">
            Fresh Ingredients
          </h3>

          <p className="text-gray-500 mt-3">
            We use premium cheese, vegetables and fresh dough.
          </p>

        </div>

        {/* Card 3 */}
        <div className="bg-gray-100 rounded-2xl p-8 text-center shadow hover:shadow-xl transition">

          <div className="text-6xl">
            ⭐
          </div>

          <h3 className="text-2xl font-bold mt-5">
            Best Taste
          </h3>

          <p className="text-gray-500 mt-3">
            Thousands of happy customers love PizzaRush every day.
          </p>

        </div>

      </div>

    </section>
  );
}

export default Features;