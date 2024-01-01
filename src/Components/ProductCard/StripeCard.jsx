import React from 'react'
import './ProductCard.css'

const StripeCard = ({ image, name }) => {
    return (
        <div className="container">
            <div className="stripe_card_container">
                <img src={image} alt="Categories" className='stripe_img' />
                <p className="stripe_para">{name}</p>
            </div>
            <div className='line'></div>
        </div>
    )
}

export default StripeCard