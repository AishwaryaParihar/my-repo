import React, { useState, useEffect, useRef } from 'react';
import { navItems } from '../data/navItem';

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight / 4) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
        setIsOpen(false); // Close menu when scrolled back to top
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="fixed top-1/2 right-0 transform translate-y-[-50%] z-50 md:hidden">
        <div className="transform rotate-[-90deg]">
          <div
            className="bg-primary py-2 px-4 text-white border border-primary text-lg rounded-t-lg cursor-pointer"
            onClick={toggleMenu}
          >
            <span className="text-white">
              <i className="fas fa-bars"></i>
            </span>
          </div>
        </div>
      </div>

      {isScrolled && (
        <div className="fixed top-1/2 right-0 transform translate-y-[-50%] z-50 hidden md:block">
          <div className="transform rotate-[-90deg]">
            <div
              className="bg-primary py-2 px-4 text-white border border-primary text-lg rounded-t-lg cursor-pointer"
              onClick={toggleMenu}
            >
              <span className="text-white">
                <i className="fas fa-bars"></i>
              </span>
            </div>
          </div>
        </div>
      )}

      {isOpen && (
        <div ref={menuRef} className="fixed top-1/2 right-12 transform translate-y-[-50%] bg-white border border-gray-200 rounded shadow-lg z-40">
          <nav>
            <ul>
              {navItems.map((item) => (
                <li key={item.name} className="mb-2">
                  <a href={item.href} className="text-gray-700 hover:bg-red-500 hover:text-white block px-4 py-2 rounded">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Hamburger;
