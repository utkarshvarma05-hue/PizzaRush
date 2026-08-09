import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";


function PizzaDetails(){

  const { id } = useParams();

  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);


 const pizzas = [

{
id:1,
name:"Margherita",
price:"₹249",
image:"https://images.unsplash.com/photo-1574071318508-1cdbab80d002",
description:"Classic pizza with fresh tomato sauce and mozzarella cheese.",
ingredients:[
"Tomato",
"Cheese",
"Basil"
]
},


{
id:2,
name:"Farmhouse",
price:"₹349",
image:"https://images.unsplash.com/photo-1513104890138-7c749659a591",
description:"Loaded with fresh vegetables and delicious cheese.",
ingredients:[
"Onion",
"Capsicum",
"Corn",
"Cheese"
]
},


{
id:3,
name:"Veggie Supreme",
price:"₹399",
image:"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
description:"A perfect mix of vegetables and tasty toppings.",
ingredients:[
"Olives",
"Capsicum",
"Onion"
]
},


{
id:4,
name:"Paneer Tikka Pizza",
price:"₹429",
image:"https://images.unsplash.com/photo-1594007654729-407eedc4be65",
description:"Spicy paneer tikka with cheese and Indian flavours.",
ingredients:[
"Paneer",
"Cheese",
"Onion",
"Capsicum"
]
},


{
id:5,
name:"Cheese Burst",
price:"₹499",
image:"https://images.unsplash.com/photo-1566843972142-a7fcb70de55a",
description:"Extra cheesy pizza for cheese lovers.",
ingredients:[
"Extra Cheese",
"Mozzarella",
"Herbs"
]
}

];
const pizza = pizzas.find(
  (item) => item.id === Number(id)
);


  return(

    <div className="min-h-screen bg-gray-100 p-10">


      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-8 flex flex-col md:flex-row gap-10">


        <img
          src={pizza.image}
          className="w-full md:w-1/2 rounded-xl"
        />


        <div>


          <h1 className="text-4xl font-bold">
            {pizza.name}
          </h1>


          <p className="text-yellow-500 text-xl mt-3">
            ⭐⭐⭐⭐⭐
          </p>


          <p className="text-red-600 text-3xl font-bold mt-4">
            {pizza.price}
          </p>
          <div className="flex items-center gap-4 mt-6">

<button
onClick={() =>
 quantity > 1 && setQuantity(quantity - 1)
}
className="bg-gray-200 px-4 py-2 rounded"
>
-
</button>


<span className="text-2xl font-bold">
{quantity}
</span>


<button
onClick={() =>
setQuantity(quantity + 1)
}
className="bg-gray-200 px-4 py-2 rounded"
>
+
</button>


</div>


          <p className="text-gray-600 mt-5">
            {pizza.description}
          </p>


          <h2 className="text-2xl font-bold mt-5">
            Ingredients
          </h2>


          <ul className="mt-3">

          {
            pizza.ingredients.map((item,index)=>(
              <li key={index}>
                🍕 {item}
              </li>
            ))
          }

          </ul>


          <button
          onClick={()=>{

addToCart({
...pizza,
quantity: quantity
});

}}
          className="mt-8 bg-red-600 text-white px-8 py-3 rounded-full"
          >
            Add To Cart
          </button>


        </div>


      </div>


    </div>

  )

}


export default PizzaDetails;