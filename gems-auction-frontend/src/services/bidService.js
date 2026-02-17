import api from "./api";

const bidService = {
    async placeBid(auction_id, amount) {
        const res = await api.post("/bids", { auction_id, amount });
        return res.data;
    },
};

export default bidService;
