import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import InputField from "../components/InputField";
import Button from "../components/Button";

const Login = () => {
  const [formData, setFormData] = useState({ emailID: "", password: "" }); // ✅ Changed email → emailID
  const [error, setError] = useState("");
  const navigate = useNavigate();  

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); 

    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", {
        emailID: formData.emailID, // ✅ Ensure email field matches backend
        password: formData.password
      });

      if (response.status === 200 && response.data.token) {
        localStorage.setItem("token", response.data.token);
        navigate("/home");
      } else {
        throw new Error("Invalid response from server");
      }

    } catch (error) {
      console.error("Login error:", error.response?.data || error.message);
      setError(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5F5F5]">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-[#6B3E2E] mb-6">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <InputField
            label="Email"
            type="email"
            name="emailID" // ✅ Changed to match backend
            placeholder="Enter your email"
            value={formData.emailID}
            onChange={handleChange}
          />
          <InputField
            label="Password"
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
          />
          <Button
            text="Login"
            type="submit"
            className="w-full bg-[#6B3E2E] text-white py-3 rounded-md hover:bg-[#8B4513]"
          />
        </form>
        {error && <p className="mt-4 text-red-500 text-center">{error}</p>}
      </div>
    </div>
  );
};

export default Login;
