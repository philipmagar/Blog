import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import BlogList from "../components/BlogList";

const Home = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");

    return (
        <div className="min-h-screen bg-white">
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
        </div>
    );
};
export default Home;