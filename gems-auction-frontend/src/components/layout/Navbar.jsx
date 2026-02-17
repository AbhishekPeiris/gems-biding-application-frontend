import React from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "../common/Button";
import { useAuthStore } from "../../store/authStore";

export default function Navbar() {
    const { user, logout } = useAuthStore();
    const location = useLocation();

    const showNav =
        location.pathname.startsWith("/seller") ||
        location.pathname.startsWith("/buyer") ||
        location.pathname.startsWith("/auction");

    if (!showNav) return null;

    return (
        <div className="sticky top-0 z-40 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
            <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3">
                <Link to="/" className="flex items-center gap-2">
                    <div className="h-9 w-9 rounded-xl bg-indigo-600 flex items-center justify-center font-extrabold">
                        G
                    </div>
                    <div>
                        <div className="text-sm font-bold text-slate-100">
                            Gems Auction
                        </div>
                        <div className="text-xs text-slate-400">
                            Streaming & Live Bidding
                        </div>
                    </div>
                </Link>

                <div className="flex items-center gap-3">
                    <div className="text-right">
                        <div className="text-sm font-semibold text-slate-100">
                            {user?.full_name || "User"}
                        </div>
                        <div className="text-xs text-slate-400">{user?.role || ""}</div>
                    </div>

                    <Button variant="ghost" onClick={logout}>
                        Logout
                    </Button>
                </div>
            </div>
        </div>
    );
}
