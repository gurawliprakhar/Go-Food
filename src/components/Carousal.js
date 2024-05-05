import React from "react";

function Carousel() {
  return (
    <div>
      {/* Carousel */}
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        style={{ objectFit: "contain" }}
      >
        {/* Wrapper for slides */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://source.unsplash.com/random/900x700/?burger"
              className="d-block w-100"
              alt="Slide 1"
            />
            {/* Search Bar */}
            <div
              className="carousel-search d-flex justify-content-center align-items-end position-absolute bottom-0 start-50 translate-middle-x"
              style={{ width: "70%", backgroundColor: "rgba(0, 0, 0, 0.5)" }}
            >
              <form className="d-flex w-100">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search for burgers..."
                  aria-label="Search"
                  style={{ border: "1px solid white", color: "white" }}
                />
                <button
                  className="btn btn-success"
                  type="submit"
                  style={{ marginLeft: "8px", marginBottom: "3px" }}
                >
                  Search
                </button>
              </form>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://source.unsplash.com/random/900x700/?pastry"
              className="d-block w-100"
              alt="Slide 2"
            />
            {/* Search Bar */}
            <div
              className="carousel-search d-flex justify-content-center align-items-end position-absolute bottom-0 start-50 translate-middle-x"
              style={{ width: "70%", backgroundColor: "rgba(0, 0, 0, 0.5)" }}
            >
              <form className="d-flex w-100">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search for pastries..."
                  aria-label="Search"
                  style={{ border: "1px solid white", color: "white" }}
                />
                <button
                  className="btn btn-success"
                  type="submit"
                  style={{ marginLeft: "8px", marginBottom: "3px" }}
                >
                  Search
                </button>
              </form>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://source.unsplash.com/random/900x700/?barbeque"
              className="d-block w-100"
              alt="Slide 3"
            />
            {/* Search Bar */}
            <div
              className="carousel-search d-flex justify-content-center align-items-end position-absolute bottom-0 start-50 translate-middle-x"
              style={{ width: "70%", backgroundColor: "rgba(0, 0, 0, 0.5)" }}
            >
              <form className="d-flex w-100">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search for barbeque..."
                  aria-label="Search"
                  style={{ border: "1px solid white", color: "white" }}
                />
                <button
                  className="btn btn-success"
                  type="submit"
                  style={{ marginLeft: "8px", marginBottom: "3px" }}
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Previous and Next buttons */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Carousel;
