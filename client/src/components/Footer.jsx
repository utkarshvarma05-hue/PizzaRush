import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaFacebook,
  FaTwitter
} from "react-icons/fa";

function Footer() {
  return (

    <footer className="bg-gray-900 text-white mt-16">

      <div className="container mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">


        {/* Logo & Description */}

        <div>

          <Link to="/">
            <h2 className="text-3xl font-bold">
              🍕 PizzaRush
            </h2>
          </Link>

          <p className="text-gray-400 mt-3 leading-relaxed">
            Delicious pizzas delivered hot and fresh
            at your doorstep.
          </p>

        </div>


        {/* Quick Links */}

        <div>

          <h3 className="text-xl font-bold mb-4">
            Quick Links
          </h3>

          <ul className="space-y-3 text-gray-300">

            <li>
              <Link
                to="/"
                className="hover:text-white transition"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/menu"
                className="hover:text-white transition"
              >
                Menu
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className="hover:text-white transition"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="hover:text-white transition"
              >
                Contact
              </Link>
            </li>

            <li>
              <Link
                to="/orders"
                className="hover:text-white transition"
              >
                My Orders
              </Link>
            </li>

            <li>
              <Link
                to="/cart"
                className="hover:text-white transition"
              >
                Cart 🛒
              </Link>
            </li>

          </ul>

        </div>


        {/* Contact */}

        <div>

          <h3 className="text-xl font-bold mb-4">
            Contact
          </h3>

          <div className="space-y-3 text-gray-300">

            <p>
              📍 Meerut, India
            </p>

            <p>
              📞 +91 9876543210
            </p>

            <p>
              ✉️ support@pizzarush.com
            </p>

          </div>

        </div>


        {/* Social Media */}

        <div>

          <h3 className="text-xl font-bold mb-4">
            Follow Us
          </h3>

          <div className="flex gap-5 text-2xl">

            <a
              href="#"
              className="hover:text-pink-500 transition"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="hover:text-blue-500 transition"
            >
              <FaFacebook />
            </a>

            <a
              href="#"
              className="hover:text-blue-400 transition"
            >
              <FaTwitter />
            </a>

          </div>

          <p className="text-gray-400 mt-5">
            Follow PizzaRush for offers,
            new pizzas and updates! 🍕
          </p>

        </div>


      </div>


      {/* Copyright */}

      <div className="border-t border-gray-700">

        <p className="text-center text-gray-400 py-5">
          © 2026 PizzaRush. All Rights Reserved.
        </p>

      </div>


    </footer>

  );
}

export default Footer;