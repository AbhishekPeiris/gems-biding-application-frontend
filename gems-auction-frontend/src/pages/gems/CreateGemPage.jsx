import React, { useState } from "react";
import GemForm from "../../components/gem/GemForm";
import gemService from "../../services/gemService";

export default function CreateGemPage() {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleCreate = async (data) => {
        try {
            setLoading(true);
            await gemService.createGem(data);
            setSuccess(true);
        } catch (err) {
            alert(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-3xl mx-auto">
            {success && (
                <div className="mb-4 rounded-xl bg-emerald-900/40 px-3 py-2 text-sm text-emerald-200">
                    Gem created successfully!
                </div>
            )}

            <GemForm onSubmit={handleCreate} loading={loading} />
        </div>
    );
}
