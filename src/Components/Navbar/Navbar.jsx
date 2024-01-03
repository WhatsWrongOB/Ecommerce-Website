import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart, FaSignInAlt, FaUser, FaSearch } from 'react-icons/fa'
import './Navbar.css'

const Navbar = () => {

    const [logIn, setLogIn] = useState(false)

    const handleLogIn = () => {
        setLogIn(true)
        alert('Login Successfully')

    }

    const handleLogOut = () => {
        setLogIn(false)
    }

    return (
        <nav className="nav">
            <div className="my_logo">ObStore</div>
            <ul className="nav_menu">
                <li><Link to='/' className='link'>Home</Link></li>
                <li><Link to='/contact' className='link'>Contact</Link></li>
                <li><Link to='/search' className='link search_icon'>
                    <FaSearch size={22} />
                </Link></li>
                <li><Link to='/cart' className='link cart_icon'><FaShoppingCart size={23} /></Link></li>
                {
                    logIn ? (
                        <li>
                            <FaSignInAlt />
                            <button className='logout btn' onClick={handleLogOut}>LogOut</button>
                        </li>
                    ) : (
                        <li>
                            <FaUser />
                            <button className='login btn' onClick={handleLogIn}>Login</button>
                        </li>
                    )
                }


            </ul>
        </nav>
    )
}

export default Navbar
