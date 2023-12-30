import React from 'react'
import './Home.css'
import Slider from '../../Components/Slider/Slider'
import Loader from '../../Components/Loader/Loader'
import { useProductContext } from '../../Context/Context'

const Home = () => {

    const { isLoading, featureProduct } = useProductContext();
    if (isLoading) {
        <Loader />
    }
    else {
        return (
            <section className="home">
                <Slider />
            </section>
        )

    }
}

export default Home