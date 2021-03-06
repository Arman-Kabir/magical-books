import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';
import Cart from '../Cart/Cart';
import './Books.css'

const Books = () => {
    const [books, setBooks] = useState([]);
    const [cart, setCart] = useState([]);
    const [chooseOne, setChooseOne] = useState([]);

    // Fetching data from a fake DB
    useEffect(() => {
        fetch('magical-books.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])

    let newCart;
    const handleBtnClick = book => {
        console.log(cart);
        // Checking Duplicates and adding unique products
        if (cart.length > 0) {
            if (cart.find(cart => cart.id === book.id)) {
                console.log('dupli');
            }
            else {
                newCart = [...cart, book];
                setCart(newCart);
                console.log('new cart added');
            }
        } else {
            newCart = [...cart, book];
            setCart(newCart);
            console.log('first cart added');
        }
    }

    // Filtering, so the cart gets maximum 4 books
    let filteredCart = cart.filter((cart, index) => {
        return index < 4;
    })

    // make the Empty Cart to clear selected books
    const emptyCart = () => {
        console.log('filtered cart empty');
        setCart([]);
        setChooseOne([]);
    }
    // Choose one Book for me
    let newOne;
    const chooseOneForMe = () => {
        if (filteredCart.length > 0) {
            console.log('one chosen', filteredCart);

            newOne = [filteredCart[Math.floor(Math.random() * filteredCart.length)]];

            setChooseOne(newOne);

            console.log('chOne', chooseOne);
        }
    }

    return (
        <div className='container'>
            <div className='books-container'>                   {
                books.map(book => <Book
                    book={book}
                    handleBtnClick={handleBtnClick}
                    key={book.id}
                ></Book>)
            }
            </div>
            <div className="carts-container">
                <h2 className='cart-title-center'>Selected Books:{filteredCart.length}</h2>
                {
                    filteredCart.map(cart => <Cart
                        key={cart.id}
                        cart={cart}
                    ></Cart>)
                }
                <button className='option-btn btn-1' onClick={chooseOneForMe}>
                    <p>Choose 1 for Me</p>
                </button>
                {
                    chooseOne.map(cart => <Cart
                        key={cart.id}
                        cart={cart}
                    ></Cart>)
                }
                <button className='option-btn btn-2' onClick={emptyCart}>
                    <p>Choose Again</p>
                </button>
            </div>
        </div>
    );
};
export default Books;