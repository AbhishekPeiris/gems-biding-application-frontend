import React, { useEffect, useRef } from "react";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import useChat from "../../hooks/useChat";

export default function ChatBox({ auctionId }) {
    const { messages, loadMessages, sendMessage } = useChat();
    const bottomRef = useRef(null);

    useEffect(() => {
        if (!auctionId) return;
        loadMessages(auctionId);
    }, [auctionId]);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    return (
        <div className="flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-950">

            <div className="border-b border-slate-800 px-4 py-3 font-semibold text-slate-200">
                Live Chat
            </div>

            <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
                {messages.length === 0 && (
                    <p className="text-sm text-slate-500 text-center">
                        No messages yet.
                    </p>
                )}

                {messages.map((msg) => (
                    <ChatMessage key={msg.id} message={msg} />
                ))}

                <div ref={bottomRef} />
            </div>

            <div className="border-t border-slate-800 p-3">
                <ChatInput
                    onSend={(text) => sendMessage(auctionId, text)}
                />
            </div>
        </div>
    );
}
