import React, { useState } from 'react';
import { Users, Database, Headphones, Globe } from 'lucide-react';

const InteractiveFeaturesShowcase = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      id: 0,
      title: "Compatible For All",
      description:
        "GurukulSarthi provides complete management tools compatible with schools and educational institutions.",
      icon: <Users className="w-8 h-8 text-blue-600" />, // You can style these icons
      image: (
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Illustration */}
          <div className="relative">
            <div className="absolute -top-4 -left-8 w-32 h-6 bg-red-400 rounded-lg transform -rotate-12 shadow-lg"></div>
            <div className="absolute -top-2 -left-4 w-32 h-6 bg-green-400 rounded-lg transform -rotate-6 shadow-lg"></div>
            <div className="absolute top-0 left-0 w-32 h-6 bg-blue-400 rounded-lg shadow-lg"></div>
            <div className="absolute top-2 left-4 w-32 h-6 bg-yellow-400 rounded-lg transform rotate-6 shadow-lg"></div>
            <div className="absolute top-4 left-8 w-32 h-6 bg-purple-400 rounded-lg transform rotate-12 shadow-lg"></div>
          </div>
        </div>
      ),
    },
    {
      id: 1,
      title: "Data Storage",
      description:
        "GurukulSarthi offers flexible hosting options for your data: on-premises, enterprise, or cloud.",
      icon: <Database className="w-8 h-8 text-blue-600" />,
      image: (
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="w-16 h-32 bg-orange-400 rounded-lg shadow-lg">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="w-12 h-3 bg-orange-500 mx-2 mt-1 rounded-sm"
              ></div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: 2,
      title: "Corporative Service",
      description:
        "Access our support team for help, troubleshooting, and guidance whenever needed.",
      icon: <Headphones className="w-8 h-8 text-blue-600" />,
      image: (
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="flex space-x-4">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-16 h-20 bg-yellow-300 rounded-t-full flex flex-col items-center"
              >
                <div className="w-8 h-8 bg-pink-400 rounded-full mt-2"></div>
                <div className="w-12 h-8 bg-blue-500 rounded mt-2"></div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: 3,
      title: "More Accessible",
      description:
        "GurukulSarthi's online Student Information System provides anytime, anywhere access.",
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      image: (
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="w-12 h-16 bg-yellow-300 rounded-t-full flex flex-col items-center">
            <div className="w-6 h-6 bg-orange-400 rounded-full mt-1"></div>
            <div className="w-8 h-8 bg-blue-500 rounded mt-1"></div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8 bg-white min-h-screen">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        {/* Left - Features */}
        <div className="space-y-5">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              onClick={() => setActiveFeature(index)}
              className={`p-5 sm:p-6 rounded-xl cursor-pointer transition-all duration-300 transform hover:scale-[1.03] border ${
                activeFeature === index
                  ? 'bg-orange-100 border-orange-400 shadow-md'
                  : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
              }`}
            >
              <div className="flex items-start space-x-4">
                <div
                  className={`p-3 rounded-full ${
                    activeFeature === index ? 'bg-orange-200' : 'bg-blue-100'
                  }`}
                >
                  {React.cloneElement(feature.icon, {
                    className: `w-8 h-8 ${
                      activeFeature === index ? 'text-orange-600' : 'text-blue-600'
                    }`,
                  })}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-semibold mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right - Image */}
        <div className="relative w-full h-[20rem] sm:h-[24rem] md:h-[28rem] lg:h-[30rem] bg-gradient-to-br from-pink-100 to-orange-100 rounded-2xl shadow-lg overflow-hidden">
          <div className="w-full h-full transition duration-500 ease-in-out p-4">
            {features[activeFeature].image}
          </div>
          {/* Decorative Circles */}
          <div className="absolute -top-5 -right-5 w-16 h-16 bg-pink-200 rounded-full opacity-40"></div>
          <div className="absolute -bottom-5 -left-5 w-12 h-12 bg-orange-200 rounded-full opacity-40"></div>
          <div className="absolute top-1/2 -left-2 w-8 h-8 bg-yellow-200 rounded-full opacity-40"></div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveFeaturesShowcase;
