import { createContext, useState } from "react";

export const CartContext = createContext();


function CartProvider({ children }) {

  const [cart, setCart] = useState([]);


  // Add to Cart
  const addToCart = (pizza) => {

    console.log("Added to Cart:", pizza);


    setCart((prevCart) => {

      const existingPizza = prevCart.find(
        item => item.id === pizza.id
      );


      if(existingPizza){

        return prevCart.map(item =>
          item.id === pizza.id
          ? {
              ...item,
              quantity: item.quantity + 1
            }
          : item
        );

      }


      return [
        ...prevCart,
        {
          ...pizza,
          quantity: 1
        }
      ];

    });

  };


  // Remove from Cart
const removeFromCart = (id) => {

  setCart((prevCart) =>
    prevCart.filter(
      item => item.id !== id
    )
  );

};
// Increase Quantity
const increaseQuantity = (id) => {

  setCart((prevCart) =>
    prevCart.map(item =>
      item.id === id
      ? {
          ...item,
          quantity: item.quantity + 1
        }
      : item
    )
  );

};
// Decrease Quantity
const decreaseQuantity = (id) => {

  setCart((prevCart) =>
    prevCart.map(item =>
      item.id === id && item.quantity > 1
      ? {
          ...item,
          quantity: item.quantity - 1
        }
      : item
    )
  );

};
// Clear Cart
const clearCart = () => {
  setCart([]);
};


  return (
    <CartContext.Provider
     value={{
 cart,
 addToCart,
 removeFromCart,
 increaseQuantity,
 decreaseQuantity,
 clearCart
}}
    >
      {children}
    </CartContext.Provider>
  );
}


export default CartProvider;