import React from "react";
import Badge from "../common/Badge";

export default function AuctionInfo({ gem, auction }) {
    if (!auction) return null;

    return (
        <div className="rounded-2xl border border-slate-800 bg-slate-950 p-4 space-y-3">
            <div className="flex items-start justify-between gap-3">
                <div>
                    <h2 className="text-lg font-semibold text-slate-100">
                        {gem?.name || `Gem #${auction.gem_id}`}
                    </h2>
                    <p className="text-sm text-slate-400">
                        {gem?.description || "No description"}
                    </p>
                </div>

                <Badge
                    variant={
                        auction.status === "LIVE"
                            ? "live"
                            : auction.status === "ENDED"
                                ? "danger"
                                : "warning"
                    }
                >
                    {auction.status}
                </Badge>
            </div>

            <div className="grid grid-cols-2 gap-3 text-sm">
                <InfoItem label="Carat" value={gem?.carat ? `${gem.carat} ct` : "-"} />
                <InfoItem label="Origin" value={gem?.origin || "-"} />
                <InfoItem label="Color" value={gem?.color || "-"} />
                <InfoItem label="Clarity" value={gem?.clarity || "-"} />
                <InfoItem label="Certificate" value={gem?.certificate || "-"} />
                <InfoItem label="Seller" value={gem?.seller_id ? `User #${gem.seller_id}` : "-"} />
            </div>
        </div>
    );
}

function InfoItem({ label, value }) {
    return (
        <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-3">
            <div className="text-xs text-slate-400">{label}</div>
            <div className="font-semibold text-slate-100">{value}</div>
        </div>
    );
}
