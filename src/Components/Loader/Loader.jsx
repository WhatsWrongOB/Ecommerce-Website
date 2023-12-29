import React from 'react'
import { TailSpin } from "react-loader-spinner";
import './Loader.css'

const Loader = () => {
    return (
        <div className='loader'><TailSpin /></div>
    )
}

export default Loader