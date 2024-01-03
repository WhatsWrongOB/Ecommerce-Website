import React from 'react'
import './ProductCard.css'
import { Link } from 'react-router-dom'

const ProductCard = ({ id, name, image, price }) => {
    return (
        <Link to={`productDetails/${id}`} className='card_link card_container'>
                <img src={image} alt="feature_product" />
                <p className="prpduct_para">{name}</p>
                <p className="product_price">Rs {price} /-</p>
        </Link>
    )
}

export default ProductCard