import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Cpu, Mail, FileUser, GraduationCap, Menu, X, Code, ChevronRight } from 'lucide-react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { path: "/", name: "HOME", icon: <Home size={18} /> },
    { path: "/Skills", name: "SKILLS", icon: <Cpu size={18} /> },
    { path: "/Resume", name: "RESUME", icon: <FileUser size={18} /> },
    { path: "/Education", name: "EDUCATION", icon: <GraduationCap size={18} /> },
    { path: "/Contact", name: "CONTACT", icon: <Mail size={18} /> }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-white font-bold text-xl flex items-center gap-2 group">
              <div className="relative overflow-hidden">
                <Code className={`h-8 w-8 text-purple-500 transition-all duration-500 transform ${scrolled ? 'rotate-0' : 'rotate-0'} group-hover:rotate-12`} />
              </div>
              <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent font-extrabold">
                PORT<span className="text-white">FOLIO</span>
              </span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link 
                key={link.path}
                to={link.path}
                className={`relative px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 flex items-center gap-2 group
                  ${location.pathname === link.path 
                    ? 'text-purple-400' 
                    : 'text-gray-300 hover:text-white'}`}
              >
                <span className="transform transition-transform group-hover:scale-110">
                  {link.icon}
                </span>
                <span>{link.name}</span>
                {location.pathname === link.path && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 transform scale-x-100 transition-transform" />
                )}
              </Link>
            ))}
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500 transition-colors duration-300"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900 border-t border-gray-800">
          {navLinks.map((link) => (
            <Link 
              key={link.path}
              to={link.path} 
              className={`flex items-center gap-3 px-3 py-3 rounded-md text-base font-medium transition-all duration-300 transform hover:translate-x-2
                ${location.pathname === link.path 
                  ? 'text-purple-400 bg-gray-800' 
                  : 'text-gray-300 hover:text-purple-300'}`}
            >
              {link.icon}
              <span>{link.name}</span>
              <ChevronRight size={16} className="ml-auto opacity-50" />
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}