import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";

export default function Sidebar() {
    const { user } = useAuthStore();
    const location = useLocation();

    const showSidebar =
        location.pathname.startsWith("/seller") ||
        location.pathname.startsWith("/buyer");

    if (!showSidebar) return null;

    const isSeller = user?.role === "SELLER";
    const isBuyer = user?.role === "BUYER";

    return (
        <div className="hidden md:block w-64 border-r border-slate-800 bg-slate-950">
            <div className="p-4">
                <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4">
                    <div className="text-sm font-semibold text-slate-100">
                        {user?.full_name || "User"}
                    </div>
                    <div className="text-xs text-slate-400">{user?.email || ""}</div>
                    <div className="mt-2 text-xs font-semibold text-indigo-300">
                        {user?.role || ""}
                    </div>
                </div>

                <div className="mt-4 space-y-2">
                    {isSeller && (
                        <>
                            <NavLink to="/seller" label="Seller Dashboard" />
                            {/* add more later */}
                        </>
                    )}

                    {isBuyer && (
                        <>
                            <NavLink to="/buyer" label="Buyer Dashboard" />
                            {/* add more later */}
                        </>
                    )}

                    {!isSeller && !isBuyer && (
                        <div className="text-sm text-slate-400">
                            No dashboard for this role.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

function NavLink({ to, label }) {
    const location = useLocation();
    const active = location.pathname === to;

    return (
        <Link
            to={to}
            className={[
                "block rounded-xl px-3 py-2 text-sm font-semibold transition",
                active
                    ? "bg-indigo-600 text-white"
                    : "bg-slate-900/40 text-slate-200 hover:bg-slate-800",
            ].join(" ")}
        >
            {label}
        </Link>
    );
}
