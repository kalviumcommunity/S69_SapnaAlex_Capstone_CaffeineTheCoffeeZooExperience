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
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Left Section */}
      <div className="hidden md:flex flex-1 bg-gradient-to-br from-[#3E1F16] to-[#6B3E2E] justify-center items-center px-8 py-12">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Welcome to Caffeine
          </h1>
          <p className="text-base md:text-lg leading-relaxed">
            Gamify Your Coffee Journey, Adopt Virtual Pets, and Explore the Wild World of Coffee!
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1 flex justify-center items-center bg-[#C4A484] md:bg-[#D6B89C] px-8 py-12">
        <div className="bg-[#F9EDE2] p-6 md:p-8 rounded-lg shadow-2xl w-full max-w-lg">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-[#6B3E2E] mb-6">
            Create Your Account
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <InputField
              label="Full Name"
              type="text"
              placeholder="Enter your full name"
              name="fullName"
              onChange={handleChange}
            />
            <InputField
              label="Email"
              type="email"
              placeholder="Enter your email"
              name="email"
              onChange={handleChange}
            />
            <InputField
              label="Password"
              type="password"
              placeholder="Create a password"
              name="password"
              onChange={handleChange}
            />
            <InputField
              label="Confirm Password"
              type="password"
              placeholder="Confirm your password"
              name="confirmPassword"
              onChange={handleChange}
            />
            <Button
              text="Sign Up"
              type="submit"
              className="w-full bg-[#6B3E2E] text-white py-3 rounded-md"
            />
          </form>
          <div className="text-center mt-6">
            <p className="text-sm text-[#6B3E2E]">
              Already have an account?{" "}
              <a href="/login" className="text-[#B17854] font-semibold">
                Log in
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
