import React from "react";

function Card(props) {
  const { foodName, img } = props; // Destructure props to access foodName and img
  const options = props.options[0]; // Access the options object from the array

  return (
    <div className="card mt-3" style={{ width: "18rem", maxHeight: "360px" }}>
      <img
        src={img}
        className="card-img-top"
        alt="No Image"
        style={{height:"120px", objectFit:"fit"}}
      />
      <div className="card-body">
        <h5 className="card-title">{foodName}</h5> {/* Display foodName */}
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
