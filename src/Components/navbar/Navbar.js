import React from 'react'

import "./navbar.css"


const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className="home-nav">
                <a href="/">Home</a>
            </div>

            <ul className="nav-list">
                <li className="nav-item">
                    <a href="/projects">Projects</a>
                </li>
                <li className="nav-item">
                    <a href="/blogs">Posts</a>
                </li>
                <li className="nav-item">
                    <a href="/about">About</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
