import React, { useEffect } from 'react';
import { BookOpen, Calendar, MapPin, GraduationCap, Code, Server } from 'lucide-react';

export default function Education() {
  // Animation on page load
  useEffect(() => {
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add('visible');
      }, 300 * index);
    });
  }, []);

  const educationHistory = [
  {
    degree: 'Class X (Secondary)',
    institution: 'Krishna Convent H.S. School Gahal, Harda (M.P)',
    location: 'Harda',
    year: '2019',
    description: 'Percentage: 78.33%',
    icon: <BookOpen size={24} />, 
    color: 'amber'
  },
  {
    degree: 'Class XII (Senior Secondary)',
    institution: 'Maharishi Vidya Mandir H.S. School, Harda (M.P)',
    location: 'Harda',
    year: '2021',
    description: 'Percentage: 70.6%',
    icon: <BookOpen size={24} />, 
    color: 'green'
  },
  {
    degree: 'Bachelor of Technology (B.Tech)',
    institution: 'Shree Vaishnav Vidyapeeth Vishwavidyalaya, Indore (M.P)',
    location: 'Indore',
    year: '2022 – 2026',
    description: 'Computer Science & Engineering | CGPA: 6.5 / 10',
    icon: <GraduationCap size={24} />, 
    color: 'blue'
  },
  {
    degree: 'Web Development Certification',
    institution: 'The Prime Step',
    location: 'Indore',
    year: '2024',
    description: 'Comprehensive training in modern web development technologies including HTML5, CSS3, JavaScript, React, and responsive design principles.',
    icon: <Code size={24} />,
    color: 'purple'
  },
];

  // Function to get color classes based on category color
  const getColorClasses = (color) => {
    switch(color) {
      case 'blue':
        return {
          bg: 'bg-blue-600',
          light: 'bg-blue-900/30',
          text: 'text-blue-400',
          border: 'border-blue-800',
          timeline: 'border-blue-600'
        };
      case 'green':
        return {
          bg: 'bg-green-600',
          light: 'bg-green-900/30',
          text: 'text-green-400',
          border: 'border-green-800',
          timeline: 'border-green-600'
        };
      case 'amber':
        return {
          bg: 'bg-amber-600',
          light: 'bg-amber-900/30',
          text: 'text-amber-400',
          border: 'border-amber-800',
          timeline: 'border-amber-600'
        };
      case 'purple':
        return {
          bg: 'bg-purple-600',
          light: 'bg-purple-900/30',
          text: 'text-purple-400',
          border: 'border-purple-800',
          timeline: 'border-purple-600'
        };
      case 'indigo':
        return {
          bg: 'bg-indigo-600',
          light: 'bg-indigo-900/30',
          text: 'text-indigo-400',
          border: 'border-indigo-800',
          timeline: 'border-indigo-600'
        };
      default:
        return {
          bg: 'bg-gray-600',
          light: 'bg-gray-800/30',
          text: 'text-gray-400',
          border: 'border-gray-700',
          timeline: 'border-gray-600'
        };
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen py-16 text-gray-100">
      {/* Background elements */}
      <div className="fixed top-0 right-0 w-1/3 h-screen bg-blue-900/5 rounded-l-full blur-3xl -z-10"></div>
      <div className="fixed bottom-0 left-0 w-1/3 h-screen bg-purple-900/5 rounded-r-full blur-3xl -z-10"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-300 to-blue-500 mb-4">EDUCATION</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            My academic journey and professional certifications
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-gray-700 transform -translate-x-1/2 z-0"></div>

          {/* Education Items */}
          <div className="space-y-12">
            {educationHistory.map((education, index) => {
              const colorClasses = getColorClasses(education.color);
              const isEven = index % 2 === 0;

              return (
                <div key={index} className={`relative timeline-item ${isEven ? 'from-left' : 'from-right'}`}>
                  {/* Timeline dot */}
                  <div className={`absolute left-0 md:left-1/2 w-5 h-5 rounded-full ${colorClasses.bg} border-4 border-gray-900 transform -translate-x-1/2 z-10 glow`}></div>
                  
                  {/* Content */}
                  <div className={`md:w-1/2 ${isEven ? 'md:pr-12 md:ml-auto' : 'md:pl-12'}`}>
                    <div className={`bg-gray-800 p-6 rounded-lg shadow-lg border-l-4 ${colorClasses.border} hover:shadow-xl transition-all duration-500 hover:-translate-y-1 group`}>
                      {/* Year badge */}
                      <div className="flex justify-between items-center mb-4">
                        <div className={`${colorClasses.light} ${colorClasses.text} py-1 px-3 rounded-full flex items-center text-sm font-medium border border-gray-700`}>
                          <Calendar size={16} className="mr-1" />
                          {education.year}
                        </div>
                        <div className={`${colorClasses.bg} p-2 rounded-full text-white transform group-hover:rotate-12 transition-transform duration-300`}>
                          {education.icon}
                        </div>
                      </div>
                      
                      {/* Degree */}
                      <h3 className="text-xl font-bold text-white mb-2">{education.degree}</h3>
                      
                      {/* Institution and Location */}
                      <div className="space-y-2 mb-3">
                        <div className="flex items-center text-gray-300">
                          <BookOpen size={19} className="mr-2 text-gray-400" />
                          <span>{education.institution}</span>
                        </div>
                        <div className="flex items-center text-gray-300">
                          <MapPin size={18} className="mr-2 text-gray-400" />
                          <span>{education.location}</span>
                        </div>
                      </div>
                      
                      {/* Description */}
                      <p className="text-gray-400 mt-2 text-sm">{education.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-950 py-8 border-t border-gray-800 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
          <p>© 2025 Himanshu Gurjar. All rights reserved.</p>
        </div>
      </footer>

      {/* CSS for animations */}
      <style jsx>{`
        .timeline-item {
          opacity: 0;
          transition: all 0.6s ease-out;
        }
        
        .timeline-item.from-left {
          transform: translateX(-50px);
        }
        
        .timeline-item.from-right {
          transform: translateX(50px);
        }
        
        .timeline-item.visible {
          opacity: 1;
          transform: translateX(0);
        }
        
        .fade-in {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeIn 0.8s ease-out forwards;
        }
        
        @keyframes fadeIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .glow {
          box-shadow: 0 0 10px currentColor;
        }
      `}</style>
    </div>
  );
}