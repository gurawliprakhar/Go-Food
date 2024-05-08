import React from "react";

function Card(props) {
  const options = props.options[0]; // Access the options object from the array

  return (
    <div className="card mt-3" style={{ width: "18rem", maxHeight: "360px" }}>
      <img
        src="https://media.istockphoto.com/id/1311821100/photo/chilli-paneer-indian-snack-food.jpg?s=612x612&w=0&k=20&c=yYwVPYZakDpqANo_rdJy2IcoVaisdph6DNmd_lCGMP4="
        className="card-img-top"
        alt="No Image"
      />
      <div className="card-body">
        <h5 className="card-title">{props.foodName}</h5>
        <div className="container w-100">
          <select className="m-2 h-100 bg-success rounded">
            {Array.from(Array(6), (_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
          <select className="m-2 h-100 bg-success rounded">
            {Object.keys(options).map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
          <div className="d-inline h-100 fs-5">Total Price</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
