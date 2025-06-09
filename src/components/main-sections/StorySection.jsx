import React from 'react';
import teamImage from '../../assets/othres/teamImage.png'; // Replace with your image path

const StorySection = () => {
  return (
    <div className="bg-[#1D3557] text-white px-6 md:px-20 py-16">
      {/* Title Section */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#FFA690]">
          Why Vidyalaya School Management System
        </h1>
        <p className="text-xl mt-2 font-medium">Is Most Preferred System In India?</p>
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Text & Button */}
        <div className="md:w-1/2 space-y-5">
          <h3 className="text-xl font-semibold">We have</h3>
          <h2 className="text-3xl font-bold text-[#FFA690]">Lot of Success Stories</h2>
          <p className="text-sm leading-6 text-gray-200">
            Vidyalaya school management system software has redefined the education
            system functionalities with help of the latest technologies and gained new
            heights with its extraordinary features! This successful school management
            system uses cutting–edge technology and makes it user-friendly yet affordable!
            The product from the team of ultimate and 22+ years of expertise offers all the
            mandatory and complementary functionalities required by an educational
            institute! Our esteem 1600+ global client base tells our success stories!
            We believe in.
          </p>
          <button className="bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-bold py-2 px-6 rounded-full shadow-md hover:scale-105 transition text-sm">
            Get Started
          </button>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex gap-4">
            <img src={teamImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default StorySection;
