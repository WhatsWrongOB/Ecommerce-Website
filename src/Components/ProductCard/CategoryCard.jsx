import React from 'react'
import './ProductCard.css'

const CategoryCard = ({ name, image }) => {
    return (
        <div className='category_card'>
            <img src={image} alt="categories" className='categories_img' />
            <p className="categories_para">{name}</p>
        </div>
    )
}

export default CategoryCard