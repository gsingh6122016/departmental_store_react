import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

function Nav() {
    const navStyle = {
        color: 'white'
    };
    return (
        <nav>
            <h3>Departmental Store</h3>
            <ul  className = "nav-links">
                <Link style={navStyle} to='/'>
                    <li>Home</li>
                </Link>
                <Link style={navStyle} to='/shop'>
                    <li>Shop</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav
