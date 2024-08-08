"use client";

import { useState } from "react";

const Navbar = () => {
  const [isCategoriesOpen, setCategoriesOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-l from-red-500 to-white text-gray-800 shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        {/* Logo à gauche */}
        <div className="text-xl font-bold cursor-pointer">
          <img
            src="./logo_ONG.jpg"
            alt="Logo"
            className="w-12 h-12 md:w-16 md:h-16"
          />
        </div>

        {/* Menu desktop à droite */}
        <div className="hidden md:flex items-center space-x-6">
          <div className="relative">
            <button
              className="hover:text-gray-700 transition-colors duration-200"
              onClick={() => setCategoriesOpen(!isCategoriesOpen)}
            >
              A Propos
            </button>
            {isCategoriesOpen && (
              <ul className="absolute left-0 mt-2 w-48 bg-gradient-to-r from-white to-red-500 shadow-lg rounded-md z-50">
                <li className="px-4 py-2 hover:bg-gray-200 transition-colors duration-200">
                  <a
                    href="#"
                    className="block hover:text-gray-700 transition-colors duration-200"
                  >
                    Qui sommes-nous
                  </a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-200 transition-colors duration-200">
                  <a
                    href="#"
                    className="block hover:text-gray-700 transition-colors duration-200"
                  >
                    Mission
                  </a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-200 transition-colors duration-200">
                  <a
                    href="#"
                    className="block hover:text-gray-700 transition-colors duration-200"
                  >
                    Fonctionnement
                  </a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-200 transition-colors duration-200">
                  <a
                    href="#"
                    className="block hover:text-gray-700 transition-colors duration-200"
                  >
                    L'équipe
                  </a>
                </li>
              </ul>
            )}
          </div>
          <a
            href="#"
            className="hover:text-gray-700 transition-colors duration-200"
          >
            Nos Initiatives
          </a>
          <a
            href="#"
            className="hover:text-gray-700 transition-colors duration-200"
          >
            Videotheques
          </a>
          <a
            href="#"
            className="hover:text-gray-700 transition-colors duration-200"
          >
            Liens
          </a>
          <a
            href="#"
            className="hover:text-gray-700 transition-colors duration-200"
          >
            Contactez-nous
          </a>
        </div>

        {/* Bouton du menu mobile */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="relative">
            <button
              className="block w-full text-center px-4 py-2 hover:bg-gray-100 transition-colors duration-200"
              onClick={() => setCategoriesOpen(!isCategoriesOpen)}
            >
              A propos
            </button>
            {isCategoriesOpen && (
              <ul className="bg-gradient-to-r from-white to-red-500 shadow-lg rounded-md">
                <li className="px-4 py-2 hover:bg-gray-200 transition-colors duration-200">
                  <a
                    href="#"
                    className="block hover:text-gray-700 transition-colors duration-200"
                  >
                    Qui sommes-nous
                  </a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-200 transition-colors duration-200">
                  <a
                    href="#"
                    className="block hover:text-gray-700 transition-colors duration-200"
                  >
                    Mission
                  </a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-200 transition-colors duration-200">
                  <a
                    href="#"
                    className="block hover:text-gray-700 transition-colors duration-200"
                  >
                    Fonctionnement
                  </a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-200 transition-colors duration-200">
                  <a
                    href="#"
                    className="block hover:text-gray-700 transition-colors duration-200"
                  >
                    L'équipe
                  </a>
                </li>
              </ul>
            )}
          </div>
          <a
            href="#"
            className="block text-center p-2 hover:bg-gray-100 transition-colors duration-200"
          >
            Nos initiatives
          </a>
          <a
            href="#"
            className="block text-center p-2 hover:bg-gray-100 transition-colors duration-200"
          >
            Videotheques
          </a>
          <a
            href="#"
            className="block text-center p-2 hover:bg-gray-100 transition-colors duration-200"
          >
            Liens
          </a>
          <a
            href="#"
            className="block text-center p-2 hover:bg-gray-100 transition-colors duration-200"
          >
            Contactez-nous
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
