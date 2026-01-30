import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
    const navigate = useNavigate()
    return (
        <div className="flex justify-between items-center py-3 mx-8 sm:mx-20 xl:mx-32">
            <span onClick={() => navigate("/")} className="text-3xl harlow-style text-primary cursor-pointer tracking-wide">
                Blog
            </span>
            <button onClick={() => navigate("/login")} className="flex items-center gap-2 rounded-full text-sm
            cursor-pointer bg-primary text-white px-10 py-2.5 hover:opacity-90 transition-all">
                Login
                <span className="text-lg">→</span>
            </button>
        </div>
    );
};

export default Navbar;

