import React from 'react'
import './Home.css'
import Slider from '../../Components/Slider/Slider'
import Loader from '../../Components/Loader/Loader'
import StripeCard from '../../Components/ProductCard/StripeCard'
import { FaDocker, Fa500Px, FaAccessibleIcon, FaAdversal, FaAddressCard, FaAmazonPay, FaAccusoft, FaAdjust, FaAirbnb, FaSpotify, FaSdCard, FaBitbucket } from 'react-icons/fa'
import { useProductContext } from '../../Context/Context'
import Stripe from '../../Assests/Data/Stripe.json'
import Category from '../../Assests/Data/Category.json'
import CategoryCard from '../../Components/ProductCard/CategoryCard'
import ProductCard from '../../Components/ProductCard/ProductCard'

const Home = () => {

    const { isLoading, featureProduct } = useProductContext();

    if (isLoading) {
        return <Loader />
    }
    else {
        return (
            <section className="home">
                <div className="home_container">
                    <div className="home_left">
                        <ul className="home_menu">
                            <li><FaDocker className='home_menu_icons' />Groceriers & Pets</li>
                            <li><FaAmazonPay className='home_menu_icons' />Health & Beauty</li>
                            <li><Fa500Px className='home_menu_icons' />Men's Fashion</li>
                            <li><FaAccessibleIcon className='home_menu_icons' />Women's Fashion</li>
                            <li><FaAdversal className='home_menu_icons' />Mother & Baby</li>
                            <li><FaAddressCard className='home_menu_icons' />Home & Lifestyle</li>
                            <li><FaAccusoft className='home_menu_icons' />Electronic Devices</li>
                            <li><FaAdjust className='home_menu_icons' />Electronic Accessories</li>
                            <li><FaAirbnb className='home_menu_icons' />Home Appliances</li>
                            <li><FaSpotify className='home_menu_icons' />Sports & Outdoor</li>
                            <li><FaSdCard className='home_menu_icons' />Watches & Bags</li>
                            <li><FaBitbucket className='home_menu_icons' />Motor Bikes</li>
                        </ul>
                    </div>
                    <div className="home_right">
                        <Slider />
                    </div>
                </div>
                <div className="home_bottom_container">
                    <div className="home_bottom">
                        <img src="https://icms-image.slatic.net/images/ims-web/acee8700-60c4-4e28-a1a8-66b6ad7de3cd.jpeg" alt="" />
                    </div>
                    <div className="stripe">
                        {
                            Stripe.map((item) => (
                                <StripeCard key={item.id} image={item.url} name={item.category} />
                            ))
                        }

                    </div>
                </div>
                <div className="categories_container">
                    <h1 className="categories_heading">Categories</h1>
                    <div className="categories">
                        {
                            Category.map((elem, index) => (
                                <CategoryCard key={index} name={elem.category} image={elem.url} />
                            ))
                        }


                    </div>
                </div>
                <div className="feature_product_container">
                    <div className="extra">
                        <h1 className="feature_heading">Features</h1>
                    </div>
                    <div className="feature_product">
                        {
                            featureProduct.map((item) => (
                                <ProductCard key={item.id} id={item.id} name={item.name} image={item.image} price={item.price} />
                            ))
                        }

                    </div>
                </div>
            </section>
        )

    }
}

export default Home