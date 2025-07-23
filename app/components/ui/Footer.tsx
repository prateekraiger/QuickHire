import { Link } from "react-router";
import { Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-700 py-12 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-primary mb-4">
              <img src="/quickhire.png" alt="QuickHire AI Logo" className="h-8 w-auto" />
              QuickHire AI
            </Link>
            <p className="text-gray-600 mt-2 text-base">
              Smart feedback for your dream job applications!
            </p>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-base hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-base hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-base hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/upload" className="text-base hover:text-primary transition-colors">
                  Upload Resume
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-base hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors" aria-label="GitHub">
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200 text-center md:flex md:justify-between md:text-left">
          <p className="text-base">&copy; {new Date().getFullYear()} QuickHire AI. All rights reserved.</p>
          <p className="text-base mt-2 md:mt-0">Designed with ❤️ for job seekers</p>
        </div>
      </div>
    </footer>
  );
}
