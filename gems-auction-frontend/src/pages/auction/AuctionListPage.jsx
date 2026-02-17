import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import auctionService from "../../services/auctionService";

export default function AuctionListPage() {
    const [auctions, setAuctions] = useState([]);

    useEffect(() => {
        // In production you should create a getAll endpoint
        // For now manually fetch IDs if needed
    }, []);

    return (
        <div>
            <h1 className="text-xl font-bold mb-4">Auctions</h1>

            {auctions.length === 0 && (
                <p className="text-slate-400">No auctions found.</p>
            )}

            <div className="grid md:grid-cols-2 gap-6">
                {auctions.map((a) => (
                    <Link
                        key={a.id}
                        to={`/auction/${a.id}`}
                        className="rounded-2xl border border-slate-800 p-4 bg-slate-950"
                    >
                        <h3 className="font-semibold">Auction #{a.id}</h3>
                        <p className="text-sm text-slate-400">
                            Status: {a.status}
                        </p>
                    </Link>
                ))}
            </div>
        </div>
    );
}
