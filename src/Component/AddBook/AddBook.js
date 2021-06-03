import React, { useState } from 'react';
import AdminHeader from '../AdminHeader/AdminHeader';
import { useForm } from "react-hook-form";
import axios from 'axios';
import './AddBook.css'
const AddBook = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [imageUrl, setImageUrl] = useState(null);
    const onSubmit = data => {
        console.log(data)
        const eventData = {
            name: data.name,
            writer: data.writer,
            images: imageUrl,
            price: data.number
        };
        console.log(eventData)
        fetch('http://localhost:5000/addProduct', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(eventData)
        }).then(res => console.log('server side res'))
    };
    const handleImageUpload = event => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', 'b5ae2733ea4541b42ea39743a3671ab3');
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageUrl(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div>
            <AdminHeader></AdminHeader>
            <h1 style={{textAlign:'center'}}>Add book</h1>
            <div className="allinput">
                
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="firstInput">
                        <input className="inp" placeholder="Book Name"{...register("name")} />
                        <input className="inp" placeholder="Writer Name" {...register("writer")} />
                    </div>
                    <div className="secondInput">
                        <input type="file" onChange={handleImageUpload} />
                        <input className="inp"placeholder="price" type="number" {...register("number")} />
                    </div>


                    {/* <input style={{margin: '0px auto'}} type="submit" /> */}
                    <button className="btn" style={{backgroundColor:"#6946F4",color:"white"}} type="submit">Submite</button>
                </form>
            </div>


        </div>
    );
};

export default AddBook;