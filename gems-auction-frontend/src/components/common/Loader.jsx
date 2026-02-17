import React from "react";

export default function Loader({ text = "Loading...", className = "" }) {
    return (
        <div className={["inline-flex items-center gap-2", className].join(" ")}>
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-slate-300/30 border-t-slate-100" />
            <span className="text-sm text-slate-300">{text}</span>
        </div>
    );
}
