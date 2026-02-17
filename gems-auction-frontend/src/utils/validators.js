export function isEmail(email) {
    if (!email) return false;
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email).trim());
}

export function minLen(value, n) {
    return String(value || "").trim().length >= n;
}

export function isPositiveNumber(value) {
    const num = Number(value);
    return Number.isFinite(num) && num > 0;
}

export function required(value) {
    return String(value || "").trim().length > 0;
}
