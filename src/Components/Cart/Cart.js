import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';

import './Cart.css'
const Cart = ({ cart }) => {
    const { name, image } = cart;
    return (
        <div className='cart-container'>

            <div className='cart-body'>
                <img src={image} alt="" />
                <h3>{name}</h3>
            </div>

            <button className='deleteBtn'>
                <FontAwesomeIcon icon={faDeleteLeft}></FontAwesomeIcon>
            </button>


        </div>
    );
};

export default Cart;