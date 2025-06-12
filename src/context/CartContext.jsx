import { createContext, useState, useContext } from 'react';
import axios from 'axios';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartId, setCartId] = useState(null);

  const addToCart = async (productId) => {
    const newItem = {
      userId: 1,
      date: new Date().toISOString(),
      products: [{ productId, quantity: 1 }],
    };

    const response = await axios.post('https://fakestoreapi.com/carts', newItem);
    setCartItems(prev => [...prev, { productId, quantity: 1 }]);
    setCartId(response.data.id);
  };

  const removeFromCart = (productId) => {
    setCartItems(prev => prev.filter(item => item.productId !== productId));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, cartId }}>
      {children}
    </CartContext.Provider>
  );
};
