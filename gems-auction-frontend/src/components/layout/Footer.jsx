import React from "react";

export default function Footer() {
    return (
        <div className="border-t border-slate-800 bg-slate-950">
            <div className="mx-auto w-full max-w-6xl px-4 py-4 text-xs text-slate-500">
                © {new Date().getFullYear()} Boswin Group (Pvt) Ltd — Gems Auction Platform
            </div>
        </div>
    );
}
