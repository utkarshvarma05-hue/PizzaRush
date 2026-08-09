import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match! ❌");
      return;
    }

    const user = {
      name,
      email,
      password,
    };

    localStorage.setItem("pizzaRushUser", JSON.stringify(user));

    alert("Account Created Successfully! 🍕");

    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-orange-50 flex items-center justify-center px-6 py-10">

      <div className="w-full max-w-md">

        {/* Back to Home */}
        <Link
          to="/"
          className="inline-block text-red-600 font-semibold mb-5 hover:text-red-700"
        >
          ← Back to Home
        </Link>

        {/* Register Card */}
        <form
          onSubmit={handleRegister}
          className="bg-white shadow-xl rounded-2xl p-8"
        >

          {/* Logo */}
          <div className="text-center mb-7">

            <div className="text-6xl mb-3">
              🍕
            </div>

            <h1 className="text-3xl font-bold text-gray-800">
              Create Account
            </h1>

            <p className="text-gray-500 mt-2">
              Join PizzaRush today!
            </p>

          </div>

          {/* Name */}
          <label className="block font-semibold text-gray-700 mb-2">
            Full Name
          </label>

          <input
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="border border-gray-300 w-full p-3 rounded-lg mb-5 focus:outline-none focus:ring-2 focus:ring-red-500"
          />

          {/* Email */}
          <label className="block font-semibold text-gray-700 mb-2">
            Email Address
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border border-gray-300 w-full p-3 rounded-lg mb-5 focus:outline-none focus:ring-2 focus:ring-red-500"
          />

          {/* Password */}
          <label className="block font-semibold text-gray-700 mb-2">
            Password
          </label>

          <div className="relative mb-5">

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
              className="border border-gray-300 w-full p-3 pr-20 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-red-600 font-semibold text-sm"
            >
              {showPassword ? "Hide" : "Show"}
            </button>

          </div>

          {/* Confirm Password */}
          <label className="block font-semibold text-gray-700 mb-2">
            Confirm Password
          </label>

          <div className="relative">

            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              minLength={6}
              className="border border-gray-300 w-full p-3 pr-20 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />

            <button
              type="button"
              onClick={() =>
                setShowConfirmPassword(!showConfirmPassword)
              }
              className="absolute right-3 top-1/2 -translate-y-1/2 text-red-600 font-semibold text-sm"
            >
              {showConfirmPassword ? "Hide" : "Show"}
            </button>

          </div>

          {/* Create Account */}
          <button
            type="submit"
            className="bg-red-600 text-white w-full mt-7 py-3 rounded-lg font-bold hover:bg-red-700 transition"
          >
            Create Account 🍕
          </button>

          {/* Login */}
          <p className="text-center mt-6 text-gray-600">

            Already have an account?

            <Link
              to="/login"
              className="text-red-600 font-bold ml-2 hover:text-red-700"
            >
              Login
            </Link>

          </p>

        </form>

      </div>

    </div>
  );
}

export default Register;