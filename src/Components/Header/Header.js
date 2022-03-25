import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <nav className='nav-container'>
            <h1>Magicxal Books</h1>
            <ul className='list-container'>
                <li><a href="/home">Home</a></li>
                <li><a href="/books">Books</a></li>
                <li><a href="/about">About</a></li>
            </ul>
        </nav>
    );
};

export default Header;