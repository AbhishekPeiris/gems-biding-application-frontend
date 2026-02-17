import api from "./api";

const authService = {
    async register({ full_name, email, password, role }) {
        const res = await api.post("/auth/register", {
            full_name,
            email,
            password,
            role, // "SELLER" | "BUYER" | "ADMIN"
        });
        return res.data;
    },

    async login(email, password) {
        const res = await api.post("/auth/login", { email, password });
        // returns { token, user }
        return res.data;
    },
};

export default authService;
