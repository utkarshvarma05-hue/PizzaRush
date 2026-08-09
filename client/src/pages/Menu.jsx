import { useState } from "react";
import Navbar from "../components/Navbar";

function Menu() {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const addToCart = (pizza) => {
    const existingPizza = cart.find((item) => item.id === pizza.id);

    let updatedCart;

    if (existingPizza) {
      updatedCart = cart.map((item) =>
        item.id === pizza.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      updatedCart = [...cart, { ...pizza, quantity: 1 }];
    }

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    window.dispatchEvent(new Event("cartUpdated"));

    alert(`${pizza.name} added to cart 🍕`);
  };

  const pizzas = [
    {
      id: 1,
      name: "Margherita Pizza",
      price: 199,
      category: "Veg",
      rating: 4.8,
      description: "Classic cheese pizza with fresh tomato sauce.",
      image:
        "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      name: "Farmhouse Pizza",
      price: 249,
      category: "Veg",
      rating: 4.7,
      description: "Loaded with fresh vegetables and cheese.",
      image:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      name: "Cheese Burst Pizza",
      price: 299,
      category: "Cheese",
      rating: 4.9,
      description: "Extra cheesy pizza for cheese lovers.",
      image:
        "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const filteredPizzas = pizzas.filter((pizza) => {
    const matchesSearch = pizza.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      pizza.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const categories = ["All", "Veg", "Cheese"];

  return (
    <div>

      {/* Navbar */}
      <div className="bg-red-600 text-white">
        <Navbar />
      </div>

      {/* Heading */}
      <section className="text-center py-12">

        <h1 className="text-4xl font-bold text-red-600">
          Our Pizza Menu 🍕
        </h1>

        <p className="text-gray-600 mt-3">
          Choose your favourite pizza and enjoy!
        </p>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto mt-8 px-6">

          <div className="relative">

            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl">
              🔍
            </span>

            <input
              type="text"
              placeholder="Search your favourite pizza..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full border border-gray-300 rounded-full py-4 pl-12 pr-5 outline-none focus:border-red-600 focus:ring-2 focus:ring-red-200"
            />

          </div>

        </div>

        {/* Categories */}
        <div className="flex justify-center flex-wrap gap-3 mt-7 px-6">

          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                selectedCategory === category
                  ? "bg-red-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-red-100"
              }`}
            >
              {category === "All" && "🍕 "}
              {category === "Veg" && "🥬 "}
              {category === "Cheese" && "🧀 "}
              {category}
            </button>
          ))}

        </div>

      </section>

      {/* Pizza Cards */}
      <section className="max-w-6xl mx-auto px-8 pb-16">

        {filteredPizzas.length > 0 ? (

          <div className="grid md:grid-cols-3 gap-8">

            {filteredPizzas.map((pizza) => (
              <div
                key={pizza.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition duration-300"
              >

                {/* Pizza Image */}
                <div className="relative">

                  <img
                    src={pizza.image}
                    alt={pizza.name}
                    className="w-full h-56 object-cover"
                  />

                  {/* Category */}
                  <span className="absolute top-4 left-4 bg-white text-green-600 px-3 py-1 rounded-full text-sm font-bold shadow">
                    🟢 {pizza.category}
                  </span>

                  {/* Rating */}
                  <span className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-bold shadow">
                    ⭐ {pizza.rating}
                  </span>

                </div>

                {/* Card Content */}
                <div className="p-6">

                  <h2 className="text-2xl font-bold text-gray-800">
                    {pizza.name}
                  </h2>

                  <p className="text-gray-500 mt-2 min-h-[48px]">
                    {pizza.description}
                  </p>

                  {/* Price + Button */}
                  <div className="flex justify-between items-center mt-6">

                    <div>
                      <p className="text-sm text-gray-400">
                        Starting from
                      </p>

                      <span className="text-red-600 text-2xl font-bold">
                        ₹{pizza.price}
                      </span>
                    </div>

                    <button
                      className="bg-red-600 text-white px-5 py-3 rounded-xl font-bold hover:bg-red-700 hover:scale-105 transition"
                      onClick={() => addToCart(pizza)}
                    >
                      🛒 Add
                    </button>

                  </div>

                </div>

              </div>
            ))}

          </div>

        ) : (

          /* No Results */
          <div className="text-center py-16">

            <div className="text-6xl mb-4">
              🍕
            </div>

            <h2 className="text-2xl font-bold text-gray-700">
              No Pizza Found
            </h2>

            <p className="text-gray-500 mt-2">
              Try another search or category.
            </p>

          </div>

        )}

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

export default Menu;