import React from 'react';

interface CartItemProps {
  name: string;
  price: number;
}

const CartItem: React.FC<CartItemProps> = ({ name, price }) => {
  return (
    <div>
      <h4>{name}</h4>
      <p>${price}</p>
    </div>
  );
};

export default CartItem;
