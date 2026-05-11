import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Lock, ArrowRight, Github } from "lucide-react";
import Navbar from "../components/Navbar";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real app, we would call the backend here
        // For now, we'll just redirect to dashboard
        navigate("/admin");
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-slate-950 transition-colors duration-300">
            <Navbar />
            
            <div className="flex flex-col items-center justify-center px-6 py-12 lg:py-24">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full max-w-md"
                >
                    <div className="bg-white dark:bg-slate-900 shadow-2xl rounded-3xl p-8 border border-gray-100 dark:border-slate-800">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Welcome Back</h2>
                            <p className="text-gray-500 dark:text-slate-400">Please enter your details to sign in</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-2">
                                    Email Address
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Mail className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        type="email"
                                        required
                                        className="block w-full pl-10 pr-3 py-3 border border-gray-200 dark:border-slate-700 rounded-xl bg-gray-50 dark:bg-slate-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                        placeholder="name@example.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="flex justify-between mb-2">
                                    <label className="block text-sm font-medium text-gray-700 dark:text-slate-300">
                                        Password
                                    </label>
                                    <a href="#" className="text-sm font-medium text-primary hover:underline">
                                        Forgot password?
                                    </a>
                                </div>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Lock className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        type="password"
                                        required
                                        className="block w-full pl-10 pr-3 py-3 border border-gray-200 dark:border-slate-700 rounded-xl bg-gray-50 dark:bg-slate-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                        placeholder="••••••••"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-primary text-white font-semibold hover:opacity-90 transform transition-all active:scale-[0.98] shadow-lg shadow-primary/25"
                            >
                                Sign In
                                <ArrowRight className="h-5 w-5" />
                            </button>
                        </form>

                        <div className="mt-8">
                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-gray-200 dark:border-slate-700"></div>
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="px-2 bg-white dark:bg-slate-900 text-gray-500">Or continue with</span>
                                </div>
                            </div>

                            <div className="mt-6">
                                <button
                                    type="button"
                                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-700 dark:text-white font-medium hover:bg-gray-50 dark:hover:bg-slate-700 transition-all"
                                >
                                    <Github className="h-5 w-5" />
                                    GitHub
                                </button>
                            </div>
                        </div>

                        <p className="mt-8 text-center text-sm text-gray-500 dark:text-slate-400">
                            Don't have an account?{" "}
                            <a href="#" className="font-medium text-primary hover:underline">
                                Sign up for free
                            </a>
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Login;
