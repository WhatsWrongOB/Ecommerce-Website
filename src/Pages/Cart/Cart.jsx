import React from 'react';
import './Cart.css';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useProductContext } from '../../Context/Context';
import CartCard from '../../Components/ProductCard/CartCard';

const Cart = () => {
  const { cartItems } = useProductContext();

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <>
      <h3 className="cart_heading">Shopping Cart</h3>
      <hr />
      {cartItems.length === 0 ? (
        <h3 className='no_item'>No items in <AiOutlineShoppingCart /></h3>
      ) : (
        <>
          {
            cartItems.map((item, index) => (
              <CartCard key={item.id} id={item.id} name={item.name} price={item.price} stock={item.stock} image={item.image[0].url} product={item}
              />
            ))}

          <h5 className="subtotal">Subtotal :</h5>
          <h5 className="subtotal_price"> Rs {calculateTotal()}/-</h5>
        </>
      )}
    </>
  );
};

export default Cart;
