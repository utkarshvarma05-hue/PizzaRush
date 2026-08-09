import { useEffect, useState } from "react";

function MyOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const savedOrders = JSON.parse(
      localStorage.getItem("orders") || "[]"
    );

    setOrders(savedOrders);
  }, []);

  const removeOrder = (index) => {
    const updatedOrders = orders.filter((_, i) => i !== index);

    setOrders(updatedOrders);

    localStorage.setItem(
      "orders",
      JSON.stringify(updatedOrders)
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">

      <h1 className="text-4xl font-bold text-center mb-10">
        My Orders 📦
      </h1>

      {orders.length === 0 ? (
        <p className="text-center text-gray-600 text-xl">
          No orders found 🍕
        </p>
      ) : (
        <div className="max-w-4xl mx-auto space-y-5">

          {orders.map((order, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl p-6"
            >

              <div className="flex justify-between items-center mb-4">

                <h2 className="text-2xl font-bold">
                  Order #{index + 1}
                </h2>

                <button
                  onClick={() => removeOrder(index)}
                  className="bg-red-600 text-white px-4 py-2 rounded-lg"
                >
                  Remove 🗑️
                </button>

              </div>

              {order.items.map((pizza) => (
                <div
                  key={pizza.id}
                  className="flex justify-between border-b py-3"
                >
                  <p>
                    {pizza.name} × {pizza.quantity}
                  </p>

                  <p className="font-semibold">
                    {pizza.price}
                  </p>
                </div>
              ))}

              <p className="mt-4 font-bold text-xl">
                Total: ₹{order.total}
              </p>

              <p className="text-green-600 font-semibold mt-2">
                Status: {order.status}
              </p>

            </div>
          ))}

        </div>
      )}

    </div>
  );
}

export default MyOrders;