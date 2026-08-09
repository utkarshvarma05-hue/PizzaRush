function Offers() {

  const offers = [
    {
      title:"Flat 50% OFF",
      desc:"On your first pizza order"
    },

    {
      title:"Buy 1 Get 1 Free",
      desc:"Every Tuesday"
    },

    {
      title:"Free Delivery",
      desc:"Orders above ₹499"
    }
  ];


  return (

    <section className="py-16 bg-red-50">

      <h2 className="text-4xl font-bold text-center">
        🎉 Special Offers
      </h2>


      <div className="max-w-6xl mx-auto mt-10 grid md:grid-cols-3 gap-8 px-6">


      {
        offers.map((offer,index)=>(

          <div
          key={index}
          className="bg-white p-8 rounded-2xl shadow-lg text-center hover:scale-105 transition"
          >

            <h3 className="text-2xl font-bold text-red-600">
              {offer.title}
            </h3>


            <p className="text-gray-600 mt-3">
              {offer.desc}
            </p>


          </div>

        ))
      }


      </div>


    </section>

  );

}


export default Offers;