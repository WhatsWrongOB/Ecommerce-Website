import React from 'react'
import { Carousel } from 'react-bootstrap'
import './Slider.css'
import Data from '../../Assests/Data/Data.json'

const Slider = () => {

    return (
        <Carousel fade>

            {
                Data.map((item) => (
                    <Carousel.Item key={item.id}>
                        <img
                            className="slider"
                            src={item.img}
                            alt="slides"
                        />
                    </Carousel.Item>
                ))
            }



        </Carousel>
    )
}

export default Slider