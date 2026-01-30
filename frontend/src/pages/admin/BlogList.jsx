import React from "react";
import { Edit2, Trash2, Eye } from "lucide-react";
import { BLOG_DATA } from "../../data";

const BlogList = () => {
    return (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="p-8 border-b border-gray-50 flex justify-between items-center bg-gray-50/30">
                <h3 className="text-xl font-bold text-gray-800">Existing Articles</h3>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Total: 
                    {BLOG_DATA.length}</span>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="text-left border-b border-gray-50">
                            <th className="px-8 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Article</th>
                            <th className="px-8 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Category</th>
                            <th className="px-8 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Date</th>
                            <th className="px-8 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {BLOG_DATA.map((blog) => (
                            <tr key={blog.id} className="hover:bg-gray-50/50 transition-colors">
                                <td className="px-8 py-4">
                                    <div className="flex items-center gap-4">
                                        <img src={blog.image} className="w-10 h-10 rounded-lg object-cover" 
                                        alt="" /><p className="text-sm font-bold text-gray-800 max-w-xs truncate">
                                            {blog.title}</p>
                                    </div>
                                </td>
                                <td className="px-8 py-4">
                                    <span className="text-[10px] font-bold text-primary bg-primary/5 px-2 py-1 rounded-full uppercase">
                                        {blog.type}
                                    </span>
                                </td>
                                <td className="px-8 py-4">
                                    <span className="text-xs text-gray-500 font-medium">{blog.date}</span>
                                </td>
                                <td className="px-8 py-4">
                                    <div className="flex items-center gap-3">
                                        <button className="p-2 text-blue-500 hover:bg-blue-50 rounded-lg transition-all cursor-pointer" title="View">
                                            <Eye size={16} />
                                        </button>
                                        <button className="p-2 text-indigo-500 hover:bg-indigo-50 rounded-lg transition-all cursor-pointer" title="Edit">
                                            <Edit2 size={16} />
                                        </button>
                                        <button className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-all cursor-pointer" title="Delete">
                                            <Trash2 size={16} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
export default BlogList;
