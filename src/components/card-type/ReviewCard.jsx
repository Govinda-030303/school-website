import React from "react";

const ReviewCard = ({ logo, name, location, description }) => {
  return (
    <div className="bg-gradient-to-r from-[#FFE5DC] to-[#FFF7E6] rounded-xl shadow-md p-6 w-[300px] sm:w-[340px] relative">
      <div className="absolute top-0 right-0 bg-[#FF6A00] text-white px-2 py-1 rounded-bl-lg text-xl font-bold">
        ❝❞
      </div>

      <img
        src={logo}
        alt="school logo"
        className="w-[140px] h-[80px] object-contain mx-auto mb-4 transition-transform duration-300 hover:scale-110 rounded-4xl  "
      />

      <h3 className="text-lg font-bold text-[#1B1B1F]">{name},</h3>
      <h4 className="text-md font-semibold text-[#1B1B1F] mb-2">{location}</h4>

      <p className="text-sm text-gray-700 mb-4 leading-snug">{description}</p>

      <a
        href="#"
        className="text-[#FF6A00] font-semibold text-sm hover:underline flex items-center"
      >
        Read Case Studies <span className="ml-1">→</span>
      </a>
    </div>
  );
};

export default ReviewCard;
