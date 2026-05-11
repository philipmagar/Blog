import React from "react";
import { Github, Twitter, Linkedin, Mail, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-slate-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6 py-12 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Brand Section */}
                    <div className="col-span-1 md:col-span-2">
                        <span 
                            onClick={() => navigate("/")} 
                            className="text-3xl harlow-style text-primary cursor-pointer tracking-wide block mb-4"
                        >
                            Blogify
                        </span>
                        <p className="text-gray-500 dark:text-slate-400 max-w-sm mb-6">
                            A platform where thoughts find their voice. Sharing insights, stories, and expertise on design, development, and technology.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="p-2 rounded-full bg-gray-50 dark:bg-slate-800 text-gray-400 hover:text-primary transition-all">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="p-2 rounded-full bg-gray-50 dark:bg-slate-800 text-gray-400 hover:text-primary transition-all">
                                <Github size={20} />
                            </a>
                            <a href="#" className="p-2 rounded-full bg-gray-50 dark:bg-slate-800 text-gray-400 hover:text-primary transition-all">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
                            Quick Links
                        </h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-500 dark:text-slate-400 hover:text-primary transition-colors">Home</a></li>
                            <li><a href="#" className="text-gray-500 dark:text-slate-400 hover:text-primary transition-colors">Explore</a></li>
                            <li><a href="#" className="text-gray-500 dark:text-slate-400 hover:text-primary transition-colors">About Us</a></li>
                            <li><a href="#" className="text-gray-500 dark:text-slate-400 hover:text-primary transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Newsletter Info */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
                            Support
                        </h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-500 dark:text-slate-400 hover:text-primary transition-colors">Help Center</a></li>
                            <li><a href="#" className="text-gray-500 dark:text-slate-400 hover:text-primary transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="text-gray-500 dark:text-slate-400 hover:text-primary transition-colors">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-100 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-gray-500 dark:text-slate-400">
                        &copy; {currentYear} Blogify. All rights reserved.
                    </p>
                    <p className="text-sm text-gray-500 dark:text-slate-400 flex items-center gap-1">
                        Made with <Heart size={14} className="text-red-500 fill-current" /> by the Blogify Team
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
