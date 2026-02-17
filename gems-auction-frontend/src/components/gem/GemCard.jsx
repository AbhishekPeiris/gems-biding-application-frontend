import React from "react";
import formatCurrency from "../../utils/formatCurrency";
import Badge from "../common/Badge";
import { GEM_STATUS } from "../../utils/constants";

export default function GemCard({ gem, onClick }) {
    return (
        <div
            onClick={onClick}
            className="cursor-pointer rounded-2xl border border-slate-800 bg-slate-950 hover:border-indigo-500 transition overflow-hidden"
        >
            <div className="h-48 bg-slate-800">
                {gem.image_url ? (
                    <img
                        src={gem.image_url}
                        alt={gem.name}
                        className="h-full w-full object-cover"
                    />
                ) : (
                    <div className="flex h-full items-center justify-center text-slate-500">
                        No Image
                    </div>
                )}
            </div>

            <div className="p-4 space-y-2">
                <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-slate-200">
                        {gem.name}
                    </h3>

                    <Badge
                        variant={
                            gem.status === GEM_STATUS.AUCTION
                                ? "warning"
                                : gem.status === GEM_STATUS.SOLD
                                    ? "danger"
                                    : "success"
                        }
                    >
                        {gem.status}
                    </Badge>
                </div>

                <p className="text-sm text-slate-400 line-clamp-2">
                    {gem.description}
                </p>

                <div className="flex justify-between text-xs text-slate-400">
                    <span>{gem.carat} ct</span>
                    <span>{gem.origin}</span>
                </div>
            </div>
        </div>
    );
}
