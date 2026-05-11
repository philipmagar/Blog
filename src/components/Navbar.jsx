import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Moon, Sun } from "lucide-react";

const Navbar = () => {
    const navigate = useNavigate();
    const [darkMode, setDarkMode] = useState(() => {
        if (typeof window !== "undefined") {
            return localStorage.getItem("theme") === "dark" || 
            (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches);
        }
        return false;
    });

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    return (
        <div className="flex justify-between items-center py-3 mx-8 sm:mx-20 xl:mx-32">
            <span onClick={() => navigate("/")} className="text-3xl harlow-style text-primary cursor-pointer tracking-wide">
                Blog
            </span>
            <div className="flex items-center gap-4">
                <button 
                    onClick={() => setDarkMode(!darkMode)}
                    className="p-2 rounded-full cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
                    aria-label="Toggle Dark Mode"
                >
                    {darkMode ? <Sun size={20} className="text-gray-200" /> : <Moon size={20} className="text-gray-700" />}
                </button>
                <button onClick={() => navigate("/login")} className="flex items-center gap-2 rounded-full text-sm
                cursor-pointer bg-primary text-white px-10 py-2.5 hover:opacity-90 transition-all">
                    Login
                    <span className="text-lg">→</span>
                </button>
            </div>
        </div>
    );
};

export default Navbar;
