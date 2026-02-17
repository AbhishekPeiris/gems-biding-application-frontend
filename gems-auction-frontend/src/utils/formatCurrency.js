export default function formatCurrency(amount, currency = "LKR") {
    const n = Number(amount || 0);

    try {
        return new Intl.NumberFormat(undefined, {
            style: "currency",
            currency,
            maximumFractionDigits: 0,
        }).format(n);
    } catch {
        // fallback if currency code not supported
        return `${currency} ${Math.round(n).toLocaleString()}`;
    }
}
