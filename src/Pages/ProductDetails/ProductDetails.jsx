import React, { useEffect, useState } from 'react'
import './ProductDetails.css'
import { useParams } from 'react-router-dom'
import { useProductContext } from '../../Context/Context';
import Loader from '../../Components/Loader/Loader';
import Star from '../../Components/Loader/Star';



const ProductDetails = () => {

  const Apiurl = 'https://api.pujakaitem.com/api/products'
  const { id } = useParams();
  const { isSingleLoading, getSingleProduct, singleProduct, handleCart } = useProductContext();
  const { name, company, price, description, reviews, stock, stars, image = [{ url: '' }] } = singleProduct;

  useEffect(() => {
    getSingleProduct(`${Apiurl}?id=${id}`)
  },[])

  const [count, setCount] = useState(1);
  const [view, setView] = useState(image[0]);

  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  useEffect(() => {
    if (image.length > 0) {
      setView(image[0]);
    }
  }, [image])



  if (isSingleLoading) {
    return <Loader />
  }
  else {
    return (
      <div className="details_container">
        <div className="details_left">
          <div className="details_view">
            {
              image.map((item) => (
                <img key={item.id} src={item.url} alt={item.id} onClick={() => setView(item)} />
              ))
            }
          </div>
          {
            view.url && <img className='details_img' src={view.url} alt={name} />
          }
        </div>
        <div className="details_right">
          <div className="inner_details_right">
            <h4 className="details_name">{name}</h4>
            <div className="details_stars">
              <span className='star'>
                <Star star={stars} />
              </span>
              ({reviews} customer Reviews)
            </div>
            <p className="details_price">Rs {price}/-</p>
            <p className="details_description">{description}</p>
            <p className="details_available">Available : {stock}</p>
            <p className="details_brand">Brand : {company}</p>
            <div className="details_count">
              <button className="decrement" onClick={decrement}>-</button>
              <input type="text" className='details_quantity_count' value={count} onChange={() => setCount(count)} />
              <button className="increment" onClick={increment}>+</button>
            </div>
            <button className="details_cart" onClick={() => handleCart(singleProduct)}>Add to Cart</button>
          </div>
        </div>
      </div>
    )
  }
}

export default ProductDetails