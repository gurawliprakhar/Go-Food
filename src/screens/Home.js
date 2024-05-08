import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";

export default function Home() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/foodData", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const responseData = await response.json();
        sortData(responseData); // Sort data before setting state
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const sortData = (data) => {
    // Sort categories based on custom order
    const customOrder = ["Pizza", "Starter", "Biryani/Rice"];
    const sortedCategories = customOrder
      .map((category) => ({
        [category]: data.filter((item) => item.CategoryName === category),
      }))
      .filter((category) => category[Object.keys(category)[0]].length > 0);

    setCategories(sortedCategories);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value); // Update search query state
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  // Filter categories based on search query
  const filteredCategories = categories.map((category) => {
    const categoryName = Object.keys(category)[0];
    const filteredItems = Object.values(category)[0].filter((item) =>
      item.options.some(
        (option) =>
          option.regular &&
          option.regular.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
    return { [categoryName]: filteredItems };
  });

  return (
    <div>
      <Navbar />
      <div>
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
                    value={searchQuery}
                    onChange={handleSearch} // Added onChange event handler
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
                    value={searchQuery}
                    onChange={handleSearch}
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
                    value={searchQuery}
                    onChange={handleSearch}
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
      <div className="container">
        {categories.map((category) => (
          <div key={Object.keys(category)[0]} className="mb-3">
            <h2>{Object.keys(category)[0]}</h2>
            <div className="row card-container">
              {Object.values(category)[0].map((item) => (
                <div key={item._id} className="col-12 col-md-6 col-lg-3">
                  <Card
                    foodName={item.name} // Update this line to use item.name
                    options={item.options}
                    img={item.img}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}

        {categories.map((category) => (
          <div key={Object.keys(category)[0]} className="mb-3">
            <h2>{Object.keys(category)[0]}</h2>
            <div className="row card-container">
              {Object.values(category)[0].map((item) => (
                <div key={item._id} className="col-12 col-md-6 col-lg-3">
                  <Card
                    foodName={item.options[0].regular}
                    options={item.options}
                    img={item.img}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
