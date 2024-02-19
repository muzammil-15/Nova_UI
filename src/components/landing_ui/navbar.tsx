"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";



const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    // Close the menu by default on screens above md
    setMenuOpen(false);
  }, []);

  return (
    <nav className="sticky top-0 left-0 shadow-lg z-[100]">
      <div className="max-w-screen-xl  flex items-center justify-between mx-auto p-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse text-xl md:text-3xl font-[800] text_primary"
        >
          NovaUI
        </Link>
        <button
          onClick={toggleMenu}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex relative items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen ? "true" : "false"}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={` md:flex md:w-auto ${
            isMenuOpen ? "block absolute top-20 right-10 rounded-lg w-[180px] shadow-md" : "hidden bg-transparent"
          }`}
          
        >
          <ul className="text-[16px] font-[500] flex flex-col p-4 md:p-0   md:flex-row md:space-x-8  ">
            <li>
              <Link
                href="/"
                className="block py-2 px-3  rounded    text_primary hover:text-[#020508] hover:bg-[#0f172a15]"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/getting-started"
                className="block py-2 px-3  rounded    text_primary hover:text-[#020508] hover:bg-[#0f172a15]"
              >
                Getting Started
              </Link>
            </li>
            <li>
              <Link
                href="/components"
                className="block py-2 px-3  rounded  text_primary hover:text-[#020508]   hover:bg-[#0f172a15]"
              >
                Components
              </Link>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;