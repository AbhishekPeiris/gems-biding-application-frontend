import React from "react";
import { formatTimeAgo } from "../../utils/formatDate";
import { useAuthStore } from "../../store/authStore";

export default function ChatMessage({ message }) {
    const { user } = useAuthStore();
    const isMine = user?.id === message.user_id;

    return (
        <div className={`flex ${isMine ? "justify-end" : "justify-start"}`}>
            <div
                className={`max-w-[75%] rounded-2xl px-4 py-2 text-sm ${isMine
                        ? "bg-indigo-600 text-white"
                        : "bg-slate-800 text-slate-200"
                    }`}
            >
                {!isMine && (
                    <p className="text-xs font-semibold text-indigo-400 mb-1">
                        User #{message.user_id}
                    </p>
                )}

                <p>{message.message}</p>

                <p className="mt-1 text-[10px] opacity-60 text-right">
                    {formatTimeAgo(message.created_at)}
                </p>
            </div>
        </div>
    );
}
