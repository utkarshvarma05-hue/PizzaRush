import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import pizza from "../assets/pizza.png";

function PopularPizzas() {
  const { addToCart } = useContext(CartContext);

  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://pizzarush-974c.onrender.com/api/pizzas")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch pizzas");
        }

        return response.json();
      })
      .then((data) => {
  console.log("PIZZAS FROM BACKEND:", data);
  setPizzas(data);
  setLoading(false);
})
      .catch((error) => {
        console.error(error);
        setError("Unable to load pizzas");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold">
            Loading Pizzas... 🍕
          </h2>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16">
        <div className="container mx-auto text-center">
          <p className="text-red-600 font-semibold">
            {error}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16">
      <div className="container mx-auto">

        <h2 className="text-4xl font-bold text-center">
          Popular Pizzas
        </h2>

        <p className="text-center text-gray-500 mt-3">
          Choose your favorite pizza
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">

          {pizzas.map((pizzaItem) => (
            <div
              key={pizzaItem.id}
              className="bg-white rounded-2xl shadow-lg p-6 text-center hover:scale-105 transition"
            >

              <img
                src={pizza}
                alt={pizzaItem.name}
                className="w-56 mx-auto"
              />

              <h3 className="text-2xl font-bold mt-4">
                {pizzaItem.name}
              </h3>

              <p className="text-red-600 font-bold text-xl mt-2">
                ₹{pizzaItem.price}
              </p>

              <button
                onClick={() => addToCart(pizzaItem)}
                className="mt-5 bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700"
              >
                Add to Cart
              </button>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default PopularPizzas;