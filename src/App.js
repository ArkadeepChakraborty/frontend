import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import HomePage from "./Components/HomePage";
import Login from "./Components/Login";
import Register from "./Components/Register";
import StreamSelection from "./Components/Streamselection";

const App = () => {
  return (
    <Router>
      <div id="root">
        {/* Navbar (visible on all pages) */}
        <Navbar />

        {/* Main content area */}
        <div className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/select-stream" element={<StreamSelection />} />
          </Routes>
        </div>

        {/* Footer (visible on all pages) */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
