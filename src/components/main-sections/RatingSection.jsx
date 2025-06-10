import React from 'react';

import cepterra from '../../assets/rating-images/rating_cepterra.svg';
import techjockey from '../../assets/rating-images/rating_techjockey.svg';
import g2 from '../../assets/rating-images/rating_g2.svg';
import technologycounter from '../../assets/rating-images/rating_technologycounter.svg';
import goodFirms from '../../assets/rating-images/rating_good_firms.svg';
import softwareSuggest from '../../assets/rating-images/rating_software_suggest.svg';
import RatingCard from '../card-type/RatingCard';

const ratingData = [
  { name: "Software Suggest", reviews: 487, rating: 4.8, logo: softwareSuggest },
  { name: "Capterra", reviews: 38, rating: 4.7, logo: cepterra },
  { name: "Good Firms", reviews: 250, rating: 4.9, logo: goodFirms },
  { name: "G2", reviews: 28, rating: 4.8, logo: g2 },
  { name: "Tech Jockey", reviews: 403, rating: 4.8, logo: techjockey },
  { name: "Technology Counter", reviews: 31, rating: 4.8, logo: technologycounter },
];

const RatingSection = () => {
  return (
    <div className="bg-[#1e3567] py-10 px-4 md:px-16">
      <div className="text-center px-4 py-10">
        {/* Section Title */}
        <p className="text-lg font-medium text-gray-100">Review</p>

        {/* Main Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-pink-400 mt-2">
          School App, Parent App & Management App
        </h2>

        {/* Paragraph */}
        <p className="mt-4 max-w-4xl mx-auto text-white text-base md:text-lg leading-relaxed">
          Our <span className="font-semibold text-pink-300">school management Software</span> is applauded in the market by leading experts. Our customers from worldwide, bank on us showing 96% client retention! The market experts like Gartner Peer Insights, Capterra, Goodfirms, G2 Crow, Software Suggest, Technologycounter, have given us the highest ratings for the extraordinary features!
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {ratingData.map((data, index) => (
          <RatingCard
            key={index}
            name={data.name}
            reviews={data.reviews}
            rating={data.rating}
            logo={data.logo}
            logoLetter={data.name[0]}
          />
        ))}
      </div>
    </div>
  );
};

export default RatingSection;
