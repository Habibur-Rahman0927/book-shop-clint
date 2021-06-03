import React, { useEffect, useState } from 'react';
import AdminHeader from '../AdminHeader/AdminHeader';
import ManageProduct from '../ManageProduct/ManageProduct';
import './ManageBook.css'

const ManageBook = () => {

    const [managePd, setManagePd] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setManagePd(data))
    }, [])
    return (
        <div className="row " style={{ backgroundColor: "#F7F4FC" }}>
            <div className="col-md-3">
                <AdminHeader></AdminHeader>
            </div>
            <div className="col-md-9">
                <h1>Manage Book</h1>
                <div className="Table row">

                    <div className="col-md-3"><h4 style={{ textAlign: 'center' }}>Book Name</h4></div>
                    <div className="col-md-3"><h4 style={{ textAlign: 'center' }}>Author</h4></div>
                    <div className="col-md-3"><h4 style={{ textAlign: 'center' }}>price</h4></div>
                    <div className="col-md-3"><h4 style={{ textAlign: 'center' }}>Action</h4></div>
                </div>
                <div className='overflowTest'>
                    {
                        managePd.map(product => <ManageProduct product={product}></ManageProduct>)
                    }
                </div>



            </div>

        </div>


    );
};

export default ManageBook;
