import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Carousel from "../components/Carousal";

export default function Home() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

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
    const sortedCategories = customOrder.map(category => ({
      [category]: data.filter(item => item.CategoryName === category)
    })).filter(category => category[Object.keys(category)[0]].length > 0);

    setCategories(sortedCategories);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar />
      <Carousel />
      <div className="container">
        {categories.map((category) => (
          <div key={Object.keys(category)[0]} className="mb-3">
            <h2>{Object.keys(category)[0]}</h2>
            <div className="row card-container">
              {Object.values(category)[0].map((item) => (
                <div key={item._id} className="col-12 col-md-6 col-lg-3">
                  <Card
                    foodName={item.name}
                    options={item.options}
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
