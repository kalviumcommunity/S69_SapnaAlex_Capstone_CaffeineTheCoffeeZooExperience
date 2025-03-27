import React from "react";

const Button = ({text, onClick, type="button"})=>{
    return(
        <button
            type={type}
            onClick={onClick}
            className="w-full py-2 text-white font-semibold bg-[#6B3E2E] rounded-lg shadow-md hover:bg-[#B17854]"
            >
                {text}
            </button>
    );
};

export default Button;