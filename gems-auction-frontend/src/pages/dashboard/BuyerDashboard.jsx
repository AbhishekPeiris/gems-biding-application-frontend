import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/common/Button";

export default function BuyerDashboard() {
    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-slate-100">
                Buyer Dashboard
            </h1>

            <div className="grid md:grid-cols-2 gap-6">
                <DashboardCard
                    title="Browse Auctions"
                    description="View all live and upcoming auctions."
                    link="/buyer/auctions"
                />

                <DashboardCard
                    title="My Bids"
                    description="Track your bidding activity."
                    link="/buyer/bids"
                />
            </div>
        </div>
    );
}

function DashboardCard({ title, description, link }) {
    return (
        <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6 space-y-3">
            <h3 className="font-semibold text-slate-100">{title}</h3>
            <p className="text-sm text-slate-400">{description}</p>
            <Link to={link}>
                <Button size="sm">Open</Button>
            </Link>
        </div>
    );
}
