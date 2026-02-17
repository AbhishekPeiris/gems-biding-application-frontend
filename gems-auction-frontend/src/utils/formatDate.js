export function formatDateTime(value) {
    if (!value) return "";
    const d = value instanceof Date ? value : new Date(value);

    if (Number.isNaN(d.getTime())) return "";

    return d.toLocaleString(undefined, {
        year: "numeric",
        month: "short",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
    });
}

export function formatTimeAgo(value) {
    if (!value) return "";
    const d = value instanceof Date ? value : new Date(value);
    const ms = Date.now() - d.getTime();
    if (Number.isNaN(ms)) return "";

    const sec = Math.floor(ms / 1000);
    if (sec < 10) return "just now";
    if (sec < 60) return `${sec}s ago`;

    const min = Math.floor(sec / 60);
    if (min < 60) return `${min}m ago`;

    const hr = Math.floor(min / 60);
    if (hr < 24) return `${hr}h ago`;

    const day = Math.floor(hr / 24);
    return `${day}d ago`;
}
