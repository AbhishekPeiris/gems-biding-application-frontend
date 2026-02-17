import api from "./api";

const chatService = {
    async sendMessage(auction_id, message) {
        const res = await api.post("/chat", { auction_id, message });
        return res.data;
    },

    async getMessages(auction_id) {
        const res = await api.get(`/chat/auction/${auction_id}`);
        // returns { auction_id, messages: [...] }
        return res.data;
    },
};

export default chatService;
