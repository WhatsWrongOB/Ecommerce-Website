import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart, FaSearch } from 'react-icons/fa'
import './Navbar.css'

const Navbar = () => {


    return (
        <nav className="navigation">
            <div className="my_logo">ObStore</div>
            <ul className="navigation_menu">
                <li><Link to='/' className='link'>Home</Link></li>
                <li><Link to='/contact' className='link'>Contact</Link></li>
                <li><Link to='/search' className='link search_icon'>
                    <FaSearch size={22} />
                </Link></li>
                <li><Link to='/cart' className='link cart_icon'><FaShoppingCart size={23} /></Link></li>
                {/*   <li>
                            <FaSignInAlt />
                            <button className='logout btn' onClick={handleLogOut}>LogOut</button>
                        </li> */}
                <li>
                    <Link to='/login'>
                        <button className='login btn'>SignIn</button>
                    </Link>
                </li>



            </ul>
        </nav>
    )
}

export default Navbar
