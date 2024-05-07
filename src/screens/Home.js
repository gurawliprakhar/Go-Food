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
        setCategories(responseData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar />
      <Carousel />
      <div className="container">
        {categories.map((category) => (
          <div key={category._id}>
            <h2>{category.CategoryName}</h2>
            <div className="card-container">
              {category.options.map((item) => (
                <Card
                  key={item._id}
                  name={item.name}
                  img={item.img}
                  description={item.description}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
