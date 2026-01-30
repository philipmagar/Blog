import React from "react";
import { Users, FileText, Eye, MessageCircle } from "lucide-react";

const Dashboard = () => {
    const stats = [
        { label: "Total Blogs", value: "24", icon: <FileText className="text-blue-500" />, trend: "+2 this week" },
        { label: "Total Views", value: "12,450", icon: <Eye className="text-purple-500" />, trend: "+12% vs last month" },
        { label: "Total Users", value: "1,200", icon: <Users className="text-orange-500" />, trend: "+5 new today" },
        { label: "Total Comments", value: "842", icon: <MessageCircle className="text-green-500" />, trend: "14 pending approval" },
    ];
    return (
        <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <div key={index} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-3 bg-gray-50 rounded-xl">
                                {stat.icon}
                            </div>
                            <span className="text-[10px] font-bold text-green-500 bg-green-50 px-2 py-1 rounded-full uppercase tracking-tighter">
                                {stat.trend}
                            </span>
                        </div>
                        <h3 className="text-3xl font-bold text-gray-800 mb-1">{stat.value}</h3>
                        <p className="text-gray-500 text-sm font-medium">{stat.label}</p>
                    </div>
                ))}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                    <h3 className="text-lg font-bold text-gray-800 mb-6 font-primary">Traffic Overview</h3>
                    <div className="h-64 flex items-center justify-center bg-gray-50 rounded-xl border border-dashed border-gray-200">
                        <p className="text-gray-400 text-sm italic italic">Analytics chart placeholder</p>
                    </div>
                </div>
                <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                    <h3 className="text-lg font-bold text-gray-800 mb-6">Recent Notifications</h3>
                    <div className="space-y-4">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="flex gap-4 pb-4 border-b border-gray-50 last:border-0 last:pb-0">
                                <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                                <div>
                                    <p className="text-sm font-bold text-gray-800">New comment on "The Future of AI"</p>
                                    <p className="text-xs text-gray-400 mt-1">2 minutes ago</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Dashboard;
