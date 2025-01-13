import React, { useState } from 'react';

//import di cartitem
import CartItem from '../components/CartItem';

interface CartItemType {
  name: string;
  price: number;
}

const CartPage: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);

  const addToCart = (item: CartItemType) => {
    setCartItems([...cartItems, item]);
  };

  return (
    <div>
      {cartItems.map((item, index) => (
        <CartItem key={index} name={item.name} price={item.price} />
      ))}
      <button onClick={() => addToCart({ name: 'Musang', price: 500000 })}>Add Musang to Cart</button>
    </div>
  );
};

export default CartPage;
