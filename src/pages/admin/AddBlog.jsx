import React, { useState } from "react";
import { ImagePlus, Send } from "lucide-react";

const AddBlog = () => {
    const [formData, setFormData] = useState({
        title: "",
        category: "Technology",
        description: "",
        content: "",
    });
    const categories = ["Technology", "Startup", "Finance", "Freewriting"];

    return (
        <div className="max-w-4xl bg-white rounded-2xl border border-gray-100 
        shadow-sm p-8">
            <h3 className="text-xl font-bold text-gray-800 mb-8 flex items-center 
            gap-2"><Send size={20} className="text-primary" />
                Craft Your Next Story
            </h3>
            <form className="space-y-6">
                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-widest 
                    text-[10px]">Title</label>
                    <input
                        type="text"
                        placeholder="e.g. The Rise of Quantum Computing"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl outline-none 
                        focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm"/>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-widest 
                        text-[10px]">Category</label>
                        <select className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl 
                        outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all 
                        text-sm appearance-none">
                            {categories.map(cat => <option key={cat}>{cat}</option>)}
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-widest text-[10px]">Featured Image</label>
                        <div className="flex items-center justify-center h-[50px] bg-gray-50 border border-dashed border-gray-200 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer text-gray-400 gap-2">
                            <ImagePlus size={16} />
                            <span className="text-xs font-semibold">Upload Image</span>
                        </div>
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-widest 
                    text-[10px]">Short Description</label>
                    <textarea
                        rows="3"
                        placeholder="A brief overview of the article..."
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl outline-none 
                        focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm resize-none"
                    ></textarea>
                </div>
                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-widest text-[10px]">Full Content</label>
                    <textarea
                        rows="10"
                        placeholder="Write your story here..."
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm resize-none"
                    ></textarea>
                </div>
                <div className="pt-4">
                    <button className="px-10 py-3 bg-primary text-white rounded-full text-sm font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer">
                        Publish Article
                    </button>
                </div>
            </form>
        </div>
    );
};
export default AddBlog;
