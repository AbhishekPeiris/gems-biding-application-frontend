import api from "./api";

const auctionService = {
    async createAuction(payload) {
        // payload: { gem_id, start_price, min_increment, start_time, end_time }
        const res = await api.post("/auctions", payload);
        return res.data;
    },

    async getAuction(id) {
        const res = await api.get(`/auctions/${id}`);
        return res.data;
    },

    async startAuction(id) {
        const res = await api.post(`/auctions/${id}/start`);
        return res.data;
    },

    async endAuction(id, winner_id = null) {
        const res = await api.post(`/auctions/${id}/end`, { winner_id });
        return res.data;
    },
};

export default auctionService;
