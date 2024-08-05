"use client"

import { useState } from 'react';

const Navbar = () => {
  const [isCategoriesOpen, setCategoriesOpen] = useState(false);
  const [isProductsOpen, setProductsOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-gray-800 text-white">
      <div className="container mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        <div className="flex items-center">
          <div className="text-xl font-bold cursor-pointer mr-10">Logo ONG</div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#" className="hover:text-gray-300 transition-colors duration-200">Accueil</a>
            <div onMouseEnter={() => setCategoriesOpen(true)} onMouseLeave={() => setCategoriesOpen(false)} className="relative">
              <button className="hover:text-gray-300 transition-colors duration-200">Catégories</button>
              {isCategoriesOpen && (
                <ul className="absolute left-0 w-40 bg-gray-800 shadow-lg mt-2 py-1 z-50">
                  <li className="px-4 py-2 hover:bg-gray-700 transition-colors duration-200">Catégorie 1</li>
                  <li className="px-4 py-2 hover:bg-gray-700 transition-colors duration-200">Catégorie 2</li>
                  <li className="px-4 py-2 hover:bg-gray-700 transition-colors duration-200">Catégorie 3</li>
                </ul>
              )}
            </div>
            <a href="#" className="hover:text-gray-300 transition-colors duration-200">Services</a>
            <div onMouseEnter={() => setProductsOpen(true)} onMouseLeave={() => setProductsOpen(false)} className="relative">
              <button className="hover:text-gray-300 transition-colors duration-200">Produits</button>
              {isProductsOpen && (
                <ul className="absolute left-0 w-40 bg-gray-800 shadow-lg mt-2 py-1 z-50">
                  <li className="px-4 py-2 hover:bg-gray-700 transition-colors duration-200">Produit 1</li>
                  <li className="px-4 py-2 hover:bg-gray-700 transition-colors duration-200">Produit 2</li>
                  <li className="px-4 py-2 hover:bg-gray-700 transition-colors duration-200">Produit 3</li>
                </ul>
              )}
            </div>
          </div>
        </div>
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7"></path></svg>
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-700 py-2">
          <a href="#" className="block text-center p-2 hover:bg-gray-600 transition-colors duration-200">Accueil</a>
          <a href="#" className="block text-center p-2 hover:bg-gray-600 transition-colors duration-200">Catégories</a>
          <a href="#" className="block text-center p-2 hover:bg-gray-600 transition-colors duration-200">Services</a>
          <a href="#" className="block text-center p-2 hover:bg-gray-600 transition-colors duration-200">Produits</a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
