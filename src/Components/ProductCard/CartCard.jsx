import React, { useState } from 'react'
import '../../Pages/Cart/Cart.css'
import { useProductContext } from '../../Context/Context';

const CartCard = ({ product, name, price, stock, image }) => {

    const { removeFromCart, quantity } = useProductContext();

    const [count, setCount] = useState(quantity);

    const increment = () => {
        if (stock > count) {
            setCount(count + 1)
        }
        else {
            alert('Stock Unavailable')
        }
    };
    const decrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    }


    return (
        <div className="cart_container">
            <div className="cart_left">
                <img src={image} alt="item_img" className="item_img" />
            </div>
            <div className="cart_right">
                <h4 className="item_name">{name}</h4>
                <p className="item_price">Rs {price} /-</p>
                <p className="avalaibility">Avalaibility : In stock {stock}</p>
                <div className="details_count">
                    <button className="item_decrement" onClick={decrement}>-</button>
                    <input type="text" className='item_quantity_count' value={count} onChange={() => setCount(count)} />
                    <button className="item_increment" onClick={increment}>+</button>
                </div>
                <button className="remove_btn" onClick={() => removeFromCart(product)}>Remove</button>
                <hr />
            </div>
        </div>
    )
}

export default CartCard