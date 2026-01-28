import React, { useState, useMemo } from "react";
import BlogCard from "./BlogCard";
import { motion } from "motion/react";

// Assets (You can add more images as needed)
import techImg from "../assets/blog_tech.png";
import startupImg from "../assets/blog_startup.png";
import financeImg from "../assets/blog_finance.png";

const BLOG_DATA = [
    {
        id: 1,
        title: "The Future of AI: Beyond Large Language Models",
        description: "Explore how the next generation of artificial intelligence will move towards reasoning, planning, and embodied cognition in the physical world.",
        type: "Technology",
        date: "Oct 24, 2025",
        readTime: "8 min read",
        author: "Alex Rivera",
        image: techImg
    },
    {
        id: 2,
        title: "How to Build a Sustainable Startup in 2026",
        description: "Ventures are shifting focus from growth-at-all-costs to sustainable unit economics and long-term value creation. Here is our roadmap.",
        type: "Startup",
        date: "Oct 22, 2025",
        readTime: "12 min read",
        author: "Sarah Chen",
        image: startupImg
    },
    {
        id: 3,
        title: "Digital Currencies and the Evolution of Modern Finance",
        description: "Central Bank Digital Currencies (CBDCs) are no longer a concept. Understand how they will reshape international trade and personal banking.",
        type: "Finance",
        date: "Oct 20, 2025",
        readTime: "10 min read",
        author: "Michael Ross",
        image: financeImg
    },
    {
        id: 4,
        title: "The Art of Freewriting: Unlocking Creative Flow",
        description: "Sometimes the best ideas come when you stop trying to control the outcome. Learn the techniques of unrestrained expression.",
        type: "Freewriting",
        date: "Oct 18, 2025",
        readTime: "5 min read",
        author: "Emma White",
        image: startupImg // Reuse for now
    },
    {
        id: 5,
        title: "Quantum Computing: Myths vs. Reality",
        description: "Demystifying what quantum computers can actually do today and what is still decades away from realization.",
        type: "Technology",
        date: "Oct 15, 2025",
        readTime: "15 min read",
        author: "Dr. James Bond",
        image: techImg
    },
    {
        id: 6,
        title: "Mastering Personal Finance in a High-Interest Era",
        description: "Strategies for saving, investing, and debt management when interest rates remain higher for longer than expected.",
        type: "Finance",
        date: "Oct 12, 2025",
        readTime: "7 min read",
        author: "Linda Wright",
        image: financeImg
    }
];

const CATEGORIES = ["All", "Technology", "Startup", "Finance", "Freewriting"];

const BlogList = ({ searchQuery, selectedCategory }) => {
    const filteredBlogs = useMemo(() => {
        return BLOG_DATA.filter((blog) => {
            const matchesCategory = selectedCategory === "All" || blog.type === selectedCategory;
            const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                blog.description.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        });
    }, [selectedCategory, searchQuery]);

    return (
        <div className="mx-8 sm:mx-20 xl:mx-32 py-16">
            {/* Blog Grid */}
            {filteredBlogs.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredBlogs.map((blog) => (
                        <BlogCard key={blog.id} blog={blog} />
                    ))}
                </div>
            ) : (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-20"
                >
                    <div className="text-4xl mb-4">🔍</div>
                    <h3 className="text-xl font-bold text-gray-800">No articles found</h3>
                    <p className="text-gray-500">Try adjusting your search or category filter.</p>
                </motion.div>
            )}
        </div>
    );
};

export default BlogList;
