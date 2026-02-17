import React from "react";
import formatCurrency from "../../utils/formatCurrency";
import { formatTimeAgo } from "../../utils/formatDate";

export default function BidHistory({ bids = [], currency = "LKR" }) {
    return (
        <div className="rounded-2xl border border-slate-800 bg-slate-950">
            <div className="border-b border-slate-800 px-4 py-3 font-semibold text-slate-200">
                Bid History
            </div>

            <div className="max-h-[320px] overflow-y-auto p-3 space-y-2">
                {bids.length === 0 ? (
                    <p className="text-sm text-slate-500 text-center py-6">
                        No bids yet.
                    </p>
                ) : (
                    bids.map((b) => (
                        <div
                            key={b.id}
                            className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900/40 px-3 py-2"
                        >
                            <div>
                                <div className="text-sm font-semibold text-slate-100">
                                    {formatCurrency(b.amount, currency)}
                                </div>
                                <div className="text-xs text-slate-400">
                                    Bidder: User #{b.user_id}
                                </div>
                            </div>

                            <div className="text-xs text-slate-500">
                                {formatTimeAgo(b.created_at)}
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
