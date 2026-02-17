import { create } from "zustand";

export const useChatStore = create((set, get) => ({
    messages: [], // array of { id, auction_id, user_id, message, created_at }

    setMessages: (messages) => set({ messages: Array.isArray(messages) ? messages : [] }),

    addMessage: (msg) => {
        if (!msg) return;
        const current = get().messages;
        set({ messages: [...current, msg] }); // keep in chronological order
    },

    clearMessages: () => set({ messages: [] }),
}));
