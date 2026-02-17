import { create } from "zustand";

export const useAuctionStore = create((set, get) => ({
    auction: null, // { id, gem_id, current_price, status, end_time, ... }

    setAuction: (auction) => set({ auction }),

    updateCurrentPrice: (newPrice) => {
        const a = get().auction;
        if (!a) return;
        set({ auction: { ...a, current_price: newPrice } });
    },

    updateStatus: (status) => {
        const a = get().auction;
        if (!a) return;
        set({ auction: { ...a, status } });
    },

    resetAuction: () => set({ auction: null }),
}));
