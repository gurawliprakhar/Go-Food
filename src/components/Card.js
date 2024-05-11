import React, { useState } from "react";
import { useDispatchCart } from "./ContextReducer"; // Importing useDispatchCart

function Card({ foodName, img, options }) {
  const dispatch = useDispatchCart();
  const [selectedSize, setSelectedSize] = useState(""); // State to manage the selected size

  const handleAddToCart = async () => {
    // Ensure a size is selected before adding to cart
    if (!selectedSize) {
      alert("Please select a size");
      return;
    }

    // Dispatch action to add item to cart with selected size
    dispatch({
      type: "ADD_TO_CART",
      payload: { foodName, img, size: selectedSize },
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
          <select className="m-2 h-100 bg-success rounded" onChange={(e) => setSelectedSize(e.target.value)}>
            {Object.keys(selectedOptions).map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
          <div className="d-inline h-100 fs-5">Total Price</div>
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
