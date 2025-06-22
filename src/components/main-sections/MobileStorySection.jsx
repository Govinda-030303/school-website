import React from 'react';
// import playstore from '../../assets/othres/playstore.png'; // Update with actual path
// import appstore from '../../assets/othres/appstore.png'; // Update with actual path
import phoneImage from '../../assets/othres/phoneImage.png'; // First phone image

const MobileStorySection = () => {
  return (
    <div className="bg-gradient-to-r from-[#5066a4] to-[#3AB7BF] text-white py-16 px-6 md:px-20">
      {/* Product Tag Line */}
      <div className="text-center mb-8">
        <p className="text-lg font-semibold">Our Product</p>
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#FFA690]">
          School App, Parent App & Management App
        </h2>
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-10">
        {/* Text Section */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-2xl md:text-3xl font-bold text-[#FFA690]">
            The Ultimate School ERP With Mobile App For Modern School System
          </h1>
          <p className="text-sm text-gray-300 leading-relaxed">
            Comprehensive, Easy To Use Web Based School ERP System Helps You To Move Faster, Save Money, Integrate On-Premises Apps And Data Anytime Anywhere. Explore the online school ERP with built-in School App features and start the new education administration journey with the new-edge technology! Along with School App, We offer Management App – bringing the entire school in the palm of your hand, making the whole school management experience effortless.
          </p>
          {/* Store Buttons */}
          <div className="flex gap-4">
            {/* <img src={playstore} alt="Google Play" className="h-12 cursor-pointer" />
            <img src={appstore} alt="App Store" className="h-12 cursor-pointer" /> */}
          </div>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center items-center gap-4">
          <img src={phoneImage} alt="App Preview 1" className="h-[320px] md:h-[360px] object-contain" />
        </div>
      </div>
    </div>
  );
};

export default MobileStorySection;
