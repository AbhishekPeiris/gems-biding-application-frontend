import React from "react";
import Countdown from "../ui/Countdown";

export default function AuctionTimer({ endTime, onComplete }) {
    return (
        <div className="rounded-2xl border border-slate-800 bg-slate-950 p-4">
            <div className="mb-2 text-sm font-semibold text-slate-200">
                Time Remaining
            </div>
            <Countdown endTime={endTime} onComplete={onComplete} />
        </div>
    );
}
