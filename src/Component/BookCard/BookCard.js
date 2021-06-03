import React from 'react';
import './BookCard.css'


const BookCard = (props) => {
    // const [allBook, setAllBook] = useState([]);
  
    const { name, images, writer, price } = props.book;


    return (
            <div className="allCard">
                <div className="back">
                    <div className="cardImg">
                        <img className="img" src={images} alt="" />
                    </div>
                    <div className="cardDetails">
                        <h4>{name}</h4>
                        <p>{writer}</p>

                    </div>
                    <div className="btnstyle">
                        <h3 className="text-primary">$ {price}</h3>
                        <button className="btn btn-primary" /* onClick={() => props.handleProduct(props.book)} */>Buy Now</button>
                    </div>
                </div>

            </div>

    );
};
export default BookCard;