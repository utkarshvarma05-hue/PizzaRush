import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  useEffect(() => {
    const updateUser = () => {
      setUser(JSON.parse(localStorage.getItem("user")) || null);
    };

    window.addEventListener("userUpdated", updateUser);

    return () => {
      window.removeEventListener("userUpdated", updateUser);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");

    setUser(null);

    alert("Logged out successfully 👋");

    navigate("/");
  };

  return (
    <nav className="bg-red-600 text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LEFT - Logo */}
        <div className="w-1/4 flex justify-start">

          <Link
            to="/"
            className="text-2xl md:text-3xl font-bold"
          >
            🍕 PizzaRush
          </Link>

        </div>

        {/* CENTER - Navigation */}
        <div className="flex justify-center items-center gap-6 lg:gap-8 font-semibold">

          <Link
            to="/"
            className="hover:text-yellow-300 transition"
          >
            Home
          </Link>

          <Link
            to="/menu"
            className="hover:text-yellow-300 transition"
          >
            Menu
          </Link>

          <Link
            to="/cart"
            className="hover:text-yellow-300 transition"
          >
            🛒 Cart
          </Link>

          <Link
            to="/about"
            className="hover:text-yellow-300 transition"
          >
            About
          </Link>

          <Link
            to="/contact"
            className="hover:text-yellow-300 transition"
          >
            Contact
          </Link>

        </div>

        {/* RIGHT - User/Login */}
        <div className="w-1/4 flex justify-end items-center gap-3">

          {user ? (
            <>
              <span className="font-bold">
                👋 {user.name}
              </span>

              <button
                onClick={handleLogout}
                className="bg-white text-red-600 px-4 py-2 rounded-lg font-bold hover:bg-gray-100 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="bg-white text-red-600 px-4 py-2 rounded-lg font-bold hover:bg-gray-100 transition"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="border-2 border-white px-4 py-2 rounded-lg font-bold hover:bg-white hover:text-red-600 transition"
              >
                Register
              </Link>
            </>
          )}

        </div>

      </div>
    </nav>
  );
}

export default Navbar;