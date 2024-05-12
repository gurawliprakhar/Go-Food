import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function MyOrder() {
    const [orderData, setOrderData] = useState([]);

    useEffect(() => {
        // Fetch order data from the server
        const fetchOrderData = async () => {
            try {
                const response = await fetch("http://localhost:5000/api/myOrderData", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ email: 'user@example.com' }), // Pass the user's email to fetch their orders
                });
                if (response.ok) {
                    const data = await response.json();
                    setOrderData(data.orderData.order_data);
                } else {
                    console.error("Failed to fetch order data");
                }
            } catch (error) {
                console.error("Error fetching order data:", error);
            }
        };

        fetchOrderData();
    }, []);

    return (
        <>
            <Navbar />
            <div className='container'>
                <div className='row'>
                    {orderData.map((arrayData, index) => (
                        <div key={index} className='col-12 col-md-6 col-lg-3'>
                            <div className="card mt-3" style={{ width: "16rem", maxHeight: "360px" }}>
                                <img src={arrayData.img} className="card-img-top" alt="..." style={{ height: "120px", objectFit: "fill" }} />
                                <div className="card-body">
                                    <h5 className="card-title">{arrayData.name}</h5>
                                    <div className='container w-100 p-0' style={{ height: "38px" }}>
                                        <span className='m-1'>{arrayData.qty}</span>
                                        <span className='m-1'>{arrayData.size}</span>
                                        <span className='m-1'>{arrayData.Order_date}</span>
                                        <div className=' d-inline ms-2 h-100 w-20 fs-5' >
                                            ₹{arrayData.price}/-
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}
