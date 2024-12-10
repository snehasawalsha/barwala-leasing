"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { headerData } from '../data';

const Header: React.FC = () => {
  const pathname = usePathname();
  const [activePath, setActivePath] = useState<string>(pathname);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false); 

  useEffect(() => {
    setActivePath(pathname);
  }, [pathname]);

  const handleLinkClick = (path: string): void => {
    setActivePath(path);
    setIsMenuOpen(false); 
  };

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen); 
  };

  return (
    <header className="bg-newColor text-black p-2 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src={headerData.logo.src}
            alt={headerData.logo.alt}
            className="mr-2 w-16 h-12 hover:text-gray-300"
          />
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            {headerData.navLinks.map((link, index) => {
              const isActive = activePath === link.path; 
              return (
                <li key={index} className="relative group" onClick={() => handleLinkClick(link.path)}> 
                  <Link 
                    href={link.path} 
                    passHref
                    className={`p-2 rounded-md 
                      ${isActive ? 'bg-gradient-to-b from-transparent to-blue-600' : 'to-blue-600'}`}
                  >
                    {link.label}
                  </Link> 
                  <span className={`absolute left-0 -bottom-1 h-1 w-full bg-gray-300 scale-x-0  ${isActive ? 'scale-x-100' : ''}`}></span>
                </li>
              );
            })}
          </ul>
        </nav>
       
        <div className="md:hidden">
          <button 
            className="bg-blue-500 text-white p-2 rounded focus:outline-none hover:bg-blue-600 transition duration-200" 
            onClick={toggleMenu}
          >
            <svg className="w-6 h-6 inline-block ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns ="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="md:hidden bg-blue-600 p-4 rounded shadow-lg w-7/12 text-center right-2 absolute z-10">
          <ul className="flex flex-col space-y-2 mt-2 w-full m-0">
            {headerData.navLinks.map((link, index) => {
              const isActive = activePath === link.path; 
              return (
                <li key={index} onClick={() => handleLinkClick(link.path)}>
                  <Link 
                    href={link.path} 
                    passHref
                    className={`block p-2 rounded-md 
                      ${isActive ? 'bg-gradient-to-b from-transparent to-blue-600' : 'to-blue-600'}`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;