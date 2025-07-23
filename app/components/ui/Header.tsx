import { Link } from "react-router";
import { useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 border-b border-gray-100">
      <nav className="container mx-auto px-4 py-5 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 text-2xl md:text-3xl font-bold text-primary transition-colors hover:text-primary/80">
          <img src="/quickhire.png" alt="QuickHire AI Logo" className="h-8 w-auto" />
          QuickHire AI
        </Link>
        <div className="hidden md:flex space-x-8">
          <Link 
            to="/about" 
            className="text-lg font-medium text-gray-700 hover:text-primary transition-colors relative group"
          >
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link 
            to="/contact" 
            className="text-lg font-medium text-gray-700 hover:text-primary transition-colors relative group"
          >
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link 
            to="/upload" 
            className="text-lg font-medium text-gray-700 hover:text-primary transition-colors relative group"
          >
            Upload
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-gray-700 hover:text-primary transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg py-3 border-t border-gray-100 animate-in slide-in-from-top duration-300">
          <Link to="/about" className="block px-6 py-3 text-lg font-medium text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors">
            About
          </Link>
          <Link to="/contact" className="block px-6 py-3 text-lg font-medium text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors">
            Contact
          </Link>
          <Link to="/upload" className="block px-6 py-3 text-lg font-medium text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors">
            Upload
          </Link>
        </div>
      )}
    </header>
  );
}