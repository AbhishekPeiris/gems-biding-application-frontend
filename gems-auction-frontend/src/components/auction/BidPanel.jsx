import React, { useMemo, useState } from "react";
import Button from "../common/Button";
import Input from "../common/Input";
import AnimatedNumber from "../ui/AnimatedNumber";
import formatCurrency from "../../utils/formatCurrency";
import { AUCTION_STATUS } from "../../utils/constants";

export default function BidPanel({
    auction,
    onPlaceBid,
    loading = false,
    currency = "LKR",
}) {
    const [amount, setAmount] = useState("");
    const [error, setError] = useState("");

    const current = Number(auction?.current_price || 0);
    const minInc = Number(auction?.min_increment || 0);

    const suggested = useMemo(() => {
        return current + minInc;
    }, [current, minInc]);

    const canBid = auction?.status === AUCTION_STATUS.LIVE;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        const val = Number(amount);
        if (!val || val <= 0) {
            setError("Enter a valid bid amount");
            return;
        }

        if (val < suggested) {
            setError(`Bid too low. Minimum is ${formatCurrency(suggested, currency)}`);
            return;
        }

        await onPlaceBid(val);
        setAmount("");
    };

    const setSuggested = () => {
        setAmount(String(suggested));
        setError("");
    };

    return (
        <div className="rounded-2xl border border-slate-800 bg-slate-950 p-4 space-y-4">
            <div className="flex items-center justify-between">
                <div>
                    <div className="text-sm text-slate-400">Current Price</div>
                    <div className="text-2xl font-extrabold text-slate-100">
                        <AnimatedNumber
                            value={current}
                            format={(n) => formatCurrency(n, currency)}
                        />
                    </div>
                </div>

                <div className="text-right">
                    <div className="text-sm text-slate-400">Min Increment</div>
                    <div className="text-sm font-semibold text-slate-200">
                        {formatCurrency(minInc, currency)}
                    </div>
                </div>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-3">
                <div className="text-xs text-slate-400">Suggested next bid</div>
                <div className="mt-1 flex items-center justify-between gap-3">
                    <div className="font-semibold text-slate-100">
                        {formatCurrency(suggested, currency)}
                    </div>
                    <button
                        type="button"
                        onClick={setSuggested}
                        className="rounded-lg px-3 py-1 text-xs font-semibold text-indigo-300 hover:bg-slate-800"
                    >
                        Use
                    </button>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
                <Input
                    label="Your Bid Amount"
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    error={error}
                    placeholder={`Min: ${suggested}`}
                    inputClassName="text-base"
                />

                <Button
                    type="submit"
                    loading={loading}
                    disabled={!canBid}
                    className="w-full"
                >
                    {canBid ? "Place Bid" : "Bidding Closed"}
                </Button>
            </form>
        </div>
    );
}
