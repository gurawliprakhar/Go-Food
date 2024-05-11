import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css"; // Corrected import statement
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js"; // Added ".js" extension
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"; // Added ".js" extension
import Home from "./screens/Home";
import Login from "./screens/login.js"; // Corrected import statement
import Signup from "./screens/Signup";
import { CartProvider } from "./components/ContextReducer";

function App() {
  return (
    <CartProvider>
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />{" "}
            <Route exact path="/createuser" element={<Signup />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
