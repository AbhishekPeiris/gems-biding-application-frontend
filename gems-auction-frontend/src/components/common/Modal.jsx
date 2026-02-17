import React, { useEffect } from "react";

export default function Modal({
    open,
    title,
    children,
    footer,
    onClose,
    className = "",
}) {
    useEffect(() => {
        if (!open) return;

        const onKeyDown = (e) => {
            if (e.key === "Escape") onClose?.();
        };

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [open, onClose]);

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50">
            <div
                className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                onClick={onClose}
            />

            <div className="absolute inset-0 flex items-center justify-center p-4">
                <div
                    className={[
                        "w-full max-w-lg rounded-2xl border border-slate-800 bg-slate-950 shadow-2xl",
                        className,
                    ].join(" ")}
                    role="dialog"
                    aria-modal="true"
                >
                    <div className="flex items-center justify-between border-b border-slate-800 px-5 py-4">
                        <h3 className="text-base font-semibold text-slate-100">
                            {title || "Modal"}
                        </h3>
                        <button
                            onClick={onClose}
                            className="rounded-lg px-2 py-1 text-slate-300 hover:bg-slate-800/70"
                            aria-label="Close modal"
                        >
                            ✕
                        </button>
                    </div>

                    <div className="px-5 py-4 text-slate-200">{children}</div>

                    {footer ? (
                        <div className="border-t border-slate-800 px-5 py-4">{footer}</div>
                    ) : null}
                </div>
            </div>
        </div>
    );
}
