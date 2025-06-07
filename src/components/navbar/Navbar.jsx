import React, { useState } from "react";
import CTAButton from "../buttons/CTAButton";
import { Menu, X, ChevronDown } from "lucide-react";

const menuItems = [
  {
    label: "About",
    dropdown: ["Our Story", "Team", "Careers"],
  },
  {
    label: "Product & Services",
    dropdown: ["SaaS", "Consulting", "Integrations"],
  },
  {
    label: "Features",
    dropdown: ["Security", "Analytics", "Automation"],
  },
  {
    label: "Clients",
    dropdown: ["Case Studies", "Testimonials"],
  },
  {
    label: "Resources",
    dropdown: ["Blog", "Docs", "Webinars"],
  },
  {
    label: "Become A Partner",
    dropdown: ["Affiliate", "Reseller"],
  },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-pink-100 to-yellow-100 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="text-lg font-bold">Logo</div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-x-6 items-center font-medium text-gray-800 whitespace-nowrap">
            {menuItems.map((item, idx) => (
              <li key={idx} className="group relative cursor-pointer">
                <div className="flex items-center gap-1 hover:text-orange-600 transition text-sm">
                  {item.label}
                  <ChevronDown size={14} />
                </div>
                {/* Dropdown */}
                <ul className="absolute left-0 mt-2 hidden group-hover:block bg-white text-sm rounded shadow-md py-2 min-w-[150px]">
                  {item.dropdown.map((subItem, subIdx) => (
                    <li
                      key={subIdx}
                      className="px-4 py-2 hover:bg-orange-100 text-gray-700"
                    >
                      {subItem}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <div className="hidden md:block text-sm">
            <CTAButton name="Contact Us" link="/contact" />
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <ul className="md:hidden flex flex-col space-y-2 pb-4 font-medium text-gray-800">
            {menuItems.map((item, idx) => (
              <li key={idx} className="cursor-pointer">
                <details>
                  <summary className="flex items-center justify-between cursor-pointer hover:text-orange-600 text-sm">
                    {item.label}
                  </summary>
                  <ul className="ml-4 mt-1">
                    {item.dropdown.map((subItem, subIdx) => (
                      <li key={subIdx} className="py-1 text-sm text-gray-600">
                        {subItem}
                      </li>
                    ))}
                  </ul>
                </details>
              </li>
            ))}
            <li>
              <CTAButton name="Contact Us" link="/contact" className="text-sm" />
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;


// the drop down menu have to smooth