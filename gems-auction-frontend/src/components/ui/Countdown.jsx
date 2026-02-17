import React, { useEffect, useMemo, useState } from "react";

function pad2(n) {
    return String(n).padStart(2, "0");
}

function diffParts(targetMs) {
    const now = Date.now();
    const diff = Math.max(0, targetMs - now);

    const totalSeconds = Math.floor(diff / 1000);
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return { diff, days, hours, minutes, seconds };
}

export default function Countdown({
    endTime, // string or Date or ms
    onComplete,
    className = "",
    compact = false,
}) {
    const targetMs = useMemo(() => {
        if (!endTime) return 0;
        if (typeof endTime === "number") return endTime;
        if (endTime instanceof Date) return endTime.getTime();
        return new Date(endTime).getTime();
    }, [endTime]);

    const [state, setState] = useState(() => diffParts(targetMs));

    useEffect(() => {
        if (!targetMs) return;

        const t = setInterval(() => {
            const next = diffParts(targetMs);
            setState(next);

            if (next.diff === 0) {
                clearInterval(t);
                onComplete?.();
            }
        }, 1000);

        return () => clearInterval(t);
    }, [targetMs, onComplete]);

    if (!targetMs) return null;

    const { days, hours, minutes, seconds } = state;

    if (compact) {
        return (
            <span
                className={[
                    "rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-sm font-semibold text-slate-100",
                    className,
                ].join(" ")}
            >
                {days > 0 ? `${days}d ` : ""}
                {pad2(hours)}:{pad2(minutes)}:{pad2(seconds)}
            </span>
        );
    }

    return (
        <div
            className={[
                "flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-950 px-4 py-3",
                className,
            ].join(" ")}
        >
            <TimeBox label="Days" value={days} />
            <TimeBox label="Hours" value={pad2(hours)} />
            <TimeBox label="Min" value={pad2(minutes)} />
            <TimeBox label="Sec" value={pad2(seconds)} />
        </div>
    );
}

function TimeBox({ label, value }) {
    return (
        <div className="min-w-[62px] text-center">
            <div className="text-xl font-extrabold text-slate-100">{value}</div>
            <div className="text-xs text-slate-400">{label}</div>
        </div>
    );
}
