import React from "react";

const InputField = ({ label, type, name, placeholder, value, onChange }) => {
  return (
    <div className="flex flex-col space-y-1">
      <label className="text-sm font-semibold text-[#4A2E23]">{label}</label>
      <input
        type={type}
        name={name} // ✅ Now name is passed correctly
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="px-4 py-2 border border-[#6B3E2E] rounded-lg focus:outline-none focus:ring-[#B17854] bg-[#F5E3D0] text-[#2E1B14]"
        required
      />
    </div>
  );
};

export default InputField;
