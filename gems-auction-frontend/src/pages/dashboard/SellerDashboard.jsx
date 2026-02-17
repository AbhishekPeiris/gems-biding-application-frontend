import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/common/Button";

export default function SellerDashboard() {
    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-slate-100">
                Seller Dashboard
            </h1>

            <div className="grid md:grid-cols-2 gap-6">
                <DashboardCard
                    title="Create New Gem"
                    description="Add new gemstone for auction."
                    link="/seller/create-gem"
                />

                <DashboardCard
                    title="Manage Auctions"
                    description="Start, stop and monitor auctions."
                    link="/seller/auctions"
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
