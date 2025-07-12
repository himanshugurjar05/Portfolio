import React, { useState } from 'react'
import { Mail, Phone, MessageCircle, Instagram, Github, Linkedin, Send, User, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Contact() {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    
    const [isHovered, setIsHovered] = useState(null);

    const contactDetails = [
        {
            label: 'Email',
            value: 'himanshu.gurjar7999@gmail.com',
            icon: <Mail className="w-6 h-6" />,
            link: 'mailto:himanshu.gurjar7999@gmail.com',
            color: 'from-blue-600 to-blue-400'
        },
        {
            label: 'WhatsApp',
            value: '+91-6260604508',
            icon: <MessageCircle className="w-6 h-6" />,
            link: 'https://wa.me/+916260604508',
            color: 'from-green-600 to-green-400'
        },
        {
            label: 'Phone',
            value: '+91-6260604508',
            icon: <Phone className="w-6 h-6" />,
            link: 'tel:+916260604508',
            color: 'from-purple-600 to-purple-400'
        },
        {
            label: 'Instagram',
            value: '_himanshu.gurjar_',
            icon: <Instagram className="w-6 h-6" />,
            link: 'https://instagram.com/_himanshu.gurjar_',
            color: 'from-pink-600 to-orange-400'
        },
        {
            label: 'GitHub',
            value: 'github.com/himanshugurjar05',
            icon: <Github className="w-6 h-6"/>,
            link: 'https://github.com/AtulThakur27',
            color: 'from-gray-600 to-gray-400'
        },
        {
            label: 'LinkedIn',
            value: 'linkedin.com/in/himanshu-gurjar05',
            icon: <Linkedin className="w-6 h-6" />,
            link: 'https://www.linkedin.com/in/https://www.linkedin.com/in/atul-thakur-84708b2bb',
            color: 'from-blue-700 to-blue-500'
        }
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormState({
            ...formState,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Form submission logic here
        console.log(formState);
        // Reset form
        setFormState({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
    };

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 }
        }
    };

    return (
        <div className="bg-gray-900 min-h-screen py-16">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-5xl font-bold text-white mb-4">GET IN TOUCH</h1>
                    <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Feel free to reach out through any of the following channels
                    </p>
                </motion.div>

                {/* Contact Cards */}
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {contactDetails.map((detail, index) => (
                        <motion.a 
                            href={detail.link} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            key={index}
                            variants={itemVariants}
                            onMouseEnter={() => setIsHovered(index)}
                            onMouseLeave={() => setIsHovered(null)}
                            className="relative overflow-hidden bg-gray-800 border border-gray-700 rounded-lg shadow-xl group"
                        >
                            <div className="p-6">
                                <div className="flex items-center mb-4">
                                    <div className={`bg-gradient-to-r ${detail.color} p-3 rounded-full text-white mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                        {detail.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold text-white">{detail.label}</h3>
                                </div>
                                <p className="text-gray-300 break-words">{detail.value}</p>
                                <motion.div 
                                    className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r"
                                    initial={{ width: "0%" }}
                                    animate={{ width: isHovered === index ? "100%" : "0%" }}
                                    transition={{ duration: 0.3 }}
                                    style={{
                                        backgroundImage: `linear-gradient(to right, ${isHovered === index ? 'var(--tw-gradient-stops)' : 'transparent'})`
                                    }}
                                    // className={`${detail.color}`}
                                />
                            </div>
                        </motion.a>
                    ))}
                </motion.div>

                {/* Contact Form */}
                <motion.div 
                    className="bg-gray-800 rounded-lg shadow-xl p-8 border border-gray-700"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                >
                    <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                        <Send size={24} className="mr-3 text-blue-400" />
                        Send Me a Message
                    </h2>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                                <div className="relative">
                                    <input 
                                        type="text" 
                                        id="name"
                                        name="name"
                                        value={formState.name}
                                        onChange={handleInputChange}
                                        className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-white placeholder-gray-400"
                                        placeholder="Your name"
                                    />
                                    <User size={16} className="absolute left-3 top-3.5 text-gray-400" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                                <div className="relative">
                                    <input 
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formState.email}
                                        onChange={handleInputChange}
                                        className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-white placeholder-gray-400"
                                        placeholder="Your email"
                                    />
                                    <Mail size={16} className="absolute left-3 top-3.5 text-gray-400" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">Subject</label>
                            <input 
                                type="text"
                                id="subject"
                                name="subject"
                                value={formState.subject}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-white placeholder-gray-400"
                                placeholder="Subject"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                            <textarea 
                                id="message"
                                name="message"
                                value={formState.message}
                                onChange={handleInputChange}
                                rows="4" 
                                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-white placeholder-gray-400"
                                placeholder="Your message"
                            ></textarea>
                        </div>
                        <div>
                            <motion.button 
                                type="submit"
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-400 text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition group flex items-center justify-center"
                            >
                                Send Message
                                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </motion.button>
                        </div>
                    </form>
                </motion.div>
            </div>
        </div>
    );
}