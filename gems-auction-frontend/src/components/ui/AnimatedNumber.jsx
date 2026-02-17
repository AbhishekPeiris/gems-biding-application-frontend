import React, { useEffect, useMemo, useRef, useState } from "react";

function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
}

export default function AnimatedNumber({
    value = 0,
    duration = 350,
    format, // optional formatter (n) => string
    className = "",
}) {
    const fromRef = useRef(value);
    const rafRef = useRef(null);
    const startRef = useRef(0);

    const [display, setDisplay] = useState(value);

    const formatter = useMemo(() => {
        return typeof format === "function" ? format : (n) => String(Math.round(n));
    }, [format]);

    useEffect(() => {
        const from = fromRef.current;
        const to = value;

        if (from === to) return;

        cancelAnimationFrame(rafRef.current);

        startRef.current = performance.now();

        const tick = (now) => {
            const elapsed = now - startRef.current;
            const t = Math.min(1, elapsed / duration);
            const eased = easeOutCubic(t);
            const next = from + (to - from) * eased;

            setDisplay(next);

            if (t < 1) {
                rafRef.current = requestAnimationFrame(tick);
            } else {
                fromRef.current = to;
                setDisplay(to);
            }
        };

        rafRef.current = requestAnimationFrame(tick);

        return () => cancelAnimationFrame(rafRef.current);
    }, [value, duration]);

    return (
        <span className={["tabular-nums", className].join(" ")}>
            {formatter(display)}
        </span>
    );
}
