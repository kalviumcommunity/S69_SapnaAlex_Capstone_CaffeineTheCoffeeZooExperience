import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Welcome from "./pages/WelcomePage";
import FileUpload from "./components/FileUpload";
import Login from "./pages/Login";
import Home from "./pages/Home";
import "./index.css"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} /> {/* Add Login route */}
        <Route path="/upload" element={<FileUpload />} />
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </Router>
  );
};

export default App;
