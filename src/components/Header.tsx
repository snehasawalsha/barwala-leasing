"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import { headerData } from '@/data';

const Header: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [activePath, setActivePath] = useState<string>(pathname);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    setActivePath(pathname);
  }, [pathname]);

  const handleLinkClick = (e: React.MouseEvent<HTMLElement>, path: string, isContact: boolean = false): void => {
    e.preventDefault();
    if (isContact) {
      const section = document.getElementById('request-callback');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      setActivePath(path);
      setIsMenuOpen(false);
      router.push(path);
    }
  };

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-xl rounded-b-lg fixed top-0 left-0 w-full z-10">
      <div className="flex justify-between items-center h-16 ml-7">
        <div className="w-32 h-32 object-contain mt-4">
          <Image
            layout="intrinsic"
            src={headerData.logo.src}
            alt={headerData.logo.alt}
            width={100}
            height={40}

          />
        </div>
        <nav className="hidden md:block mr-16">
          <ul className="flex space-x-6">
            {headerData.navLinks.map((link, index) => {
              const isActive = activePath === link.path;
              return (
                <li key={index} className="relative group">
                  <Link
                    href={link.path}
                    passHref
                    onClick={(e) => handleLinkClick(e, link.path, link.label === 'Contact')}
                    className={`p-2 rounded-md transition-colors duration-200 
                      ${isActive ? 'text-blue-600 font-semibold' : 'text-gray-800 hover:text-blue-500'}`}
                  >
                    {link.label}
                  </Link>
                  <span className={`absolute left-0 -bottom-1 h-1 w-full bg-blue-500 scale-x-0 transition-transform duration-200 ${isActive ? 'scale-x-100' : ''}`}></span>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="md:hidden ">
          <button
            className="text-black p-2 rounded focus:outline-none transition duration-200"
            onClick={toggleMenu}
          >
            <svg className="w-6 h-6 inline-block ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="md:hidden p-4 rounded shadow-lg w-7/12 text-center right-2 absolute z-10 bg-white">
          <ul className="flex flex-col space-y-2 mt-2 w-full m-0">
            {headerData.navLinks.map((link, index) => {
              const isActive = activePath === link.path;
              return (
                <li key={index}>
                  <Link
                    href={link.path}
                    passHref
                    onClick={(e) => handleLinkClick(e, link.path, link.label === 'Contact')}
                    className={`block p-2 rounded-md transition-colors duration-200 
                      ${isActive ? 'text-blue-600 font-semibold' : 'text-gray-800 hover:text-blue-500'}`}
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