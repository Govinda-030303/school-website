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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center px-4 py-10">
      {featureTitles.map((title, index) => (
        <FeatureCard key={index} image={featuresImages[index]} title={title} />
      ))}
    </div>
  );
};

export default FeatureSection;
