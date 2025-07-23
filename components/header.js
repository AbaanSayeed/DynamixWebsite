"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar(){
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    // Function to determine if a link is active
    const isActive = (path) => pathname === path;

    return (
    <nav className="bg-black shadow-lg pb-2 pt-2">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-4  ">
          <div className="w-16 h-16 rounded-full overflow-hidden relative">
<Image src={"/logo.png"}  objectFit="cover" layout="fill" alt="logo"></Image>
          </div>
            {/* Logo */}
            
            <div>
              <Link href="/" className="flex items-center py-5 px-2 text-gray-100">
              
                <span className="font-bold">Synap</span>
              </Link>
            </div>
            
            {/* Primary Nav */}
            <div className="hidden md:flex items-center space-x-1">
              <Link 
                href="/" 
                className={`py-5 px-3 ${isActive('/') ? 'text-green-400 font-bold' : 'text-gray-100'} hover:text-green-400`}
              >
                Home
              </Link>
             <Link 
                href="/about" 
                className={`py-5 px-3 ${isActive('/about') ? 'text-green-400 font-bold' : 'text-gray-100'} hover:text-green-400`}
             >
                About
             </Link>
           
             <Link 
                href="/extractor" 
                className={`py-5 px-3 ${isActive('/extractor') ? 'text-green-400 font-bold' : 'text-gray-100'} hover:text-green-400`}
             >
                Extractor
             </Link>
             
             <Link 
                href="/swarms" 
                className={`py-5 px-3 ${isActive('/swarms') ? 'text-green-400 font-bold' : 'text-gray-100'} hover:text-green-400`}
             >
                Swarms
             </Link>
             
            </div>
          </div>
          
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="mobile-menu-button p-2 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
              <svg className="h-6 w-6 text-gray-100" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <Link 
          href="/" 
          className={`block py-2 px-4 text-sm ${isActive('/') ? 'bg-green-600 text-white' : 'text-gray-100'} hover:bg-gray-700`}
        >
          Home
        </Link>
        <Link 
          href="/about" 
          className={`block py-2 px-4 text-sm ${isActive('/about') ? 'bg-green-600 text-white' : 'text-gray-100'} hover:bg-gray-700`}
        >
          About
        </Link>
        <Link 
                href="/extractor" 
                className={`py-5 px-3 ${isActive('/extractor') ? 'text-green-400 font-bold' : 'text-gray-100'} hover:text-green-400`}
             >
                Extractor
             </Link>
             
             <Link 
                href="/swarms" 
                className={`py-5 px-3 ${isActive('/swarms') ? 'text-green-400 font-bold' : 'text-gray-100'} hover:text-green-400`}
             >
                Swarms
             </Link>
     
      </div>
    </nav>
  );
}