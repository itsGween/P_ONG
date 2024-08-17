"use client";

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isCategoriesOpen, setCategoriesOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-gradient-to-l from-red-500 to-white text-gray-800 shadow-lg z-50">
        <div className="container mx-auto flex items-center justify-between px-4 py-3 md:py-4">
          {/* Logo à gauche */}
          <div className="text-xl font-bold cursor-pointer">
            <Link href="/">
              <img
                src="/assets/logo_ONG.png"
                alt="Logo"
                className="w-20 h-10 sm:w-40 sm:h-12 md:w-30 md:h-15 lg:w-40 lg:h-20"
              />
            </Link>
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
              href="#initiatives"
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
              href="#contact"
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
              href="#initatives"
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
              href="#contact"
              className="block text-center p-2 hover:bg-gray-100 transition-colors duration-200"
            >
              Contactez-nous
            </a>
          </div>
        )}
      </nav>

      {/* Padding top to account for fixed Navbar */}
      <div className="pt-20">{/* Main content here */}</div>
    </>
  );
};

export default Navbar;
