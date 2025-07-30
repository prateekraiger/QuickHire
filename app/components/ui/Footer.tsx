import { Link } from "react-router";
import { Github, Linkedin, Twitter, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-gradient-to-br from-gray-50 to-gray-100 text-gray-700 border-t border-gray-200">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <Link
                to="/"
                className="flex items-center gap-3 text-2xl font-bold text-primary mb-6 hover:text-primary/80 transition-colors"
              >
                <img
                  src="/quickhire.png"
                  alt="QuickHire AI Logo"
                  className="h-10 w-auto"
                />
                <span>QuickHire AI</span>
              </Link>
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                Transform your career with AI-powered resume analysis. Get
                instant feedback, ATS optimization, and land your dream job
                faster.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://x.com/mrpratik753"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-600 hover:text-primary hover:bg-primary/10 rounded-lg transition-all duration-200"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/pratik-r1104/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-600 hover:text-primary hover:bg-primary/10 rounded-lg transition-all duration-200"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://github.com/prateekraiger"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-600 hover:text-primary hover:bg-primary/10 rounded-lg transition-all duration-200"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-6">
                Quick Links
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    to="/"
                    className="text-base text-gray-600 hover:text-primary transition-colors duration-200 flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      Home
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-base text-gray-600 hover:text-primary transition-colors duration-200 flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      About Us
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-base text-gray-600 hover:text-primary transition-colors duration-200 flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      Contact
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/upload"
                    className="text-base text-gray-600 hover:text-primary transition-colors duration-200 flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      Upload Resume
                    </span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-6">
                Resources
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    to="/privacy"
                    className="text-base text-gray-600 hover:text-primary transition-colors duration-200 flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      Privacy Policy
                    </span>
                  </Link>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-600 hover:text-primary transition-colors duration-200 flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      Terms of Service
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-600 hover:text-primary transition-colors duration-200 flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      Help Center
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-600 hover:text-primary transition-colors duration-200 flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      API Documentation
                    </span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-6">
                Get in Touch
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-600">
                  <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-base">hello@quickhire.ai</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-base">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-start gap-3 text-gray-600">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-base">
                    San Francisco, CA
                    <br />
                    United States
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600">
              &copy; {new Date().getFullYear()} QuickHire AI. All rights
              reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-600">
              <span className="flex items-center gap-2">
                Made with <span className="text-red-500">❤️</span> for job
                seekers
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
