import React, { useState, useEffect } from "react";
import { useDispatchCart } from "./ContextReducer";

function Card({ foodName, img, options }) {
  const dispatch = useDispatchCart();
  const [selectedSize, setSelectedSize] = useState(""); // State to manage the selected size
  const [qty, setQty] = useState(1); // State to manage the quantity
  const [price, setPrice] = useState(0); // State to store the fetched price

  useEffect(() => {
    // Fetch the price from the backend
    const fetchPrice = async () => {
      try {
        // Make an API call to fetch the price
        const response = await fetch("http://example.com/price"); // Replace 'http://example.com/price' with your actual endpoint
        const data = await response.json();
        setPrice(data.price); // Set the fetched price in state
      } catch (error) {
        console.error("Error fetching price:", error);
      }
    };

    fetchPrice();
  }, []); // Run this effect only once when the component mounts

  const handleAddToCart = async () => {
    // Ensure a size is selected before adding to cart
    if (!selectedSize) {
      alert("Please select a size");
      return;
    }

    // Calculate the total price based on quantity, size, and fetched price
    const totalPrice = qty * price;

    // Dispatch action to add item to cart with selected size and total price
    dispatch({
      type: "ADD_TO_CART",
      payload: { foodName, img, size: selectedSize, totalPrice }
    });
  };

  const selectedOptions = options && options.length > 0 ? options[0] : {};

  return (
    <div className="card mt-3" style={{ width: "18rem", maxHeight: "360px" }}>
      <img
        src={img}
        className="card-img-top"
        alt="No Image"
        style={{ height: "120px", objectFit: "cover" }}
      />
      <div className="card-body">
        <h5 className="card-title">{foodName}</h5>
        <div className="container w-100">
          <input
            type="number"
            min="1"
            value={qty}
            onChange={(e) => setQty(e.target.value)}
            className="m-2 h-100 bg-success rounded"
          />
          <select className="m-2 h-100 bg-success rounded" onChange={(e) => setSelectedSize(e.target.value)}>
            <option value="">Select Size</option>
            {Object.keys(selectedOptions).map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
          <div className="d-inline h-100 fs-5"> 
            ₹{qty * price}/-
          </div>
        </div>
      </div>
      <hr />
      <button
        className="btn btn-success justify-center ms-2"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default Card;
