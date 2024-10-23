import React, { useState } from 'react';
import { FaCross, FaHammer } from 'react-icons/fa6';
import { RiCloseLine, RiMenu2Line } from 'react-icons/ri';
import { useNavigate, useLocation } from 'react-router-dom';


const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <div className="md:hidden">
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="fixed top-4 right-4 z-50 p-2 rounded-lg bg-black/20 backdrop-blur-sm border border-white/10"
      >
        {isOpen ? (
          <RiCloseLine className="w-6 h-6 text-white" />
        ) : (
          <RiMenu2Line className="w-6 h-6 text-white" />
        )}
      </button>

      {/* Navigation Menu */}
      <div
        className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-sm transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navItems.map((item) => (
            <button
              key={item.path}
              onClick={() => handleNavigation(item.path)}
              className={`font-cascadia text-2xl px-6 py-2 rounded-lg transition-colors ${
                location.pathname === item.path 
                ? 'text-[#FC874A]' 
                : 'text-white hover:text-[#FC874A]'
              }`}
            >
              {"{"}
              <span className="mx-2">{item.name}</span>
              {"}"}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;