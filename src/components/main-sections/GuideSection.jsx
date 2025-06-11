import React from 'react';
import guideAnimation from '../../assets/othres/whatsappAnim.svg';

const GuideSection = () => {
  return (
    <div className="px-6 md:px-20 py-16 bg-white">
      {/* Subtitle */}
      <div className="text-center mb-2 text-xl">
        <h2 className="text-2xl font-bold text-blue-900 mb-2">Get Free Guide</h2>
      </div>
      {/* Main Title */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-2xl font-extrabold text-orange-600 leading-tight">
          Looking For The Best School Management Software?
        </h1>
      </div>
      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 text-base md:text-lg">
        {/* Animation Image */}
        <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
          <img src={guideAnimation} alt="guide-animation" className="w-full max-w-md mx-auto" />
        </div>
        {/* Text Content */}
        <div className="w-full md:w-1/2 text-left text-sm">
          <p className="text-gray-800 mb-4">
            Are you looking out to bring the benefits of the latest technology for your school's growth and want to leverage its benefit to student's Education? Let the power of social media applications contribute to your success journey. We, the GurukulSarthi, the leading school management system provider, introducing the new venture of WhatsApp for Education.
          </p>
          <p className="text-gray-800 mb-4">
            When the marketplace becomes crowded with companies offering software suites with identical features, decision-makers must understand the unique features related to the product that performs in the longer term. When selecting a school management software provider, there are so many measures to look for and the same goes for the software features as well the school must ensure.
          </p>
          <p className="text-gray-800 mb-8">
            Here is a quick guide on must-have features in School management Software. And is it worth investing in?
          </p>
          <button className="bg-gradient-to-r from-orange-500 to-yellow-400 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:opacity-90 transition-all text-lg">
            Download eBook
          </button>
        </div>
      </div>
    </div>
  );
};

export default GuideSection;
