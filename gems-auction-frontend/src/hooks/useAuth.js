import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuthStore } from "../store/authStore";
import authService from "../services/authService";

export default function useAuth() {
    const navigate = useNavigate();
    const {
        user,
        token,
        setUser,
        setToken,
        logout
    } = useAuthStore();

    const isAuthenticated = !!token;

    const login = async (email, password) => {
        const res = await authService.login(email, password);

        setUser(res.user);
        setToken(res.token);

        if (res.user.role === "SELLER") {
            navigate("/seller");
        } else {
            navigate("/buyer");
        }
    };

    const register = async (data) => {
        await authService.register(data);
        navigate("/login");
    };

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    useEffect(() => {
        if (!token) return;
    }, [token]);

    return {
        user,
        token,
        isAuthenticated,
        login,
        register,
        logout: handleLogout,
    };
}
