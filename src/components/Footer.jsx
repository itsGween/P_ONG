"use client"

import React, { useState } from "react";
import { FaChevronUp, FaChevronDown, FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

const Footer = ({ partners }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-gray-800 text-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold text-white">NGO Name Here</h2>
          <button
            onClick={toggleOpen}
            className="focus:outline-none bg-green-500 text-white p-2 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300"
          >
            {isOpen ? <FaChevronUp size={24} /> : <FaChevronDown size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="text-white">
                <h3 className="text-lg font-bold mb-4">Contact Information</h3>
                <p className="flex items-center mb-2">
                  <FaMapMarkerAlt className="mr-2 text-green-500" /> 123 NGO Street, City, State, Zip
                </p>
                <p className="flex items-center mb-2">
                  <FaEnvelope className="mr-2 text-green-500" /> contact@ngo.org
                </p>
                <p className="flex items-center">
                  <FaPhone className="mr-2 text-green-500" /> +1 (555) 123-4567
                </p>
              </div>
              <div className="text-white">
                <h3 className="text-lg font-bold mb-4">Our Location</h3>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!..."
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-bold text-white">Our Partners</h3>
              <div className="flex flex-wrap gap-4 justify-center items-center mt-2">
                {partners.map((partner, index) => (
                  <div key={index} className="bg-white p-2 rounded-lg shadow-lg">
                    <img src={partner.icon} alt={partner.name} className="h-16 w-16 object-contain" />
                    <p className="text-black text-center mt-2">{partner.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="mt-8 text-center text-gray-400">
          <p>Committed to excellence and partnership.</p>
          <p>A proud member of Global NGO Network</p>
          <p>© 2023 NGO Name Here, All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
