import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeroSectionUIL from "./hero-sections/HeroSectionUIL";


import C5 from "../assets/cert-images/C5.png";
import C6 from "../assets/cert-images/C6.png";
import C7 from "../assets/cert-images/C7.png";
import C8 from "../assets/cert-images/C8.png";

import C1 from "../assets/cert-images/C1.png";
import C2 from "../assets/cert-images/C2.png";
import C3 from "../assets/cert-images/C3.png";
import C4 from "../assets/cert-images/C4.png";

const carouselData = [
  {
    slogan: "Education Is Our Priority",
    title: "School Management System With Secure Cloud Storage",
    description: "From Student Admission to accounting, we ensure that your work gets done quickly.",
    image: C1,
  },
  {
    slogan: "Smart ERP Solutions",
    title: "Your School, Streamlined",
    description: "Automate routine tasks and improve productivity with our cloud-first ERP.",
    image: C2,
  },
  {
    slogan: "Simplified Schooling",
    title: "Centralized School Operations Made Easy",
    description: "Manage all aspects of your school from one dashboard.",
    image: C3,
  },
  {
    slogan: "Award-Winning Tech",
    title: "Trusted by Thousands of Institutions",
    description: "Recognized for innovation and excellence in EdTech.",
    image: C4,
  },
  {
    slogan: "Award-Winning Tech",
    title: "Trusted by Thousands of Institutions",
    description: "Recognized for innovation and excellence in EdTech.",
    image: C5,
  },
  {
    slogan: "Award-Winning Tech",
    title: "Trusted by Thousands of Institutions",
    description: "Recognized for innovation and excellence in EdTech.",
    image: C6,
  },
  {
    slogan: "Award-Winning Tech",
    title: "Trusted by Thousands of Institutions",
    description: "Recognized for innovation and excellence in EdTech.",
    image: C7,
  },
  {
    slogan: "Award-Winning Tech",
    title: "Trusted by Thousands of Institutions",
    description: "Recognized for innovation and excellence in EdTech.",
    image: C8,
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % carouselData.length);
    }, 4000); // Change slide every 4s
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative overflow-hidden w-full min-h-[90vh] bg-gradient-to-r from-[#F5F5DC] to-[#00A8AA] flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.6 }}
          className="w-full"
        >
          <HeroSectionUIL {...carouselData[current]} />
        </motion.div>
      </AnimatePresence>

      {/* Indicators */}
     {/* Left Vertical Indicators */}
<div className="absolute top-1/2 left-4 transform -translate-y-1/2 flex flex-col gap-2 z-10">
  {carouselData.map((_, index) => (
    <button
      key={index}
      onClick={() => setCurrent(index)}
      className={`w-2 h-2 rounded-full transition-all duration-300 ${
        index === current
          ? "bg-orange-500 h-4 w-2 rounded-md"
          : "bg-orange-200"
      }`}
    />
  ))}
</div>

    </div>
  );
};

export default HeroSection;

