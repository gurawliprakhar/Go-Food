import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Carousel from "../components/Carousal";

export default function Home() {
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const loadData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/foodData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      const responseData = await response.json();
      setFoodItem(responseData[0]);
      setFoodCat(responseData[1]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <Navbar />
      <Carousel />
      <div className="container">
        {foodCat.length !== 0 &&
          foodCat.map((data, index) => (
            <div key={index}>Hello World</div>
          ))}
        <Card />
      </div>
      <Footer />
    </div>
  );
}
