import api from "./api";

const bidService = {
    async placeBid(auction_id, amount) {
        const res = await api.post("/bids", {
            auction_id: Number(auction_id),  // 👈 FORCE NUMBER
            amount: Number(amount),          // 👈 also force number
        });
        return res.data;
    }
};

export default bidService;
