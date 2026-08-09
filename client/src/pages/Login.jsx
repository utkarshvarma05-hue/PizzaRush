import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
  e.preventDefault();

  // Save logged-in user
  localStorage.setItem(
    "user",
    JSON.stringify({
      name: name,
      email: email,
    })
  );

  alert(`Welcome ${name}! 🍕`);

  navigate("/");
};

  return (
    <div className="min-h-screen bg-orange-50 flex items-center justify-center px-6 py-12">

      <div className="w-full max-w-md">

        {/* Back to Home */}
        <Link
          to="/"
          className="inline-block text-red-600 font-semibold mb-5 hover:text-red-700"
        >
          ← Back to Home
        </Link>

        {/* Login Card */}
        <form
          onSubmit={handleLogin}
          className="bg-white shadow-xl rounded-2xl p-8"
        >

          {/* Logo */}
          <div className="text-center mb-7">

            <div className="text-6xl mb-3">
              🍕
            </div>

            <h1 className="text-3xl font-bold text-gray-800">
              Welcome Back!
            </h1>

            <p className="text-gray-500 mt-2">
              Login to your PizzaRush account
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

          <div className="relative">

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
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


          {/* Login Button */}
          <button
            type="submit"
            className="bg-red-600 text-white w-full mt-7 py-3 rounded-lg font-bold hover:bg-red-700 transition"
          >
            Login 🍕
          </button>


          {/* Register */}
          <p className="text-center mt-6 text-gray-600">

            Don't have an account?

            <Link
              to="/register"
              className="text-red-600 font-bold ml-2 hover:text-red-700"
            >
              Create Account
            </Link>

          </p>

        </form>

      </div>

    </div>
  );
}

export default Login;