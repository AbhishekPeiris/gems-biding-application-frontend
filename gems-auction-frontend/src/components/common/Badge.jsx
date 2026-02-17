import React from "react";

export default function Badge({
    children,
    variant = "neutral", // neutral | success | warning | danger | live
    className = "",
}) {
    const variants = {
        neutral: "bg-slate-800 text-slate-200 border-slate-700",
        success: "bg-emerald-900/40 text-emerald-200 border-emerald-700/40",
        warning: "bg-amber-900/40 text-amber-200 border-amber-700/40",
        danger: "bg-rose-900/40 text-rose-200 border-rose-700/40",
        live: "bg-rose-600 text-white border-rose-500",
    };

    return (
        <span
            className={[
                "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold",
                variants[variant],
                className,
            ].join(" ")}
        >
            {variant === "live" ? (
                <span className="h-2 w-2 animate-pulse rounded-full bg-white" />
            ) : null}
            {children}
        </span>
    );
}
