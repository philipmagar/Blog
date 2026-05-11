import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import BlogList from "../components/BlogList";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Home = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");

    return (
        <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
            <Navbar />
            <Hero
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
            />
            <BlogList
                searchQuery={searchQuery}
                selectedCategory={selectedCategory}
            />
            <Newsletter />
            <Footer />
        </div>
    );
};
export default Home;