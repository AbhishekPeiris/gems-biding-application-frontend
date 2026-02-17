import { create } from "zustand";

export const useBidStore = create((set, get) => ({
    bids: [], // array of { id, auction_id, user_id, amount, created_at }

    setBids: (bids) => set({ bids: Array.isArray(bids) ? bids : [] }),

    addBid: (bid) => {
        if (!bid) return;
        const current = get().bids;
        set({ bids: [bid, ...current] }); // newest first
    },

    clearBids: () => set({ bids: [] }),
}));
