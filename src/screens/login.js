import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  let navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!credentials.email || !credentials.password) {
      alert("Please enter valid credentials.");
      return;
    }
    try {
      const response = await fetch("http://localhost:5000/api/loginuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      if (response.ok) {
        const json = await response.json();
        const { userEmail, authtoken } = json; // Extract userEmail and authtoken from JSON response
        // Store userEmail and authtoken in localStorage
        localStorage.setItem('userEmail', userEmail);
        localStorage.setItem('authtoken', authtoken);
        setIsLoggedIn(true);
        navigate('/'); // Navigate to the dashboard or home page
      } else {
        alert("Invalid credentials. Please try again.");
      }
      
    } catch (error) {
      console.error("Error submitting form:", error);
      // Show an error message
      alert("An error occurred. Please try again later.");
    }
  };

  useEffect(() => {
    const authToken = localStorage.getItem('authtoken');
    console.log("Auth Token:", authToken);
  }, [isLoggedIn]);

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
      <p className="mt-3">
        Don't have an account? <Link to="/Signup">Sign Up</Link>
      </p>
    </div>
  );
}
