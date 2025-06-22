import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from '../../assets/logos/schoolLogo.png'

const menuItems = [
  {
    label: "About",
    dropdown: [
      "About Vidyalaya",
      "Why Vidyalaya ?",
      "About Company",
      "CEO Message",
      "Benefits to you",
      "Awards and Recognition",
      "Our Approach",
      "History"
    ],
  },
  {
    label: "Product & Services",
    dropdown: [
      "School Software",
      "School ERP",
      "Campus ERP",
      "College Software",
      "University Software",
      "Modules",
      "Integrations",
      "Mobile App",
      "Admission CRM",
      "WhatsApp for Education",
      "LMS",
      "Service Support",
      "Website Designing"
    ],
  },
  {
    label: "Features",
    dropdown: [
      "Core Modules",
      "Resource Management",
      "Integrations",
      "Mobile App",
      "Security Features",
      "Analytics Dashboard"
    ],
  },
  {
    label: "Clients",
    dropdown: [
      "Segment",
      "Our Customers",
      "Testimonial",
      "Case Studies",
      "Success Stories"
    ],
  },
  {
    label: "Resources",
    dropdown: [
      "Brochures",
      "Presentation",
      "Case Study",
      "Blog",
      "Podcasts",
      "Webinars",
      "Documentation"
    ],
  },
  {
    label: "Become A Partner",
    dropdown: [
      "Partnership Program",
      "Affiliate Program",
      "Reseller Program",
      "Benefits"
    ],
  },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <nav className="bg-gradient-to-r from-[#F5F5DC] via-[#7CD9A1] to-[#47C970] sticky top-0 z-50 shadow-sm border-b border-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <div className="flex items-center">
           <div className=""><img src={logo} alt="" className="w-24 h-12 scale-175"/></div>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center space-x-8 font-medium text-gray-700">
            {menuItems.map((item, idx) => (
              <li 
                key={idx} 
                className="group relative"
                onMouseEnter={() => setActiveDropdown(idx)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <div className="flex items-center space-x-1 hover:text-orange-600 transition-colors duration-200 cursor-pointer py-2">
                  <span className="text-sm font-medium">{item.label}</span>
                  <ChevronDown size={16} className="text-gray-400 group-hover:text-orange-600" />
                </div>
                
                {/* Dropdown Menu */}
                {activeDropdown === idx && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50">
                    <div className="max-h-96 overflow-y-auto">
                      {item.dropdown.map((subItem, subIdx) => (
                        <a
                          key={subIdx}
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-150"
                        >
                          {subItem}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <button className="flex items-center space-x-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200">
              <span>✨</span>
              <span>Lets Talk AI</span>
              <ChevronDown size={14} />
            </button>
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200">
              Contact Us
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden">
            <button 
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-gray-600 hover:text-orange-600 transition-colors"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-orange-100 py-4">
            <ul className="space-y-2">
              {menuItems.map((item, idx) => (
                <li key={idx}>
                  <details className="group">
                    <summary className="flex items-center justify-between cursor-pointer py-2 px-3 hover:bg-orange-50 rounded-lg text-sm font-medium text-gray-700 hover:text-orange-600">
                      <span>{item.label}</span>
                      <ChevronDown size={16} className="group-open:rotate-180 transition-transform" />
                    </summary>
                    <ul className="ml-4 mt-2 space-y-1">
                      {item.dropdown.map((subItem, subIdx) => (
                        <li key={subIdx}>
                          <a 
                            href="#" 
                            className="block py-2 px-3 text-sm text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-lg"
                          >
                            {subItem}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </details>
                </li>
              ))}
            </ul>
            
            {/* Mobile CTA Buttons */}
            <div className="mt-4 space-y-2 px-3">
              <button className="w-full flex items-center justify-center space-x-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-3 rounded-full text-sm font-medium">
                <span>✨</span>
                <span>Lets Talk AI</span>
              </button>
              <button className="w-full bg-orange-600 hover:bg-orange-700 text-white px-4 py-3 rounded-full text-sm font-medium">
                Contact Us
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;