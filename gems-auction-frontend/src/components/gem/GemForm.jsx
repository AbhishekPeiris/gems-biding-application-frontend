import React, { useState } from "react";
import Input from "../common/Input";
import Button from "../common/Button";
import { isPositiveNumber, required } from "../../utils/validators";

export default function GemForm({ onSubmit, loading = false }) {
    const [form, setForm] = useState({
        name: "",
        description: "",
        carat: "",
        color: "",
        clarity: "",
        origin: "",
        certificate: "",
        image_url: "",
    });

    const [error, setError] = useState("");

    const handleChange = (field, value) => {
        setForm((prev) => ({ ...prev, [field]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!required(form.name)) {
            return setError("Gem name is required");
        }

        if (!isPositiveNumber(form.carat)) {
            return setError("Carat must be positive number");
        }

        setError("");
        onSubmit({
            ...form,
            carat: Number(form.carat),
        });
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="space-y-4 rounded-2xl border border-slate-800 bg-slate-950 p-6"
        >
            <h2 className="text-lg font-semibold text-slate-200">
                Create New Gem
            </h2>

            {error && (
                <div className="rounded-xl bg-rose-900/40 px-3 py-2 text-sm text-rose-200">
                    {error}
                </div>
            )}

            <Input
                label="Gem Name"
                value={form.name}
                onChange={(e) => handleChange("name", e.target.value)}
            />

            <Input
                label="Description"
                value={form.description}
                onChange={(e) => handleChange("description", e.target.value)}
            />

            <Input
                label="Carat"
                type="number"
                value={form.carat}
                onChange={(e) => handleChange("carat", e.target.value)}
            />

            <Input
                label="Color"
                value={form.color}
                onChange={(e) => handleChange("color", e.target.value)}
            />

            <Input
                label="Clarity"
                value={form.clarity}
                onChange={(e) => handleChange("clarity", e.target.value)}
            />

            <Input
                label="Origin"
                value={form.origin}
                onChange={(e) => handleChange("origin", e.target.value)}
            />

            <Input
                label="Certificate"
                value={form.certificate}
                onChange={(e) => handleChange("certificate", e.target.value)}
            />

            <Input
                label="Image URL"
                value={form.image_url}
                onChange={(e) => handleChange("image_url", e.target.value)}
            />

            <Button type="submit" loading={loading} className="w-full">
                Create Gem
            </Button>
        </form>
    );
}
