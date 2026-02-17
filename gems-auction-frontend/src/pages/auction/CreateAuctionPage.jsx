import React, { useState } from "react";
import auctionService from "../../services/auctionService";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";

export default function CreateAuctionPage() {
    const [form, setForm] = useState({
        gem_id: "",
        start_price: "",
        min_increment: "",
        start_time: "",
        end_time: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await auctionService.createAuction({
            ...form,
            start_price: Number(form.start_price),
            min_increment: Number(form.min_increment),
        });
        alert("Auction Created");
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-xl space-y-4 mx-auto"
        >
            <Input label="Gem ID" onChange={(e) => setForm({ ...form, gem_id: e.target.value })} />
            <Input label="Start Price" type="number" onChange={(e) => setForm({ ...form, start_price: e.target.value })} />
            <Input label="Min Increment" type="number" onChange={(e) => setForm({ ...form, min_increment: e.target.value })} />
            <Input label="Start Time" type="datetime-local" onChange={(e) => setForm({ ...form, start_time: e.target.value })} />
            <Input label="End Time" type="datetime-local" onChange={(e) => setForm({ ...form, end_time: e.target.value })} />

            <Button type="submit" className="w-full">
                Create Auction
            </Button>
        </form>
    );
}
