import api from "./api";

const gemService = {
    async createGem(payload) {
        // payload: { name, description, carat, color, clarity, origin, certificate, image_url }
        const res = await api.post("/gems", payload);
        return res.data;
    },

    async getGemById(id) {
        const res = await api.get(`/gems/${id}`);
        return res.data;
    },
};

export default gemService;
