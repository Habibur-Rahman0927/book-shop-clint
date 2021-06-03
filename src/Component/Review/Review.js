import React, { useContext } from 'react';

const Review = (props) => {
    const cart =props.book.price;
    console.log(cart)
    return (
        
        <div className="container">
            {
                console.log(props.book)
            }
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Book Name</th>
                        <th scope="col">price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{props.book.name}</td>
                        <td>{props.book.price}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Review;