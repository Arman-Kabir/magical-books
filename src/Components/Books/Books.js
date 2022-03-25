import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';
import Cart from '../Cart/Cart';
import './Books.css'

const Books = () => {
    const [books, setBooks] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('magical-books.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])

    let newCart;
    let obj;
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

    // Filtering so the cart gets maximum 4 books
    const filteredCart = cart.filter((cart,index) => {
        return index < 4;
    })

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
                <h2>Cart{cart.length}</h2>

                {
                    filteredCart.map(cart => <Cart
                        key={cart.id}
                        cart={cart}
                    ></Cart>)
                }


            </div>


        </div>

    );
};

export default Books;