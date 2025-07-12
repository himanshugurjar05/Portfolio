import React, { useState, useEffect } from 'react'
import { Code, Palette, Briefcase, Server, Database, ChevronDown, ChevronUp } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Skills() {
  const [expanded, setExpanded] = useState(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Start animations after initial render
    setAnimate(true);
  }, []);

  const skillCategories = [
    {
      category: "Programming Languages",
      icon: <Code size={24} />,
      color: "blue",
      skills: [
        { name: "C", level: 75 },
        { name: "C++", level: 85 },
        // { name: "PYTHON", level: 90 },
        { name: "JAVASCRIPT", level: 80 },
    
      ]
    },
    {
      category: "Frontend Technologies",
      icon: <Code size={24} />,
      color: "blue",
      skills: [
        { name: "REACT", level: 90 },
        { name: "JAVASCRIPT", level: 80 },
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 },
        { name: "TAILWIND CSS", level: 80 },
        { name: "BOOTSTRAP", level: 75 }
      ]
    },
    // {
    //   category: "Data Structures & Algorithms",
    //   icon: <Database size={24} />,
    //   color: "amber",
    //   skills: [
    //     { name: "Linear DS", level: 90 },
    //     { name: "Non-Linear", level: 80},
    //     { name: "Graph", level: 70 },
    //     { name: "Algorithms", level: 75 }
    //   ]
    // },
    {
      category: "Backend Technologies",
      icon: <Server size={24} />,
      color: "amber",
      skills: [
        { name: "NODE.JS", level: 75 },
        { name: "EXPRESS.JS", level: 85 },
        { name: "REST API", level: 85 },
        { name: "SQL", level: 70 }
      ]
    },
    {
      category: "Developer Tools",
      icon: <Palette size={24} />,
      color: "teal",
      skills: [
        { name: "VS Code", level: 90 },
        { name: "POSTMAN", level: 70 },
        { name: "AWS", level: 60 }
      ]
    },
    {
      category: "Other Technologies",
      icon: <Briefcase size={24} />,
      color: "cyan",
      skills: [
        { name: "GIT", level: 75 },
        { name: "GITHUB", level: 80 },
        { name: "RESPONSIVE DESIGN", level: 90 }
      ]
    }
  ];

  // Function to get color classes based on category color
  const getColorClasses = (color) => {
    switch(color) {
      case 'blue':
        return {
          bg: 'bg-blue-500',
          light: 'bg-blue-900/30',
          text: 'text-blue-400',
          border: 'border-blue-800',
          progressBg: 'bg-blue-900/50',
          progressFill: 'bg-blue-500'
        };
      case 'purple':
        return {
          bg: 'bg-purple-500',
          light: 'bg-purple-900/30',
          text: 'text-purple-400',
          border: 'border-purple-800',
          progressBg: 'bg-purple-900/50',
          progressFill: 'bg-purple-500'
        };
      case 'teal':
        return {
          bg: 'bg-teal-500',
          light: 'bg-teal-900/30',
          text: 'text-teal-400',
          border: 'border-teal-800',
          progressBg: 'bg-teal-900/50',
          progressFill: 'bg-teal-500'
        };
      case 'cyan':
        return {
          bg: 'bg-cyan-500',
          light: 'bg-cyan-900/30',
          text: 'text-cyan-400',
          border: 'border-cyan-800',
          progressBg: 'bg-cyan-900/50',
          progressFill: 'bg-cyan-500'
        };
      case 'amber':
        return {
          bg: 'bg-amber-500',
          light: 'bg-amber-900/30',
          text: 'text-amber-400',
          border: 'border-amber-800',
          progressBg: 'bg-amber-900/50',
          progressFill: 'bg-amber-500'
        };
      default:
        return {
          bg: 'bg-gray-500',
          light: 'bg-gray-800',
          text: 'text-gray-400',
          border: 'border-gray-700',
          progressBg: 'bg-gray-800',
          progressFill: 'bg-gray-500'
        };
    }
  };

  const toggleCategory = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const skillVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: { duration: 1, ease: "easeOut", delay: 0.3 }
    })
  };

  return (
    <div className="bg-gray-900 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-bold text-white mb-4">MY SKILLS</h1>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Exploring the technologies that drive my passion for web development
          </p>
        </motion.div>

        {/* Skills Content */}
        <motion.div 
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate={animate ? "visible" : "hidden"}
        >
          {skillCategories.map((category, index) => {
            const colorClasses = getColorClasses(category.color);
            const isOpen = expanded === index;
            
            return (
              <motion.div 
                key={index} 
                className="bg-gray-800 rounded-lg shadow-xl overflow-hidden border border-gray-700"
                variants={itemVariants}
              >
                <div 
                  className="p-6 cursor-pointer"
                  onClick={() => toggleCategory(index)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className={`${colorClasses.bg} p-3 rounded-lg mr-4 text-white shadow-lg`}>
                        {category.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-white">{category.category}</h3>
                    </div>
                    {isOpen ? 
                      <ChevronUp className="text-gray-400" size={24} /> : 
                      <ChevronDown className="text-gray-400" size={24} />
                    }
                  </div>
                </div>
                
                <motion.div 
                  className="px-6 pb-6"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ 
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0,
                    display: isOpen ? "block" : "none"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div 
                        key={skillIndex} 
                        className={`border ${colorClasses.border} rounded-lg p-4 ${colorClasses.light} hover:shadow-lg transition duration-300`}
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-semibold text-white">{skill.name}</span>
                          <span className={`${colorClasses.text} font-bold`}>{skill.level}%</span>
                        </div>
                        <div className={`w-full h-2 ${colorClasses.progressBg} rounded-full overflow-hidden`}>
                          <motion.div 
                            className={`h-full ${colorClasses.progressFill} rounded-full`}
                            custom={skill.level}
                            variants={skillVariants}
                            initial="hidden"
                            animate={isOpen ? "visible" : "hidden"}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}