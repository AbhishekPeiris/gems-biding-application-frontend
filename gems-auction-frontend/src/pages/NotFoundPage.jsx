import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/common/Button";

export default function NotFoundPage() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-6">
            <div className="w-full max-w-lg rounded-2xl border border-slate-800 bg-slate-950 p-8 text-center">
                <h1 className="text-3xl font-extrabold">404</h1>
                <p className="mt-2 text-slate-400">Page not found.</p>

                <div className="mt-6 flex items-center justify-center gap-3">
                    <Link to="/login">
                        <Button>Go to Login</Button>
                    </Link>
                    <Link to="/">
                        <Button variant="secondary">Home</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
