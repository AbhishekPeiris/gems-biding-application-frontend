import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import gemService from "../../services/gemService";

export default function GemDetailsPage() {
    const { id } = useParams();
    const [gem, setGem] = useState(null);

    useEffect(() => {
        gemService.getGemById(id).then(setGem);
    }, [id]);

    if (!gem) return <p>Loading...</p>;

    return (
        <div className="max-w-4xl mx-auto space-y-6">
            <img
                src={gem.image_url}
                alt={gem.name}
                className="w-full h-80 object-cover rounded-2xl"
            />

            <div>
                <h1 className="text-2xl font-bold">{gem.name}</h1>
                <p className="text-slate-400 mt-2">{gem.description}</p>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm">
                <div>Carat: {gem.carat}</div>
                <div>Color: {gem.color}</div>
                <div>Clarity: {gem.clarity}</div>
                <div>Origin: {gem.origin}</div>
                <div>Certificate: {gem.certificate}</div>
                <div>Status: {gem.status}</div>
            </div>
        </div>
    );
}
