import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import BookCard from '../BookCard/BookCard';
import Review from '../Review/Review';



const Home = () => {/* 
    const [book, setBook] = useState([]) */
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
   /*  const handleProduct = (product) => {
        setBook(product);
    } */
    return (
        <div>
            <Header></Header>
            <div className="row">
                <div className="container btnInput">
                    <div className="allItem">

                    <FontAwesomeIcon icon={faSearch } className="searchIcon" />
                    <input className="inputStyle" type="text" placeholder="Search" />
                    <button className="btnStyle">Search</button>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                
                   {/* <Review book={book}></Review> */}
                
                <div className="cardDisplay">
                    {
                        products.map((book, key) => <BookCard key={key} book={book} /* handleProduct={handleProduct} */ ></BookCard>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Home;