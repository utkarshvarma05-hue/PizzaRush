import { Link } from "react-router-dom";

function OrderSuccess() {

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">

      <h1 className="text-5xl font-bold text-green-600">
        🎉 Order Placed Successfully!
      </h1>


      <p className="text-xl mt-5">
        Your pizza will be delivered soon 🍕
      </p>


      <Link
        to="/"
        className="mt-8 bg-red-600 text-white px-6 py-3 rounded-xl"
      >
        Continue Shopping
      </Link>


    </div>
  );
}

export default OrderSuccess;