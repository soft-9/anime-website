import React from 'react';
import { FaBars, FaSearch, FaUser } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Nav: React.FC = () => {
  return (
    <div>
      <nav className="fixed z-50 grid w-full grid-cols-[1fr_auto_1fr] items-center bg-app-black/70 px-1 text-white backdrop-blur-xl md:px-6">
        <div className="flex items-center mx-[-5px]" id="left-nav">
          <button id="sidebar-menu-icon" className="px-2">
            <FaBars className="h-6 w-6 cursor-pointer transition hover:text-gray-400" />
          </button>
          <Link href="/games">
            <FaSearch className="mx-2 h-6 w-6 cursor-pointer transition hover:text-gray-400" />
          </Link>
        </div>

        <div className="grid h-[4rem] grid-cols-[auto_1fr_auto] items-center justify-center sm:grid-cols-[1fr_auto_1fr]">
          <div className="hidden text-end sm:block">
            <Link href="/games" className="mx-2 cursor-pointer transition hover:text-[#ff0000] xl:inline-block">
              GAMES
            </Link>
            <Link href="/groups" className="mx-2 cursor-pointer transition hover:text-[#ff0000] lg:inline-block">
              GROUPS
            </Link>
            <Link href="/protections" className="mx-2 cursor-pointer transition hover:text-[#ff0000]">
              PROTECTIONS
            </Link>
          </div>
          <div className="mx-3 md:mx-6 relative h-[50px]">
            <Link href="/">
              <img
                src="/public/assets/images/logo.png"
                className="animate-glow relative top-4 object-cover h-16 w-20"
                alt="Logo"
              />
              <div
                className="absolute h-[10rem] w-[10rem] cursor-auto bg-app-black/70"
                style={{
                  top: '-64px',
                  left: '-40px',
                  zIndex: -1,
                  clipPath: 'polygon(90% 80%, 70% 100%, 30% 100%, 10% 80%)',
                }}
              />
            </Link>
          </div>
          <div className="hidden sm:block">
            <span className="mx-2 cursor-not-allowed font-bold transition">FREE GAMES</span>
            <span className="mx-2 hidden cursor-not-allowed font-bold transition lg:inline-block">POINTS</span>
            <span className="mx-2 hidden cursor-not-allowed font-bold xl:inline-block">MARKET</span>
          </div>
        </div>

        <div className="flex items-center justify-end">
          <Link href="/login">
            <FaUser className="mx-2 h-6 w-6 text-gray-300 transition hover:text-gray-400" />
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
