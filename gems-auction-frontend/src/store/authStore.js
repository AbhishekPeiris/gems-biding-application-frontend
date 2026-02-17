import { create } from "zustand";

const STORAGE_KEY = "gems_auth";

function loadAuth() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return { user: null, token: null };
        return JSON.parse(raw);
    } catch {
        return { user: null, token: null };
    }
}

function saveAuth(data) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch {
        // ignore
    }
}

const initial = loadAuth();

export const useAuthStore = create((set, get) => ({
    user: initial.user,
    token: initial.token,

    setUser: (user) => {
        set({ user });
        saveAuth({ user, token: get().token });
    },

    setToken: (token) => {
        set({ token });
        saveAuth({ user: get().user, token });
    },

    logout: () => {
        set({ user: null, token: null });
        try {
            localStorage.removeItem(STORAGE_KEY);
        } catch {
            // ignore
        }
    },
}));
