import React, { useEffect, useState } from 'react'
import './ProductDetails.css'
import { useParams } from 'react-router-dom'
import { useProductContext } from '../../Context/Context';
import Loader from '../../Components/Loader/Loader';
import { FaStar } from 'react-icons/fa'


const ProductDetails = () => {

  const Apiurl = 'https://api.pujakaitem.com/api/products'
  const { id } = useParams();
  const { isSingleLoading, getSingleProduct, singleProduct } = useProductContext();
  const { id: alias, name, company, price, description, reviews, stock, stars, image } = singleProduct;

  useEffect(() => {
    getSingleProduct(`${Apiurl}?id=${id}`)
  }, [])

  const [count, setCount] = useState(0)

  const increment = () => setCount(count + 1);
  const decrement = () => {

    if (count > 0) {
      setCount(count - 1);
    }
  }


  if (isSingleLoading) {
    <Loader />
  }
  else {
    return (
      <div className="details_container">
        <div className="details_left">
          <div className="details_view">
            <img src="https://images.pexels.com/photos/1275229/pexels-photo-1275229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt={name} />
            <img src="https://images.pexels.com/photos/1275229/pexels-photo-1275229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt={name} />
            <img src="https://images.pexels.com/photos/1275229/pexels-photo-1275229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt={name} />
            <img src="https://images.pexels.com/photos/1275229/pexels-photo-1275229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt={name} />
          </div>
          <img className='details_img' src="https://images.pexels.com/photos/1275229/pexels-photo-1275229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt={name} />
        </div>
        <div className="details_right">
          <div className="inner_details_right">
            <h4 className="details_name">{name}</h4>
            <div className="details_stars">
              <span className='star'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </span>
              ({reviews} customer Reviews)
            </div>
            <p className="details_price">Rs {price}/-</p>
            <p className="details_description">{description}</p>
            <p className="details_available">Available : {stock}</p>
            <p className="details_brand">Brand : {company}</p>
            <div className="details_count">
              <button className="decrement" onClick={decrement}>-</button>
              <input type="text" className='details_quantity_count' value={count} />
              <button className="increment" onClick={increment}>+</button>

            </div>
            <button className="details_cart">Add to Cart</button>
          </div>
        </div>
      </div>
    )
  }
}

export default ProductDetails