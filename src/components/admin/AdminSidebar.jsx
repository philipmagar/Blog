import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { LayoutDashboard, PenSquare, List, MessageSquare, LogOut } from "lucide-react";

const AdminSidebar = () => {
    const navigate = useNavigate();

    const menuItems = [
        { name: "Dashboard", path: "/admin", icon: <LayoutDashboard size={20} /> },
        { name: "Add Blogs", path: "/admin/add", icon: <PenSquare size={20} /> },
        { name: "Blog Lists", path: "/admin/blogs", icon: <List size={20} /> },
        { name: "Comments", path: "/admin/comments", icon: <MessageSquare size={20} /> },
    ];

    return (
        <div className="w-64 h-screen bg-white text-gray-800 flex flex-col fixed left-0 top-0 border-r border-gray-100 shadow-sm">
            {/* Logo Section */}
            <div className="p-8 border-b border-gray-50">
                <span
                    onClick={() => navigate("/")}
                    className="text-3xl harlow-style text-[#6366f1] cursor-pointer tracking-wide block"
                >
                    Blog
                </span>
                <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-1 font-bold">Admin Portal</p>
            </div>

            {/* Navigation Section */}
            <nav className="flex-1 py-6 px-4">
                <ul className="space-y-2">
                    {menuItems.map((item) => (
                        <li key={item.name}>
                            <NavLink
                                to={item.path}
                                end={item.path === "/admin"}
                                className={({ isActive }) =>
                                    `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${isActive
                                        ? "bg-primary text-white shadow-lg shadow-primary/20"
                                        : "text-gray-500 hover:bg-gray-50 hover:text-primary"
                                    }`
                                }
                            >
                                <span className="group-hover:scale-110 transition-transform">
                                    {item.icon}
                                </span>
                                <span className="font-semibold text-sm">{item.name}</span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Bottom Section */}
            <div className="p-4 border-t border-gray-50">
                <button
                    onClick={() => navigate("/")}
                    className="flex items-center gap-3 w-full px-4 py-3 text-gray-500 hover:bg-red-50 hover:text-red-500 rounded-xl transition-all group font-semibold text-sm cursor-pointer"
                >
                    <LogOut size={20} className="group-hover:rotate-180 transition-transform duration-500" />
                    Logout
                </button>
            </div>
        </div>
    );
};

export default AdminSidebar;
