import { FaStar } from "react-icons/fa";

function CustomerReviews() {

  const reviews = [
    {
      id: 1,
      name: "Rahul Sharma",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      review:
        "PizzaRush ki pizza quality amazing hai. Delivery bhi bahut fast thi!",
      rating: 5,
    },
    {
      id: 2,
      name: "Priya Singh",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      review:
        "Cheese burst pizza ka taste awesome tha. Definitely recommend!",
      rating: 5,
    },
    {
      id: 3,
      name: "Aman Verma",
      image: "https://randomuser.me/api/portraits/men/55.jpg",
      review:
        "Easy ordering process aur best offers milte hain.",
      rating: 4,
    },
  ];


  return (
    <section className="py-16 bg-gray-50">

      <div className="text-center mb-10">

        <h2 className="text-4xl font-bold text-gray-800">
          Customer Reviews
        </h2>

        <p className="text-gray-600 mt-3">
          What our happy customers say about PizzaRush
        </p>

      </div>


      <div className="grid md:grid-cols-3 gap-8 px-6">


        {reviews.map((item)=>(
          
          <div
          key={item.id}
          className="bg-white rounded-xl shadow-lg p-6 hover:scale-105 transition"
          >


            <div className="flex items-center gap-4 mb-4">

              <img
              src={item.image}
              alt={item.name}
              className="w-14 h-14 rounded-full"
              />

              <div>

                <h3 className="font-bold text-lg">
                  {item.name}
                </h3>


                <div className="flex text-yellow-500">

                  {
                    [...Array(item.rating)].map((_,index)=>(
                      <FaStar key={index}/>
                    ))
                  }

                </div>

              </div>

            </div>


            <p className="text-gray-600">
              "{item.review}"
            </p>


          </div>

        ))}


      </div>

    </section>
  );
}


export default CustomerReviews;