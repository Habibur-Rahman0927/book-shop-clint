import React from 'react';
import './ManageProduct.css'

const ManageProduct = (props) => {
    const { name, writer, price, _id } = props.product;
    const deleteProduct = (id) => {
        fetch(`http://localhost:5000/delete/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(result => console.log('delete'))
    }
    return (
        <div>
            <div className="tableStyle row">
                <div className="col-md-3"><p style={{ textAlign: 'center' }}>{name}</p></div>
                <div className="col-md-3"><p style={{ textAlign: 'center' }}>{writer}</p></div>
                <div className="col-md-3"><p style={{ textAlign: 'center' }}>$ {price}</p></div>
                <div className="col-md-3" style={{textAlign:'center', margin:"0px auto"}}>
        

                        <button  onClick={() => deleteProduct(`${_id}`)}>Delete</button>
                    
                </div>
            </div>

        </div>
    );
};

export default ManageProduct;

