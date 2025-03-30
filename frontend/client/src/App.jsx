import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Welcome from "./pages/WelcomePage";
import "./index.css"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome/>}/>
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default App ;
