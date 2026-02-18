import { create } from "zustand";

export const useChatStore = create((set, get) => ({
    messages: [], // array of { id, auction_id, user_id, message, created_at }

    setMessages: (messages) => set({ messages: Array.isArray(messages) ? messages : [] }),

    addMessage: (msg) => {
        if (!msg) return;

        const current = get().messages;

        // Prevent duplicate IDs
        const exists = current.some(m => m.id === msg.id);
        if (exists) return;

        set({ messages: [...current, msg] });
    },


    clearMessages: () => set({ messages: [] }),
}));
