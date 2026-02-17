import React from "react";

export default function Input({
    label,
    hint,
    error,
    className = "",
    inputClassName = "",
    ...props
}) {
    return (
        <div className={["w-full", className].join(" ")}>
            {label ? (
                <label className="mb-1 block text-sm font-medium text-slate-200">
                    {label}
                </label>
            ) : null}

            <input
                className={[
                    "w-full rounded-xl border px-3 py-2 text-sm outline-none transition",
                    "bg-slate-900 text-slate-100 placeholder:text-slate-500",
                    error
                        ? "border-rose-500 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/30"
                        : "border-slate-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30",
                    inputClassName,
                ].join(" ")}
                {...props}
            />

            {error ? (
                <p className="mt-1 text-xs text-rose-400">{error}</p>
            ) : hint ? (
                <p className="mt-1 text-xs text-slate-400">{hint}</p>
            ) : null}
        </div>
    );
}
