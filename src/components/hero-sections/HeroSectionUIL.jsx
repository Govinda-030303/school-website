import React from 'react'

import r1 from '../../assets/cert-images/r1.svg'
import r2 from '../../assets/cert-images/r2.svg'
import r3 from '../../assets/cert-images/r3.svg'
import r4 from '../../assets/cert-images/r4.svg'
import CTAButton from '../buttons/CTAButton'

const HeroSectionUIL = (props) => {
  const certImage = [r1, r2, r3, r4]

  return (
    <div className="flex flex-col-reverse lg:flex-row justify-between items-center bg-gradient-to-br from-[#FFEFE3] to-[#FDF3E9] p-8 rounded-md">
      
      {/* Text Section */}
      <div className="w-full lg:w-1/2 space-y-1">
        <p className="text-gray-600 font-semibold text-sm">{props.slogan}</p>
        <h1 className="text-xm md:text-xl font-bold leading-tight">
          {props.title}
        </h1>
        <h3 className="text-sm md:text-sm text-gray-700">{props.description}</h3>

        {/* Buttons */}
        <div className="flex gap-4 mt-6 text-sm">
          {/* <button className="bg-orange-500 hover:bg-orange-600 text-white px-2 py-2 rounded-md shadow text-xl">
            Get Started
          </button> */}
          <CTAButton name="Get Started" />
          <button className="border border-gray-700 text-gray-800 px-6 py-3 rounded-full flex items-center gap-2 hover:bg-gray-100">
            <span>▶</span> Watch Video
          </button>
        </div>

        {/* Certifications */}
        <div className="flex flex-wrap gap-4 mt-6">
          {certImage.map((image, index) => (
            <img src={image} alt={`Certificate ${index + 1}`} key={index} className="w-20 h-20 object-contain" />
          ))}
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0">
        <img src={props.image} alt="Hero" className="w-[80%] max-w-md" />
      </div>
    </div>
  )
}

export default HeroSectionUIL
