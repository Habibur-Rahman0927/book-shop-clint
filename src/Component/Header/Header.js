import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="container-fluid">
            <div className="row mt-3">
                <div className="col-md-4 col-sm-12">
                    <h1>BOOK SHOP</h1>
                </div>
                <div className="col-md-8 col-sm-12">
                        <ul className="ul">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/order">Order</Link></li>
                            <li><Link to="/admin">Admin</Link></li>
                            <li><Link to="/deals">Deals</Link></li>
                            <li className="listyle"><Link to="/login">Log In</Link></li>
                        </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;