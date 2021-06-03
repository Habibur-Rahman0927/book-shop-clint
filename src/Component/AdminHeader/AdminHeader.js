import React from 'react';
import { Link } from 'react-router-dom';
import './AdminHeader.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTasks, faPlus,faEdit } from '@fortawesome/free-solid-svg-icons'

const AdminHeader = () => {
    return (
        <div className="dashborad">
            <div className="HeadStyle"><Link className="headLine" to="/"><h1>BOOK SHOP</h1></Link></div>
            <ul className="ulstyle">
                <li><FontAwesomeIcon className="iconStyle" icon={faTasks} /><Link to="/manage">Manage Book</Link></li>
                <li><FontAwesomeIcon className="iconStyle" icon={faPlus} /><Link to="/addbook">Add Book</Link></li>
                <li><FontAwesomeIcon className="iconStyle" icon={faEdit} /><Link to="/edit">Edit Book</Link></li>
            </ul>
        </div>
    );
};

export default AdminHeader;