import React from "react";
import { CheckCircle, XCircle, Trash2 } from "lucide-react";

const Comments = () => {
    const comments = [
        { id: 1, user: "Elena Rodriguez", blog: "Quantum computing still feels like magic...", status: "Pending", date: "Oct 25, 2025" },
        { id: 2, user: "Mark Thompson", blog: "Finance is getting complicated day by day...", status: "Approved", date: "Oct 24, 2025" },
        { id: 3, user: "David Miller", blog: "Incredible insights! I never thought...", status: "Approved", date: "Oct 23, 2025" },
        { id: 4, user: "Sophia Lee", blog: "Great write-up. The point about unit...", status: "Pending", date: "Oct 22, 2025" },
    ];

    return (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="p-8 border-b border-gray-50 bg-gray-50/30">
                <h3 className="text-xl font-bold text-gray-800">User Comments</h3>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="text-left border-b border-gray-50">
                            <th className="px-8 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">User</th>
                            <th className="px-8 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Comment Excerpt</th>
                            <th className="px-8 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Status</th>
                            <th className="px-8 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {comments.map((comment) => (
                            <tr key={comment.id} className="hover:bg-gray-50/50 transition-colors">
                                <td className="px-8 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-[10px] font-bold text-gray-400">
                                            {comment.user[0]}
                                        </div>
                                        <p className="text-sm font-bold text-gray-800">{comment.user}</p>
                                    </div>
                                </td>
                                <td className="px-8 py-4 text-xs text-gray-500 italic max-w-xs truncate">
                                    "{comment.blog}"
                                </td>
                                <td className="px-8 py-4">
                                    <span className={`text-[10px] font-bold px-2 py-1 rounded-full uppercase ${comment.status === "Approved" ? "text-green-500 bg-green-50" : "text-orange-500 bg-orange-50"
                                        }`}>
                                        {comment.status}
                                    </span>
                                </td>
                                <td className="px-8 py-4">
                                    <div className="flex items-center gap-3">
                                        {comment.status === "Pending" && (
                                            <button className="p-2 text-green-500 hover:bg-green-50 rounded-lg transition-all cursor-pointer" title="Approve">
                                                <CheckCircle size={16} />
                                            </button>
                                        )}
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
export default Comments;
