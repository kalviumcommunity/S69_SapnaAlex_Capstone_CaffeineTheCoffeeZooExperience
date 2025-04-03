import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#DBC4A0] text-[#4A2C2A]">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 bg-[#5C3D2E] text-white rounded-b-lg shadow-lg">
        <h1 className="text-3xl font-bold italic">Caffeine</h1>
        <ul className="flex gap-6">
          <li className="hover:text-[#C49A6C] cursor-pointer">Home</li>
          <li className="hover:text-[#C49A6C] cursor-pointer">Explore</li>
          <li className="hover:text-[#C49A6C] cursor-pointer">Games</li>
          <li className="hover:text-[#C49A6C] cursor-pointer">MugMates</li>
          <li className="hover:text-[#C49A6C] cursor-pointer">Login</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center py-16">
        <h2 className="text-4xl font-semibold text-[#4A2C2A]">
          Take a test to get your Coffee Animal
        </h2>
        <button className="mt-6 px-6 py-3 bg-[#8B5A2B] text-white rounded-lg shadow-md hover:bg-[#C49A6C]">
          Start Now
        </button>
      </div>

      {/* Carousel Placeholder */}
      <div className="flex justify-center items-center space-x-4 py-10">
        <div className="w-40 h-40 bg-[#A67C52] rounded-lg shadow-lg"></div>
        <div className="w-40 h-40 bg-[#8B5A2B] rounded-lg shadow-lg"></div>
        <div className="w-40 h-40 bg-[#5C3D2E] rounded-lg shadow-lg"></div>
      </div>
    </div>
  );
};

export default Home;
