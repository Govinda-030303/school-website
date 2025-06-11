import React from "react";
import { featuresImages } from "../../assets/featuresImages.js"; // adjust path as needed
import FeatureCard from "../card-type/FeatureCard.jsx";

const featureTitles = [
  "Barcode",
  "Biometric",
  "E-Exam",
  "Online Payment",
  "Tally Integration",
  "Vehicle Tracking",
  "Virtual Class",
  "Whatsapp",
];

const FeatureSection = () => {
  return (
    <div className="">
    <div className="">
    <div className="max-w-4xl mx-auto text-center px-4 py-12">
      {/* Subtitle */}
      <p className="text-[#1D3557] font-medium text-lg md:text-xl mb-2">
        We Provide
      </p>

      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-extrabold text-orange-600 mb-6">
        Integrated School Management Software
      </h2>

      {/* Paragraph */}
      <p className="text-sm md:text-base text-gray-700 leading-relaxed">
        GurukulSarthi software is a customized school management software that offers end-to-end solutions for every phase of school management like admissions, academic management, staff management, attendance.
        It is a one-stop solution platform that integrates various features like biometric, SMS, online portal, e-exam, mobile app, etc.
        Let our high-end product empower your educational institute in delivering new ways of education by taking care of administrative tasks!
      </p>
    </div>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center px-4 py-10">
      {featureTitles.map((title, index) => (
        <FeatureCard key={index} image={featuresImages[index]} title={title} />
      ))}
    </div>
    </div>
  );
};

export default FeatureSection;
