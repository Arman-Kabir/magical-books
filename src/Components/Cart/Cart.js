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

                <div className="cart-info">
                    <h3>{name}</h3>

                    <button>
                        <FontAwesomeIcon icon={faDeleteLeft}></FontAwesomeIcon>
                    </button>
                </div>

            </div>


        </div>
    );
};

export default Cart;