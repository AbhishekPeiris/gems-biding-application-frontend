import React from "react";

export default function Button({
    children,
    variant = "primary", // primary | secondary | danger | ghost
    size = "md", // sm | md | lg
    loading = false,
    disabled = false,
    className = "",
    type = "button",
    ...props
}) {
    const base =
        "inline-flex items-center justify-center rounded-xl font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-950";

    const variants = {
        primary:
            "bg-indigo-600 text-white hover:bg-indigo-500 focus:ring-indigo-500",
        secondary:
            "bg-slate-800 text-slate-100 hover:bg-slate-700 focus:ring-slate-500",
        danger: "bg-rose-600 text-white hover:bg-rose-500 focus:ring-rose-500",
        ghost:
            "bg-transparent text-slate-100 hover:bg-slate-800/60 focus:ring-slate-500",
    };

    const sizes = {
        sm: "h-9 px-3 text-sm",
        md: "h-11 px-4 text-sm",
        lg: "h-12 px-5 text-base",
    };

    const isDisabled = disabled || loading;

    return (
        <button
            type={type}
            disabled={isDisabled}
            className={[
                base,
                variants[variant],
                sizes[size],
                isDisabled ? "opacity-60 cursor-not-allowed" : "",
                className,
            ].join(" ")}
            {...props}
        >
            {loading ? (
                <span className="inline-flex items-center gap-2">
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    <span>Loading</span>
                </span>
            ) : (
                children
            )}
        </button>
    );
}
