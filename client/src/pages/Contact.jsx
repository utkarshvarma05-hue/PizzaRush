import { useState } from "react";
function Contact() {
    const [messageSent, setMessageSent] = useState(false);
  return (
    <div className="min-h-screen bg-gray-100">

      {/* Hero Section */}

      <section className="bg-red-600 text-white py-20">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <div className="text-7xl mb-5">
            📞
          </div>

          <h1 className="text-5xl font-bold mb-5">
            Contact PizzaRush
          </h1>

          <p className="text-xl max-w-3xl mx-auto">
            Have a question or need help with your order?
            We're here to help!
          </p>

        </div>

      </section>
            {/* Contact Information */}

      <section className="py-16 px-6">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl font-bold text-center mb-12">
            Get In Touch 📬
          </h2>


          <div className="grid md:grid-cols-3 gap-8">


            {/* Location */}

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">

              <div className="text-5xl mb-5">
                📍
              </div>

              <h3 className="text-2xl font-bold mb-3">
                Our Location
              </h3>

              <p className="text-gray-500">
                Meerut, Uttar Pradesh
              </p>

            </div>


            {/* Phone */}

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">

              <div className="text-5xl mb-5">
                📞
              </div>

              <h3 className="text-2xl font-bold mb-3">
                Call Us
              </h3>

              <p className="text-gray-500">
                +91 98765 43210
              </p>

            </div>


            {/* Email */}

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">

              <div className="text-5xl mb-5">
                📧
              </div>

              <h3 className="text-2xl font-bold mb-3">
                Email Us
              </h3>

              <p className="text-gray-500">
                support@pizzarush.com
              </p>

            </div>


          </div>

        </div>

      </section>
            {/* Contact Form */}

      <section className="bg-white py-16 px-6">

        <div className="max-w-3xl mx-auto">

          <h2 className="text-4xl font-bold text-center mb-4">
            Send Us a Message 💬
          </h2>

          <p className="text-gray-500 text-center mb-10">
            Have a question? Fill out the form and we'll get back to you.
          </p>


          <form
  className="bg-gray-100 p-8 rounded-2xl shadow-lg"
  onSubmit={(e) => {
    e.preventDefault();
    setMessageSent(true);
    e.target.reset();
  }}
>


            {/* Name */}

            <div className="mb-5">

              <label className="block font-semibold mb-2">
                Your Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-red-600"
              />

            </div>


            {/* Email */}

            <div className="mb-5">

              <label className="block font-semibold mb-2">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-red-600"
              />

            </div>


            {/* Message */}

            <div className="mb-6">

              <label className="block font-semibold mb-2">
                Message
              </label>

              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-red-600"
              ></textarea>

            </div>


            {/* Button */}

            <button
              type="submit"
              className="w-full bg-red-600 text-white py-3 rounded-lg font-bold text-lg hover:bg-red-700 transition"
            >
              Send Message 🚀
            </button>
                        {messageSent && (

              <div className="mt-5 bg-green-100 text-green-700 p-4 rounded-lg text-center font-semibold">

                Message sent successfully! 🎉

              </div>

            )}


          </form>

        </div>

      </section>
            {/* Final Contact CTA */}

      <section className="bg-red-600 text-white py-16 px-6 text-center">

        <div className="max-w-4xl mx-auto">

          <div className="text-6xl mb-5">
            🍕
          </div>

          <h2 className="text-4xl font-bold mb-5">
            We're Here to Help!
          </h2>

          <p className="text-lg text-red-100 mb-8">
            Whether you have a question about your order,
            our menu, or anything else, feel free to contact us.
          </p>

          <p className="text-xl font-semibold">
            Thank you for choosing PizzaRush ❤️
          </p>

        </div>

      </section>

    </div>
  );
}

export default Contact;