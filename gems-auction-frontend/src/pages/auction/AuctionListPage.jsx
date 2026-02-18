import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import auctionService from "../../services/auctionService";

export default function AuctionListPage() {
    const [auctions, setAuctions] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadAuctions();
    }, []);

    const loadAuctions = async () => {
        try {
            const data = await auctionService.getAllAuctions();
            setAuctions(data);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <p>Loading...</p>;

    return (
        <div>
            <h1 className="mb-4 text-xl font-bold">Auctions</h1>

            {auctions.length === 0 && (
                <p className="text-slate-400">No auctions found.</p>
            )}

            <div className="grid gap-6 md:grid-cols-2">
                {auctions.map((a) => (
                    <Link
                        key={a.id}
                        to={`/auction/${a.id}`}
                        className="p-4 transition border rounded-2xl border-slate-800 bg-slate-950 hover:border-indigo-500"
                    >
                        <h3 className="font-semibold">Auction #{a.id}</h3>
                        <p className="text-sm text-slate-400">
                            Status: {a.status}
                        </p>
                        <p className="text-sm text-slate-400">
                            Current Price: {a.current_price}
                        </p>
                    </Link>
                ))}
            </div>
        </div>
    );
}
