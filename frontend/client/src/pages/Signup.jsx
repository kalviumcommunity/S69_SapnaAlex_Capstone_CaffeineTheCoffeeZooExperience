import React, { useState } from "react";
import InputField from "../components/InputField";
import Button from "../components/Button";

const Signup = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup Data:", formData);
    
  };

  return (
    <div className="flex justify-center items-center min-h-screen w-full bg-[#F5EDE6]">
      <div className="bg-[#6B3E2E] p-6 rounded-lg shadow-2xl flex justify-center items-center w-110 h-90">
      <div className="bg-[#B58B6B] p-6 rounded-lg shadow-lg flex justify-center items-center w-100 h-100 border border-[#4A2E23]">
      <div className="bg-[#F5E3D0] p-6 rounded-lg shadow-lg w-96 h-110 border border-[#4A2E23] self-center">
        <h2 className="text-2xl font-bold text-center text-[#6B3E2E] mb-4">
          Welcome to Caffeine
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <InputField
            label="Email ID"
            type="email"
            placeholder="Enter your email here"
            name="email"
            // value={formData.email}
            onChange={handleChange}
          />
          <InputField
            label="Set Password"
            type="password"
            placeholder="Enter password"
            name="password"
            // value={formData.password}
            onChange={handleChange}
          />
          <InputField
            label="Confirm Password"
            type="password"
            placeholder="Confirm password"
            name="confirmPassword"
            // value={formData.confirmPassword}
            onChange={handleChange}
          />
          <Button text="Sign-up" type="submit" />
        </form>
        <div className="text-center mt-3">
          <p className="text-sm text-[#6B3E2E]">
            Already a user?{" "}
            <a href="/login" className="text-[#B17854] font-bold">
              Login
            </a>
          </p>
        </div>
      </div>
      </div>
    </div>
    </div>
  );
};

export default Signup;
