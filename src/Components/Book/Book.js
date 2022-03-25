import React from 'react';
import './Book.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';


const Book = ({ book, handleBtnClick }) => {
    const { name, price, image } = book;
    // const { handleBtnClick } = props;
    return (
        <div className='book-container'>
            <div className='book-image'>
                <img src={image} alt="" />
            </div>

            <div className='book-info'>
                <h3>{name}</h3>
                <p className='book-price'>${price}</p>
            </div>

            <button className='cart-btn' onClick={() => handleBtnClick(book)}>
                <p>Add to Cart</p>
                <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Book;