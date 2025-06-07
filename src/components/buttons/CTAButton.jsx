import React from 'react';
import { Link } from 'react-router';
const CTAButton = ({ link, name, className = "" }) => {
  return (
    <a
      href={link}
      className={`
        inline-flex items-center justify-center
        px-4 py-2
        font-semibold
        rounded-full
        border-2 border-transparent
        bg-[#f9603d] text-white
        ${className}
      `}
    >
      {name}
    </a>
  );
};

export default CTAButton;
