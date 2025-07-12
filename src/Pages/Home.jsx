import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Download, Code, Briefcase, User, ChevronDown } from "lucide-react";
import myimage from "./Media/MyImg.png";

export default function Home() {
  // Animation effect for when page loads
  useEffect(() => {
    // Animate elements with fade-in class
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add('visible');
      }, 200 * index);
    });

    // Animate skill items with slide-up class
    const slideElements = document.querySelectorAll('.slide-up');
    slideElements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add('visible');
      }, 100 * (index + 3));
    });
  }, []);

  // Smooth scroll to projects section
  const scrollToProjects = () => {
    document.getElementById('projects').scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    
    <div className="bg-gray-900 min-h-screen text-gray-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        {/* Background gradient circles for visual interest */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-10 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-10 translate-x-1/2 translate-y-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Hero Text */}
            <div className="md:w-1/2 space-y-6 fade-in">
              <div className="inline-block px-4 py-1 bg-blue-900/30 rounded-full text-blue-400 font-medium mb-4 border border-blue-700/50">
              MERN Stack Developer
              </div>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-blue-400">
                HIMANSHU GURJAR
              </h1>
              <p className="text-xl text-gray-300 max-w-lg leading-relaxed">
                Transforming ideas into elegant digital solutions with passion
                and precision. Specializing in MERN Full Stack development.
              </p>

              <div className="flex flex-wrap gap-4 pt-6">
                <Link
                  to="/Resume"
                  className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 font-semibold py-3 px-6 rounded-md shadow-lg shadow-blue-900/30 flex items-center gap-2 group"
                >
                  <Download size={18} className="group-hover:translate-y-0.5 transition-transform duration-300" />
                  RESUME
                </Link>
                <button
                  onClick={scrollToProjects}
                  className="bg-gray-800 text-white hover:bg-gray-700 border border-gray-700 transition-all duration-300 font-semibold py-3 px-6 rounded-md shadow-md flex items-center gap-2 group"
                >
                  <ChevronDown size={18} className="group-hover:translate-y-1 transition-transform duration-300" />
                  VIEW PROJECTS
                </button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="md:w-1/2 fade-in" style={{animationDelay: "300ms"}}>
              <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 backdrop-blur-sm rounded-2xl border border-gray-700/50 shadow-2xl p-2 hover:scale-[1.01] transition-transform duration-500">
                <div className="overflow-hidden rounded-xl">
                  <img 
                    className="w-full h-[650px] object-cover transform transition-transform hover:scale-105 duration-700" 
                    src={myimage}
                    alt="Himanshu Gurjar" 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Subtle divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
      </div>

      {/* Skills Section */}
      <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl font-bold text-center mb-12 text-gray-100 flex items-center justify-center gap-2 fade-in">
          <Code size={24} className="text-blue-400" />
          MY CORE SKILLS
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { name: "REACT", color: "from-blue-500 to-blue-700", delay: 0 },
            { name: "Node.JS", color: "from-green-500 to-green-700", delay: 0 },
            { name: "Express.JS", color: "from-cyan-500 to-cyan-700", delay: 2 },
            {name : "C++", color: "from-red-500 to-red-700", delay: 0},
            { name: "JAVASCRIPT", color: "from-yellow-500 to-yellow-700", delay: 1 },
            // { name: "DRF", color: "from-purple-500 to-purple-700", delay: 3 },
            { name: "REDUXJS", color: "from-blue-400 to-blue-600", delay: 4 },
            { name: "DSA", color: "from-orange-500 to-orange-700", delay: 5 }
          ].map((skill, index) => (
            <div 
              key={index}
              className="slide-up bg-gray-800 rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-500 hover:-translate-y-1 cursor-pointer border border-gray-700"
              style={{animationDelay: `${skill.delay * 100}ms`}}
            >
              <div className={`h-1 w-full bg-gradient-to-r ${skill.color}`}></div>
              <div className="p-6 flex items-center justify-center">
                <span className="font-semibold text-gray-200 group-hover:text-white transition-colors duration-300">{skill.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* About Section */}
      <div className="bg-gray-800/50 py-20 fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-100 flex items-center justify-center gap-2">
            <User size={24} className="text-blue-400" />
            ABOUT ME
          </h3>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto text-center leading-relaxed">
            A passionate Software developer with a keen eye for creating responsive and
            user-friendly web applications. I blend creativity with technical
            expertise to deliver innovative solutions that exceed expectations.
          </p>
        </div>
      </div>

      {/* Recent Projects */}
      <div id="projects" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 fade-in">
        <h3 className="text-2xl font-bold text-center mb-12 text-gray-100 flex items-center justify-center gap-2">
          <Briefcase size={24} className="text-blue-400" />
          RECENT PROJECTS
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-gray-700">
            <div className="h-48 bg-gradient-to-r from-blue-600 to-blue-800 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              <Code size={48} className="text-white transform group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="p-6">
              <h4 className="text-xl font-bold text-gray-100 mb-2">
                UPSKILL PLATFORM
              </h4>
              <p className="text-gray-400 mb-4">
                Full-stack web application with modern features
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-900/50 text-blue-300 text-sm font-medium px-2.5 py-0.5 rounded border border-blue-800/50">
                  REACT
                </span>
                <span className="bg-blue-900/50 text-blue-300 text-sm font-medium px-2.5 py-0.5 rounded border border-blue-800/50">
                  NODE.JS
                </span>
                <span className="bg-green-900/50 text-green-300 text-sm font-medium px-2.5 py-0.5 rounded border border-green-800/50">
                  EXPRESS.JS
                </span>
              </div>
            </div>
          </div>
          <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-gray-700">
            <div className="h-48 bg-gradient-to-r from-purple-600 to-purple-800 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              <Briefcase size={48} className="text-white transform group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="p-6">
              <h4 className="text-xl font-bold text-gray-100 mb-2">
                HOSPITAL MANAGEMENT SYSTEM
              </h4>
              <p className="text-gray-400 mb-4">
                Collaborative productivity tool
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-purple-900/50 text-purple-300 text-sm font-medium px-2.5 py-0.5 rounded border border-purple-800/50">
                  REACT
                </span>
                <span className="bg-orange-900/50 text-orange-300 text-sm font-medium px-2.5 py-0.5 rounded border border-orange-800/50">
                  NODE.JS
                </span>
                <span className="bg-orange-900/50 text-orange-300 text-sm font-medium px-2.5 py-0.5 rounded border border-orange-800/50">
                  EXPRESS.JS
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-950 py-8 border-t border-gray-800 fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">© 2025 Himanshu Gurjar. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link to="/Contact" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
              Contact
            </Link>
            <Link to="/Skills" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
              Skills
            </Link>
            <Link to="/Education" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
              Education
            </Link>
          </div>
        </div>
      </footer>

      {/* CSS for animations */}
      <style jsx>{`
        .fade-in {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        
        .slide-up {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.5s ease-out, transform 0.5s ease-out;
        }
        
        .fade-in.visible, .slide-up.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
}