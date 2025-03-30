import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const Welcome = () =>{
    const navigate = useNavigate();

    return (
        <div className="flex justify-center items-center min-h-screen w-full bg-gradient-to-br from-[#F5EDE6] to-[#D7C4B8]">
            <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col justify-center items-center w-96 h-auto">
                <h1 className="text-3xl font-extrabold text-[#6B4226] mb-4 text-center">
                    Welcome to Caffeine
                </h1>
                <p className="text-sm text-[#6B4226] mb-6 text-center">
                    Your ultimate coffee experience starts here. Join us and explore the world of coffee like never before.
                </p>
                <Button
                    text="Sign Up"
                    onClick={() => navigate("/signup")}
                    className="bg-[#6B4226] text-white px-4 py-2 rounded-md hover:bg-[#8B5E3C] transition-all"
                />
            </div>
        </div>
    );
};

export default Welcome;
