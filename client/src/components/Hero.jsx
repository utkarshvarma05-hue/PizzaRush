import pizza from "../assets/pizza.png";
function Hero() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* Left Section */}
        <div className="w-1/2">

          <p className="text-red-600 font-bold text-lg">
            🍕 Welcome to PizzaRush
          </p>

          <h1 className="text-6xl font-extrabold mt-4 leading-tight">
            Delicious Pizza
            <br />
            Delivered in
            <span className="text-red-600"> 30 Minutes</span>
          </h1>

          <p className="text-gray-600 mt-6 text-lg">
            Fresh ingredients, cheesy goodness, and lightning-fast delivery right to your doorstep.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-red-600 text-white px-8 py-3 rounded-full hover:bg-red-700">
              Order Now
            </button>

            <button className="border-2 border-red-600 text-red-600 px-8 py-3 rounded-full hover:bg-red-600 hover:text-white">
              View Menu
            </button>
          </div>

        </div>

        {/* Right Section */}
       <div className="w-1/2 flex justify-center items-center">

  <img
    src={pizza}
    alt="Pizza"
    className="w-[600px] object-contain hover:scale-105 transition-all duration-500"
  />

</div>

      </div>
    </section>
  );
}

export default Hero;